import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

mergePdfs = async (p1,p2) => {
  await merger.add("one.pdf");
  await merger.add("two.pdf");
  
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "John Doe",
    creator: "John Doe",
    title: "My live as John Doe"
  });

  await merger.save('merged.pdf'); 
};

module.exports = {mergePdfs};