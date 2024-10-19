function buildHtmlContent() {
    return `
      <html>
        <head>
          <title>Tickets</title>
          <style>
            body,
            html {
              margin: 0;
              padding: 0;
            }
            @media print {
              @page {
                margin: 0;
              }
              * {
                color-adjust: exact;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              body {
                width: 100%;
                height: auto;
                margin: 0;
                padding: 0;
                font-family: 'Helvetica', 'Roboto', 'Arial', sans-serif;
                font-size: 14pt;
              }
              header, footer, nav, .no-print {
                display: none;
              }
              .page {
                page-break-after: always;
              }
            }
          </style>
        </head>
        <body>
          Tickets Content Printing
          <img src="img.jpg"/>
        </body>
      </html>
    `;
}

function buildIframeContent(ticketsContentHtml) {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';

    document.body.appendChild(iframe);

    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(buildHtmlContent());
    iframeDocument.close();

    return iframe;
}

function printTickets() {
    const iframe = buildIframeContent();
    iframe.onload = () => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        document.body.removeChild(iframe);
        window.focus();
    };
}

const button = document.getElementById('print');
button.addEventListener('click', printTickets);