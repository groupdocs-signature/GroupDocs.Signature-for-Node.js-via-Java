const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithQRCode() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere
  const fileName = path.basename(filePath);

  const outputFilePath = path.join(Constants.OutputPath, 'SignWithQRCode', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Create QR code sign options
  const options = new signatureLib.QrCodeSignOptions('JohnSmith');

  // Setup QR code encoding type
  options.setEncodeType(signatureLib.QrCodeTypes.QR);
  
  // Set signature position
  options.setLeft(100);
  options.setTop(100);

  // Sign document to file
  signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithQRCode