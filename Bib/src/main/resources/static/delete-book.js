document.getElementById("delete-book-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Preluăm ID-ul cărții din formular
    const bookId = document.getElementById("bookId").value;

    // Trimitem cererea DELETE către backend
    fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("status-message").innerText = "Cartea a fost ștearsă cu succes!";
            document.getElementById("status-message").style.color = "green";
            // Resetăm formularul
            document.getElementById("delete-book-form").reset();
        } else if (response.status === 404) {
            document.getElementById("status-message").innerText = "Cartea cu acest ID nu a fost găsită!";
            document.getElementById("status-message").style.color = "red";
        } else {
            document.getElementById("status-message").innerText = "A apărut o eroare la ștergerea cărții!";
            document.getElementById("status-message").style.color = "red";
        }
    })
    .catch(error => {
        console.error("Eroare:", error);
        document.getElementById("status-message").innerText = "Eroare de comunicare cu serverul!";
        document.getElementById("status-message").style.color = "red";
    });
});
