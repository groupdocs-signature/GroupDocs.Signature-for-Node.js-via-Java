const path = require('path');
const fs = require('fs');

// Constant Variables 
const Constants = require('../../../../constants')
const signatureLib = require('@groupdocs/groupdocs.signature')

function signWithQRCodeWiFiObject() {
    // The path to the documents directory.
    const filePath = Constants.SAMPLE_PDF;
    const fileName = path.basename(filePath);
    const outputFilePath = path.join(Constants.OutputPath, "SignWithQRCodeWiFiObject", fileName);

    const signature = new signatureLib.Signature(filePath);
    // create WiFi object
    const wifi = new signatureLib.WiFi();
    wifi.setSSID("GuestNetwork!");
    wifi.setEncryption(signatureLib.WiFiEncryptionType.WPAWPA2);
    wifi.setPassword("guest");
    wifi.setHidden(false);

    // create options
    const options = new signatureLib.QrCodeSignOptions();
    options.setEncodeType(signatureLib.QrCodeTypes.QR);
    // setup Data property to MeCard instance
    options.setData(wifi);
    // set right bottom corner
    options.setHorizontalAlignment(signatureLib.HorizontalAlignment.Left);
    options.setVerticalAlignment(signatureLib.VerticalAlignment.Center);
    options.setWidth(100);
    options.setHeight(100);
    options.setMargin(new signatureLib.Padding(10));

    // sign document to file
    signature.sign(outputFilePath, options);

    console.log(`\nSource document signed successfully.\nFile saved at ${outputFilePath}`);
}

module.exports = signWithQRCodeWiFiObject