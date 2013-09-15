(function() {
  var r = require('rethinkdb'),
      connection;

  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
  })

  exports.findAll = function(req, res) {
    r.table('presentations').run(connection, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            res.send(JSON.stringify(result, null, 2));
        });
    });
  };

  exports.findById = function(req, res) {
    var id = req.params.id;
    r.table('presentations').get(id).
      run(connection, function(err, result) {
          if (err) throw err;
          res.send(JSON.stringify(result, null, 2));
      });
  };
  
  exports.create = function(req, res) {
    var presentation = req.body;
    console.log("presentation ", JSON.stringify(req.body));
    var presentation = req.body;
    console.log(JSON.stringify(req.body));
    r.table('presentations').insert(presentation).
      run(connection, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({status: 'ok', location: '/presentations/'+result.generated_keys[0]}));
      });
  };
  
  exports.update = function(req, res) {
    var presentation = req.body;
    r.table('presentations').filter({}).update(presentation).
      run(connection, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({status: 'ok', location: '/presentations/'+result.generated_keys[0]}));
      });    
  };
  
  exports.delete = function(req, res) {
    r.table('presentations').get(id).delete().
      run(connection, function(err, result) {
          if (err) throw err;
          res.send(JSON.stringify(result, null, 2));
      });
  };
})();
