'use-strict'

var fieldset_element = document.querySelector('.selection-system > div');
var before_img_btn = document.querySelector('#r_before_img');
var after_img_btn = document.querySelector('#r_after_img');
var before_img = document.querySelector('#before_img');
var after_img = document.querySelector('#after_img');


fieldset_element.classList.remove('hide');
after_img.classList.add('hide');

// https://stackoverflow.com/a/14544545
before_img_btn.addEventListener('change', () => {
    if(before_img_btn.checked) {
        before_img.classList.remove('hide');
        after_img.classList.add('hide');
    }
    else {
        before_img.classList.add('hide');
        after_img.classList.remove('hide');
    }
});

after_img_btn.addEventListener('change', () => {
    if(after_img_btn.checked) {
        before_img.classList.add('hide');
        after_img.classList.remove('hide');
    }
    else {
        before_img.classList.remove('hide');
        after_img.classList.add('hide');
    }
});