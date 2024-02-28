// Define function to include header
function includeHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        });
}

// Define function to include footer
function includeFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        });
}

// Call functions to include header and footer
includeHeader();
includeFooter();
