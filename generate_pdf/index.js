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
  size: [2480, 3508],
});

// doc
//   // .font('fonts/arial.ttf')
//    .fontSize(25)
//    .text('Some text with an embedded font!', 100, 100)

// doc.image(resolvePath('group.png'), 20, 20, {width: 255});
doc.image(resolvePath('group.png'), 100, 100);



// doc.save()
//    .moveTo(100, 150)
//    .lineTo(100, 250)
//    .lineTo(200, 250)
//    .fill("#FF3300")

doc.end();
//
// # Apply some transforms and render an SVG path with the 'even-odd' fill rule
// doc.scale(0.6)
//    .translate(470, -380)
//    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//    .fill('red', 'even-odd')
//    .restore()
//
// # Add some text with annotations
// doc.addPage()
//    .fillColor("blue")
//    .text('Here is a link!', 100, 100)
//    .underline(100, 100, 160, 27, color: "#0000FF")
//    .link(100, 100, 160, 27, 'http://google.com/')
//
// # Finalize PDF file
// doc.end()
