import Link from 'next/link'
import { ActionControl, Collapse, HamburgerMenuButton, Icon, Nav, Navbar, NavItem } from '@reusable-ui/components'


const SiteLogo = () => {
    return (
        <ActionControl nude={true} mild={false}>
            <Link href='/'>
                <Icon icon='reusableui' size='lg' />
            </Link>
        </ActionControl>
    );
}
export default () => {
    return (
        <Navbar theme='primary' className='siteNavbar'>{({
            basicVariantProps,
            navbarExpanded,
            menuExpanded,
            handleClickAsToggleMenu,
        }) => <>
            <SiteLogo />
            {!navbarExpanded && <HamburgerMenuButton {...basicVariantProps} className='toggler' active={menuExpanded} onClick={handleClickAsToggleMenu} />}
            
            <Collapse className='list' mainClass={navbarExpanded ? '' : undefined} expanded={menuExpanded}>
                <Nav tag='ul' role='' {...basicVariantProps} orientation={navbarExpanded ? 'inline' : 'block'} listStyle='flat'>
                    <NavItem><Link href='/'>Home</Link></NavItem>
                    <NavItem><Link href='/docs'>Docs</Link></NavItem>
                    <NavItem><Link href='/download'>Download</Link></NavItem>
                    <NavItem><Link href='/about'>About</Link></NavItem>
                    <NavItem href='https://github.com/nodestrap' target='_blank'>GitHub</NavItem>
                    <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>NPM</NavItem>
                </Nav>
            </Collapse>
        </>}</Navbar>
    );
}
