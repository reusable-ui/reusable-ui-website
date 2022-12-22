import React from 'react';

import { Navbar, navbarValues } from '@reusable-ui/components'
import SiteNavbarMenu from './SiteNavbarMenu';



//#region reset scrollbar to the top on the first full page load
if (typeof(window) !== 'undefined') { // run on client_side only, do nothing on server_side
    const scrollElm = document.scrollingElement;
    if (scrollElm) {
        scrollElm.scrollTop = 0;
        
        
        
        document.addEventListener('scroll', () => {
            scrollElm.scrollTop = 0;
        }, { once: true, passive: true }); // run *once* to prevent unpleasant accessibility in case of the 'DOMContentLoaded' is *never* triggered
        
        
        
        window.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                scrollElm.scrollTop = 0;
            });
        }, { once: true });
    } // if
} // if
//#endregion reset scrollbar to the top on the first full page load



navbarValues.boxSizing = 'border-box';
navbarValues.blockSize = '3.25rem';



const SiteNavbar = () => {
    return (
        <Navbar theme='primary' gradient={true} className='siteNavbar' breakpoint='md'>{(params) =>
            <SiteNavbarMenu {...params} />
        }</Navbar>
    );
}
export {
    SiteNavbar,
    SiteNavbar as default,
}
