import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { collapse, dropdown } from '../../packages/packageList'
import { orientationOptions, OrientationProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Dropdown as OriDropdown, DropdownProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { DropdownUiProperty } from '../../properties/sections/dropdownProperties'
import { DummyUiBig } from '../../components/DummyUi'



const Dropdown = (props: Partial<DropdownProps>) => <OriDropdown {...props} expanded={props.expanded ?? true} setFocus={false} restoreFocus={false}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdown>

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdown = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '128px',
                blockSize    : '128px',
                alignContent : 'start',
            }}>
                <Dropdown expanded={isFlip} orientation='block' />
            </div>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '128px',
                blockSize    : '128px',
                alignContent : 'start',
            }}>
                <Dropdown expanded={isFlip} orientation='inline' />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<Dropdown expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '128px',
                blockSize    : '128px',
                alignContent : 'start',
            }}>
                <Dropdown expanded={isFlip} orientation='block' />
            </div>
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '128px', alignItems: 'start', whiteSpace: 'nowrap'}}>
            {orientationOptions.map((orientation, index) =>
                <div key={index} style={{
                    display      : 'grid',
                    justifyItems : 'center',
                    alignItems   : 'center',
                    
                    inlineSize   : '128px',
                    blockSize    : '128px',
                    alignContent : 'start',
                }}>
                    <Dropdown expanded={isFlip} orientation={orientation} floatingAutoFlip={false} floatingAutoShift={false} />
                </div>
            )}
        </CardBody>
    );
}



const DropdownPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdown} baseComponents={collapse} componentFactory={
        <Dropdown orientation='block' floatingAutoFlip={false} floatingAutoShift={false}>
            <DummyUiBig />
        </Dropdown>
    }>
        <Head>
            <title>{`${dropdown.componentTag} Component`}</title>
            <meta name="description" content={`${dropdown.componentTag} is a non-visual context menu container with dynamic visibility (show/hide) in sliding fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a non-visual context menu container with dynamic visibility (show/hide) in sliding fashion.<br />
                    You need to place <code>{'<YourComponent>'}</code> inside the <TheComponentLink /> in order to make the appearance.
                </p>
                <p>
                    <TheComponentLink /> is similar to {collapse.packageLink} with additional handling of <kbd>esc</kbd> key and <strong>blur</strong> event to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside <code>{'<YourComponent>'}</code>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdown />} />
            </HeroSection>
            <ComponentInstallation />
            <DropdownUiProperty />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Dropdown
    expanded={true}
    orientation='block'
>
    <YourComponent />
</Dropdown>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <OrientationProperty>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
                    orientationOptions.map((orientation) =>
`
<Dropdown
    expanded={true}
    orientation='${orientation}'
>
    <YourComponent />
</Dropdown>
`
                    ).join('\n\n')
                }</TypeScriptCode>
            </OrientationProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} floatingPlacement='top-end' floatingOffset={-10} floatingShift={20} />
                <FloatingPlacementProperty floatingComponent={<Dropdown>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img alt='<YourComponent />' src='/images/lorem-image-1.svg' width={32} height={32} />
                </Dropdown>} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty floatingChildren={defaultFloatingChildren} />
                <FloatingAutoShiftProperty floatingChildren={defaultFloatingChildren} />
                <FloatingOffsetProperty floatingChildren={defaultFloatingChildren} />
                <FloatingShiftProperty floatingChildren={defaultFloatingChildren} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Appearances'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>filter</code>
                                <p>A <code>filter</code> to apply to the <TheComponentLink />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {dropdowns, dropdownValues} from '@reusable-ui/dropdown';

dropdowns.opacity = 0.5;
console.log('opacity variable name: ', dropdowns.opacity);
console.log('opacity variable value: ', dropdownValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default DropdownPage
