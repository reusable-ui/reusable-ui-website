import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { basic, button, details, toggleButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ButtonStyleProperty, DetailsStyleProperty, detailsStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Details as OriDetails, DetailsProps, AccordionItem, Accordion, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { DefaultExpandedProperty, ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { ButtonChildrenProperty, ButtonComponentProperty, ButtonOrientationProperty, ButtonRefProperty, ComponentProperties, BodyComponentProperty, ToggleButtonComponentProperty } from '../../properties/sections/componentProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style } from '@cssfn/core'
import { useFlipFlop } from '../../hooks/flipFlop'



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



const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<Details expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <div style={{
                minBlockSize: '17rem',
            }}>
                <Details expanded={isFlip} />
            </div>
        </CardBody>
    );
}



const DetailsPage: NextPage = () => {
    return (<ComponentContextProvider component={details} baseComponents={basic}>
        <Head>
            <title>{`${details.componentTag} Component`}</title>
            <meta name="description" content={`${details.componentTag} is a foldable content widget. Supports customization of themes, sizes, and other variants.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a foldable content widget. Supports customization of themes, sizes, and other variants.
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
            <ExpandedProperty>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                <p></p>
                <TypeScriptCode>{
`
<Details
    expanded={true}
    theme='primary'
    label={<>
        Show Details
    </>}
>
${detailsSampleItemsString()}
</Details>
`
                }</TypeScriptCode>
            </ExpandedProperty>
            <DefaultExpandedProperty />
            <OnExpandedChangeProperty userExpandedAction={['opens', 'closes']} />
            <LazyProperty />
            <VariantProperties>
                <DetailsStyleProperty>
                    <Preview display='right' stretch={false}>
                        {detailsStyleOptions.map((detailsStyle, index) =>
                            <div key={index} style={{minBlockSize: '21rem'}}>
                                <Details
                                    detailsStyle={detailsStyle}
                                >
                                    <ParagraphLorem words={15} />
                                    {/* eslint-disable @next/next/no-img-element */}
                                    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '100px' }} />
                                    <ParagraphLorem words={10} />
                                </Details>
                            </div>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {detailsStyleOptions.map((detailsStyle) =>
`
<Details
    detailsStyle='${detailsStyle}'
    theme='primary'
    label={<>
        Show Details
    </>}
>
    <p>...</p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '100px' }} />
    <p>...</p>
</Details>
`
                        ).join('')}
                    </TypeScriptCode>
                </DetailsStyleProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <div key={index} style={{minBlockSize: (() => {
                                switch (sizeName) {
                                    case 'sm': return '14rem';
                                    case 'lg': return '25rem';
                                    default  : return '17rem';
                                }
                            })()}}>
                                <Details
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
                            <div key={index} style={{minBlockSize: '17rem'}}>
                                <Details
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
                <ComponentContextProvider component={button}>
                    <ButtonStyleProperty />
                </ComponentContextProvider>
                <ButtonChildrenProperty />
                
                <ToggleButtonComponentProperty />
                
                <BodyComponentProperty content={basic} />
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
