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
import { Tips } from '../../components/Warning'
import { BreakpointProperty } from '../../properties/sections/behaviorProperties'



const useNavbarDemoStyle = dynamicStyleSheet(() => style({
    boxSizing     : 'border-box',
    minInlineSize : '26rem',
    paddingInline : '1.5rem',
}), { id: 'c0ufoebbgw', specificityWeight: 2 });



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
            <ExpandedProperty uncontrollableBehavior={<p><strong>Responsively</strong> expand/collapse the <TheComponentLink /> based on the available browser&apos;s width.</p>} description={<>
                <p>
                    Programatically <strong>controls</strong> the <TheComponentLink /> to show the expanded/collapsed mode.
                </p>
                <Tips>
                    <p>
                        In <em>most cases</em>, you don&apos;t need to assign this property. The <TheComponentLink /> will <strong>responsively</strong> adapt the best mode based on the available browser&apos;s width.
                    </p>
                </Tips>
            </>}>
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
            <BreakpointProperty />
            <VariantProperties>
                <SizeProperty>
                    <Preview display='down' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <OriNavbar
                                key={index}
                                size={sizeName}
                                theme='primary'
                            >
                                {(navbarParams) =>
                                    navbarSampleItems(navbarParams)
                                }
                            </OriNavbar>
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
                                <code>display</code>
                                <p>The <strong>display mode</strong> of the <TheComponentLink />.</p>
                                <p>The default is <code>grid</code> but you can change to <code>flex</code> or whatever you want.</p>
                            </ListItem>
                            <ListItem>
                                <code>gridAutoFlow</code>
                                <p>The <strong>placement</strong> of each items (logo, toggler, etc).</p>
                                <p>The default is placed to the next <code>column</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gridAutoColumns</code>
                                <p>The <strong>width</strong> of each items (logo, toggler, etc) should take a space.</p>
                                <p>The default is <code>auto</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gridTemplateRows</code>
                                <p>The <strong>placeholder</strong> of rows.</p>
                                <p>The default is single row of <code>1fr</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>justifyContent</code>
                                <p>Specifies how the <strong>extra horizontal space</strong> should be distributed between the items (logo, toggler, etc).</p>
                                <p>The default is <code>space-between</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>alignContent</code>
                                <p>Specifies how the <strong>extra vertical space</strong> should be distributed between the items (logo, toggler, etc).</p>
                                <p>The default is <code>center</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>justifyItems</code>
                                <p>Specifies the default <strong>horizontal alignment</strong> for each items (logo, toggler, etc).</p>
                                <p>The default is <code>center</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>alignItems</code>
                                <p>Specifies the default <strong>vertical alignment</strong> for each items (logo, toggler, etc).</p>
                                <p>The default is <code>center</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='positions'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>zIndex</code>
                                <p>Specifies the <strong>overlapping importance weight</strong> when the <TheComponentLink /> overlaps to another elements.</p>
                                <p>The default is <code>1020</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>position</code>
                                <p>Specifies how the <TheComponentLink /> <strong>flows</strong> to the document.</p>
                                <p>The default is <code>sticky</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>insetBlockStart</code>
                                <p>Specifies where the <TheComponentLink /> should be <strong>sticky</strong> to the document.</p>
                                <p>The default is <code>0px</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>boxSizing</code>
                                <p>Specifies the <strong>measusing method</strong> of the <TheComponentLink />&apos;s size.</p>
                                <p>The default is <code>content-box</code> (excluding the padding &amp; borderWidth).</p>
                            </ListItem>
                            <ListItem>
                                <code>blockSize</code>
                                <p>The <strong>height</strong> of the whole <TheComponentLink />.</p>
                                <p>The default is <code>auto</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>borderWidth</code>
                                <p>The thickness of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The default rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>boxShadow</code>
                                <p>The <code>boxShadow</code> to apply, so that the <TheComponentLink /> appears hovering on the top of content.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> of the <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> of the <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInline</code>
                                <p>The <strong>horizontal spacing</strong> between the items (logo, toggler, etc).</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The <strong>vertical spacing</strong> between the items (logo, toggler, etc).</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    
                    <AccordionItem label='Lists'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>listGridArea</code>
                                <p>Defines the <code>gridArea</code> of the <TheComponentLink />&apos;s list (the container of the {nav.packageLink} - responsible for showing/hidding the {nav.packageLink}) when on <em>mobile mode</em>.</p>
                                <p>The default is <code>2/1/2/3</code>, which means spanning from the logo to the toggler and placed at the second (implicit) row.</p>
                            </ListItem>
                            <ListItem>
                                <code>listGridAreaExpand</code>
                                <p>Defines the <code>gridArea</code> of the <TheComponentLink />&apos;s list (the container of the {nav.packageLink}) when on <em>desktop mode</em>.</p>
                                <p>The default is <code>unset</code>, which means placed as defined inside the <TheComponentLink />.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>listDisplay</code>
                                <p>The <strong>display mode</strong> of the <TheComponentLink />&apos;s list.</p>
                                <p>The default is <code>flex</code> but you can change to <code>grid</code> or whatever you want.</p>
                            </ListItem>
                            <ListItem>
                                <code>listFlexDirection</code>
                                <p>The <strong>flex direction</strong> of the <TheComponentLink />&apos;s list when on <em>mobile mode</em>.</p>
                                <p>The default is <code>column</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listFlexDirectionExpand</code>
                                <p>The <strong>flex direction</strong> of the <TheComponentLink />&apos;s list when on <em>desktop mode</em>.</p>
                                <p>The default is <code>row</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listJustifySelf</code>
                                <p>Specifies the <strong>horizontal alignment</strong> of the <TheComponentLink />&apos;s list.</p>
                                <p>The default is <code>stretch</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listAlignSelf</code>
                                <p>Specifies the <strong>vertical alignment</strong> of the <TheComponentLink />&apos;s list.</p>
                                <p>The default is <code>stretch</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>listMarginInline</code>
                                <p>The <strong>outer spacing</strong> on the <strong>left &amp; right</strong> of the <TheComponentLink />&apos;s list when on <em>mobile mode</em>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listMarginInlineExpand</code>
                                <p>The <strong>outer spacing</strong> on the <strong>left &amp; right</strong> of the <TheComponentLink />&apos;s list when on <em>desktop mode</em>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listMarginBlock</code>
                                <p>The <strong>outer spacing</strong> on the <strong>top &amp; bottom</strong> of the <TheComponentLink />&apos;s list when on <em>mobile mode</em>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listMarginBlockExpand</code>
                                <p>The <strong>outer spacing</strong> on the <strong>top &amp; bottom</strong> of the <TheComponentLink />&apos;s list when on <em>desktop mode</em>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    
                    <AccordionItem label='(floating) Lists'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>listPosition</code>
                                <p>Specifies how the <TheComponentLink />&apos;s list <strong>flows</strong> to the document when on <em>mobile mode</em>.</p>
                                <p>The default is <code>absolute</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listPositionExpand</code>
                                <p>Specifies how the <TheComponentLink />&apos;s list <strong>flows</strong> to the document when on <em>desktop mode</em>.</p>
                                <p>The default is <code>unset</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listInsetInline</code>
                                <p>Specifies where the <TheComponentLink />&apos;s list should be <strong>positioned horizontally</strong> to the document when on <em>mobile mode</em>.</p>
                                <p>The default is <code>0px</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listInsetInlineExpand</code>
                                <p>Specifies where the <TheComponentLink />&apos;s list should be <strong>positioned horizontally</strong> to the document when on <em>desktop mode</em>.</p>
                                <p>The default is <code>unset</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listInsetBlockStart</code>
                                <p>Specifies where the <TheComponentLink />&apos;s list should be <strong>top positioned</strong> to the document when on <em>mobile mode</em>.</p>
                                <p>The default is <code>0px</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>listInsetBlockStartExpand</code>
                                <p>Specifies where the <TheComponentLink />&apos;s list should be <strong>top positioned</strong> to the document when on <em>desktop mode</em>.</p>
                                <p>The default is <code>unset</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    
                    <AccordionItem label='Menus'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>menuDisplay</code>
                                <p>The <strong>display mode</strong> of the <TheComponentLink />&apos;s menu (the clickable navigation).</p>
                                <p>The default is <code>flex</code> but you can change to <code>grid</code> or whatever you want.</p>
                            </ListItem>
                            <ListItem>
                                <code>menuFlexDirection</code>
                                <p>The <strong>flex direction</strong> of the <TheComponentLink />&apos;s menu.</p>
                                <p>The default is <code>row</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>menuJustifyContent</code>
                                <p>Specifies how the <strong>extra horizontal space</strong> should be distributed between the children of the <TheComponentLink />&apos;s menu.</p>
                                <p>The default is <code>center</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>menuAlignItems</code>
                                <p>Specifies the default <strong>vertical alignment</strong> for each child of the <TheComponentLink />&apos;s menu.</p>
                                <p>The default is <code>center</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>menuFlexWrap</code>
                                <p>Specifies whether the children of the <TheComponentLink />&apos;s menu can be forced onto one line or can wrap onto multiple lines.</p>
                                <p>The default is <code>nowrap</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>menuWhiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside the child of the <TheComponentLink />&apos;s menu is handled.</p>
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
