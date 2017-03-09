const gm = require('gm');

gm('/Users/eder/Desktop/cartao_visita.svg')
.write('/Users/eder/Desktop/cartao.png', function (err) {
  if (!err) console.log('done');
});
  // .resize(353, 257)
  // .autoOrient()
// .write(writeStream, function (err) {
//   if (!err) console.log(' hooray! ');
// });
