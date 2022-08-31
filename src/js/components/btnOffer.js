'use strict'

const btnOffer = document.querySelector('#btnOffer');
const swiperMain = document.querySelector('.swiper-main');
const bodyOverlay = document.querySelector('.overlay');
const offers = document.querySelector('.offers');
const buttonCloseOverlay = document.querySelector('#btnclose');
const body = document.querySelector('body');

function exOpen() {
    swiperMain.classList.add('active');
    bodyOverlay.classList.add('active');
    offers.style.display = 'none';
    body.classList.add('overflow-hidden')
    buttonCloseOverlay.style.display = 'block'

}

function exClose() {
    swiperMain.classList.remove('active');
    bodyOverlay.classList.remove('active');
    offers.style.display = 'block';
    body.classList.remove('overflow-hidden')
    buttonCloseOverlay.style.display = 'none'

}

const bntOFFER = btnOffer.addEventListener('click', (e) => {
    e.preventDefault();
    exOpen();
    
    bodyOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        exClose();
    })

    buttonCloseOverlay.addEventListener('click', (e) => {
        exClose()
    })

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            exClose();
        }
    });
})


export default bntOFFER;
  