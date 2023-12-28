const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyQRCode() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize QrCodeVerifyOptions
  const options = new signatureLib.QrCodeVerifyOptions();
  options.setAllPages(true); // this value is set by default
  options.setText('John');
  options.setMatchType(signatureLib.TextMatchType.Contains);

  // Verify document signatures
  const result = signature.verify(options);

  if (result.isValid()) {
    console.log('\nDocument was verified successfully!');
  } else {
    console.log('\nDocument failed the verification process.');
  }
}

module.exports = verifyQRCode