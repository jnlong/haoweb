var app = require('koa')();
app.on('error', function(err,ctx){
	console.log(err);
});

var onerror = require('Koa-onerror');
	onerror(app);

app.callback = function(){
	console.log('call');
	console.log(__dirname);
	this.body="aaa";
}
app.listen(3000);

var staticServer = require('koa-static');
	var path = require('path');
	app.use(staticServer(path.join(__dirname,'public')));

// ejs
var render = require('koa-ejs');
	render(app, {
    	root: path.join(__dirname, 'views'),
    	layout: '__layout',
    	viewExt: 'html',
   	 cache: false,
    	debug: true
	});

var Router = require('koa-router');
	var myRouter = new Router();
	myRouter.get('/', function *(next) {
 		yield this.render('index',{layout:false});
	});
	app.use(myRouter.routes());