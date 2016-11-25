var data = require('../../data/fenlei.js');
var ex = (new Date).getTime() + (1000 ) * 10;
var ip = require(yog.ROOT_PATH + '/model/ip.js');
var requestIp = require('request-ip');
var r = {};

// yog.log.notice('asdf');
module.exports = function(req, res){
	// res.setHeader('set-cookie', 'a12=b12;expires='+ex+';path=/api');
	var clientIp = requestIp.getClientIp(req);
	r.a=1;
	r.ip = clientIp;
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(r));
    res.end();
};
