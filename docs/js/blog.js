// Function to fetch blog posts from txt files
function fetchBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Loop through blog files
    fetch('blogs/')
        .then(response => response.text())
        .then(text => {
            const filenames = text.split('\n').filter(filename => filename.trim() !== '');

            // Fetch and display each blog post
            filenames.forEach(filename => {
                fetch(`blogs/${filename}`)
                    .then(response => response.text())
                    .then(content => {
                        // Parse filename to extract header and date
                        const [header, date] = filename.split('_');
                        const formattedDate = new Date(date.replace('.txt', '')).toDateString();

                        // Create blog post element
                        const blogPost = document.createElement('div');
                        blogPost.classList.add('blog-post');
                        blogPost.innerHTML = `
                            <h2>${header}</h2>
                            <p>Date: ${formattedDate}</p>
                            <p>${content}</p>
                            <hr>
                        `;
                        blogPostsContainer.appendChild(blogPost);
                    });
            });
        });
}

// Call function to fetch blog posts when the page loads
document.addEventListener("DOMContentLoaded", fetchBlogPosts);
