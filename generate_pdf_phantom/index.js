var page = require('webpage').create();
// var phantom = require('phantomjs-prebuilt')

console.log('here');

page.open('http://phantomjs.org/quick-start.html', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
