var express = require('express'),
  crud = require('./routes/crud'),
  app = express();

app.use(express.bodyParser());
app.get('/presentations', crud.findAll);
app.get('/presentations/:id', crud.findById);
app.post('/presentations', crud.create);
app.delete('/presentations/:id', crud.delete);
app.put('/presentations/:id', crud.update);
 
app.listen(3000);
console.log('Listening on port 3000...');