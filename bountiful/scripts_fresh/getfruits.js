let selectElement1 = document.getElementById("fruits1");
let selectElement2 = document.getElementById("fruits2");
let selectElement3 = document.getElementById("fruits3");

fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
  jsonData.forEach(function(fruit) {
    let optionElement = document.createElement("option");
    optionElement.value = fruit.name;
    optionElement.textContent = fruit.name;
  
    selectElement1.appendChild(optionElement.cloneNode(true));
    selectElement2.appendChild(optionElement.cloneNode(true));
    selectElement3.appendChild(optionElement.cloneNode(true));
  });
  })
  .catch(function(error) {
    console.log("Error fetching JSON data:", error);
  });

