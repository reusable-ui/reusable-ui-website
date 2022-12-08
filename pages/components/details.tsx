import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, details, toggleButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ButtonStyleProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Details as OriDetails, DetailsProps, AccordionItem, Accordion, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { DefaultExpandedProperty, ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { ButtonChildrenProperty, ButtonComponentProperty, ButtonOrientationProperty, ButtonRefProperty, ComponentProperties, ContentComponentProperty, ToggleButtonComponentProperty } from '../../properties/sections/componentProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style } from '@cssfn/core'



const useDetailsDemoStyle = dynamicStyleSheet(() => style({
    inlineSize: '25rem',
}), { id: '7iqh5crr9u' });



const detailsSampleItems = () => {
    return [
        <ParagraphLorem key={0} words={25} />,
        <ParagraphLorem key={1} words={15} />,
    ];
}

interface SampleDetailsProps extends DetailsProps {
}
const Details = (props: SampleDetailsProps) => {
    const detailsDemoStyle = useDetailsDemoStyle();
    return (
        <OriDetails {...props} theme={props.theme ?? 'primary'} className={detailsDemoStyle.main} label={props.label ?? 'Show Details'} defaultExpanded={props.defaultExpanded ?? true}>
            {props.children ?? detailsSampleItems()}
        </OriDetails>
    );
}

interface DetailsSampleItemsArrayProps {
    indents     ?: number
}
const detailsSampleItemsArray = ({indents = 1} : DetailsSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<p>...</p>`,
(prop?: string) => `${tabs}<p>...</p>`,
    ]);
}

interface DetailsSampleItemsStringProps extends DetailsSampleItemsArrayProps {
}
const detailsSampleItemsString = (options : DetailsSampleItemsStringProps = {}) => {
    return detailsSampleItemsArray(options).map((listItem) => listItem()).join('\n');
}



const DetailsPage: NextPage = () => {
    return (<ComponentContextProvider component={details} baseComponents={basic}>
        <Head>
            <title>{`${details.componentTag} Component`}</title>
            <meta name="description" content={`${details.componentTag} represents a series of toggleable collapsing content.`} />
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
                    <div style={{minBlockSize: '17rem'}}>
                        <Details defaultExpanded={false} />
                    </div>
                    <div style={{minBlockSize: '17rem'}}>
                        <Details />
                    </div>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty />
            <DefaultExpandedProperty />
            <OnExpandedChangeProperty />
            <LazyProperty />
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <div style={{minBlockSize: (() => {
                                switch (sizeName) {
                                    case 'sm': return '14rem';
                                    case 'lg': return '25rem';
                                    default  : return '17rem';
                                }
                            })()}}>
                                <Details
                                    key={index}
                                    size={sizeName}
                                />
                            </div>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Details
    size='${sizeName}'
    theme='primary'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                        ).join('')
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <div style={{minBlockSize: '17rem'}}>
                                <Details
                                    key={index}
                                    theme={themeName}
                                />
                            </div>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Details
    theme='${themeName}'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                        ).join('')
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <div style={{minBlockSize: '17rem'}}>
                            <Details
                                gradient={true}
                            />
                        </div>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Details
    gradient={true}
    theme='primary'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <div style={{minBlockSize: '17rem'}}>
                            <Details
                                outlined={true}
                            />
                        </div>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Details
    outlined={true}
    theme='primary'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <div style={{minBlockSize: '17rem'}}>
                            <Details
                                mild={false}
                            />
                        </div>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Details
    mild={false}
    theme='primary'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
                <ButtonRefProperty />
                <ButtonOrientationProperty />
                <ButtonStyleProperty />
                <ButtonChildrenProperty />
                
                <ToggleButtonComponentProperty />
                
                <ContentComponentProperty />
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

import {detailss, detailsValues} from '@reusable-ui/details';

detailss.opacity = 0.5;
console.log('opacity variable name: ', detailss.opacity);
console.log('opacity variable value: ', detailsValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default DetailsPage
