import '../styles/Site.global.scss'

import React, { Suspense, useRef } from 'react';

import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@cssfn/cssfn-dom'

import '../website.config';
import { siteVars } from '../website.config';

import { ButtonIcon, Container, UseElementCssSize, UseWindowCssSize } from '@reusable-ui/components'

import { Section } from '../components/Section';
import { ExtLink } from '../components/ExtLink';
import { GoogleAnalytics } from '../components/GoogleAnalytics';

const SiteNavbarLazy = React.lazy(() => import(/* webpackChunkName: 'SiteNavbar' */'../components/SiteNavbar'));



const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    
    return (
        <>
            <GoogleAnalytics />
            
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            
            <header ref={headerRef}>
                <Suspense fallback={
                    <Container
                        className='siteNavbar lazy'
                        theme='primary'
                        mild={false}
                        gradient={true}
                    />
                }>
                    <SiteNavbarLazy />
                </Suspense>
            </header>
            <UseElementCssSize elementRef={headerRef} varBlockSize={siteVars.headerHeight} />
        </>
    );
}

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    
    return (
        <>
            <footer ref={footerRef}>
                <Section titleTag='h5' title='Support Us' theme='primary'>
                    <p>
                        Reusable-UI is open source project (ISC-licensed).
                        It&apos;s created and maintained by single person: <ExtLink dofollow={true} href='https://www.instagram.com/heyyy.marco/'>Hey Marco</ExtLink>.
                    </p>
                    <p>
                        If you feel our lib is useful for your projects,<br />
                        please make a donation to avoid our project from extinction/unmaintained.
                    </p>
                    <ButtonIcon icon='volunteer_activism' theme='primary' href='https://ko-fi.com/heymarco' target='_blank'>Make a donation</ButtonIcon>
                </Section>
            </footer>
            <UseElementCssSize elementRef={footerRef} varBlockSize={siteVars.footerHeight} />
        </>
    );
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    const Outlet = Component;
    return (<>
        <UseWindowCssSize varBlockSize={siteVars.windowHeight} />
        
        <Head>
            <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        </Head>
        
        <Header />
        
        <Outlet {...pageProps} />
        
        <Footer />
    </>);
}

export default MyApp
