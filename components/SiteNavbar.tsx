import React, { EventHandler } from 'react';

import { Navbar, navbarValues } from '@reusable-ui/components'
import SiteNavbarMenu from './SiteNavbarMenu';



//#region reset scrollbar to the top on the first full page load
if (typeof(window) !== 'undefined') { // run on client_side only, do nothing on server_side
    const scrollElm = document.scrollingElement;
    if (scrollElm) {
        if (scrollElm.scrollTop !== 0) scrollElm.scrollTop = 0;
        
        
        
        const handleScroll = () => {
            if (scrollElm.scrollTop !== 0) scrollElm.scrollTop = 0;
        };
        document.addEventListener('scroll', handleScroll);
        
        
        
        let remainingWaiting = 15;
        const handleTimeout = () => {
            // conditions:
            if (!remainingWaiting--) {
                // actions:
                document.removeEventListener('scroll', handleScroll);
            }
            else {
                // re-wait:
                setTimeout(handleTimeout, 0);
            } // if
        };
        handleTimeout();
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
