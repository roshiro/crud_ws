(function() {
  var r = require('rethinkdb'),
      connection;

  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    r.db('test').tableCreate('cruds').run(conn, function(err, res) {
      if(err && err.name === "RqlRuntimeError") console.log("Table already exist. Skipping creation.");
      else {
        console.log(res);
        throw err;
      }
    });
  });

  exports.findAll = function(req, res) {
    r.table('cruds').run(connection, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            res.send(JSON.stringify(result, null, 2));
        });
    });
  };

  exports.findById = function(req, res) {
    var id = req.params.id;
    r.table('cruds').get(id).
      run(connection, function(err, result) {
          if (err) throw err;
          res.send(JSON.stringify(result, null, 2));
      });
  };
  
  exports.create = function(req, res) {
    var presentation = req.body;
    console.log(JSON.stringify(req.body));
    r.table('cruds').insert(presentation).
      run(connection, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({status: 'ok', location: '/cruds/'+result.generated_keys[0]}));
      });
  };
  
  exports.update = function(req, res) {
    var presentation = req.body,
        id = req.params.id;
    r.table('cruds').get(id).update(presentation).
      run(connection, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({status: 'ok'}));
      });    
  };
  
  exports.delete = function(req, res) {
    var id = req.params.id;
    r.table('cruds').get(id).delete().
      run(connection, function(err, result) {
          if (err) throw err;
          res.send(JSON.stringify({status: 'ok'}));
      });
  };
})();
