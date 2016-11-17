var data = require('../data/fenlei.js');

data.title = 'web网址导航-haoweb.top';
// data.mz=[{url:'aa', title: 'bb'}];
// console.dir(data.mz.list);
module.exports = function(req, res){
    res.render('home/page/index.tpl', data);
};