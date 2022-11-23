import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, popup } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Popup as OriPopup, PopupProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Popup = (props: PopupProps) => <OriPopup {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

const DemoPopup = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem'}}>
            <Popup expanded={isFlip} theme='danger' size='lg'>
                Hurry up!
            </Popup>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Popup expanded={${isFlip}}>`}</code>
            </p>
            <Popup expanded={isFlip} theme='primary'>
                Hopla!
            </Popup>
        </CardBody>
    );
}



const PopupPage: NextPage = () => {
    return (<ComponentContextProvider component={popup} baseComponents={basic} componentFactory={<Popup />}>
        <Head>
            <title>{`${popup.componentTag} Component`}</title>
            <meta name="description" content={`${popup.componentTag} is a generic element with dynamic visibility (show/hide) in popup fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a generic element with dynamic visibility (show/hide) in popup fashion.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoPopup />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Popup
    expanded={true}
    theme='primary'
>
    Hopla!
</Popup>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty />
                <FloatingPlacementProperty />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty />
                <FloatingAutoShiftProperty />
                <FloatingOffsetProperty />
                <FloatingShiftProperty />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Popup
                                key={index}
                                size={sizeName}
                            >
                                A {'<Popup>'} with {sizeName ?? 'default'} size
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Popup
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    theme='primary'
>
    A {'<Popup>'} with ${sizeName ?? 'default'} size
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                            >
                                A {'<Popup>'} with {themeName} theme
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
>
    A {'<Popup>'} with ${themeName} theme
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                A {'<Popup>'} with gradient mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    gradient={true}
    theme='${themeName}'
>
    A {'<Popup>'} with gradient mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                A {'<Popup>'} with outlined mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    outlined={true}
    theme='${themeName}'
>
    A {'<Popup>'} with outlined mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                mild={true}
                                theme={themeName}
                            >
                                A {'<Popup>'} without mild mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    mild={true}
    theme='${themeName}'
>
    A {'<Popup>'} without mild mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                A {'<Popup>'} with nude mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    nude={true}
    theme='${themeName}'
>
    A {'<Popup>'} with nude mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animExpand</code>
                                <p>Represents <strong>expanding animation</strong>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapse</code>
                                <p>Represents <strong>collapsing animation</strong>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {popups, popupValues} from '@reusable-ui/popup';

popups.opacity = 0.5;
console.log('opacity variable name: ', popups.opacity);
console.log('opacity variable value: ', popupValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default PopupPage
