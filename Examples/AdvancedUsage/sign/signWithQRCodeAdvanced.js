const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithQRCodeAdvanced() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_WORDPROCESSING;
    const fileName = path.basename(filePath);
    const outputFilePath = path.join(Constants.OutputPath, "SignWithQRCodeAdvanced", fileName);

    const signature = new signatureLib.Signature(filePath);
    // create QRCode option with predefined QRCode text
    const signOptions = new signatureLib.QrCodeSignOptions("12345678");

    // setup QRCode encoding type
    signOptions.setEncodeType(signatureLib.QrCodeTypes.QR);
    // set signature position
    signOptions.setLeft(100);
    signOptions.setTop(100);

    // set signature alignment

    // when VerticalAlignment is set the Top coordinate will be ignored.
    // Use Margin properties Top, Bottom to provide vertical offset
    signOptions.setVerticalAlignment(signatureLib.VerticalAlignment.Top);

    // when HorizontalAlignment is set the Left coordinate will be ignored.
    // Use Margin properties Left, Right to provide horizontal offset
    signOptions.setHorizontalAlignment(signatureLib.HorizontalAlignment.Right);
    const padding = new signatureLib.Padding();
    padding.setRight(20);
    padding.setTop(20);
    signOptions.setMargin(padding);

    // adjust signature appearance

    // setup signature border
    const border = new signatureLib.Border();
    //border.setColor(Color.GREEN);
    border.setDashStyle(signatureLib.DashStyle.DashLongDashDot);
    border.setWeight(2);
    border.setTransparency(0.5);
    border.setVisible(true);
    signOptions.setBorder(border);

    // set text color and Font
    //signOptions.setForeColor(Color.RED);
    const font = new signatureLib.SignatureFont();
    font.setSize(12);
    font.setFamilyName("Comic Sans MS");
    signOptions.setFont(font);

    // setup background
    const background = new signatureLib.Background();
    //background.setColor(Color.GREEN);
    background.setTransparency(0.5);
    //background.setBrush(new LinearGradientBrush(Color.GREEN, Color.DARK_GRAY, 0));
    signOptions.setBackground(background);

    // set field for barcode images returning
    signOptions.setReturnContent(true);
    // specify type of returned barcode images
    signOptions.setReturnContentType(signatureLib.FileType.PNG);

    // sign document to file
    const signResult = signature.sign(outputFilePath, signOptions);
    // analyzing result
    console.log("List of newly created signatures:");
    let number = 1;
    for (const o of signResult.getSucceeded().toArray()) {
        const qrSignature = o;
        console.log(`Signature #${number++}: Type: ${qrSignature.getSignatureType()} Id:${qrSignature.getSignatureId()}, Location: ${qrSignature.getLeft()}x${qrSignature.getTop()}. Size: ${qrSignature.getWidth()}x${qrSignature.getHeight()}`);
    }

    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}
module.exports = signWithQRCodeAdvanced