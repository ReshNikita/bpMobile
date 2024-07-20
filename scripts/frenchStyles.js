import {
  footer__container,
  footer__list,
  height,
  langFromUrl,
  main__offers,
  mainHeading,
  weekBR,
  weeklyContainer__price,
  weeklyPrice,
  width,
  yearBR,
  yearlyPrice,
} from "./constants";

const changeStylesFR = () => {
  if (langFromUrl === "fr") {
    weekBR.style.display = "none";
    yearBR.style.display = "none";
    weeklyPrice.style.display = "inline-block";
    yearlyPrice.style.display = "inline-block";
    weeklyContainer__price.style.paddingLeft = "0px";
    footer__list.style.gap = "10px";
  }
  if (width === 390 && height === 844 && langFromUrl === "fr") {
    mainHeading.style.margin = "65px 39px 40.7px";
    document
      .querySelectorAll(".footer__list__item")
      .forEach(el => (el.style.letterSpacing = "normal"));
  }
  if (width === 375 && height === 667 && langFromUrl === "fr") {
    main__offers.style.margin = "20.7px 24px 8px";
  }
  if (width === 375 && height === 812 && langFromUrl === "fr") {
    mainHeading.style.margin = "65px 39px 40.7px";
    footer__container.style.margin = "15px";
  }
};
changeStylesFR();
