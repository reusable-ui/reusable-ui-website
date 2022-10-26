import React from 'react';

import { Navbar } from '@reusable-ui/components'
import SiteNavbarMenu from './SiteNavbarMenu';



const SiteNavbar = () => {
    return (
        <Navbar theme='primary' gradient={true} className='siteNavbar'>{(params) =>
            <SiteNavbarMenu {...params} />
        }</Navbar>
    );
}
export {
    SiteNavbar,
    SiteNavbar as default,
}
