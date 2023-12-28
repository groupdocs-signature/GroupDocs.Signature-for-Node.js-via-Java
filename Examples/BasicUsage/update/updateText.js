const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function updateText() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere
  const fileName = path.basename(filePath);

  // Copy source file since the update method works with the same document
  const outputFilePath = path.join(Constants.OutputPath, 'UpdateText', fileName);
  const dir = path.dirname(outputFilePath);
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
  }

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize TextSearchOptions
  const options = new signatureLib.TextSearchOptions();

  // Search for text signatures in the document
  const signatures = signature.search(signatureLib.TextSignature.class, options).toArray();

  if (signatures.length > 0) {
    const textSignature = signatures[0];

    // Change Text property
    textSignature.setText('John Walkman');
    // Change position
    textSignature.setLeft(textSignature.getLeft() + 50);
    textSignature.setTop(textSignature.getTop() + 50);
    // Change size. Please note not all documents support changing signature size
    textSignature.setWidth(200);
    textSignature.setHeight(100);

    // Update the text signature in the document
    const result = signature.update(outputFilePath, textSignature);

    if (result) {
      console.log(`\nSignature with Text '${textSignature.getText()}' was updated in the document ['${fileName}'].`);
    } else {
      console.log(`\nSignature was not updated in the document! Signature with Text '${textSignature.getText()}' was not found!`);
    }
  }
}

module.exports = updateText