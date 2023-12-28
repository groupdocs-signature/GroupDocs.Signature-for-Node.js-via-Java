const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForImage() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere
  const fileName = path.basename(filePath);
  const signature = new signatureLib.Signature(filePath);

  // Search document
  const signatures = signature.search(signatureLib.ImageSignature.class, signatureLib.SignatureType.Image).toArray();
  console.log(`\nSource document ['${fileName}'] contains the following image signature(s).`);

  // Output signatures
  for (const imageSignature of signatures) {
    console.log(`Found Image signature at page ${imageSignature.getPageNumber()} and size ${imageSignature.getSize()}.`);
  }


}

module.exports = searchForImage