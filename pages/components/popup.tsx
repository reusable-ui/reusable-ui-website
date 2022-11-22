import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, popup } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Popup as OriPopup, PopupProps, List, ListItem, CardBody, Button } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, ExpandedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingOnProperty, FloatingProperties } from '../../properties/sections/floatableProperties'



const Popup = (props: PopupProps) => <OriPopup {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

const DemoPopup = () => {
    const [popupRef, isFlip] = useFlipFlop<boolean>({defaultState: true});
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <div ref={popupRef}>
            <Button elmRef={buttonRef} theme='success' size='lg'>
                Order Now! Limited offer.
            </Button>
            <Popup expanded={isFlip} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='right-start' floatingOffset={-50} floatingShift={-15}>
                Hurry up!
            </Popup>
        </div>
    );
}
const DemoExpanded = () => {
    const [popupRef, isFlip] = useFlipFlop<boolean>({defaultState: true});
    
    
    
    return (
        <div ref={popupRef}>
            <p>
                <code>{`<Popup expanded={${isFlip}}>`}</code>
            </p>
            <Popup expanded={isFlip} theme='primary'>
                Hopla!
            </Popup>
        </div>
    );
}
const DemoFloatingOn = () => {
    const buttonRef1 = useRef<HTMLButtonElement>(null);
    const buttonRef2 = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <>
            <div>
                <Button elmRef={buttonRef1} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm'>
                    Hurry up!
                </Popup>
            </div>
            
            <div>
                <Button elmRef={buttonRef2} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef2} floatingPlacement='right-start' floatingOffset={-50} floatingShift={-15}>
                    Hurry up!
                </Popup>
            </div>
        </>
    );
}



const PopupPage: NextPage = () => {
    return (<ComponentContextProvider component={popup} baseComponents={basic}>
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
                <Preview stretch={false} display='down' cardBodyComponent={<CardBody style={{justifyContent: 'end', blockSize: '4rem'}} />}>
                    <DemoPopup />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' cardBodyComponent={<CardBody style={{justifyContent: 'start', blockSize: '5rem'}} />}>
                        <DemoExpanded />
                    </Preview>
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
                <FloatingOnProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<CardBody style={{gap: '4rem'}} />}>
                        <DemoFloatingOn />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Button
    elmRef={buttonRef1}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>



<Button
    elmRef={buttonRef2}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    floatingOn={buttonRef2}
    floatingPlacement='right-start'
    floatingOffset={-50}
    floatingShift={-15}
    
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>
`
                    }</TypeScriptCode>
                </FloatingOnProperty>
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
                                theme={themeName}
                                gradient={true}
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
    theme='${themeName}'
    gradient={true}
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
                                theme={themeName}
                                outlined={true}
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
    theme='${themeName}'
    outlined={true}
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
                                theme={themeName}
                                mild={false}
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
    theme='${themeName}'
    mild={false}
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
                                theme={themeName}
                                nude={true}
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
    theme='${themeName}'
    nude={true}
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
                                <p>An animation represents <em>expanding animation</em>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapse</code>
                                <p>An animation represents <em>collapsing animation</em>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {popups, popupValues} from '@reusable-ui/popup';

popups.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', popups.filterActive);
console.log('filterActive variable value: ', popupValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default PopupPage
