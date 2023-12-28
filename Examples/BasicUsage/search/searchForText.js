const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForText() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere
  const fileName = path.basename(filePath);
  const signature = new signatureLib.Signature(filePath);

  // Setup search options
  const options = new signatureLib.TextSearchOptions();
  options.setAllPages(true);

  // Search for text signatures in the document
  const signatures = signature.search(signatureLib.TextSignature.class, options).toArray();
  console.log(`\nSource document ['${fileName}'] contains the following text signature(s).`);

  // Enumerate all signatures for output
  for (const textSignature of signatures) {
    console.log(`Found Text signature at page ${textSignature.getPageNumber()} with type [${textSignature.getSignatureImplementation()}] and text '${textSignature.getText()}'.`);
  }


}

module.exports = searchForText