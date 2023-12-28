const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithQRCodeEmailObject() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);
    const outputFilePath = path.join(Constants.OutputPath, "SignWithQRCodeEmail", "QRCodeEmailObject.pdf");

    const signature = new signatureLib.Signature(filePath);
    // create Email object
    const email = new signatureLib.Email();
    email.setAddress("sherlock@holmes.com");
    email.setSubject("Very important e-mail");
    email.setBody("Hello, Watson. Reach me ASAP!");

    // create options
    const options = new signatureLib.QrCodeSignOptions();
    options.setEncodeType(signatureLib.QrCodeTypes.QR);
    // setup Data property to Address instance
    options.setData(email);
    // set right bottom corner
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Bottom);
    options.setMargin(new signatureLib.Padding(10));
    options.setWidth(100);
    options.setHeight(100);

    // sign document to file
    signature.sign(outputFilePath, options);

    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}


module.exports = signWithQRCodeEmailObject