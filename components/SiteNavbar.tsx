import React from 'react';

import { Navbar, navbarValues } from '@reusable-ui/components'
import SiteNavbarMenu from './SiteNavbarMenu';



if (typeof(document) !== 'undefined') {
    const scrollElm = document.scrollingElement;
    if (scrollElm) {
        requestAnimationFrame(() => {
            scrollElm.scrollTop = 0;
        });
    } // if
} // if



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
