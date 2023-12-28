const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signPdfWithStandardMetadata() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);

    const outputFilePath = path.join(Constants.OutputPath, 'SignPdfWithStandardMetadata', fileName);

    const signature = new signatureLib.Signature(filePath);
    // setup options with text of signature
    const options = new signatureLib.MetadataSignOptions();

    // Using standard Pdf Metadata Signatures with new values
    // const javaArray = java.newInstanceSync("java.util.ArrayList")
    // javaArray.add(signatureLib.PdfMetadataSignatures.getAuthor().deepClone('Mr.Scherlock Holmes'));
    // javaArray.add(signatureLib.PdfMetadataSignatures.getCreateDate().deepClone(new Date()));
    
    // const test = new Array();
    // test.push(signatureLib.PdfMetadataSignatures.getAuthor().deepClone('Mr.Scherlock Holmes'));
    // test.push(signatureLib.PdfMetadataSignatures.getCreateDate().deepClone(new Date()));
 
    const signatures = [
        signatureLib.PdfMetadataSignatures.getAuthor().deepClone('Mr.Scherlock Holmes'),
        signatureLib.PdfMetadataSignatures.getCreateDate().deepClone(new Date()),
        signatureLib.PdfMetadataSignatures.getMetadataDate().deepClone(new Date()),
        signatureLib.PdfMetadataSignatures.getCreatorTool().deepClone('GD.Signature-Test'),
        signatureLib.PdfMetadataSignatures.getModifyDate().deepClone(new Date()),
        signatureLib.PdfMetadataSignatures.getProducer().deepClone('GroupDocs-Producer'),
        signatureLib.PdfMetadataSignatures.getEntry().deepClone('Signature'),
        signatureLib.PdfMetadataSignatures.getKeywords().deepClone('GroupDocs, Signature, Metadata, Creation Tool'),
        signatureLib.PdfMetadataSignatures.getTitle().deepClone('Metadata Example'),
        signatureLib.PdfMetadataSignatures.getSubject().deepClone('Metadata Test Example'),
        signatureLib.PdfMetadataSignatures.getDescription().deepClone('Metadata Test example description'),
        signatureLib.PdfMetadataSignatures.getCreator().deepClone('GroupDocs.Signature'),
    ];

    options.getSignatures().addRange(signatures);

    // sign document to file
    signature.sign(outputFilePath, options);
    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signPdfWithStandardMetadata