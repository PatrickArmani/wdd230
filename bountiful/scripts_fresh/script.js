const today = new Date().getDay();

try {
  let options = {
    year: "numeric",
  };
  document.querySelector("#copyright").textContent =
    new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with copyright year.");
}

try {
  document.getElementById("dateModified").textContent = document.lastModified;
} catch (e) {
  alert("Error finding last modified date.");
}

try {
  let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
  };
  document.querySelector("#todayHeading").textContent =
    new Date().toLocaleDateString("en-UK", options);
} catch (e) {
  alert("Error with today's date.");
}


// Hamburger Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}  

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

