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

const currentLanguage = navigator.language || navigator.languages[0];

const getLangFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") || currentLanguage.slice(0, 2);
};

const langFromUrl = getLangFromUrl();

const switchLanguage = lang => {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error("Error fetching translations:", error));
};

switchLanguage(langFromUrl);

const updateTextElements = data => {
  const elementsToUpdate = document.querySelectorAll("[id],[class]");

  elementsToUpdate.forEach(element => {
    const key = element.id || element.className;
    if (key in data) {
      element.textContent = data[key];
    }
  });
};

const switchLanguage2 = lang => {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      updateTextElements(data);
    })
    .catch(error => console.error("Error fetching translations:", error));
};

switchLanguage2(langFromUrl);

const changeStylesDE = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mainHeading = document.getElementById("Get Unlimited Access");
  const weeklyAccess = document.getElementById("WEEKLY ACCESS");
  const yearlyAccess = document.getElementById("YEARLY ACCESS");
  const pricePerYear = document.querySelector(
    ".main__offers__yearlyContainer__pricePerYear"
  );
  const yearlyContainer__price = document.querySelector(
    ".main__offers__yearlyContainer__price"
  );
  const weeklyContainer__price = document.querySelector(
    ".main__offers__weeklyContainer__price"
  );
  const main__offers__weeklyContainer__heading = document.querySelector(
    ".main__offers__weeklyContainer__heading"
  );
  const main__offers__weeklyContainer = document.querySelector(
    ".main__offers__weeklyContainer"
  );
  if (width >= 430 && height >= 932 && lang === "de") {
    mainHeading.style.fontSize = "52px";
  }
  if (width < 430 && height < 932 && lang === "de") {
    mainHeading.style.fontSize = "22px";
    weeklyAccess.style.fontSize = "13px";
    yearlyAccess.style.fontSize = "13px";
    pricePerYear.style.fontSize = "13px";
    yearlyContainer__price.style.fontSize = "13px";
    weeklyContainer__price.style.fontSize = "13px";
    weeklyContainer__price.style.padding = "0px";
    main__offers__weeklyContainer__heading.style.width = "50%";
    main__offers__weeklyContainer__heading.style.textAlign = "center";
    main__offers__weeklyContainer.style.gap = "0";
  }
  if (width === 375 && height === 812 && lang === "de") {
    mainHeading.style.margin = "65px 39px 40.7px";
  }
};
changeStylesDE();
