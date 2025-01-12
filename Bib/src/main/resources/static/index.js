document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/api/books/latest")
        .then(response => response.json())
        .then(data => {
            const booksList = document.getElementById("books-list");
            data.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} by ${book.author}`;
                booksList.appendChild(li);
            });
        });
});
