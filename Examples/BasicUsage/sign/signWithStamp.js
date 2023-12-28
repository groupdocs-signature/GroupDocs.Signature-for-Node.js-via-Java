const path = require('path');
const fs = require('fs');
// const java = require('java');
// const Color = java.import(java.awt.Color);

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithStamp() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF; // Assuming Constants.SAMPLE_PDF is defined elsewhere
  const fileName = path.basename(filePath);

  const outputFilePath = path.join(Constants.OutputPath, 'SignWithStamp', fileName);
  const signature = new signatureLib.Signature(filePath);

  // Create stamp sign options
  const options = new signatureLib.StampSignOptions();

  // Set stamp signature position
  options.setLeft(100);
  options.setTop(100);

  // Setup first external line of Stamp
  const outerLine = new signatureLib.StampLine();
  outerLine.setText(" * European Union * European Union  * European Union  * European Union  * European Union  * ");
  outerLine.getFont().setSize(12);
  outerLine.setHeight(22);
  outerLine.setTextBottomIntent(6);
  //outerLine.setTextColor(Color.WHITE);
  //outerLine.setBackgroundColor(Color.BLUE);
  options.getOuterLines().add(outerLine);

  // Inner square lines - horizontal lines inside the rings
  const innerLine = new signatureLib.StampLine();
  innerLine.setText("John");
  //innerLine.setTextColor(Color.RED);
  const signFont = new signatureLib.SignatureFont();
  signFont.setSize(20);
  signFont.setBold(true);
  innerLine.setFont(signFont);
  innerLine.setHeight(40);
  options.getInnerLines().add(innerLine);

  // Sign document to file
  signature.sign(outputFilePath, options);
  console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithStamp