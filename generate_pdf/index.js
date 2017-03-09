const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function resolvePath(fileName) {
  return path.resolve(__dirname, '..', 'example_files', fileName);
}

var doc = new PDFDocument({
  autoFirstPage: false
});

doc
  .pipe(fs.createWriteStream('output.pdf'));

doc.addPage({
  margin: 0,
  layout: 'portrait',
  size: [2480, 3508], // 300 DPI
});

// doc
//   // .font('fonts/arial.ttf')
//    .fontSize(25)
//    .text('Some text with an embedded font!', 100, 100)

// doc.image(resolvePath('group.png'), 20, 20, {width: 255});
doc.image(resolvePath('group.png'), 100, 100);

doc.end();
