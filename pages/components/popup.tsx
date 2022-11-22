import React, { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, popup } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Popup as OriPopup, PopupProps, List, ListItem, CardBody, Button, Label, Range } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import SelectFloatingPlacement from '../../components/SelectFloatingPlacement'



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
const DemoFloatingOn = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <CardBody style={{gap: '4rem'}}>
            <div>
                <Button theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm'>
                    Hurry up!
                </Popup>
            </div>
            
            <div>
                <Button elmRef={buttonRef} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='right-start' floatingOffset={-50} floatingShift={-15}>
                    Hurry up!
                </Popup>
            </div>
        </CardBody>
    );
}
const DemoFloatingPlacement = () => {
    const contentRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <SelectFloatingPlacement>{(popupPlacement) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Label elmRef={contentRef} theme='primary' size='lg' style={{ width: '50%', height: '50%', resize: 'both', overflow: 'hidden', transition: 'none', borderRadius: 0, }}>
                A content
            </Label>
            <Popup
                expanded={true}
                theme='warning'
                mild={true}
                
                floatingOn={contentRef}
                floatingPlacement={popupPlacement}
            >
                <code>
                    {`floatingPlacement='${popupPlacement}'`}
                </code>
            </Popup>
        </div>}</SelectFloatingPlacement>
    )
}
const DemoFloatingAutoFlip = () => {
    const [viewportRef, isFlip, isInViewport] = useFlipFlop<boolean, HTMLElement>({defaultState: true});
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    const scrollCummulative = useRef<number>(0);
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        const viewportElm = viewportRef.current;
        if (!viewportElm) return;
        
        
        
        // setups:
        const interval = 2000;
        const steps = 20;
        const scrollLength = viewportElm.scrollHeight - viewportElm.clientHeight;
        scrollCummulative.current = (isFlip ? 0 : scrollLength);
        const cancelInterval = setInterval(() => {
            scrollCummulative.current += (scrollLength / steps * (isFlip ? 1 : -1));
            viewportElm.scrollTo({top: Math.round(scrollCummulative.current), behavior: 'smooth'});
        }, interval / steps);
        
        
        
        // cleanups:
        return () => {
            clearInterval(cancelInterval);
        };
    }, [isFlip, isInViewport]);
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', pointerEvents: 'none', gap: '5rem', justifyContent: 'start', overflowY: 'scroll'}}>
            <div>
            </div>
            
            <div>
                <Button elmRef={buttonRef} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='top' floatingAutoFlip={true}>
                    Hurry up!
                </Popup>
            </div>
            
            <div style={{width: '1px', height: '1px', flex: '0 0 auto'}}>
            </div>
        </CardBody>
    );
}
const DemoFloatingAutoShift = () => {
    const [viewportRef, isFlip, isInViewport] = useFlipFlop<boolean, HTMLElement>({defaultState: true});
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    const scrollCummulative = useRef<number>(0);
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        const viewportElm = viewportRef.current;
        if (!viewportElm) return;
        
        
        
        // setups:
        const interval = 2000;
        const steps = 10;
        const scrollLength = viewportElm.scrollHeight - viewportElm.clientHeight;
        scrollCummulative.current = (isFlip ? 0 : scrollLength);
        const cancelInterval = setInterval(() => {
            scrollCummulative.current += (scrollLength / steps * (isFlip ? 1 : -1));
            viewportElm.scrollTo({top: Math.round(scrollCummulative.current), behavior: 'smooth'});
        }, interval / steps);
        
        
        
        // cleanups:
        return () => {
            clearInterval(cancelInterval);
        };
    }, [isFlip, isInViewport]);
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', pointerEvents: 'none', gap: '5rem', justifyContent: 'start', overflowY: 'scroll'}}>
            <div>
            </div>
            
            <div>
                <Button elmRef={buttonRef} theme='success' size='lg'>
                    Order<br />Now!<br /><br />Limited<br />offer
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='right' floatingAutoShift={true}>
                    Hurry up!
                </Popup>
            </div>
            
            <div style={{width: '1px', height: '1px', flex: '0 0 auto'}}>
            </div>
        </CardBody>
    );
}
const DemoFloatingOffset = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [floatingOffset, setFloatingOffset] = useState<number>(0);
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFloatingOffset(event.target.valueAsNumber);
    };
    
    
    
    return (
        <CardBody>
            <p style={{marginBlockEnd: '3rem'}}>
                <code>{`<Popup floatingOffset={${floatingOffset}}>`}</code>
            </p>
            <div>
                <Button elmRef={buttonRef} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='top' floatingOffset={floatingOffset}>
                    Hurry up!
                </Popup>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='right' floatingOffset={floatingOffset}>
                    Hurry up!
                </Popup>
            </div>
            <Range theme='primary' min={-20} max={20} onChange={handleChange} />
        </CardBody>
    );
}
const DemoFloatingShift = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [floatingShift, setFloatingShift] = useState<number>(0);
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFloatingShift(event.target.valueAsNumber);
    };
    
    
    
    return (
        <CardBody>
            <p style={{marginBlockEnd: '3rem'}}>
                <code>{`<Popup floatingShift={${floatingShift}}>`}</code>
            </p>
            <div>
                <Button elmRef={buttonRef} theme='success' size='lg'>
                    Order Now! Limited offer.
                </Button>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='top' floatingShift={floatingShift}>
                    Hurry up!
                </Popup>
                <Popup expanded={true} theme='danger' size='sm' floatingOn={buttonRef} floatingPlacement='right' floatingShift={floatingShift}>
                    Hurry up!
                </Popup>
            </div>
            <Range theme='primary' min={-20} max={20} onChange={handleChange} />
        </CardBody>
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
                <Preview stretch={false} display='down' cardBodyComponent={<DemoPopup />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' cardBodyComponent={<DemoExpanded />} />
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
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoFloatingOn />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Button
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
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    floatingOn={buttonRef}
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
                <FloatingPlacementProperty>
                    <DemoFloatingPlacement />
                </FloatingPlacementProperty>
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingAutoFlip />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Button
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingAutoFlip={true}
    
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>
`
                    }</TypeScriptCode>
                </FloatingAutoFlipProperty>
                <FloatingAutoShiftProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingAutoShift />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Button
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
    Order
    <br />
    Now!
    <br />
    <br />
    Limited
    <br />
    offer
</Button>
<Popup
    floatingOn={buttonRef}
    floatingPlacement='right'
    floatingAutoShift={true}
    
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>
`
                    }</TypeScriptCode>
                </FloatingAutoShiftProperty>
                <FloatingOffsetProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingOffset />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Button
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingOffset={10}
    
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>
`
                    }</TypeScriptCode>
                </FloatingOffsetProperty>
                <FloatingShiftProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingShift />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Button
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
    Order Now! Limited offer.
</Button>
<Popup
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingShift={10}
    
    expanded={true}
    theme='danger'
    size='sm'
>
    Hurry up!
</Popup>
`
                    }</TypeScriptCode>
                </FloatingShiftProperty>
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
