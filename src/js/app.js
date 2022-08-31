// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import menuBurger from './components/burger-menu';
import swiperMain from './components/slider';
import tabs from './components/tabs';
import bntOFFER from './components/btnOffer';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    menuBurger.init();
    if(bntOFFER) {
      swiperMain.init();
    }
    tabs.init();
  });
})(jQuery);
