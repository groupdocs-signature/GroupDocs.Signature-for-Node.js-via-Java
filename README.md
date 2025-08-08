# GroupDocs.Signature for Node.js

![npm](https://img.shields.io/npm/v/groupdocs-signature-cloud)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-informational)

**Create, apply, and verify digital signatures** in documents using a powerful Node.js **e-signature SDK** built on top of GroupDocs.Signature for Java. Add electronic, barcode, QR-code, image, text, metadata, and form field signatures to **90+ document formats** including PDFs, Word, Excel, Images, and more.

> ✅ Supports `create digital signature`, `esign pdf`, `sign Word document`, `verify signature`, and `remove barcode/QR code from PDF`.


## 🚀 Key Features

- Add **electronic and digital signatures** to over 90 formats (PDF, DOCX, XLSX, PPTX, etc.)
- Create signatures from **image, barcode, QR code, stamp, metadata, or form fields**
- Verify and remove **digital signatures, barcodes, or QR codes**
- Digitally sign documents using **X.509 certificates** (PKCS#12/PKCS#7)
- Add **invisible metadata** and **interactive form field** signatures
- Batch-sign documents or apply multiple signature types
- Fully compatible with **Node.js 16+**


## 🔧 Supported Signature Types

| Signature Type         | Description                                                  |
|------------------------|--------------------------------------------------------------|
| **Digital Signatures** | Use X.509 certificates (legal, secure, and verifiable)       |
| **Image Signatures**   | Apply scanned signatures or logos as visual marks            |
| **Text Signatures**    | Custom text with styling and position                        |
| **QR-Code Signatures** | Add QR codes with encoded text/data                          |
| **Barcode Signatures** | Add or verify 1D/2D barcodes (e.g., Code128, Aztec)          |
| **Stamp Signatures**   | Timestamps, roles, and system metadata stamps                |
| **Metadata Signatures**| Add invisible data for tracking and auditing                 |
| **Form Field Signatures** | Add fillable form signature fields to documents           |


## 📁 Supported Document Formats

**Office Formats:**
- Word: DOC, DOCX, DOCM, DOTX, DOTM
- Excel: XLS, XLSX, XLSM, XLSB
- PowerPoint: PPT, PPTX, PPS, PPSX
- Visio: VSD, VSDX, VSSX

**Others:**
- PDF, PDF/A
- Images: JPG, PNG, TIFF, BMP, GIF, SVG
- OpenDocument (ODT, ODS, ODP)
- TXT, RTF, CSV, HTML, XML, JSON, and more


## 💡 Use Cases

- Digitally [sign](https://docs.groupdocs.com/signature/nodejs-java/esign-document-with-text-signature/) documents using X.509 certificates
- [Add signature fields](https://docs.groupdocs.com/signature/nodejs-java/esign-document-with-stamp-signature/) for web and mobile UI integration
- [Barcode & QR code](https://docs.groupdocs.com/signature/nodejs-java/esign-document-with-barcode-signature/) verification for automation pipelines
- Invisible metadata signing for compliance & version tracking
- [Search](https://docs.groupdocs.com/signature/nodejs-java/search-for-barcode-e-signatures/) and remove unwanted signatures
- Integrate e-signatures into Node.js SaaS or cloud platforms


## 📦 Installation

Install via npm:

```bash
npm install @groupdocs/groupdocs.signature
```


## How to Sign a PDF File using Node.js

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

## How to Search for Digital Signatures in Excel XLSX using Node.js

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

## 📚 Documentation & Resources

- [Official Documentation](https://docs.groupdocs.com/signature/nodejs-java/)
- [API Reference](https://reference.groupdocs.com/signature/nodejs/)
- [Live Demos](https://products.groupdocs.app/signature/total)
- [Code Samples](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Node.js-via-Java)
- [Free Support Forum](https://forum.groupdocs.com/c/signature)
- [License Terms](https://purchase.groupdocs.com/policies/license)


## 🖥️ Node.js Compatibility

- **Node.js** 16.x, 18.x, 20.x
- **OS:** Windows, Linux, macOS
- **Cloud:** AWS, Azure, GCP
- **Containers:** Docker, Kubernetes


## Why Choose GroupDocs.Signature for Node.js?

- Java-powered performance and stability via Node.js wrapper
- Full support for 90+ document types
- No Adobe or Office dependency
- Modern async API structure
- Secure and standards-compliant (X.509, PDF/A, PKCS#7)
- Enterprise-ready SDK for large-scale applications


## Security & Compliance

- **Digital Certificate Support:** RSA, DSA, ECDSA
- **Standards:** PDF/A, PKCS#7, X.509
- **Audit Trail:** Signature metadata and verification history
- **Secure APIs:** OAuth2, HTTPS, and environment-isolated processing


## Looking for Other SDKs?

- 👉 [.NET SDK](https://github.com/groupdocs-signature/GroupDocs.Signature-for-.NET)
- 👉 [Java SDK](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Java)
- 👉 [Python SDK](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Python-via-.NET)


## Contribute

This repo contains **usage examples and templates**. We welcome community contributions!

- [Submit issues](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Node.js-via-Java/issues)
- [Fork the repo](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Node.js-via-Java)
- [Improve examples and docs](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Node.js-via-Java/pulls)


## 📜 License

This project is licensed under the [GroupDocs EULA](https://purchase.groupdocs.com/policies/license).

<!--
SEO Keywords:
nodejs digital signature, electronic signature node, sign pdf node.js, document signing nodejs, groupdocs signature node, nodejs signature sdk, barcode signature node, qr code signing nodejs, digital certificate pdf signing, sign excel nodejs, verify signature node, signature api for nodejs, add signature image to pdf node, node document automation, electronic signature javascript, node.js esign sdk
-->

**© 2025 GroupDocs. All rights reserved.**