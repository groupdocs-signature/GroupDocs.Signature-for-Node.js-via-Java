const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function searchForDigital() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED is defined elsewhere

  const signature = new signatureLib.Signature(filePath);
  const options = new signatureLib.DigitalSearchOptions();

  // Search for signatures in the document
  const signatures = signature.search(signatureLib.DigitalSignature.class, options).toArray();
  console.log('\nSource document contains the following digital signatures.');

  for (const digitalSignature of signatures) {
    console.log(`Digital signature found from ${digitalSignature.getSignTime()} with validation flag ${digitalSignature.isValid()}. Certificate SN ${digitalSignature.getCertificate().getType()}`);
  }
}

module.exports = searchForDigital