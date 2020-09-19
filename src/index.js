'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import "cross-browser-polyfill";
import 'dom-node-polyfills';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import scrollToBlock from './modules/scrollToBlock';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImage from './modules/changeImage';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


//timer
countTimer("20 september 2020");
//menu
toggleMenu();
//scroll
scrollToBlock();
//popup
togglePopUp();
//tabs
tabs();
//slider
slider();
//team
changeImage();
//calc
calc(100);
//send-ajax-form
sendForm();