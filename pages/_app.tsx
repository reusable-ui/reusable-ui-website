import { useRef } from 'react';
// import '../styles/Site.global.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import loadable from '@loadable/component'
import { Button, ButtonIcon, Container, UseElementCssSize, UseWindowCssSize } from '@reusable-ui/components'
import { Section } from '../components/Section';
import { siteVars } from '../website.config';

const SiteNavbarLazy = loadable(() => import(/* webpackChunkName: 'SiteNavbar' */'../components/SiteNavbar'));



const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    
    return (
        <>
            <header ref={headerRef}>
                <SiteNavbarLazy fallback={
                    <Container
                        className='siteNavbar lazy'
                        theme='primary'
                        mild={false}
                    />
                } />
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
                        It&apos;s created and maintained by single person: <Button buttonStyle='link' theme='primary' href='https://www.instagram.com/heyyy.marco/' target='_blank'>Hey Marco</Button>.
                    </p>
                    <p>
                        If you feel our lib is useful for your projects,<br />
                        please make a donation to avoid our project from extinction.
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
        
        <main>
            <Outlet {...pageProps} />
        </main>
        
        <Footer />
    </>);
}

export default MyApp
