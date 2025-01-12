'use-strict'

var body_element = document.querySelector('body');
var back_home_element = document.querySelector('#back_home');
var sticky_header_element = document.querySelector('.sticky-header')

back_home_element.classList.add('hide');
sticky_header_element.classList.remove('grid-header');

// https://stackoverflow.com/a/73675287
window.addEventListener('scroll', () => {
    console.log("sad");
    if (body_element.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        console.log("did it");
        back_home_element.classList.remove("hide");
        sticky_header_element.classList.add('grid-header');

    } else {
        back_home_element.classList.add("hide");
        sticky_header_element.classList.remove('grid-header');
        console.log("did NOT do it");
    }
});