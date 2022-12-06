/**
 * ACTIVITIES AND PACKAGES VERSION
 * Special Drop down for nice effect and good vibes
 */

//target the 3 span bars
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

navLogo = document.querySelector('#navbar__logo');

// display Mobile Menu
const mobileMenu = () => { //arrow function
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click',mobileMenu);

/**
 * Show active menu when scrtolling
 */
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const activityMenu = document.querySelector('#activity-page');
    const packagesMenu = document.querySelector('#packages-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // add'highlight' class to my menu items
    if(window.innerWidth> 960 && scrollPos < 1500){//scroll position ~600px still gotta figure it out
        activityMenu.classList.add('highlight');
        packagesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth> 960 && scrollPos < 9000) {
        packagesMenu.classList.add('highlight');
        activityMenu.classList.remove('highlight');
        return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 1000)|| element){ //or element is true
        element.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// close the mobile menu after you click on something
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active'); //this will ~toggle~ active

    if(window.innerWidth<=960 && menuBars){ //menubars=>true
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu); //make sure the logo works