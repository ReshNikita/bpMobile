const updateDateTime = () => {
  const clockElement = document.getElementById("header__time");
  const clockElement8 = document.getElementById("header__time8");

  const currentTime = new Date();
  let hours = currentTime.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");

  const dateTimeString = `${hours}:${minutes}`;
  clockElement.textContent = dateTimeString;
  const dateTimeString8 = `${hours}:${minutes} ${ampm}`;
  clockElement8.textContent = dateTimeString8;
};

setInterval(updateDateTime, 1000);
updateDateTime();
