import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, content, hamburgerMenuButton, nav, navbar, toggleButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Navbar as OriNavbar, NavbarProps, AccordionItem, Accordion, List, ListItem, CardBody, Icon, Collapse, Nav, NavItem, NavbarParams, HamburgerMenuButton } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { BasicComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style } from '@cssfn/core'
import { useFlipFlop } from '../../hooks/flipFlop'
import Link from 'next/link'



const useNavbarDemoStyle = dynamicStyleSheet(() => style({
    minInlineSize: '30rem',
}), { id: 'c0ufoebbgw' });



const navbarSampleItems = ({
    basicVariantProps,
    navbarExpanded,
    menuExpanded,
    handleClickAsToggleMenu,
} : NavbarParams) => {
    return [
        <Link key={0} href='/'>
            <Icon icon='reusable-ui' size='lg' />
        </Link>,
        (!navbarExpanded && <HamburgerMenuButton key={1} {...basicVariantProps} className='toggler' active={menuExpanded} onClick={handleClickAsToggleMenu} />),
        
        <Collapse key={2} className='list' mainClass={navbarExpanded ? '' : undefined} expanded={menuExpanded}>
            <Nav tag='ul' role='' {...basicVariantProps} orientation={navbarExpanded ? 'inline' : 'block'} listStyle='flat' gradient={navbarExpanded ? 'inherit' : false}>
                <NavItem><Link href='/'>Home</Link></NavItem>
                <NavItem><Link href='/core'>Core</Link></NavItem>
                <NavItem><Link href='/components'>Components</Link></NavItem>
                <NavItem href='https://github.com/reusable-ui' target='_blank'>GitHub</NavItem>
            </Nav>
        </Collapse>,
    ];
}

interface SampleNavbarProps extends NavbarProps {
}
const Navbar = (props: SampleNavbarProps) => {
    const navbarDemoStyle = useNavbarDemoStyle();
    return (
        <OriNavbar {...props} theme={props.theme ?? 'primary'} className={navbarDemoStyle.main}>
            {(navbarParams) =>
                navbarSampleItems(navbarParams)
            }
        </OriNavbar>
    );
}

interface NavbarSampleItemsStringProps {
    indents ?: number
}
const navbarSampleItemsString = ({indents = 1} : NavbarSampleItemsStringProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    
    return (
`    {({
        basicVariantProps,
        navbarExpanded,
        menuExpanded,
        handleClickAsToggleMenu,
    }) => <>
        <Link href='/'>
            <Icon icon='reusable-ui' size='lg' />
        </Link>
        {!navbarExpanded && <HamburgerMenuButton {...basicVariantProps} className='toggler' active={menuExpanded} onClick={handleClickAsToggleMenu} />}
        
        <Collapse className='list' mainClass={navbarExpanded ? '' : undefined} expanded={menuExpanded}>
            <Nav tag='ul' role='' {...basicVariantProps} orientation={navbarExpanded ? 'inline' : 'block'} listStyle='flat' gradient={navbarExpanded ? 'inherit' : false}>
                <NavItem><Link href='/'>Home</Link></NavItem>
                <NavItem><Link href='/core'>Core</Link></NavItem>
                <NavItem><Link href='/components'>Components</Link></NavItem>
                <NavItem href='https://github.com/reusable-ui' target='_blank'>GitHub</NavItem>
            </Nav>
        </Collapse>
    </>}`
    );
}



const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<Navbar expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <Navbar expanded={isFlip} />
        </CardBody>
    );
}



const NavbarPage: NextPage = () => {
    return (<ComponentContextProvider component={navbar} baseComponents={basic}>
        <Head>
            <title>{`${navbar.componentTag} Component`}</title>
            <meta name="description" content={`${navbar.componentTag} is a responsive navigation header. Supports for branding, navigation and more.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a responsive navigation header. Supports for branding, navigation and more.
                </p>
                <p>
                    Actually the <TheComponentLink /> is a <strong>container component</strong> with <strong>responsive detection</strong>.
                    You need to supply the nested components such as <strong>logo</strong>, {hamburgerMenuButton.packageLink}, {nav.packageLink}, or any custom components you want.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false}>
                    <Navbar expanded={false} />
                    <Navbar expanded={true} />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                <p></p>
                <TypeScriptCode>{
`
<Navbar
    expanded={true}
    theme='primary'
>
${navbarSampleItemsString()}
</Navbar>
`
                }</TypeScriptCode>
            </ExpandedProperty>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='down' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Navbar
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Navbar
    size='${sizeName}'
    theme='primary'
>
${navbarSampleItemsString()}
</Navbar>
`
                        ).join('')
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Navbar
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Navbar
    theme='${themeName}'
>
${navbarSampleItemsString()}
</Navbar>
`
                        ).join('')
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='down' stretch={false}>
                        <Navbar
                            gradient={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navbar
    gradient={true}
    theme='primary'
>
${navbarSampleItemsString()}
</Navbar>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='down' stretch={false}>
                        <Navbar
                            outlined={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navbar
    outlined={true}
    theme='primary'
>
${navbarSampleItemsString()}
</Navbar>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='down' stretch={false}>
                        <Navbar
                            mild={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navbar
    mild={true}
    theme='primary'
>
${navbarSampleItemsString()}
</Navbar>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <ComponentProperties>
                <BasicComponentProperty basic={content} />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Layouts'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>togglerDisplay</code>
                                <p>The <strong>display mode</strong> to apply to the <TheComponentLink />&apos;s {toggleButton.packageLink}.</p>
                            </ListItem>
                            <ListItem>
                                <code>togglerTextAlign</code>
                                <p>The <strong>text alignment</strong> to apply to the <TheComponentLink />&apos;s {toggleButton.packageLink}.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>borderStyle</code>
                                <p>The shape of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderWidth</code>
                                <p>The thickness of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderColor</code>
                                <p>The un-themed color of border (stroke).</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The default rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusSm</code>
                                <p>The rounded corner radius when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusLg</code>
                                <p>The rounded corner radius when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {navbars, navbarValues} from '@reusable-ui/navbar';

navbars.opacity = 0.5;
console.log('opacity variable name: ', navbars.opacity);
console.log('opacity variable value: ', navbarValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default NavbarPage
