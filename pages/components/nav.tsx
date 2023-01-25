import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/sections/sections'
import { list, nav, activatable, navItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Nav as OriNav, NavProps, NavItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import Link from 'next/link'
import { EnabledProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, ListComponentProperty, ListItemComponentProperty } from '../../properties/sections/componentProperties'
import { CaseSensitiveProperty, EndProperty, NavigationProperties } from '../../properties/sections/navigationProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfRoleButton } from '../../properties/sections/actionProperties'



interface NavSampleItemsProps extends Pick<NavProps, 'listStyle'> {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = false, listStyle}: NavSampleItemsProps = {}) => {
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
}
const navSampleItemsArray = ({indents = 1} : NavSampleItemsArrayProps = {}) => {
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
(prop?: string) => `${tabs}<NavItem href='https://github.com/reusable-ui'${prop ? ` ${prop}` : ''}>
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
${tabs}<NavItem href='https://github.com/reusable-ui' />`
    );
}



const NavPage: NextPage = () => {
    return (<ComponentContextProvider component={nav} nestedComponent={navItem} baseComponents={list}>
        <Head>
            <title>{`${nav.componentTag} Component`}</title>
            <meta name="description" content={`${nav.componentTag} is a list of (client-side/normal) navigation with automatically toggling-on the ${navItem.componentTag}'s ${activatable.shortName} at corresponding URL.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of (client-side/normal) navigation with automatically toggling-on the {navItem.packageDisplay}&apos;s {activatable.packageShortLink} at <em>corresponding URL</em>.
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
            <ComponentContextProvider component={navItem}>
                <NavigationProperties>
                    <CaseSensitiveProperty />
                    <EndProperty />
                </NavigationProperties>
                <ClientSideLinkPropertyOfButton />
                <HrefPropertyOfButton />
                <OnClickPropertyOfRoleButton />
            </ComponentContextProvider>
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
${navSampleItemsString()}
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
                            <NavItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem size='sm'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem size='md'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem size='lg' href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
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
${navSampleItemsString()}
</Nav>
`
                        ).join('')
                        +
`
<Nav
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem size='sm'>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem size='md'>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem size='lg' href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
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
                            <NavItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem theme='success'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem theme='danger'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem theme='warning' href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Nav
    theme='${themeName}'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                        ).join('')
                        +
`
<Nav
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem theme='success'>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem theme='danger'>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem theme='warning' href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Nav
                            gradient={true}
                        />
                        <Nav>
                            <NavItem gradient={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem gradient={true}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem gradient={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem gradient={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Nav
    gradient={true}
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>

<Nav
    theme='primary'
>
    <NavItem gradient={false}>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem gradient={true}>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem gradient={true}>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem gradient={true} href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Nav
                            outlined={true}
                        />
                        <Nav outlined={true}>
                            <NavItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem outlined={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem outlined={false}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem outlined={false} href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Nav
    outlined={true}
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>

<Nav
    outlined={true}
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem outlined={false}>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem outlined={false}>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem outlined={false} href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Nav
                            mild={false}
                        />
                        <Nav
                            mild={false}
                        >
                            <NavItem mild={true}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem mild={true}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem mild={false}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem mild={false} href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Nav
    mild={false}
    theme='primary'
>
    <NavItem>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>

<Nav
    mild={false}
    theme='primary'
>
    <NavItem mild={true}>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem mild={true}>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem mild={false}>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem mild={false} href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Nav
                            enabled={false}
                        />
                        <Nav
                            mixVaraints={false}
                        >
                            <NavItem enabled={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem enabled={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </NavItem>
                            <NavItem enabled={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </NavItem>
                            <NavItem enabled={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </NavItem>
                        </Nav>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Nav
    enabled={false}
    theme='primary'
>
${navSampleItemsString()}
</Nav>

<Nav
    theme='primary'
>
    <NavItem enabled={false}>
        <Link href='/'>
            Home
        </Link>
    </NavItem>
    <NavItem enabled={false}>
        <Link href='/core'>
            Core
        </Link>
    </NavItem>
    <NavItem enabled={true}>
        <Link href='/components'>
            Components
        </Link>
    </NavItem>
    <NavItem enabled={true} href='https://github.com/reusable-ui'>
        GitHub
    </NavItem>
</Nav>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <Nav
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <Nav
        inheritEnabled={true}
        theme='primary'
    >
${navSampleItemsString({indents: 2})}
    </Nav>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ListComponentProperty />
                <ComponentContextProvider component={navItem}>
                    <ListItemComponentProperty />
                </ComponentContextProvider>
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default NavPage
