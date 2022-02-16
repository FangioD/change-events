// see https://github.com/mu-semtech/mu-javascript-template for more info

import { app, query, errorHandler } from 'mu';
import bodyParser from 'body-parser';

app.get('/', function( req, res ) {
  res.send('Hello all');
} );

app.use(bodyParser.json({
  type: function(req) {
    return /^application\/json/.test(req.get('content-type'));
  }
}));

app.post('/delta', function(req, res){
  console.log("Hello");
  console.log(req.body);
  res.send("Done");
})

app.use(errorHandler);