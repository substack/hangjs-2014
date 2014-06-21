var through = require('through2');
var a = through.obj(function (x, e, next) { this.push(x+1); next() });
var b = through.obj(function (x, e, next) { this.push(x/3); next() });
var c = through.obj(function (x, e, next) { this.push(x*100); next() });

var splicer = require('stream-splicer');
var p = splicer.obj([ a, b, c ]);

// p.splice(1,2, through.obj(function (x,e,next) { this.push(x*111); next() }));

p.on('data', console.log);
p.write(5);
p.write(6);
p.write(7);
