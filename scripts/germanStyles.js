import {
  height,
  langFromUrl,
  main__offers__weeklyContainer,
  main__offers__weeklyContainer__heading,
  mainHeading,
  pricePerYear,
  weekBR,
  weeklyAccess,
  weeklyContainer__price,
  weeklyPrice,
  width,
  yearlyAccess,
  yearlyContainer__price,
} from "./constants";

const changeStylesDE = () => {
  if (width >= 430 && height >= 932 && langFromUrl === "de") {
    mainHeading.style.margin = "149px 59px 40.7px";
    weekBR.style.display = "none";
    weeklyPrice.style.display = "inline-block";
    weeklyPrice.style.width = "80px";
  }
  if (width < 430 && height < 932 && langFromUrl === "de") {
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
  if (width === 375 && height === 812 && langFromUrl === "de") {
    mainHeading.style.margin = "65px 39px 40.7px";
  }
};
changeStylesDE();
