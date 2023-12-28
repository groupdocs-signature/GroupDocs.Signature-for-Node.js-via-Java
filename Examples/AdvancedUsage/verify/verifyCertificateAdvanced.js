const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function verifyCertificateAdvanced() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # VerifyCertificateAdvanced : Verify Digital Certificate\n');

    // The path to the certificate.
    const certificatePath = Constants.CertificatePfx;

    const loadOptions = new signatureLib.LoadOptions();
    loadOptions.setPassword('1234567890');

    const signature = new signatureLib.Signature(certificatePath, loadOptions);

    const options = new signatureLib.CertificateVerifyOptions();
    options.setPerformChainValidation(false);
    options.setMatchType(signatureLib.TextMatchType.Exact);
    options.setSerialNumber('00AAD0D15C628A13C7');

    // verify certificate
    const result = signature.verify(options);
    if (result.isValid()) {
        console.log('\nCertificate was verified successfully!');
    } else {
        console.log('\nCertificate failed verification process.');
    }

}

module.exports = verifyCertificateAdvanced