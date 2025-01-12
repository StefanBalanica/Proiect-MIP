document.getElementById("add-book-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Preluăm valorile din formular
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publisher = document.getElementById("publisher").value;
    const available = document.getElementById("available").value === "true";

    // Creăm obiectul JSON pentru cererea POST
    const book = {
        title: title,
        author: author,
        publisher: publisher,
        available: available
    };

    // Trimitem datele către backend
    fetch("http://localhost:8080/api/books/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        if (response.ok) {
            alert("Cartea a fost adăugată cu succes!");
            // Resetăm formularul
            document.getElementById("add-book-form").reset();
        } else {
            alert("A apărut o eroare la adăugarea cărții!");
        }
    })
    .catch(error => {
        console.error("Eroare:", error);
        alert("A apărut o eroare la comunicarea cu serverul!");
    });
});
