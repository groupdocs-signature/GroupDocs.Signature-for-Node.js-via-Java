const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyText() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize TextVerifyOptions
  const options = new signatureLib.TextVerifyOptions();
  options.setSignatureImplementation(signatureLib.TextSignatureImplementation.Native);
  options.setText('signature');
  options.setMatchType(signatureLib.TextMatchType.Contains);

  // Verify document signatures
  const result = signature.verify(options);

  if (result.isValid()) {
    console.log('\nDocument was verified successfully!');
  } else {
    console.log('\nDocument failed the verification process.');
  }
}

module.exports = verifyText