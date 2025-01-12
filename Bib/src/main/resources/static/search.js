document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Preluăm termenul de căutare din formular
    const query = document.getElementById("query").value;

    // Trimitem cererea către backend pentru a căuta cărți
    fetch(`http://localhost:8080/api/books/search?query=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Eroare la căutarea cărților!");
            }
            return response.json();
        })
        .then(data => {
            const resultsList = document.getElementById("results-list");
            resultsList.innerHTML = ""; // Golim rezultatele anterioare

            if (data.length === 0) {
                resultsList.innerHTML = "<li>Nicio carte găsită!</li>";
            } else {
                data.forEach(book => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <strong>${book.title}</strong> de ${book.author}<br>
                        Editura: ${book.publisher}<br>
                        Id: ${book.id}<br>
                        Disponibilitate: ${book.available ? "Disponibilă" : "Indisponibilă"}
                    `;
                    resultsList.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error("Eroare:", error);
            alert("A apărut o eroare la comunicarea cu serverul!");
        });
});
