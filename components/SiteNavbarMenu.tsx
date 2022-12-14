import Link from 'next/link';
import { Collapse, HamburgerMenuButton, Icon, Nav, NavbarParams, NavItem } from '@reusable-ui/components';



const SiteLogo = () => {
    return (
        <Link href='/'>
            <Icon icon='reusable-ui' size='lg' />
        </Link>
    );
}

const SiteNavbarMenu = ({
        basicVariantProps,
        navbarExpanded,
        listExpanded,
        handleClickToToggleList,
    } : NavbarParams) => {
    return (
        <>
            <SiteLogo />
            {!navbarExpanded && <HamburgerMenuButton {...basicVariantProps} className='toggler' active={listExpanded} onClick={handleClickToToggleList} />}
            
            <Collapse className='list' mainClass={navbarExpanded ? '' : undefined} expanded={listExpanded}>
                <Nav tag='ul' role='' {...basicVariantProps} orientation={navbarExpanded ? 'inline' : 'block'} listStyle='flat' gradient={navbarExpanded ? 'inherit' : false}>
                    <NavItem><Link href='/'>Home</Link></NavItem>
                    <NavItem><Link href='/core'>Core</Link></NavItem>
                    <NavItem><Link href='/components'>Components</Link></NavItem>
                    <NavItem><Link href='/install'>Installation</Link></NavItem>
                    <NavItem><Link href='/about'>About</Link></NavItem>
                    <NavItem href='https://github.com/reusable-ui' target='_blank'>GitHub</NavItem>
                    <NavItem href='https://www.npmjs.com/org/reusable-ui' target='_blank'>NPM</NavItem>
                </Nav>
            </Collapse>
        </>
    );
};
export {
    SiteNavbarMenu,
    SiteNavbarMenu as default,
}