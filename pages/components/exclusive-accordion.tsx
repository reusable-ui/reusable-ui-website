import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { accordion, exclusiveAccordion, accordionItem, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleLimitedOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { ExclusiveAccordion as OriExclusiveAccordion, ExclusiveAccordionProps, AccordionItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { DefaultExpandedListIndexProperty, EnabledProperty, ExpandedListIndexProperty, InheritEnabledProperty, OnExpandedChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { AccordionComponentProperty, ComponentProperties, ContentComponentProperty, ListComponentProperty, ListItemComponentProperty } from '../../properties/sections/componentProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ParagraphLorem as OriParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style, children, rule } from '@cssfn/core'



const useExclusiveAccordionDemoStyle = dynamicStyleSheet(() => style({
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



interface ExclusiveAccordionSampleItemsProps {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = true}: ExclusiveAccordionSampleItemsProps = {}) => {
    return [
        <AccordionItem key={0} label={<span>
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

interface SampleExclusiveAccordionProps extends ExclusiveAccordionProps, ExclusiveAccordionSampleItemsProps {
}
const ExclusiveAccordion = ({mixVaraints, ...props}: SampleExclusiveAccordionProps) => {
    const exclusiveAccordionDemoStyle = useExclusiveAccordionDemoStyle();
    return (
        <OriExclusiveAccordion {...props} theme={props.theme ?? 'primary'} defaultExpandedListIndex={props.defaultExpandedListIndex ?? 0} className={exclusiveAccordionDemoStyle.main}>
            {props.children ?? listSampleItems({mixVaraints, ...props})}
        </OriExclusiveAccordion>
    );
}

interface ExclusiveAccordionSampleItemsArrayProps {
    indents     ?: number
}
const exclusiveAccordionSampleItemsArray = ({indents = 1} : ExclusiveAccordionSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<AccordionItem${prop ? ` ${prop}` : ''} label={<>
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

interface ExclusiveAccordionSampleItemsStringProps extends ExclusiveAccordionSampleItemsArrayProps {
}
const exclusiveAccordionSampleItemsString = (options : ExclusiveAccordionSampleItemsStringProps = {}) => {
    return exclusiveAccordionSampleItemsArray(options).map((accordionItem) => accordionItem()).join('\n');
}



const ExclusiveAccordionPage: NextPage = () => {
    return (<ComponentContextProvider component={exclusiveAccordion} nestedComponent={accordionItem} baseComponents={accordion}>
        <Head>
            <title>{`${exclusiveAccordion.componentTag} Component`}</title>
            <meta name="description" content={`${exclusiveAccordion.componentTag} represents a series of toggleable collapsing content with only one expanded content allowed.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents a series of toggleable collapsing content with only one expanded content allowed.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <ExclusiveAccordion />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ExpandedListIndexProperty />
            <DefaultExpandedListIndexProperty />
            <ComponentContextProvider component={accordionItem}>
                <OnExpandedChangeProperty />
            </ComponentContextProvider>
            <ComponentContextProvider component={accordionItem} nestedComponent={accordionItem}>
                <LazyProperty />
            </ComponentContextProvider>
            <VariantProperties>
                <ListStyleProperty listStyleLimited={true}>
                    <Preview display='right' stretch={false}>
                        {listStyleLimitedOptions.map((listStyle, index) =>
                            <ExclusiveAccordion
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listStyleLimitedOptions.map((listStyle) =>
`
<ExclusiveAccordion
    listStyle='${listStyle}'
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <ExclusiveAccordion
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
<ExclusiveAccordion
    orientation='${orientationName}'
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <ExclusiveAccordion
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <ExclusiveAccordion>
                            <AccordionItem size='sm' label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<ExclusiveAccordion
    size='${sizeName}'
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>
`
                        ).join('')
                        +
`
<ExclusiveAccordion
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem size='sm' label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <ExclusiveAccordion
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <ExclusiveAccordion>
                            <AccordionItem theme='primary' label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<ExclusiveAccordion
    theme='${themeName}'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>
`
                        ).join('')
                        +
`
<ExclusiveAccordion
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem theme='primary' label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <ExclusiveAccordion
                            gradient={true}
                        />
                        <ExclusiveAccordion>
                            <AccordionItem gradient={false} label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<ExclusiveAccordion
    gradient={true}
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>

<ExclusiveAccordion
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem gradient={false} label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <ExclusiveAccordion
                            outlined={true}
                        />
                        <ExclusiveAccordion outlined={true}>
                            <AccordionItem outlined={false} label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<ExclusiveAccordion
    outlined={true}
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>

<ExclusiveAccordion
    outlined={true}
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem outlined={false} label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <ExclusiveAccordion
                            mild={false}
                        />
                        <ExclusiveAccordion
                            mild={false}
                        >
                            <AccordionItem mild={false} label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<ExclusiveAccordion
    mild={false}
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>

<ExclusiveAccordion
    mild={false}
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem mild={false} label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <ExclusiveAccordion
                            enabled={false}
                        />
                        <ExclusiveAccordion
                            mixVaraints={false}
                        >
                            <AccordionItem enabled={false} label={<>
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
                        </ExclusiveAccordion>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<ExclusiveAccordion
    enabled={false}
    theme='primary'
    defaultExpandedListIndex={0}
>
${exclusiveAccordionSampleItemsString()}
</ExclusiveAccordion>

<ExclusiveAccordion
    theme='primary'
    defaultExpandedListIndex={0}
>
    <AccordionItem enabled={false} label={<>
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
</ExclusiveAccordion>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <ExclusiveAccordion
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <ExclusiveAccordion
        inheritEnabled={true}
        theme='primary'
        defaultExpandedListIndex={0}
    >
${exclusiveAccordionSampleItemsString({indents: 2})}
    </ExclusiveAccordion>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ListComponentProperty />
                <AccordionComponentProperty />
                <ComponentContextProvider component={accordionItem}>
                    <ListItemComponentProperty componentOf={<>{accordionItem.packageDisplay}&apos;s <strong>header</strong></>} />
                    <ContentComponentProperty content={listItem} componentOf={<>{accordionItem.packageDisplay}&apos;s <strong>content</strong></>} />
                </ComponentContextProvider>
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default ExclusiveAccordionPage
