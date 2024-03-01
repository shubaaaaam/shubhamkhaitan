// include.js

// Define function to include header
function includeHeader() {
    fetch('/templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        });
}

// Define function to include footer
function includeFooter() {
    fetch('/templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        });
}

// Define function to include favicon
function includeFavicon() {
    fetch('/templates/favicon.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('favicon-placeholder').innerHTML = html;
        });
}

// Call functions to include header, footer, and favicon
includeHeader();
includeFooter();
includeFavicon();
