'use strict';

import showPhone from './modules/showPhone';
import menu from './modules/menu';
import popupRepair from './modules/popupRepair';
import checkPhoneInput from './modules/maskPhone';
import popupPrivacy from './modules/popupPrivacy';
import showPrompt from './modules/showPrompt';
import sliderRepair from './modules/sliderRepair';
import agreementSlider from './modules/agreementSlider';
import showPromptProblem from './modules/showPromptProblem';
import popupConsultation from './modules/popupConsultation';
import getAccordion from './modules/getAccordion';
import getTabWork from './modules/getTabWork';
import sliderFeedback from './modules/sliderFeedback';
import sliderDesigner from './modules/sliderDesigner';
import SliderCarousel from './modules/sliderCarousel';
import sliderPortfolio from './modules/sliderPortfolio';
import getDataRepair from './modules/getDataRepair'
import sendForm from './modules/sendForm';

showPhone();
menu();
popupRepair();
checkPhoneInput('#feedback-input1');
checkPhoneInput('#feedback-input2');
checkPhoneInput('#feedback-input3');
checkPhoneInput('#feedback-input4');
checkPhoneInput('#feedback-input5');
checkPhoneInput('#feedback-input6');
popupPrivacy();
showPrompt();
sliderRepair();
agreementSlider();
showPromptProblem();
popupConsultation();
getAccordion();
getTabWork();
sliderFeedback();
sliderDesigner();
const carousel = new SliderCarousel({
    main: ".wrapper",
    wrap: ".partners-slider",
    prev: "#partners-arrow_left",
    next: "#partners-arrow_right",
    slidesToShow: 2,
    infinity: true
});
carousel.init();
sliderPortfolio();
getDataRepair();
sendForm();