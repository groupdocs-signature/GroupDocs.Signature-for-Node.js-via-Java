const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyDigital() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_PDF_SIGNED; 

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize DigitalVerifyOptions
  const options = new signatureLib.DigitalVerifyOptions(Constants.CertificatePfx);
  options.setComments('Mr.Smith');
  options.setPassword('1234567890');

  // Verify document signatures
  const result = signature.verify(options);

  if (result.isValid()) {
    console.log('\nDocument was verified successfully!');
  } else {
    console.log('\nDocument failed the verification process.');
  }
}

module.exports = verifyDigital