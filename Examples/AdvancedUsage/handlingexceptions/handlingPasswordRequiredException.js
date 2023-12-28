const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function handlingPasswordRequiredException() {
    // The path to the documents directory
    // This file is secured with a password
    const filePath = Constants.SAMPLE_PDF_SIGNED_PWD;
    const fileName = filePath.split("/").pop();
    const outputFilePath = `${Constants.OutputPath}/HandlingExceptions${fileName}`;

    // Create a Signature instance
    const signature = new signatureLib.Signature(filePath);

    try {
        try {
            const options = new signatureLib.QrCodeSignOptions("JohnSmith");
            options.setEncodeType(signatureLib.QrCodeTypes.QR);
            options.setLeft(100);
            options.setTop(100);

            // Try to sign the document to file; we expect a PasswordRequiredException
            signature.sign(outputFilePath, options);
            console.log(`Source document signed successfully. File saved at ${outputFilePath}`);
        } catch (ex) {
            if (ex.message.includes("PasswordRequiredException")) {
                console.log(`PasswordRequiredException: ${ex.message}`);
            } else if (ex.message.includes("GroupDocsSignatureException")) {
                console.log(`Common GroupDocsSignatureException: ${ex.message}`);
            } else {
                console.log(`Common Exception happens only at the user code level: ${ex.message}`);
            }
        }
    } catch (e) {
        console.log(`GroupDocs Signature Exception: ${e.message}`);
    }
}

module.exports = handlingPasswordRequiredException