import {
  height,
  langFromUrl,
  mainHeading,
  weeklyContainer__price,
  width,
} from "./constants";

const changeStylesPT = () => {
  if (width === 414 && height === 896 && langFromUrl === "pt") {
    mainHeading.style.margin = "105px 59px 40.7px";
  }
  if (width === 390 && height === 844 && langFromUrl === "pt") {
    mainHeading.style.margin = "65px 39px 40.7px";
  }
  if (width === 375 && height === 812 && langFromUrl === "pt") {
    mainHeading.style.margin = "65px 39px 40.7px";
  }
  if (width === 375 && height === 667 && langFromUrl === "pt") {
    mainHeading.style.margin = "20px 39px 26.7px";
  }
  if (width === 390 && height === 844 && langFromUrl === "pt") {
    weeklyContainer__price.style.paddingLeft = "26px";
  }
};
changeStylesPT();
