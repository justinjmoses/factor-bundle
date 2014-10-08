var browserify = require('browserify');
var factor = require('../');
var fs = require('fs');

var files = [ __dirname + '/files/x.js', __dirname + '/files/y.js' ];
var b = browserify(files);
b.plugin(factor, {
    entries: files,
    o: [ 'bundle/x.js', 'bundle/y.js' ]
});
b.bundle().pipe(fs.createWriteStream('bundle/common.js'));
