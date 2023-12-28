const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function updateImage() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere
  const fileName = path.basename(filePath);

  // Copy source file since the update method works with the same document
  const outputFilePath = path.join(Constants.OutputPath, 'UpdateImage', fileName);
  const dir = path.dirname(outputFilePath);
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
  }
  
  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize ImageSearchOptions
  const options = new signatureLib.ImageSearchOptions();

  // Search for image signatures in the document
  const signatures = signature.search(signatureLib.ImageSignature.class, options).toArray();

  if (signatures.length > 0) {
    const imageSignature = signatures[0];
    imageSignature.setLeft(100);
    imageSignature.setTop(100);

    // Update the image signature in the document
    const result = signature.update(outputFilePath, imageSignature);

    if (result) {
      console.log(`\nImage signature at location ${imageSignature.getLeft()}x${imageSignature.getTop()} and Size ${imageSignature.getSize()} was updated in the document [${fileName}].`);
    } else {
      console.log(`\nSignature was not updated in the document! Image signature at location ${imageSignature.getLeft()}x${imageSignature.getTop()} and Size ${imageSignature.getSize()} was not found!`);
    }
  }
}

module.exports = updateImage