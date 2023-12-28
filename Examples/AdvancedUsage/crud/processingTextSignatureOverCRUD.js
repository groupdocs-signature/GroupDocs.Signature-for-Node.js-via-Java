const java = require('java')
const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')
const { Buffer } = require('buffer');

function processingTextSignatureOverCRUD() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_WORDPROCESSING;
    const fileName = filePath.split("/").pop();

    const outputFilePath = `${Constants.OutputPath}/ProcessingTextSignatureOverCRUD/${fileName}`;
    const signatureIds = [];

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 1. Sign document with Text Signature
    // -----------------------------------------------------------------------------------------------------------------------------
    const textLabel = "John Smith";
    const signature = new signatureLib.Signature(filePath);

    const signOptions = new signatureLib.TextSignOptions(textLabel);
    signOptions.setVerticalAlignment(signatureLib.VerticalAlignment.Top);
    signOptions.setHorizontalAlignment(signatureLib.HorizontalAlignment.Center);
    signOptions.setWidth(100);
    signOptions.setHeight(40);
    signOptions.setMargin(new signatureLib.Padding(20));
    //signOptions.setForeColor({ red: 255 });
    
    // Create signatureFont object
    const signatureFont = new signatureLib.SignatureFont()
    signatureFont.setSize(12);
    signatureFont.setFamilyName("Comic Sans MS");
    signOptions.setFont(signatureFont);

    const signResult = signature.sign(outputFilePath, signOptions);

    console.log(`\nDocument ${filePath} was signed with following signatures:`);
    signResult.getSucceeded().toArray().forEach(temp => {
        signatureIds.push(temp.getSignatureId());
        console.log(`Signature : ${temp.getSignatureType()} Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 2. Verify document for Text Signature
    // -----------------------------------------------------------------------------------------------------------------------------
    const signature2 = new signatureLib.Signature(outputFilePath);

    const verifyOptions = new signatureLib.TextVerifyOptions();
    verifyOptions.setAllPages(false);
    verifyOptions.setPageNumber(1);
    verifyOptions.setMatchType(signatureLib.TextMatchType.Exact);
    verifyOptions.setText(textLabel);

    const verifyResult = signature2.verify(verifyOptions);
    if (verifyResult.isValid()) {
        console.log("\nDocument was verified successfully!");
    } else {
        console.log("\nDocument failed verification process.");
    }

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 3. Search document for Text Signature
    // -----------------------------------------------------------------------------------------------------------------------------
    const searchOptions = new signatureLib.TextSearchOptions();
    searchOptions.setAllPages(true);
    searchOptions.setMatchType(signatureLib.TextMatchType.Exact);
    searchOptions.setText(textLabel);

    const signatures = signature2.search(signatureLib.TextSignature.class, searchOptions).toArray();

    console.log(`\nSource document contains following text signature(s).`);
    signatures.forEach(textSignature => {
        if (textSignature) {
            console.log(`Found Text signature at page ${textSignature.getPageNumber()} with type [${textSignature.getSignatureImplementation()}] and text '${textSignature.getText()}'.`);
            console.log(`Location at ${textSignature.getLeft()}-${textSignature.getTop()}. Size is ${textSignature.getWidth()}x${textSignature.getHeight()}.`);
        }
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 4. Update document Text Signature after searching it
    // -----------------------------------------------------------------------------------------------------------------------------
    const signaturesToUpdatelist = java.newInstanceSync("java.util.ArrayList")
    signatures.forEach(textSignature => {
        textSignature.setText("John Walkman");
        textSignature.setLeft(textSignature.getLeft() + 100);
        textSignature.setTop(textSignature.getTop() + 100);
        textSignature.setWidth(200);
        textSignature.setHeight(50);
       
        signaturesToUpdatelist.add(textSignature);
    });

    const javaBuffer = java.newInstanceSync("java.io.ByteArrayOutputStream")
    const updateResult = signature2.update(javaBuffer, signaturesToUpdatelist);
    if (updateResult.getSucceeded().size() === signatures.length) {
        console.log("\nAll signatures were successfully updated!");
    } else {
        console.log(`Successfully updated signatures : ${updateResult.getSucceeded().size()}`);
        console.log(`Not updated signatures : ${updateResult.getFailed().size()}`);
    }

    console.log("List of updated signatures:");
    updateResult.getSucceeded().toArray().forEach(temp => {
        console.log(`Signature# Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 5. Update document Text Signature on saved SignatureId
    // create list of Text Signature by known SignatureId
    // -----------------------------------------------------------------------------------------------------------------------------
    
    // Verify document signatures
    signaturesToUpdatelist.clear();  
    signatureIds.forEach(item => {
        const temp = new signatureLib.TextSignature(item);
        temp.setWidth(150);
        temp.setHeight(30);
        temp.setLeft(100);
        temp.setTop(100);
        temp.setText("Mr.John Smith");

        //signaturesToUpdate.push(temp);
        signaturesToUpdatelist.add(temp);
    });

    const updateResult2 = signature2.update(java.newInstanceSync("java.io.ByteArrayOutputStream"), signaturesToUpdatelist);
    if (updateResult2.getSucceeded().size() === signatures.length) {
        console.log("\nAll signatures were successfully updated!");
    } else {
        console.log(`Successfully updated signatures : ${updateResult2.getSucceeded().size()}`);
        console.log(`Not updated signatures : ${updateResult2.getFailed().size()}`);
    }

    console.log("List of updated signatures:");
    updateResult2.getSucceeded().toArray().forEach(temp => {
        console.log(`Signature# Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    // STEP 6. Delete document Text Signature by id
    // create list of Text Signature by known SignatureId
    signaturesToUpdatelist.clear();
    signatureIds.forEach(item => {
        const temp = new signatureLib.TextSignature(item);
        signaturesToUpdatelist.add(temp);
    });

    const deleteResult = signature2.delete(java.newInstanceSync("java.io.ByteArrayOutputStream"), signaturesToUpdatelist);
    if (deleteResult.getSucceeded().size() === signaturesToUpdatelist.size()) {
        console.log("\nAll signatures were successfully deleted!");
    } else {
        console.log(`Successfully deleted signatures : ${deleteResult.getSucceeded().size()}`);
        console.log(`Not deleted signatures : ${deleteResult.getFailed().size()}`);
    }

    console.log("List of deleted signatures:");
    deleteResult.getSucceeded().toArray().forEach(temp => {
        console.log(`Signature# Id:${temp.getSignatureId()}, Location: ${temp.getLeft()}x${temp.getTop()}. Size: ${temp.getWidth()}x${temp.getHeight()}`);
    });
}

module.exports = processingTextSignatureOverCRUD