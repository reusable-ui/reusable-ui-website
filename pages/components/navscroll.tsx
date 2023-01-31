import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { nav, navscroll, activatable, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Navscroll as OriNavscroll, NavscrollProps, ListItem, Control, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { EnabledProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, NavComponentProperty, NavscrollComponentProperty } from '../../properties/sections/componentProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style, children, rule, descendants } from '@cssfn/core'
import { NestedSubSections, ScrollingFilterProperty, ScrollingInterpolationProperty, ScrollingOfProperty, ScrollingProperties, ScrollingSelectorProperty } from '../../properties/sections/scrollingProperties'



interface NavscrollSampleItemsProps extends Pick<NavscrollProps, 'listStyle'> {
    mixVaraints ?: boolean
    dummyHighlight ?: boolean
}
const listSampleItems = ({mixVaraints = false, dummyHighlight = true, listStyle}: NavscrollSampleItemsProps = {}) => {
    return ((listStyle === 'bullet') ? [
        <ListItem key={0} />,
        <ListItem key={1} {...(dummyHighlight ? { active: true } : undefined)} />,
        <ListItem key={2} />,
        <ListItem key={3} />,
        <ListItem key={4} {...(mixVaraints ? { theme: 'danger' } : undefined)} />,
        <ListItem key={5} />,
    ] : [
        <ListItem key={0}>
            First section
        </ListItem>,
        <ListItem key={1} {...(dummyHighlight ? { active: true } : undefined)}>
            Second section
        </ListItem>,
        <ListItem key={2}>
            Third section
        </ListItem>,
        <ListItem key={3}>
            Fourth section
        </ListItem>,
        <ListItem key={4} {...(mixVaraints ? { theme: 'danger' } : undefined)}>
            Fifth section
        </ListItem>,
        <ListItem key={5}>
            Last section
        </ListItem>,
    ]);
}

interface SampleNavscrollProps extends NavscrollProps, NavscrollSampleItemsProps {
}
const Navscroll = ({mixVaraints, dummyHighlight, ...props}: SampleNavscrollProps) => <OriNavscroll {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? listSampleItems({mixVaraints, dummyHighlight, ...props})}
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
}), { id: '4dnl59brkp' });



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
            
            <Navscroll dummyHighlight={false} scrollingOf={scrollableArticleRef} />
        </CardBody>
    );
}
const DemoNestedNavscroll = () => {
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
                    <section>
                        <h2>Fourth sub section 1</h2>
                        <ParagraphLorem words={8} />
                    </section>
                    <section>
                        <h2> Fourth sub section 2</h2>
                        <ParagraphLorem words={8} />
                    </section>
                    <section>
                        <h2>Fourth sub section 3</h2>
                        <ParagraphLorem words={8} />
                    </section>
                    <section>
                        <h2>Fourth sub section 4</h2>
                        <ParagraphLorem words={8} />
                    </section>
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
            
            <Navscroll dummyHighlight={false} scrollingOf={scrollableArticleRef} scrollingSelector='section'>
                <ListItem>
                    First section
                </ListItem>
                <ListItem>
                    Second section
                </ListItem>
                <ListItem>
                    Third section
                </ListItem>
                <ListItem>
                    Fourth section
                    <OriNavscroll>
                        <ListItem>
                            Sub 4-1
                        </ListItem>
                        <ListItem>
                            Sub 4-2
                        </ListItem>
                        <ListItem>
                            Sub 4-3
                        </ListItem>
                        <ListItem>
                            Sub 4-4
                        </ListItem>
                    </OriNavscroll>
                </ListItem>
                <ListItem>
                    Fifth section
                </ListItem>
                <ListItem>
                    Last section
                </ListItem>
            </Navscroll>
        </CardBody>
    );
}
const DemoInterpolation = () => {
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
            
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <code>{`scrollingInterpolation={false}`}</code>
                <Navscroll dummyHighlight={false} scrollingOf={scrollableArticleRef} scrollingInterpolation={false} />
            </div>
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <code>{`scrollingInterpolation={true}`}</code>
                <Navscroll dummyHighlight={false} scrollingOf={scrollableArticleRef} scrollingInterpolation={true} />
            </div>
        </CardBody>
    );
}



