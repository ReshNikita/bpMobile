import { langFromUrl, weeklyContainer__price } from "./constants";

const changeStylesES = () => {
  if (langFromUrl === "es") {
    weeklyContainer__price.style.paddingLeft = "5px";
  }
};
changeStylesES();
