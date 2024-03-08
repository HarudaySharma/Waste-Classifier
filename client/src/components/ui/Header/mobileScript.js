import * as bodyScrollLockUpgrade from 'body-scroll-lock'

const btnOpen = document.querySelector('#nav-open');
const btnClose = document.querySelector('#nav-close');
const media = window.matchMedia('(width < 40em)');
const navMenu = document.querySelector('.nav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

export function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    navMenu.removeAttribute('inert');
    navMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
}

export function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

    setTimeout(() => {
        navMenu.style.transition = 'none';
    }, 500);
}


export function setupTopNav(e) {
    if (e.matches) {
        // is mobile
        console.log('is mobile');
        navMenu.setAttribute('inert', '');
        navMenu.style.transition = 'none';
    } else {
        // is tablet/desktop
        console.log('is desktop');
        closeMobileMenu();
        navMenu.removeAttribute('inert');
    }
}

setupTopNav(media);

media.addEventListener('change', function(e) {
    setupTopNav(e);
});
