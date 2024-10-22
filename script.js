// function buildHtmlContent() {
//     return `
//       <html>
//         <head>
//           <title>Tickets</title>
//           <style>
//             body,
//             html {
//               margin: 0;
//               padding: 0;
//             }
//             @media print {
//               @page {
//                 margin: 0;
//               }
//               * {
//                 color-adjust: exact;
//                 -webkit-print-color-adjust: exact;
//                 print-color-adjust: exact;
//               }
//               body {
//                 width: 100%;
//                 height: auto;
//                 margin: 0;
//                 padding: 0;
//                 font-family: 'Helvetica', 'Roboto', 'Arial', sans-serif;
//                 font-size: 14pt;
//               }
//               header, footer, nav, .no-print {
//                 display: none;
//               }
//               .page {
//                 page-break-after: always;
//               }
//             }
//           </style>
//         </head>
//         <body>
//           Tickets Content Printing
//           <img src="img.jpg"/>
//         </body>
//       </html>
//     `;
// }

// function buildIframeContent(ticketsContentHtml) {
//     const iframe = document.createElement('iframe');

//     document.body.appendChild(iframe);

//     const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//     iframeDocument.open();
//     iframeDocument.write(buildHtmlContent());
//     iframeDocument.close();

//     return iframe;
// }

function printTickets() {
    window.print();
}

setInterval( () => {
    console.log(Date.now());
});

const button = document.getElementById('print');
button.addEventListener('click', printTickets);