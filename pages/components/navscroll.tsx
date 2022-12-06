import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { nav, navscroll, activatable, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Navscroll as OriNavscroll, NavscrollProps, ListItem, Control, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import Link from 'next/link'
import { EnabledProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, ListComponentProperty, ListItemComponentProperty, NavComponentProperty, NavscrollComponentProperty } from '../../properties/sections/componentProperties'
import { CaseSensitiveProperty, EndProperty, NavigationProperties } from '../../properties/sections/navigationProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfRoleButton } from '../../properties/sections/actionProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style, children, rule, descendants } from '@cssfn/core'



interface NavscrollSampleItemsProps extends Pick<NavscrollProps, 'listStyle'> {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = false, listStyle}: NavscrollSampleItemsProps = {}) => {
    return ((listStyle === 'bullet') ? [
        <ListItem />,
        <ListItem />,
        <ListItem />,
        <ListItem />,
        <ListItem {...(mixVaraints ? { theme: 'danger' } : undefined)} />,
        <ListItem />,
    ] : [
        <ListItem>
            First section
        </ListItem>,
        <ListItem>
            Second section
        </ListItem>,
        <ListItem>
            Third section
        </ListItem>,
        <ListItem>
            Fourth section
        </ListItem>,
        <ListItem {...(mixVaraints ? { theme: 'danger' } : undefined)}>
            Fifth section
        </ListItem>,
        <ListItem>
            Last section
        </ListItem>,
    ]);
}

interface SampleNavscrollProps extends NavscrollProps, NavscrollSampleItemsProps {
}
const Navscroll = ({mixVaraints, ...props}: SampleNavscrollProps) => <OriNavscroll {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? listSampleItems({mixVaraints, ...props})}
</OriNavscroll>

