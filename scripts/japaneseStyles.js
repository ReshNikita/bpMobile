import {
  langFromUrl,
  weekBR,
  yearBR,
  yearlyContainer__price,
} from "./constants";

const changeStylesJA = () => {
  const middleArt = document.querySelector(".middleArt");
  if (langFromUrl === "ja") {
    middleArt.style.width = "auto";
    yearBR.style.display = "none";
    weekBR.style.display = "none";
    yearlyContainer__price.style.paddingLeft = "19px";
  }
};
changeStylesJA();
