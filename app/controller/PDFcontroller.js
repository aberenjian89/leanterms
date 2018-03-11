const PDFDocument = require('pdfkit');
const fs = require('fs');
const blob_stream= require('blob-stream');

const PDFGenerate = (req,res,next)=>{
    let doc = new PDFDocument();
    doc.text("Hello World");
    let stream = doc.pipe(blob_stream());
    doc.end();
    stream.on('finish',()=>{
        console.log(stream.toBlobURL('leanterms/pdf'))
    })
};








module.exports = {
    PDFGenerate
};