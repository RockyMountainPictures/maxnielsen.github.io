'use-strict'

var copyright_element = document.querySelector('#copyright');

// https://stackoverflow.com/a/6002276
var year = new Date().getFullYear();

copyright_element.textContent = "© Max Nielsen " + year;