const NavscrollPage: NextPage = () => {
    return (<ComponentContextProvider component={navscroll} nestedComponent={listItem} baseComponents={nav}>
        <Head>
            <title>{`${navscroll.componentTag} Component`}</title>
            <meta name="description" content={`${navscroll.componentTag} is a list of scrollable sections with automatically toggling-on the ${listItem.componentTag}'s ${activatable.shortName} at corresponding scrolling position.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of scrollable sections with automatically toggling-on the {listItem.packageDisplay}&apos;s {activatable.packageShortLink} at <em>corresponding scrolling position</em>.
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
            <ScrollingProperties>
                <ScrollingOfProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DemoNavscroll />} />
                    <p></p>
                    <TypeScriptCode>{
`
const scrollableArticleRef = useRef(null);

/* ... */

<article
    ref={scrollableArticleRef}
>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
</article>

<Navscroll
    scrollingOf={scrollableArticleRef}
    theme='primary'
>
    <ListItem>
        First section
    </ListItem>
    <ListItem>
        Second section
    </ListItem>
    <ListItem>
        Third section
    </ListItem>
    <ListItem>
        Fourth section
    </ListItem>
    <ListItem>
        Fifth section
    </ListItem>
    <ListItem>
        Last section
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                    
                    <NestedSubSections>
                        <Preview display='right' stretch={false} cardBodyComponent={<DemoNestedNavscroll />} />
                        <p></p>
                        <TypeScriptCode>{
`
const scrollableArticleRef = useRef(null);

/* ... */

<article
    ref={scrollableArticleRef}
>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
        <section>
            ...
        </section>
        <section>
            ...
        </section>
        <section>
            ...
        </section>
        <section>
            ...
        </section>
        ...
    </section>
    <section>
        ...
    </section>
    <section>
        ...
    </section>
</article>

<Navscroll
    scrollingOf={scrollableArticleRef}
    scrollingSelector='section'
    theme='primary'
>
    <ListItem>
        First section
    </ListItem>
    <ListItem>
        Second section
    </ListItem>
    <ListItem>
        Third section
    </ListItem>
    <ListItem>
        Fourth section
        
        <Navscroll>
            <ListItem>
                Sub 4-1
            </ListItem>
            <ListItem>
                Sub 4-2
            </ListItem>
            <ListItem>
                Sub 4-3
            </ListItem>
            <ListItem>
                Sub 4-4
            </ListItem>
        </Navscroll>
    </ListItem>
    <ListItem>
        Fifth section
    </ListItem>
    <ListItem>
        Last section
    </ListItem>
</Navscroll>
`
                        }</TypeScriptCode>
                    </NestedSubSections>
                </ScrollingOfProperty>
                <ScrollingSelectorProperty />
                <ScrollingFilterProperty />
                <ScrollingInterpolationProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DemoInterpolation />} />
                </ScrollingInterpolationProperty>
            </ScrollingProperties>
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
    scrollingOf={scrollableArticleRef}
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
                            >
                                <ListItem>
                                    First section
                                </ListItem>
                                <ListItem active={true}>
                                    Second section
                                </ListItem>
                                <ListItem>
                                    Third section
                                </ListItem>
                            </Navscroll>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    orientation='${orientationName}'
    theme='primary'
>
    <ListItem>
        First section
    </ListItem>
    <ListItem>
        Second section
    </ListItem>
    <ListItem>
        Third section
    </ListItem>
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
                            <ListItem size='sm'>
                                First section
                            </ListItem>
                            <ListItem size='md' active={true}>
                                Second section
                            </ListItem>
                            <ListItem size='lg'>
                                Third section
                            </ListItem>
                            <ListItem>
                                Fourth section
                            </ListItem>
                            <ListItem>
                                Fifth section
                            </ListItem>
                            <ListItem>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Navscroll
    scrollingOf={scrollableArticleRef}
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
    scrollingOf={scrollableArticleRef}
    theme='primary'
>
    <ListItem size='sm'>
        First section
    </ListItem>
    <ListItem size='md'>
        Second section
    </ListItem>
    <ListItem size='lg'>
        Third section
    </ListItem>
    <ListItem>
        Fourth section
    </ListItem>
    <ListItem>
        Fifth section
    </ListItem>
    <ListItem>
        Last section
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
                            <ListItem theme='primary'>
                                First section
                            </ListItem>
                            <ListItem theme='secondary' active={true}>
                                Second section
                            </ListItem>
                            <ListItem theme='success'>
                                Third section
                            </ListItem>
                            <ListItem theme='info'>
                                Fourth section
                            </ListItem>
                            <ListItem theme='warning'>
                                Fifth section
                            </ListItem>
                            <ListItem theme='danger'>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    theme='${themeName}'
>
${navscrollSampleItemsString()}
</Navscroll>
`
                        ).join('')
                        +
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    theme='primary'
>
    <ListItem theme='primary'>
        First section
    </ListItem>
    <ListItem theme='secondary'>
        Second section
    </ListItem>
    <ListItem theme='success'>
        Third section
    </ListItem>
    <ListItem theme='info'>
        Fourth section
    </ListItem>
    <ListItem theme='warning'>
        Fifth section
    </ListItem>
    <ListItem theme='danger'>
        Last section
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
                                First section
                            </ListItem>
                            <ListItem gradient={false} active={true}>
                                Second section
                            </ListItem>
                            <ListItem gradient={false}>
                                Third section
                            </ListItem>
                            <ListItem gradient={true}>
                                Fourth section
                            </ListItem>
                            <ListItem gradient={true}>
                                Fifth section
                            </ListItem>
                            <ListItem gradient={true}>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    gradient={true}
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>

<Navscroll
    scrollingOf={scrollableArticleRef}
    theme='primary'
>
    <ListItem gradient={false}>
        First section
    </ListItem>
    <ListItem gradient={false}>
        Second section
    </ListItem>
    <ListItem gradient={false}>
        Third section
    </ListItem>
    <ListItem gradient={true}>
        Fourth section
    </ListItem>
    <ListItem gradient={true}>
        Fifth section
    </ListItem>
    <ListItem gradient={true}>
        Last section
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
                            <ListItem outlined={true}>
                                First section
                            </ListItem>
                            <ListItem outlined={true} active={true}>
                                Second section
                            </ListItem>
                            <ListItem outlined={true}>
                                Third section
                            </ListItem>
                            <ListItem outlined={false}>
                                Fourth section
                            </ListItem>
                            <ListItem outlined={false}>
                                Fifth section
                            </ListItem>
                            <ListItem outlined={false}>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    outlined={true}
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>

<Navscroll
    scrollingOf={scrollableArticleRef}
    outlined={true}
    theme='primary'
>
    <ListItem outlined={true}>
        First section
    </ListItem>
    <ListItem outlined={true}>
        Second section
    </ListItem>
    <ListItem outlined={true}>
        Third section
    </ListItem>
    <ListItem outlined={false}>
        Fourth section
    </ListItem>
    <ListItem outlined={false}>
        Fifth section
    </ListItem>
    <ListItem outlined={false}>
        Last section
    </ListItem>
</Navscroll>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Navscroll
                            mild={false}
                        />
                        <Navscroll
                            mild={false}
                        >
                            <ListItem mild={false}>
                                First section
                            </ListItem>
                            <ListItem mild={false} active={true}>
                                Second section
                            </ListItem>
                            <ListItem mild={false}>
                                Third section
                            </ListItem>
                            <ListItem mild={true}>
                                Fourth section
                            </ListItem>
                            <ListItem mild={true}>
                                Fifth section
                            </ListItem>
                            <ListItem mild={true}>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    mild={false}
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>

<Navscroll
    scrollingOf={scrollableArticleRef}
    mild={false}
    theme='primary'
>
    <ListItem mild={false}>
        First section
    </ListItem>
    <ListItem mild={false}>
        Second section
    </ListItem>
    <ListItem mild={false}>
        Third section
    </ListItem>
    <ListItem mild={true}>
        Fourth section
    </ListItem>
    <ListItem mild={true}>
        Fifth section
    </ListItem>
    <ListItem mild={true}>
        Last section
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
                                First section
                            </ListItem>
                            <ListItem enabled={false} active={true}>
                                Second section
                            </ListItem>
                            <ListItem enabled={false}>
                                Third section
                            </ListItem>
                            <ListItem enabled={true}>
                                Fourth section
                            </ListItem>
                            <ListItem enabled={true}>
                                Fifth section
                            </ListItem>
                            <ListItem enabled={true}>
                                Last section
                            </ListItem>
                        </Navscroll>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Navscroll
    scrollingOf={scrollableArticleRef}
    enabled={false}
    theme='primary'
>
${navscrollSampleItemsString()}
</Navscroll>

<Navscroll
    scrollingOf={scrollableArticleRef}
    theme='primary'
>
    <ListItem enabled={false}>
        First section
    </ListItem>
    <ListItem enabled={false}>
        Second section
    </ListItem>
    <ListItem enabled={false}>
        Third section
    </ListItem>
    <ListItem enabled={true}>
        Fourth section
    </ListItem>
    <ListItem enabled={true}>
        Fifth section
    </ListItem>
    <ListItem enabled={true}>
        Last section
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
        scrollingOf={scrollableArticleRef}
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
                <NavscrollComponentProperty componentOf={<>the <strong>detection</strong> of nested <TheComponentLink /></>} code={
`
export const MyCustomNavscroll = (props: NavscrollProps) => {
    
    /* ... */
    
    return (
        <Navscroll {...props} navscrollComponent={
            <MyCustomNavscroll />
        } />
    );
}
`
                } />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default NavscrollPage
