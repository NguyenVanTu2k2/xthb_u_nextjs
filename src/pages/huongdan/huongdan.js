import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdf from './abc.pdf';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook() {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };

    return (
        <> 
        
         
            <div className="">
                <div className="text-4xl font-bold md:font-extrabold text-white">PIMR</div>
                <HTMLFlipBook width={600} height={800} showCover={true}>
                    {[...Array(numPages).keys()].map((n) => (
                        <Pages key={n} number={`${n+1}`}>
                            <Document
                                file={pdf}
                                onLoadSuccess={onDocumentLoadSuccess} 
                            >
                                <Page 
                                    pageNumber={n+1} 
                                    renderAnnotationLayer={false} 
                                    renderTextLayer={false} 
                                    width={600}  // Điều chỉnh kích thước trang PDF
                                    className='border-3 border-black' 
                                />
                            </Document>
                        </Pages>
                    ))}
                </HTMLFlipBook>
            </div>
           
           
        </>
    );
}

export default FlipBook;
