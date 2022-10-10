import { loadCardsOnStart } from "../../js/createCards";
import { caruselEvents } from "../../js/petsCarousel";
import { rangeInputEvents } from "../../js/inputCarousel";
import { widthListeners } from "../../js/mediaQuery";
import { popupEvents } from "../../js/popup";


loadCardsOnStart();

widthListeners();

caruselEvents();

rangeInputEvents();

popupEvents();