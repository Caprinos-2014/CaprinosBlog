document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("data-url");

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById("blog-posts").style.display = "none";
                    document.getElementById("dynamic-content").innerHTML = data;
                    document.getElementById("dynamic-content").style.display = "block";
                })
                .catch(error => console.error("Error loading content:", error));
        });
    });
});
