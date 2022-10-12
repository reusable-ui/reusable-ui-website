import React, { Suspense } from 'react';

import { Navbar } from '@reusable-ui/components'

const SiteNavbarMenuLazy = React.lazy(() => import(/* webpackChunkName: 'SiteNavbarMenu' */'./SiteNavbarMenu'));



const SiteNavbar = () => {
    return (
        <Navbar theme='primary' gradient={true} className='siteNavbar'>{(params) =>
            <Suspense>
                <SiteNavbarMenuLazy {...params} />
            </Suspense>
        }</Navbar>
    );
}
export {
    SiteNavbar,
    SiteNavbar as default,
}
