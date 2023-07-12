const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    chooseHighlights(businesses);
  });

function chooseHighlights(businesses) {
  const filteredMembership = businesses.filter(function (business) {
    return business.membership;
  });

  const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

  for (let i = 0; i < 10; i++) {
    displayHighlight(shuffledMembership[i], "#ad");
  }
}

function displayHighlight(business, elementID) {
  const individualBusinesses = document.createElement('div');
  individualBusinesses.classList.add('spotlight');

  const pName = document.createElement('p');
  pName.textContent = business.name;
  pName.classList.add('large');
  individualBusinesses.appendChild(pName);

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', business.imageurl);
  logoImg.classList.add('spotlightImg');
  logoImg.setAttribute('alt', `Logo image for ${business.name}`);
  logoImg.setAttribute('loading', 'lazy');
  individualBusinesses.appendChild(logoImg);

  const pSlogan = document.createElement('p');
  pSlogan.textContent = `"${business.slogan}"`;
  pSlogan.classList.add('small', 'bold', 'italic');
  individualBusinesses.appendChild(pSlogan);

  const hr = document.createElement('hr');
  individualBusinesses.appendChild(hr);

  const pSpotinfo = document.createElement('p');
  pSpotinfo.textContent = `${business.phone} | `;
  pSpotinfo.classList.add('spotinfo');
  individualBusinesses.appendChild(pSpotinfo);

  const a = document.createElement('a');
  a.textContent = 'website';
  a.setAttribute('href', '#');
  pSpotinfo.appendChild(a);

  const spotlightContainer = document.querySelector(elementID);
  spotlightContainer.appendChild(individualBusinesses);
}
