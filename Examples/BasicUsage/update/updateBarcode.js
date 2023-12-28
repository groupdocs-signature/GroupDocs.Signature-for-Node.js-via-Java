const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function updateBarcode() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF_SIGNED; 
  const fileName = path.basename(filePath);

  // Copy source file since the update method works with the same document
  const outputFilePath = path.join(Constants.OutputPath, 'UpdateBarcode', fileName);
  const dir = path.dirname(outputFilePath);
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
  }

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize BarcodeSearchOptions
  const options = new signatureLib.BarcodeSearchOptions();

  // Search for barcode signatures in the document
  const signatures = signature.search(signatureLib.BarcodeSignature.class, options).toArray();

  if (signatures.length > 0) {
    const barcodeSignature = signatures[0];
    barcodeSignature.setLeft(100);
    barcodeSignature.setTop(100);

    // Update the barcode signature in the document
    const result = signature.update(outputFilePath, barcodeSignature);

    if (result) {
      console.log(`\nSignature with Barcode '${barcodeSignature.getText()}' and encode type '${barcodeSignature.getEncodeType().getTypeName()}' was updated in the document ['${fileName}'].`);
    } else {
      console.log(`\nSignature was not updated in the document! Signature with Barcode '${barcodeSignature.getText()}' and encode type '${barcodeSignature.getEncodeType().getTypeName()}' was not found!`);
    }
  }
}

module.exports = updateBarcode