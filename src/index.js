'use strict';
import generateMenu from "./menu";

const content = document.getElementById('content');

function generateHeader() {
    const headerElement = document.createElement('div');

    const header = document.createElement('header');
    header.id = 'header';

    const homeLogoContainer = document.createElement('div');

    const logo = document.createElement('img');
    logo.src = "../src/images/ouroboros2.png";
    logo.alt = "ouroboros";
    logo.classList.add("logo");

    const homeButton = document.createElement('div');
    homeButton.classList.add("home-button");
    homeButton.innerText = "Home";

    homeLogoContainer.appendChild(logo);
    homeLogoContainer.appendChild(homeButton);
    homeLogoContainer.classList.add('homeLogoContainer');

    const menuButton = document.createElement('div');
    menuButton.classList.add("menu-button");
    menuButton.innerText = "Menu";

    const aboutButton = document.createElement('div');
    aboutButton.classList.add('about-button');
    aboutButton.innerText = "About";

    // header.appendChild(logo);
    // header.appendChild(homeButton);
    header.appendChild(homeLogoContainer);
    header.appendChild(menuButton);
    header.appendChild(aboutButton);
    headerElement.appendChild(header);

    // Adding the event listeners to tabs.
    // Event listener for home tab.
    homeLogoContainer.addEventListener('click', () => {
        content.innerHTML = "";
        content.appendChild(generateLandingPage());
    });

    menuButton.addEventListener('click', ()=> {
        content.innerHTML = "";
        content.appendChild(generateMenu());
    });

    return headerElement;
}

function generateLandingPage() {
    const landingElement = document.createElement('div');
    landingElement.id = "landing-info";
    
    const h1landing = document.createElement('h1');
    h1landing.innerText = "Heroes Dine Free";
    const planding = document.createElement('p');
    planding.innerText = "Welcome to Valhalla, home of heroes. We offer the finest selection of fresh game and mead!";

    landingElement.appendChild(h1landing);
    landingElement.appendChild(planding);
    return landingElement;
}

document.body.appendChild(generateHeader());
content.appendChild(generateLandingPage());

// Event Listeners for tab switching.
