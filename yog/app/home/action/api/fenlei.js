var data = require('../../data/fenlei.js');
console.log(data);
module.exports = function(req, res){
    res.send(data);
};