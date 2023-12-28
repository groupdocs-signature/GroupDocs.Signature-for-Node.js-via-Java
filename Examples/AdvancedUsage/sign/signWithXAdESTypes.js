const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithXAdESTypes() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignWithXAdESTypes : Sign document with XML Advanced Electronic Signatures (XAdES)\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_SPREADSHEET;
    const fileName = path.basename(filePath);
    const certificatePath = Constants.CertificatePfx;
    const outputFilePath = path.join(Constants.OutputPath, 'SignWithXAdESTypes', fileName);

    const signature = new signatureLib.Signature(filePath);
    const options = new signatureLib.DigitalSignOptions(certificatePath);

    // set XAdES type
    options.setXAdESType(signatureLib.XAdESType.XAdES);
    // certificate password
    options.setPassword('1234567890');
    // digital certificate details
    options.setReason('Sign');
    options.setContact('JohnSmith');
    options.setLocation('Office1');

    const signResult = signature.sign(outputFilePath, options);
    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().size()} signature(s).\nFile saved at ${outputFilePath}`);

    console.log('\nList of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}`);
    }
}

module.exports = signWithXAdESTypes