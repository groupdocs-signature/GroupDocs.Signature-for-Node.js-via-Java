const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithBarcode() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere
  const fileName = path.basename(filePath);

  const outputFilePath = path.join(Constants.OutputPath, 'SignPdfWithBarcode', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Create barcode option with predefined barcode text
  const options = new signatureLib.BarcodeSignOptions('JohnSmith');
  // Setup barcode encoding type
  options.setEncodeType(signatureLib.BarcodeTypes.Code128);
  // Set signature position
  options.setLeft(100);
  options.setTop(100);
  options.setWidth(200);
  options.setHeight(50);
  
  // Sign document to file
  signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithBarcode