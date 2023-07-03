const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
getProphetData(url);

async function getProphetData(url) {
    const response = await fetch(url);
   
    // if (response.ok) {
        
    const data = await response.json();
    //  console.table(data.prophets);  
    // note that we reference the prophet array of the data object given the structure of the json file
    // document.getElementById("prophet").innerHTML = await myPromise;
    displayProphets(data.prophets);
    }

// }
  
  

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthdate = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthdate.innerHTML = `<strong>Date of Birth</strong>: ${prophet.birthdate}<br><strong>Place of Birth</strong>: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(portrait);
      // card.append(p)
      cards.appendChild(card);
    } )// end of forEach loop
  }
   // end of function expression