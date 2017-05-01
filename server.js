var express 		  = require('express'),
	app  			  = express(),
	bodyParser		  = require('body-parser'),
	methodOverride = require('method-override');


app.get('/', function (req, res){
	res.sendfile(__dirname + '/index.html');
});

app.use('/app', express.static(__dirname + '/app'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/partials', express.static(__dirname + '/partials'));

app.get('/*',function(req,res){
	res.sendFile('index.html',{'root':__dirname});
});


app.listen(3000, function (){
	console.log('Listening on port 3000...');
});
