const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

var application = express();
application.engine('mustache', mustache());

application.set('views','./views'); 
application.set('view engine','mustache');

application.use(bodyParser.json());
application.use(bodyParser.urlencoded());

application.get('/', (request, response)=>{
    response.render('form');
});
application.post('/', (request, response)=>{
    var user = {};
    user.name = request.body.name;
    user.email = request.body.email;
    user.dob = request.body.dob;
    user.position = request.body.position;
    user.password = request.body.password;
    response.render('form_input', user);
});

// application.get('/', function(request,response){
//    response.send('Hello! ');


application.listen(3000);