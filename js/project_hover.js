'use-strict'

/*

    IDs:
    project-title
    project-type
    project-year
    project-tags (parent of <p>)
    project-focus (parent of <p>)
    project-summary (parent of <p>)

    IDs of buttons:
    serendipity
    bc
    cats

*/

// Project details
var title_element = document.querySelector("#project-title");
var type_element = document.querySelector("#project-type");
var year_element = document.querySelector("#project-year");
var tags_element = document.querySelector("#project-tags");
var focus_element = document.querySelector("#project-focus");
var summary_element = document.querySelector("#project-summary");

// Buttons
var s_btn = document.querySelector("#serendipity");
var bc_btn = document.querySelector("#bc");
var cats_btn = document.querySelector("#cats");

// temp variables

// Source: ChatGPT
// Question: i have a <div> that i want to add <p> elements to in js, how do i do that
var tag1 = document.createElement('p');
var tag2 = document.createElement('p');
var tag3 = document.createElement('p');

var focus1 = document.createElement('p');
var focus2 = document.createElement('p');

var summary = document.createElement('p');

var focus_title = document.createElement('h3');
focus_title.textContent = "Project Focus";

var summary_title = document.createElement('h3');
summary_title.textContent = "Project Summary";

var body_element = document.querySelector('body');

body_element.addEventListener('click', () => {
    removeContent();
    removeBackgrounds();
});

// Serendipity changes
s_btn.addEventListener('mouseenter', () => {
    addSerendipityContent();
    addBackgrounds();
});

s_btn.addEventListener('mouseleave', () => {
    // removeContent();
    // removeBackgrounds();
});

s_btn.addEventListener('focus', () => {
    addSerendipityContent();
    addBackgrounds();
});

s_btn.addEventListener('blur', () => {
    // removeContent();
    // removeBackgrounds();
});


// BC changes
bc_btn.addEventListener('mouseenter', () => {
    addBcContent();
    addBackgrounds();
});

bc_btn.addEventListener('mouseleave', () => {
    // removeContent();
    // removeBackgrounds();
});

bc_btn.addEventListener('focus', () => {
    addBcContent();
    addBackgrounds();
});

bc_btn.addEventListener('blur', () => {
    // removeContent();
    // removeBackgrounds();
});


// Cats changes
cats_btn.addEventListener('mouseenter', () => {
    addCatsContent();
    addBackgrounds();
});

cats_btn.addEventListener('mouseleave', () => {
    // removeContent();
    // removeBackgrounds();
});

cats_btn.addEventListener('focus', () => {
    addCatsContent();
    addBackgrounds();
});

cats_btn.addEventListener('blur', () => {
    // removeContent();
    // removeBackgrounds();
});

function addBackgrounds() {
    summary_element.classList.add("dark-background");
    title_element.parentElement.classList.add("light-background");
}

function removeBackgrounds() {
    summary_element.classList.remove("dark-background");
    title_element.parentElement.classList.remove("light-background");
}

function removeContent() {
    title_element.innerHTML = "";
    type_element.innerHTML = "";
    year_element.innerHTML = "";
    tags_element.innerHTML = "";
    focus_element.innerHTML = "";
    summary_element.innerHTML = "";
}

function addSerendipityContent() {
    title_element.innerHTML = "Serendipity";
    type_element.innerHTML = "Group Project";
    year_element.innerHTML = "2024";
    tags_element.innerHTML = "";
    tag1.textContent = "Arduino";
    tag2.textContent = "html/css/js";
    tag3.textContent = "OOCSI";
    tags_element.appendChild(tag1);
    tags_element.appendChild(tag2);
    tags_element.appendChild(tag3);

    focus1.textContent = "Music selection";
    focus2.textContent = "Web interface";
    focus_element.appendChild(focus_title);
    focus_element.appendChild(focus1);
    focus_element.appendChild(focus2);

    summary.textContent = "A shared listening experience for large student design spaces of the near future.";
    summary_element.appendChild(summary_title);
    summary_element.appendChild(summary);
}

function addBcContent() {
    title_element.innerHTML = "BC Healthcare Hub";
    type_element.innerHTML = "Group Project";
    year_element.innerHTML = "2024";
    tags_element.innerHTML = "";
    tag1.textContent = "protopie";
    tag2.textContent = "figma";
    tag3.textContent = "user studies";
    tags_element.appendChild(tag1);
    tags_element.appendChild(tag2);
    tags_element.appendChild(tag3);

    focus1.textContent = "Form structure";
    focus2.textContent = "System status";
    focus_element.appendChild(focus_title);
    focus_element.appendChild(focus1);
    focus_element.appendChild(focus2);

    summary.textContent = "An interactive system to help international students apply for provincial health insurance.";
    summary_element.appendChild(summary_title);
    summary_element.appendChild(summary);
}

function addCatsContent() {
    title_element.innerHTML = "Cats and the Home Office";
    type_element.innerHTML = "Group Project";
    year_element.innerHTML = "2024";
    tags_element.innerHTML = "";
    tag1.textContent = "research through design";
    tag2.textContent = "needfinding";
    tag3.textContent = "physical prototyping";
    tags_element.appendChild(tag1);
    tags_element.appendChild(tag2);
    tags_element.appendChild(tag3);

    focus1.textContent = "More-than-human design";
    focus2.textContent = "Data collection";
    focus_element.appendChild(focus_title);
    focus_element.appendChild(focus1);
    focus_element.appendChild(focus2);

    summary.textContent = "Exploring how tech can facilitate intentional interactions between cats and their owners working from home.";
    summary_element.appendChild(summary_title);
    summary_element.appendChild(summary);
}
