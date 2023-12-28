**GroupDocs.Signature for Node.js via Java** lets your app end-users sign the electronic documents from a wide range of file formats. Supports several types of e-signing methods.

## Node.js Signature API Features 
- Document Signature Processing Features
- Create and add signatures to documents of various file formats.
- Specify visual attributes of signatures, such as color, font, margins, etc.
- Search and fetch a list of signatures from a document.
- Determine if the document contains signatures meeting specified criteria.
- Extract basic information about the document.
- Generate image representation of document pages for preview.
- Distinguish created signatures from the actual document.
- Put encrypted text into the QR-code signature or embed custom data objects.   

## Supported File Formats
The following section lists the supported file formats for the barcode, image, QR-code, stamp, and text signature types:
**Microsoft Word:** DOC, DOCM, DOCX, DOT, DOTM, DOTX
**Microsoft Excel:** XLSX, XLS, XLSB, XLSM, XLTX, XLTM
**Microsoft PowerPoint:** PPTX, PPTM, PPT, PPSX, PPSM, PPS, POTX, POTM
**OpenOffice:** ODT, OTT, ODS, OTS, ODP, OTP
**Image:** BMP, DJVU, GIF, JPG, JPEG, PNG, SVG, TIF, TIFF, WEBP
**CorelDraw:** CDR, CMX
**Photoshop:** PSD
**Metafile:** WMF
**Portable:** PDF

## Digital Signature Supported Formats
**Microsoft Word:** DOC, DOCM, DOCX, DOT, DOTM, DOTX
**Microsoft Excel:** XLSX, XLS, XLSB, XLSM, XLTX, XLTM
**Microsoft PowerPoint:** PPTX, PPTM
**OpenOffice:** ODS, OTS
**Portable:** PDF

## Supported Signature Types
- Text stamps
- Text labels
- Text as an image signature
- Image signature
- Digital signature
- Barcode signature
- QR-code signature
- Metadata signature
- Form-field signature

## Getting Started with GroupDocs.Signature for Node.js via Java
### Installation

From the command line:

	npm i @groupdocs/groupdocs.signature

### Sign a PDF File using Node.js

```js
  const signature = new groupdocs.signature.Signature(pdfFilePath);

  // Create QR code sign options
  const options = new groupdocs.signature.QrCodeSignOptions('JohnSmith');

  // Setup QR code encoding type
  options.setEncodeType(groupdocs.signature.QrCodeTypes.QR);
  
  // Set signature position
  options.setLeft(100);
  options.setTop(100);

  // Sign document to file
  signature.sign(outputFilePath, options);
```

### Search for Digital Signatures in Excel XLSX using Node.js

```js
const signature = new groupdocs.signature.Signature('spreadsheet.xlsx');
const options = new groupdocs.signature.DigitalSearchOptions();

// Search for signatures in the document
const signatures = signature.search(options).toArray();

console.log('\nSource document contains the following signatures.');
for (const digitalSignature of signatures) {
  console.log(`Digital signature found from ${digitalSignature.signTime} with validation flag ${digitalSignature.isValid}. Certificate SN ${digitalSignature.certificate.type}`);
}
```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/signature/nodejs-java) | [Documentation](https://docs.groupdocs.com/signature/nodejs-java/) | [Blog](https://blog.groupdocs.com/category/signature/) | [API Reference](https://apireference.groupdocs.com/signature/nodejs-java) | [Code Samples](https://github.com/groupdocs-signature/GroupDocs.signature-for-Node.js-via-Java) | [Free Support](forum.groupdocs.com/c/signature) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
