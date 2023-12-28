const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithDigitalAdvancedPdfTimestamp() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignWithDigitalAdvancedPdfTimestamp : Sign document with digital signature applying PDF TimeStamp\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const certificatePath = Constants.CertificatePfx;

    const outputFilePath = path.join(Constants.OutputPath, 'SignWithDigitalAdvancedPdf', 'digitallySignedTimeStamp.pdf');

    // Sign pdf document with digital signature and timestamp
    const signature = new signatureLib.Signature(filePath);
    
    // Create digital signing options
    const options = new signatureLib.DigitalSignOptions(certificatePath);
    options.setPassword('1234567890');

    // Set up PDF digital signature with timestamp
    const pdfDigitalSignature = new signatureLib.PdfDigitalSignature();
    pdfDigitalSignature.setContactInfo('Contact');
    pdfDigitalSignature.setLocation('Location');
    pdfDigitalSignature.setReason('Reason');
    pdfDigitalSignature.setTimeStamp(new signatureLib.TimeStamp('https://freetsa.org/tsr', '', ''));

    options.setSignature(pdfDigitalSignature);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Bottom);
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);

    const signResult = signature.sign(outputFilePath, options);
    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().length} signature(s).\nFile saved at ${outputFilePath}`);

    console.log('\nList of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded()) {
        console.log(`Signature #${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
}


module.exports = signWithDigitalAdvancedPdfTimestamp