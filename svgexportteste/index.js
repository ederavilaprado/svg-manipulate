var svgexport = require('svgexport');
var fs = require('fs');
var path = require('path');


function resolvePath(fileName) {
  return path.resolve(__dirname, '..', 'example_files', fileName);
}


svgexport.render({
  'input' : resolvePath('group.svg'),
  'output' : resolvePath('group.png'),
}, function(err) {
  console.log(err);
});
