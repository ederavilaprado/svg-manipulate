const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function resolvePath(fileName) {
  return path.resolve(__dirname, '..', 'example_files', fileName);
}

var doc = new PDFDocument({
  autoFirstPage: false
});

doc.pipe(fs.createWriteStream(resolvePath('output_pdf.pdf')));


function convertMmToPoint(input) {
  // 1mm = 2.834645669
  return input * 2.834645669;
}

// business card (9cm x 5cm)
const w = 90, h = 50;

doc.addPage({
  margin: 0,
  layout: 'portrait',
  size: [convertMmToPoint(90), convertMmToPoint(50)],
});

doc.image(resolvePath('card.png'), 0, 0, {width: convertMmToPoint(90)});

doc.end();
