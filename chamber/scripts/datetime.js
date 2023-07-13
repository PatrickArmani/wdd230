const currentDate = new Date();
  
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedDateTime = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

document.getElementById('formDateTime').value = formattedDateTime;
