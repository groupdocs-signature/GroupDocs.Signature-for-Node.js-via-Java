const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithDigitalAdvancedPdfAppearance() {
    console.log('\n--------------------------------------------------------------------------------------------------------------------');
    console.log('[Example Advanced Usage] # SignWithDigitalAdvancedPdf : Sign document with digital signature applying PDF document-specific options\n');

    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const certificatePath = Constants.CertificatePfx;

    const outputFilePathSigned = path.join(Constants.OutputPath, 'SignWithDigitalAdvancedPdf', 'digitallySignedPdfAppearance.pdf');
    const outputFilePathCertified = path.join(Constants.OutputPath, 'SignWithDigitalAdvancedPdf', 'digitallyCertified.pdf');

    // Sign pdf document with digital signature and time stamp
    const signature = new signatureLib.Signature(filePath);

    // Create digital signing options
    const options = new signatureLib.DigitalSignOptions(certificatePath);
    // certificate password
    options.setPassword('1234567890');
    // digital certificate details
    options.setReason('Approved');
    options.setLocation('New York');

    // Apply custom PDF signature appearance
    const appearance = new signatureLib.PdfDigitalSignatureAppearance();

    // Do not show contact details
    appearance.setContactInfoLabel('');
    // Simplify reason label
    appearance.setReasonLabel('R:');
    // Change location label
    appearance.setLocationLabel('@=>');
    appearance.setDigitalSignedLabel('By:');
    appearance.setDateSignedAtLabel('On');
    // Apply custom appearance color
    //appearance.setBackground(Color.red);
    // Apply custom font settings
    //appearance.setFontFamilyName('Courier');
    appearance.setFontSize(8);

    options.setAppearance(appearance);
    //
    options.setAllPages(true);
    options.setWidth(160);
    options.setHeight(80);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Center);
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Left);
    options.setMargin(new signatureLib.Padding(0, 10, 0, 10));

    // Setup signature border
    const border = new signatureLib.Border();
    border.setVisible(true);
    //border.setColor(Color.red);
    border.setDashStyle(signatureLib.DashStyle.DashDot);
    border.setWeight(2);
    options.setBorder(border);

    const signResult = signature.sign(outputFilePathSigned, options);
    console.log(`\nSource document signed successfully with ${signResult.getSucceeded().size()} signature(s).\nFile saved at ${outputFilePathSigned}`);

    console.log('\nList of newly created signatures:');
    let number = 1;
    for (const temp of signResult.getSucceeded().toArray()) {
        console.log(`Signature # ${number++}: Type: ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    }
}


module.exports = signWithDigitalAdvancedPdfAppearance