function handleSubmit(event) {
    event.preventDefault();
  
    // input values
    const firstName = document.querySelector('input[name="firstName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const fruits1 = document.getElementById('fruits1').value;
    const fruits2 = document.getElementById('fruits2').value;
    const fruits3 = document.getElementById('fruits3').value;
    const description = document.querySelector('textarea[name="description"]').value;
    
    // current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
  
    // nutrition values of selected fruits
    const selectedFruits = [fruits1, fruits2, fruits3];
    let totalCarbohydrates = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;
  
    fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        selectedFruits.forEach(function(fruitName) {
          const fruit = jsonData.find(fruit => fruit.name == fruitName);
          if (fruit) {
            totalCarbohydrates += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
          }
        });
  
        // Output HTML
        const output = `
          <h2>Custom Drink Summary</h2>
          <p><strong>First Name:</strong> ${firstName}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone Number:</strong> ${phone}<br>
          <strong>Selected Fruits:</strong> ${fruits1}, ${fruits2}, ${fruits3}<br>
          <strong>Special Instructions:</strong> ${description}</p>
          <p><strong>Order Date:</strong> ${formattedDate}</p>
          <div class="nutrition">
          <h2>Nutrition Facts</h2>
          <hr class="thick">
          <strong>Carbohydrates:</strong> ${totalCarbohydrates.toFixed(2)}
          <hr>
          <strong>Protein:</strong> ${totalProtein.toFixed(2)}
          <hr>
          <strong>Fat:</strong> ${totalFat.toFixed(2)}
          <hr>
          <strong>Sugar:</strong> ${totalSugar.toFixed(2)}
          <hr>
          <strong>Calories:</strong> ${totalCalories.toFixed(2)}</p>
          </div>
        `;
  
  
        // to display
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = output;
        
  
      })
      .catch(function(error) {
        console.log("Error fetching JSON data:", error);
      });
  }
  
  // Add listener
  const form = document.getElementById('orderForm');
  form.addEventListener('submit', handleSubmit);
  
  
  function countDrink() {
  if (localStorage.getItem("customDrink")) {
    const customDrinkCount = parseInt(localStorage.getItem("customDrink"));
    localStorage.setItem("customDrink", customDrinkCount + 1);
  } else {
    localStorage.setItem("customDrink", 1);
  }
  }
  