import * as bodyScrollLockUpgrade from 'body-scroll-lock'
import React from 'react';

const body = document.querySelector('body');

type MobileMenuFuncProps = {
    openBtnRef: React.MutableRefObject<HTMLButtonElement | undefined>,
    closeBtnRef: React.MutableRefObject<HTMLButtonElement | undefined>,
    navMenuRef: React.MutableRefObject<HTMLDivElement | undefined>,
}

export function openMobileMenu({ openBtnRef, closeBtnRef, navMenuRef }: MobileMenuFuncProps) {
    if (!openBtnRef.current || !closeBtnRef.current || !navMenuRef.current)
        return;
    openBtnRef.current.setAttribute('aria-expanded', 'true');
    navMenuRef.current.removeAttribute('inert');
    navMenuRef.current.removeAttribute('style');
    document.getElementById('main_container')?.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body!);
    closeBtnRef.current.focus();
}

export function closeMobileMenu({ openBtnRef, closeBtnRef, navMenuRef }: MobileMenuFuncProps) {
    if (!openBtnRef.current || !closeBtnRef.current || !navMenuRef.current)
        return;
    openBtnRef.current.setAttribute('aria-expanded', 'false');
    navMenuRef.current.setAttribute('inert', '');
    document.getElementById('main_container')?.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body!);
    openBtnRef.current.focus();

    setTimeout(() => {
        if (navMenuRef.current)
            navMenuRef.current.style.transition = 'none';
    }, 500);
}

interface SetUpTopNavFuncProps extends MobileMenuFuncProps {
    media: MediaQueryList | MediaQueryListEvent;
}

export function setupTopNav({ navMenuRef, media, openBtnRef, closeBtnRef }: SetUpTopNavFuncProps) {
    if (!navMenuRef.current)
        return;
    console.log(media);
    if (media.matches) {
        // is mobile
        console.log('is mobile');
        navMenuRef.current.setAttribute('inert', '');
        navMenuRef.current.style.transition = 'none';
    } else {
        // is tablet/desktop
        console.log('is desktop');
        closeMobileMenu({ closeBtnRef, openBtnRef, navMenuRef });
        navMenuRef.current.removeAttribute('inert');
    }
}
