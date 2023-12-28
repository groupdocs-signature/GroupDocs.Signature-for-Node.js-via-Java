const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForBarcode() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED is defined elsewhere

  const signature = new signatureLib.Signature(filePath);
  const options = new signatureLib.BarcodeSearchOptions();
  options.setAllPages(true); // this value is set by default

  // Search for signatures in the document
  const signatures = signature.search(signatureLib.BarcodeSignature.class, options).toArray();
  console.log('\nSource document contains the following signatures.');

  for (const barcodeSignature of signatures) {
    console.log(`Barcode signature found at page ${barcodeSignature.getPageNumber()} with type ${barcodeSignature.getEncodeType()} and text ${barcodeSignature.getText()}`);
  }
}

module.exports = searchForBarcode