interface NavscrollSampleItemsArrayProps {
    indents     ?: number
}
const navscrollSampleItemsArray = ({indents = 1} : NavscrollSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    First section
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    Second section
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    Third section
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    Fourth section
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    Fifth section
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    Last section
${tabs}</ListItem>`
    ]);
}

interface NavscrollSampleItemsStringProps extends NavscrollSampleItemsArrayProps {
}
const navscrollSampleItemsString = (options : NavscrollSampleItemsStringProps = {}) => {
    return navscrollSampleItemsArray(options).map((listItem) => listItem()).join('\n');
}
const navscrollSampleEmptyItemsString = (indents: number = 1) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return (
`${tabs}<ListItem />
${tabs}<ListItem />
${tabs}<ListItem />
${tabs}<ListItem />
${tabs}<ListItem />
${tabs}<ListItem />`
    );
}



const useDummyArticleStyleSheet = dynamicStyleSheet(() => style({
    border: 'solid 1px black',
    background : 'hsl(200, 90%, 75%)',
    
    
    ...children(['&', 'section:nth-of-type(4)'], {
        display       : 'flex',
        flexDirection : 'column',
        gap           : 0,
        overflowY     : 'auto',
        
        padding       : '10px',
        
        ...children('section', {
            flex      : [[0, 0, 'auto']],
            padding   : '10px',
        }),
    }),
    height            : '250px',
    ...children('section:nth-of-type(4)', {
        height        : '200px',
    }),
    
    
    ...children('section', {
        ...rule(':nth-of-type(3n+1)', {
            background : 'hsl(350, 90%, 75%)',
        }),
        ...rule(':nth-of-type(3n+2)', {
            background : 'hsl(120, 90%, 75%)',
        }),
        ...rule(':nth-of-type(3n+3)', {
            background : 'hsl(39, 90%, 75%)',
        }),
        ...rule(':nth-of-type(4)', {
            ...children('section', {
                ...rule(':nth-of-type(3n+1)', {
                    background : 'hsl(084, 90%, 75%)',
                }),
                ...rule(':nth-of-type(3n+2)', {
                    background : 'hsl(260, 90%, 75%)',
                }),
                ...rule(':nth-of-type(3n+3)', {
                    background : 'hsl(028, 90%, 75%)',
                }),
            }),
        }),
    }),
    
    
    ...descendants('section', {
        overflow: 'hidden',
    }),
    ...descendants(['h1', 'h2'], {
        textAlign: 'center',
    }),
    ...descendants('h1', {
        fontSize: '1.25rem',
    }),
    ...descendants('h2', {
        fontSize: '1rem',
    }),
    ...descendants('p', {
        fontSize: '0.5rem',
        textOverflow: 'ellipsis'
    }),
    
    
    ...children('section:nth-of-type(1)', {
        height : '80px',
    }),
    ...children('section:nth-of-type(2)', {
        height : '200px',
    }),
    ...children('section:nth-of-type(3)', {
        height : '400px',
    }),
    ...children('section:nth-of-type(4)', {
        ...children('section:nth-of-type(1)', {
            height: '200px',
        }),
        ...children('section:nth-of-type(2)', {
            height: '100px',
        }),
        ...children('section:nth-of-type(3)', {
            height: '150px',
        }),
        ...children('section:nth-of-type(4)', {
            height: '100px',
        }),
    }),
    ...children('section:nth-of-type(5)', {
        height : '300px',
    }),
    ...children('section:nth-of-type(6)', {
        height : '100px',
    }),
}));



const DemoNavscroll = () => {
    const dummyArticleStyleSheet = useDummyArticleStyleSheet();
    const scrollableArticleRef = useRef<HTMLElement>(null);
    
    return (
        <CardBody>
            <article
                ref={scrollableArticleRef}
                
                className={dummyArticleStyleSheet.main}
            >
                <section>
                    <h1>First section</h1>
                    <ParagraphLorem words={8} />
                </section>
                <section>
                    <h1>Second section</h1>
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                </section>
                <section>
                    <h1>Third section</h1>
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                </section>
                <section>
                    <h1>Fourth section</h1>
                    <ParagraphLorem words={8} />
                </section>
                <section>
                    <h1>Fifth section</h1>
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                    <ParagraphLorem words={8} />
                </section>
                <section>
                    <h1>Last section</h1>
                    <ParagraphLorem words={8} />
                </section>
            </article>
            
            <Navscroll scrollingOf={scrollableArticleRef} />
        </CardBody>
    );
}



const NavscrollPage: NextPage = () => {
    return (<ComponentContextProvider component={navscroll} nestedComponent={listItem} baseComponents={nav}>
        <Head>
            <title>{`${navscroll.componentTag} Component`}</title>
            <meta name="description" content={`${navscroll.componentTag} is a list of scrollable sections with automatically toggling-on the ${listItem.componentTag}'s ${activatable.shortName} at correspoding scrolling position.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of scrollable sections with automatically toggling-on the {listItem.packageDisplay}&apos;s {activatable.packageShortLink} at <em>correspoding scrolling position</em>.
                </p>
                <p>
                    <TheComponentLink /> supports of (virtually) <strong>unlimited depth</strong> of nested <TheComponentLink />s.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoNavscroll />} />
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <ListStyleProperty>
                    <Preview display='right' stretch={false}>
                        {listStyleOptions.map((listStyle, index) =>
                            <Navscroll
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listStyleOptions.map((listStyle) =>
`
<Navscroll
    listStyle='${listStyle}'
    theme='primary'
>
${(listStyle === 'bullet') ? navscrollSampleEmptyItemsString() : navscrollSampleItemsString()}
</Navscroll>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Navscroll
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
<Navscroll
    orientation='${orientationName}'
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Navscroll
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <Navscroll>
                            <ListItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem size='sm'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem size='md'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem size='lg' href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Navscroll
    size='${sizeName}'
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>
`
                        ).join('')
                        +
`
<Navscroll
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem size='sm'>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem size='md'>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem size='lg' href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Navscroll
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <Navscroll>
                            <ListItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem theme='success'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem theme='danger'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem theme='warning' href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Navscroll
    theme='${themeName}'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                        ).join('')
                        +
`
<Navscroll
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem theme='success'>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem theme='danger'>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem theme='warning' href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Navscroll
                            gradient={true}
                        />
                        <Navscroll>
                            <ListItem gradient={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem gradient={true}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem gradient={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem gradient={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    gradient={true}
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>

<Navscroll
    theme='primary'
>
    <ListItem gradient={false}>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem gradient={true}>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem gradient={true}>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem gradient={true} href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Navscroll
                            outlined={true}
                        />
                        <Navscroll outlined={true}>
                            <ListItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem outlined={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem outlined={false}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem outlined={false} href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    outlined={true}
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>

<Navscroll
    outlined={true}
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem outlined={false}>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem outlined={false}>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem outlined={false} href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Navscroll
                            mild={true}
                        />
                        <Navscroll mild={false}>
                            <ListItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem mild={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem mild={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    mild={true}
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>

<Navscroll
    mild={true}
    theme='primary'
>
    <ListItem>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem mild={true}>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem mild={true} href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Navscroll
                            enabled={false}
                        />
                        <Navscroll
                            mixVaraints={false}
                        >
                            <ListItem enabled={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem enabled={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </ListItem>
                            <ListItem enabled={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </ListItem>
                            <ListItem enabled={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    enabled={false}
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>

<Navscroll
    theme='primary'
>
    <ListItem enabled={false}>
        <Link href='/'>
            Home
        </Link>
    </ListItem>
    <ListItem enabled={false}>
        <Link href='/core'>
            Core
        </Link>
    </ListItem>
    <ListItem enabled={true}>
        <Link href='/components'>
            Components
        </Link>
    </ListItem>
    <ListItem enabled={true} href='https://github.com/reusable-ui'>
        GitHub
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <Navscroll
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <Navscroll
        inheritEnabled={true}
        theme='primary'
    >
${navscrollSampleItemsString({indents: 2})}
    </Navscroll>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <NavComponentProperty />
                <NavscrollComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default NavscrollPage
