import { loadCardsOnStart } from "../../js/createCards";
import { caruselEvents } from "../../js/petsCarousel";
import { rangeInputEvents } from "../../js/inputCarousel";
import { widthListeners, mediaQuaryCheckScreenOnLoad } from "../../js/mediaQuery";


loadCardsOnStart();

widthListeners();

mediaQuaryCheckScreenOnLoad();

caruselEvents();

rangeInputEvents();
