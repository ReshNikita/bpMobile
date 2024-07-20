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

export const getLangFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langCode = urlParams.get("lang");
  const supportedLanguages = ["en", "fr", "de", "es", "pt", "ja"];
  const currentLanguage = langCode;
  const defaultLang = supportedLanguages.includes(currentLanguage)
    ? currentLanguage
    : "en";

  return langCode || defaultLang;
};
const langFromUrl = getLangFromUrl();

const switchLanguage = lang => {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .catch(error => console.error("Error fetching translations:", error));
};

switchLanguage(langFromUrl);

const updateTextElements = data => {
  const elementsToUpdate = document.querySelectorAll("[id],[class]");

  elementsToUpdate.forEach(element => {
    const key = element.id || element.class;
    if (key in data) {
      element.textContent = data[key];
    }
  });
};

const updateStyles = lang => {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      updateTextElements(data);
    })
    .catch(error => console.error("Error fetching translations:", error));
};

updateStyles(langFromUrl);

window.addEventListener("resize", () => window.location.reload());
