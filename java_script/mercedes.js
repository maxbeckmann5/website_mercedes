function search(event) {
    if (event.keyCode===13 || event.type==='click'){
        var searchTerm = document.getElementById("searchTerm").value;
    var searchResults = document.getElementById("searchResults");

    if (searchTerm === "EQE") {
        searchResults.innerHTML = "Mehr zum EQE erfahren Sie hier.";
    } else {
        searchResults.innerHTML = "Keine Ergebnisse gefunden.";
    }
}
}

const fs = require('fs');
const path = require('path');

var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");

  if (nameInput.value === "") {
    alert("Bitte gib deinen Namen ein.");
    return;
  }

  if (emailInput.value === "") {
    alert("Bitte gib deine E-Mail-Adresse ein.");
    return;
  }

  // Speichern
  var data = {
    name: nameInput.value,
    email: emailInput.value
  };

  var filePath = path.join('C:/Users/PC001/Desktop/website_mercedes/saved_customer_data' , 'daten.bin');
  fs.writeFile(filePath, 'binary', function(err) {
    if (err) throw err;
    console.log('Daten wurden erfolgreich in der Datei gespeichert.');
  });

  form.reset();
});