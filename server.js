var express = require('express'),
    module = require('./modules/crud'),
    app = express();

app.use(express.bodyParser());
app.get('/cruds', module.findAll);
app.get('/cruds/:id', module.findById);
app.post('/cruds', module.create);
app.delete('/cruds/:id', module.delete);
app.put('/cruds/:id', module.update);
 
app.listen(3000);
console.log('Listening on port 3000...');