var express = require('express');
var mysql = require('mysql');
var port = process.env.PORT;
var path = require('path')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'altruisticnarcissist',
    password: '',
    database: 'c9'
});
var app = express();
/*app.configure(function(){
    app.use(express.bodyParser());
    app.use(app.router);
});
*/
app.set('views', path.join(__dirname, 'main_files'))
//app.use(express.static(path.resolve('./main_files/')));
//app.use(express.static('main_files'));
//app.use('/main_files');
app.get('/', function(req, res){
    res.sendFile('index.html');
});
app.listen(port);