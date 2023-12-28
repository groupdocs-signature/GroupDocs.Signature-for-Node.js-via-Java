const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithDigital() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere
  const fileName = path.basename(filePath);
  const imagePath = Constants.ImageHandwrite;
  const certificatePath = Constants.CertificatePfx;

  const outputFilePath = path.join(Constants.OutputPath, 'SignWithDigital', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Create digital sign options
  const options = new signatureLib.DigitalSignOptions(certificatePath);

  // Optional: setup image file path
  options.setImageFilePath(imagePath);
  options.setLeft(100);
  options.setTop(100);
  options.setPageNumber(1);
  options.setPassword('1234567890');

  // Sign document to file
  const result = signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully with ${result.getSucceeded().length} signature(s).\nFile saved at ${outputFilePath}.`);
}

module.exports = signWithDigital