if (typeof(Storage) !== "undefined") {
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const currentDate = new Date();
        const previousVisit = new Date(lastVisit);
        const timeDiff = Math.abs(currentDate.getTime() - previousVisit.getTime());
        const daysSinceVisit = Math.ceil(timeDiff / (1000 * 3600 * 24));

        document.getElementById("visitInfo").textContent = `${daysSinceVisit} days since your last visit.`;
    } else {
        document.getElementById("visitInfo").textContent = "Welcome! This is your first visit.";
    }

    localStorage.setItem("lastVisit", new Date());
} else {
    document.getElementById("visitInfo").textContent = "Local storage is not supported on this browser.";
}
