export function VisitCounter() {
    const html = `
    <!doctype html>
    <html>
      <body style="margin:0;display:flex;justify-content:center;align-items:center;">
        <script type="text/javascript" src="https://contador.websiteout.com/js/13/5/0/1"></script>
      </body>
    </html>
  `;

    return (
        <div>
            <iframe
                srcDoc={html}
                title="Visit Counter"
                scrolling="no"
                style={{
                    border: "none",
                    width: "220px",
                    height: "40px",
                    transform: "scale(2)",
                }}
            />
        </div>
    );
}