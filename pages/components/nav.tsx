import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { list, nav, components, modal, popup, dropdown, activatable, navItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Nav as OriNav, NavProps, TextInput, Label, Button, Radio, NavItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import Link from 'next/link'



interface NavSampleItemsProps extends Pick<NavProps, 'listStyle'> {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = true, listStyle}: NavSampleItemsProps = {}) => {
    return ((listStyle === 'bullet') ? [
        <NavItem key={0}>
            <Link href='/' />
        </NavItem>,
        <NavItem key={1}>
            <Link href='/core' />
        </NavItem>,
        <NavItem key={2}>
            <Link href='/components' />
        </NavItem>,
        <NavItem key={3} href='https://github.com/reusable-ui' />,
    ] : [
        <NavItem key={0}>
            <Link href='/'>Home</Link>
        </NavItem>,
        <NavItem key={1}>
            <Link href='/core'>Core</Link>
        </NavItem>,
        <NavItem key={2}>
            <Link href='/components'>Components</Link>
        </NavItem>,
        <NavItem key={3} href='https://github.com/reusable-ui' {...(mixVaraints ? { theme: 'danger' } : undefined)}>
            GitHub
        </NavItem>,
    ]);
}

interface SampleNavProps extends NavProps, NavSampleItemsProps {
}
const Nav = ({mixVaraints, ...props}: SampleNavProps) => <OriNav {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? listSampleItems({mixVaraints, ...props})}
</OriNav>

interface NavSampleItemsArrayProps {
    indents     ?: number
    mixVaraints ?: boolean
}
const navSampleItemsArray = ({indents = 1, mixVaraints = true} : NavSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<NavItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/'>
${tabs}        Home
${tabs}    </Link>
${tabs}</NavItem>`,
(prop?: string) => `${tabs}<NavItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/core'>
${tabs}        Core
${tabs}    </Link>
${tabs}</NavItem>`,
(prop?: string) => `${tabs}<NavItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/components'>
${tabs}        Components
${tabs}    </Link>
${tabs}</NavItem>`,
(prop?: string) => `${tabs}<NavItem href='https://github.com/reusable-ui'${mixVaraints ? " theme='danger'" : ""}${prop ? ` ${prop}` : ''}>
${tabs}    GitHub
${tabs}</NavItem>`
    ]);
}

interface NavSampleItemsStringProps extends NavSampleItemsArrayProps {
}
const navSampleItemsString = (options : NavSampleItemsStringProps = {}) => {
    return navSampleItemsArray(options).map((navItem) => navItem()).join('\n');
}
const navSampleEmptyItemsString = (indents: number = 1) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return (
`${tabs}<NavItem>
${tabs}    <Link href='/' />
${tabs}</NavItem>
${tabs}<NavItem>
${tabs}    <Link href='/core' />
${tabs}</NavItem>
${tabs}<NavItem>
${tabs}    <Link href='/components' />
${tabs}</NavItem>
${tabs}<NavItem href='https://github.com/reusable-ui' theme='danger' />`
    );
}



const NavPage: NextPage = () => {
    return (<ComponentContextProvider component={nav} baseComponents={list}>
        <Head>
            <title>{`${nav.componentTag} Component`}</title>
            <meta name="description" content={`${nav.componentTag} is a list of client-side navigation with automatically toggling-on the ${navItem.componentTag}'s ${activatable.shortName} at correspoding url.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of client-side navigation with automatically toggling-on the {navItem.packageDisplay}&apos;s {activatable.packageShortLink} at correspoding <em>url</em>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Nav />
                    <Nav mild={false} />
                    <Nav outlined={true} />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <ListStyleProperty>
                    <Preview display='right' stretch={false}>
                        {listStyleOptions.map((listStyle, index) =>
                            <Nav
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listStyleOptions.map((listStyle) =>
`
<Nav
    listStyle='${listStyle}'
    theme='primary'
>
${(listStyle === 'bullet') ? navSampleEmptyItemsString() : navSampleItemsString()}
</Nav>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Nav
                                key={index}
                                orientation={orientationName}
                                style={(orientationName === 'block') ? {justifySelf: 'center'} : undefined}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Nav
    orientation='${orientationName}'
    theme='primary'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Nav
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <Nav>
                            <TextInput size='sm' placeholder='Username' />
                            <Label>
                                @
                            </Label>
                            <TextInput size='md' placeholder='Server' />
                            <Button size='lg'>
                                Submit
                            </Button>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Nav
    size='${sizeName}'
    theme='primary'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    theme='primary'
>
    <TextInput size='sm' placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput size='md' placeholder='Server' />
    <Button size='lg'>
        Submit
    </Button>
</Nav>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Nav
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <Nav>
                            <TextInput theme='success' placeholder='Username' />
                            <Label theme='primary'>
                                @
                            </Label>
                            <TextInput theme='danger' placeholder='Server' />
                            <Button theme='warning'>
                                Submit
                            </Button>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Nav
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    theme='primary'
>
    <TextInput theme='success' placeholder='Username' />
    <Label theme='primary'>
        @
    </Label>
    <TextInput theme='danger' placeholder='Server' />
    <Button theme='warning'>
        Submit
    </Button>
</Nav>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Nav
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
                        )}
                        <Nav>
                            <TextInput gradient={true} placeholder='Username' />
                            <Label gradient={false}>
                                @
                            </Label>
                            <TextInput gradient={true} placeholder='Server' />
                            <Button gradient={false}>
                                Submit
                            </Button>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Nav
    gradient={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    theme='primary'
>
    <TextInput gradient={true} placeholder='Username' />
    <Label gradient={false}>
        @
    </Label>
    <TextInput gradient={true} placeholder='Server' />
    <Button gradient={false}>
        Submit
    </Button>
</Nav>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Nav
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
                        )}
                        <Nav outlined={true}>
                            <TextInput outlined={true} placeholder='Username' />
                            <Label outlined={false}>
                                @
                            </Label>
                            <TextInput outlined={true} placeholder='Server' />
                            <Button outlined={false}>
                                Submit
                            </Button>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Nav
    outlined={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    outlined={true}
    theme='primary'
>
    <TextInput outlined={true} placeholder='Username' />
    <Label outlined={false}>
        @
    </Label>
    <TextInput outlined={true} placeholder='Server' />
    <Button outlined={false}>
        Submit
    </Button>
</Nav>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Nav
                                key={index}
                                theme={themeName}
                                mild={true}
                            />
                        )}
                        <Nav mild={true}>
                            <TextInput mild={false} placeholder='Username' />
                            <Label mild={true}>
                                @
                            </Label>
                            <TextInput mild={false} placeholder='Server' />
                            <Button mild={true}>
                                Submit
                            </Button>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Nav
    mild={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    mild={true}
    theme='primary'
>
    <TextInput mild={false} placeholder='Username' />
    <Label mild={true}>
        @
    </Label>
    <TextInput mild={false} placeholder='Server' />
    <Button mild={true}>
        Submit
    </Button>
</Nav>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='No variable yet' enabled={false}>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {navs, navValues} from '@reusable-ui/nav';

navs.opacity = 0.5;
console.log('opacity variable name: ', navs.opacity);
console.log('opacity variable value: ', navValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default NavPage
