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
import { DefaultExpandedProperty, EnabledProperty, ExpandedProperty, InheritEnabledProperty, OnExpandedChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, ContentComponentProperty, ListComponentProperty, ListItemComponentProperty } from '../../properties/sections/componentProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ParagraphLorem as OriParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style, children, rule } from '@cssfn/core'



const useAccordionDemoStyle = dynamicStyleSheet(() => style({
    ...rule(':not(.inline)', {
        inlineSize: '20rem',
    }),
    ...rule('.inline', {
        blockSize: '20rem',
        
        ...children('li>*>*', {
            writingMode: 'vertical-rl',
            rotate: '180deg',
            height: '100%',
        }),
    }),
}), { id: '8po43ak0ox' });

const ParagraphLorem = () => <OriParagraphLorem words={8} />



interface AccordionSampleItemsProps {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = true}: AccordionSampleItemsProps = {}) => {
    return [
        <AccordionItem key={0} defaultExpanded={true} label={<span>
            A first item
        </span>}>
            <div>
                <ParagraphLorem />
                <ParagraphLorem />
            </div>
        </AccordionItem>,
        <AccordionItem key={1} label={<span>
            A second item
        </span>}>
            <div>
                <ParagraphLorem />
                <ParagraphLorem />
            </div>
        </AccordionItem>,
        <AccordionItem key={2} label={<span>
            A third item
        </span>}>
            <div>
                <ParagraphLorem />
                <ParagraphLorem />
            </div>
        </AccordionItem>,
        <AccordionItem key={3} {...(mixVaraints ? { theme: 'danger' } : undefined)} label={<span>
            A fourth item
        </span>}>
            <div>
                <ParagraphLorem />
                <ParagraphLorem />
            </div>
        </AccordionItem>,
    ];
}

interface SampleAccordionProps extends AccordionProps, AccordionSampleItemsProps {
}
const Accordion = ({mixVaraints, ...props}: SampleAccordionProps) => {
    const accordionDemoStyle = useAccordionDemoStyle();
    return (
        <OriAccordion {...props} theme={props.theme ?? 'primary'} className={accordionDemoStyle.main}>
            {props.children ?? listSampleItems({mixVaraints, ...props})}
        </OriAccordion>
    );
}

interface AccordionSampleItemsArrayProps {
    indents     ?: number
}
const accordionSampleItemsArray = ({indents = 1} : AccordionSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<AccordionItem defaultExpanded={true}${prop ? ` ${prop}` : ''} label={<>
${tabs}    A first item
${tabs}</>}>
${tabs}    <p>...</p>
${tabs}    <p>...</p>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''} label={<>
${tabs}    A second item
${tabs}</>}>
${tabs}    <p>...</p>
${tabs}    <p>...</p>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''} label={<>
${tabs}    A third item
${tabs}</>}>
${tabs}    <p>...</p>
${tabs}    <p>...</p>
${tabs}</AccordionItem>`,
(prop?: string) => `${tabs}<AccordionItem theme='danger'${prop ? ` ${prop}` : ''} label={<>
${tabs}    A fourth item
${tabs}</>}>
${tabs}    <p>...</p>
${tabs}    <p>...</p>
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
            <meta name="description" content={`${accordion.componentTag} represents a series of toggleable collapsing content.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents a series of toggleable collapsing content.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Accordion />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ComponentContextProvider component={accordionItem}>
                <ExpandedProperty />
                <DefaultExpandedProperty />
                <OnExpandedChangeProperty />
            </ComponentContextProvider>
            <ComponentContextProvider component={accordionItem} nestedComponent={accordionItem}>
                <LazyProperty />
            </ComponentContextProvider>
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
                            <AccordionItem size='sm' defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem size='md' label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem size='lg' label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem theme='danger' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
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
    <AccordionItem size='sm' defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem size='md' label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem size='lg' label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='danger' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
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
                            <AccordionItem theme='primary' defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem theme='secondary' label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem theme='success' label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem theme='info' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
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
${accordionSampleItemsString()}
</Accordion>
`
                        ).join('')
                        +
`
<Accordion
    theme='primary'
>
    <AccordionItem theme='primary' defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='secondary' label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='success' label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem theme='info' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
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
                            <AccordionItem gradient={false} defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem gradient={false} label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem gradient={true} label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem gradient={true} theme='danger' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
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
${accordionSampleItemsString()}
</Accordion>

<Accordion
    theme='primary'
>
    <AccordionItem gradient={false} defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem gradient={false} label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem gradient={true} label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem gradient={true} theme='danger' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
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
                            <AccordionItem outlined={false} defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem outlined={false} label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem outlined={true} label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem outlined={true} theme='danger' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
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
${accordionSampleItemsString()}
</Accordion>

<Accordion
    outlined={true}
    theme='primary'
>
    <AccordionItem outlined={false} defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={false} label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={true} label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem outlined={true} theme='danger' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
</Accordion>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Accordion
                            mild={false}
                        />
                        <Accordion
                            mild={false}
                        >
                            <AccordionItem mild={false} defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem mild={false} label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem mild={true} label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem mild={true} theme='danger' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                        </Accordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Accordion
    mild={false}
    theme='primary'
>
${accordionSampleItemsString()}
</Accordion>

<Accordion
    mild={false}
    theme='primary'
>
    <AccordionItem mild={false} defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={false} label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={true} label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem mild={true} theme='danger' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
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
                            <AccordionItem enabled={false} defaultExpanded={true} label={<>
                                A first item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem enabled={false} label={<>
                                A second item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem enabled={true} label={<>
                                A third item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
                            </AccordionItem>
                            <AccordionItem enabled={true} theme='danger' label={<>
                                A fourth item
                            </>}>
                                <ParagraphLorem />
                                <ParagraphLorem />
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
    <AccordionItem enabled={false} defaultExpanded={true} label={<>
        A first item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem enabled={false} label={<>
        A second item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem enabled={true} label={<>
        A third item
    </>}>
        <p>...</p>
        <p>...</p>
    </AccordionItem>
    <AccordionItem enabled={true} theme='danger' label={<>
        A fourth item
    </>}>
        <p>...</p>
        <p>...</p>
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
                    <ContentComponentProperty content={listItem} componentOf={<>the <strong>composition</strong> of {accordionItem.packageDisplay}&apos;s <strong>content</strong></>} />
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
