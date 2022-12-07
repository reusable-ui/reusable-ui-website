import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { list, accordion, activatable, accordionItem, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleLimitedOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Accordion as OriAccordion, AccordionProps, AccordionItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import Link from 'next/link'
import { DefaultExpandedProperty, EnabledProperty, ExpandedProperty, InheritEnabledProperty, OnExpandedChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, ContentComponentProperty, ListComponentProperty, ListItemComponentProperty } from '../../properties/sections/componentProperties'
import { CaseSensitiveProperty, EndProperty, NavigationProperties } from '../../properties/sections/navigationProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfRoleButton } from '../../properties/sections/actionProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'



interface AccordionSampleItemsProps extends Pick<AccordionProps, 'listStyle'> {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = false, listStyle}: AccordionSampleItemsProps = {}) => {
    return [
        <AccordionItem key={0}>
            <Link href='/'>Home</Link>
        </AccordionItem>,
        <AccordionItem key={1}>
            <Link href='/core'>Core</Link>
        </AccordionItem>,
        <AccordionItem key={2}>
            <Link href='/components'>Components</Link>
        </AccordionItem>,
        <AccordionItem key={3} href='https://github.com/reusable-ui' {...(mixVaraints ? { theme: 'danger' } : undefined)}>
            GitHub
        </AccordionItem>,
    ];
}

interface SampleAccordionProps extends AccordionProps, AccordionSampleItemsProps {
}
const Accordion = ({mixVaraints, ...props}: SampleAccordionProps) => <OriAccordion {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? listSampleItems({mixVaraints, ...props})}
</OriAccordion>

interface AccordionSampleItemsArrayProps {
    indents     ?: number
}
const accordionSampleItemsArray = ({indents = 1} : AccordionSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/'>
${tabs}        Home
${tabs}    </Link>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/core'>
${tabs}        Core
${tabs}    </Link>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''}>
${tabs}    <Link href='/components'>
${tabs}        Components
${tabs}    </Link>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem href='https://github.com/reusable-ui'${prop ? ` ${prop}` : ''}>
${tabs}    GitHub
${tabs}</AccordionItem>`
    ]);
}

interface AccordionSampleItemsStringProps extends AccordionSampleItemsArrayProps {
}
const accordionSampleItemsString = (options : AccordionSampleItemsStringProps = {}) => {
    return accordionSampleItemsArray(options).map((accordionItem) => accordionItem()).join('\n');
}



const AccordionPage: NextPage = () => {
    return (<ComponentContextProvider component={accordion} nestedComponent={accordionItem} baseComponents={list}>
        <Head>
            <title>{`${accordion.componentTag} Component`}</title>
            <meta name="description" content={`${accordion.componentTag} is a list of (client-side/normal) navigation with automatically toggling-on the ${accordionItem.componentTag}'s ${activatable.shortName} at corresponding URL.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of (client-side/normal) navigation with automatically toggling-on the {accordionItem.packageDisplay}&apos;s {activatable.packageShortLink} at <em>corresponding URL</em>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Accordion />
                    <Accordion mild={false} />
                    <Accordion outlined={true} />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ComponentContextProvider component={accordionItem}>
                <ExpandedProperty />
                <DefaultExpandedProperty />
                <OnExpandedChangeProperty />
            </ComponentContextProvider>
            <LazyProperty />
            <VariantProperties>
                <ListStyleProperty listStyleLimited={true}>
                    <Preview display='right' stretch={false}>
                        {listStyleLimitedOptions.map((listStyle, index) =>
                            <Accordion
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listStyleLimitedOptions.map((listStyle) =>
`
<Accordion
    listStyle='${listStyle}'
    theme='primary'
>
${accordionSampleItemsString()}
</Accordion>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Accordion
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
<Accordion
    orientation='${orientationName}'
    theme='primary'
>
${accordionSampleItemsString()}
</Accordion>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Accordion
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <Accordion>
                            <AccordionItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem size='sm'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem size='md'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem size='lg' href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Accordion
    size='${sizeName}'
    theme='primary'
>
${accordionSampleItemsString()}
</Accordion>
`
                        ).join('')
                        +
`
<Accordion
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem size='sm'>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem size='md'>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem size='lg' href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Accordion
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <Accordion>
                            <AccordionItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem theme='success'>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem theme='danger'>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem theme='warning' href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Accordion
    theme='${themeName}'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                        ).join('')
                        +
`
<Accordion
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem theme='success'>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem theme='danger'>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem theme='warning' href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Accordion
                            gradient={true}
                        />
                        <Accordion>
                            <AccordionItem gradient={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem gradient={true}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem gradient={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem gradient={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Accordion
    gradient={true}
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>

<Accordion
    theme='primary'
>
    <AccordionItem gradient={false}>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem gradient={true}>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem gradient={true}>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem gradient={true} href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Accordion
                            outlined={true}
                        />
                        <Accordion outlined={true}>
                            <AccordionItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem outlined={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem outlined={false}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem outlined={false} href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Accordion
    outlined={true}
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>

<Accordion
    outlined={true}
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem outlined={false}>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem outlined={false}>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem outlined={false} href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Accordion
                            mild={true}
                        />
                        <Accordion mild={false}>
                            <AccordionItem>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem mild={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem mild={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Accordion
    mild={true}
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>

<Accordion
    mild={true}
    theme='primary'
>
    <AccordionItem>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem mild={true}>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem mild={true} href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Accordion
                            enabled={false}
                        />
                        <Accordion
                            mixVaraints={false}
                        >
                            <AccordionItem enabled={false}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem enabled={false}>
                                <Link href='/core'>
                                    Core
                                </Link>
                            </AccordionItem>
                            <AccordionItem enabled={true}>
                                <Link href='/components'>
                                    Components
                                </Link>
                            </AccordionItem>
                            <AccordionItem enabled={true} href='https://github.com/reusable-ui'>
                                GitHub
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Accordion
    enabled={false}
    theme='primary'
>
${accordionSampleItemsString()}
</Accordion>

<Accordion
    theme='primary'
>
    <AccordionItem enabled={false}>
        <Link href='/'>
            Home
        </Link>
    </AccordionItem>
    <AccordionItem enabled={false}>
        <Link href='/core'>
            Core
        </Link>
    </AccordionItem>
    <AccordionItem enabled={true}>
        <Link href='/components'>
            Components
        </Link>
    </AccordionItem>
    <AccordionItem enabled={true} href='https://github.com/reusable-ui'>
        GitHub
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <Accordion
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <Accordion
        inheritEnabled={true}
        theme='primary'
    >
${accordionSampleItemsString({indents: 2})}
    </Accordion>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ListComponentProperty />
                <ComponentContextProvider component={accordionItem}>
                    <ListItemComponentProperty componentOf={<>{accordionItem.packageDisplay}&apos;s <strong>header</strong></>} />
                    <ContentComponentProperty content={listItem} componentOf={<>{accordionItem.packageDisplay}&apos;s <strong>content</strong></>} />
                </ComponentContextProvider>
            </ComponentProperties>
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

import {accordions, accordionValues} from '@reusable-ui/accordion';

accordions.opacity = 0.5;
console.log('opacity variable name: ', accordions.opacity);
console.log('opacity variable value: ', accordionValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default AccordionPage
