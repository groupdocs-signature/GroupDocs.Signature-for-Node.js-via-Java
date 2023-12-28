const path = require('path');
const fs = require('fs');
// const java = require('java');
// const Color = java.import(java.awt.Color);

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithText() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF;
  const fileName = path.basename(filePath);

  const outputFilePath = path.join(Constants.OutputPath, 'SignWithText', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Create text sign options
  const options = new signatureLib.TextSignOptions('John Smith');
  // Set signature position
  options.setLeft(100);
  options.setTop(100);

  // Set signature rectangle
  options.setWidth(100);
  options.setHeight(30);

  // Set text color and font
  //options.setForeColor(new Color(255, 0, 0)); // Red color
  const signatureFont = new signatureLib.SignatureFont();
  signatureFont.setSize(12);
  signatureFont.setFamilyName('Comic Sans MS');
  options.setFont(signatureFont);

  // Sign document to file
  signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithText