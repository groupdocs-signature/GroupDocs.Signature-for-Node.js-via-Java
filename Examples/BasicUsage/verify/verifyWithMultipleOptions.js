const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyWithMultipleOptions() {
  // The path to the documents directory.
  const filePath = Constants.SAMPLE_SIGNED_MULTI; // Assuming Constants.SAMPLE_SIGNED_MULTI is defined elsewhere

  // Initialize Signature instance
  const signature = new signatureLib.Signature(filePath);

  // Initialize TextVerifyOptions
  const textVerifyOptions = new signatureLib.TextVerifyOptions();
  textVerifyOptions.setAllPages(true); // this value is set by default
  textVerifyOptions.setText('Text signature');
  textVerifyOptions.setSignatureImplementation(signatureLib.TextSignatureImplementation.Native);
  textVerifyOptions.setMatchType(signatureLib.TextMatchType.Contains);

  // Initialize BarcodeVerifyOptions
  const barcVerifyOptions = new signatureLib.BarcodeVerifyOptions();
  barcVerifyOptions.setAllPages(true); // this value is set by default
  barcVerifyOptions.setText('12345');
  barcVerifyOptions.setMatchType(signatureLib.TextMatchType.Contains);

  // Initialize QrCodeVerifyOptions
  const qrcdVerifyOptions = new signatureLib.QrCodeVerifyOptions();
  qrcdVerifyOptions.setAllPages(true); // this value is set by default
  qrcdVerifyOptions.setText('John');
  qrcdVerifyOptions.setMatchType(signatureLib.TextMatchType.Contains);

  // Initialize DigitalVerifyOptions
  const digtVerifyOptions = new signatureLib.DigitalVerifyOptions();
  digtVerifyOptions.setPassword('1234567890');

  // Verify document signatures
  const javaArray = java.newInstanceSync("java.util.ArrayList")
  javaArray.add(textVerifyOptions);
  javaArray.add(barcVerifyOptions);
  javaArray.add(qrcdVerifyOptions);
  javaArray.add(digtVerifyOptions);
  const result = signature.verify(javaArray);

  if (result.isValid()) {
    console.log('\nDocument was verified successfully!');
  } else {
    console.log('\nDocument failed the verification process.');
  }
}


module.exports = verifyWithMultipleOptions