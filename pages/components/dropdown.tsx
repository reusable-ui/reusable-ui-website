import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { collapse, dropdown } from '../../packages/packageList'
import { OrientationProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Dropdown as OriDropdown, DropdownProps, List, ListItem, CardBody, Basic, Generic } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const DummyUiSmall = () => {
    return (
        <Image src='/images/lorem-image-1.svg' width={48} height={48} />
    );
}
const DummyUiBig = () => {
    return (
        <Image src='/images/lorem-image-1.svg' width={128} height={128} />
    );
}
const Dropdown = (props: Partial<DropdownProps>) => <OriDropdown {...props} expanded={props.expanded ?? true}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdown>

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdown = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '128px', alignItems: 'start'}}>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <Dropdown expanded={isFlip} orientation='block' />
            </div>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <Dropdown expanded={isFlip} orientation='inline' />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Dropdown expanded={${isFlip}}>`}</code>
            </p>
            <Dropdown expanded={isFlip} orientation='block' />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '8rem', alignItems: 'start'}}>
            <div style={{display: 'flex', gap: 'inherit', justifyContent: 'center', alignSelf: 'stretch'}}>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <Dropdown expanded={isFlip} orientation='block' />
                </div>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <Dropdown expanded={isFlip} orientation='inline' />
                </div>
            </div>
        </CardBody>
    );
}



const DropdownPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdown} baseComponents={collapse} componentFactory={<Dropdown orientation='block' floatingAutoFlip={false} floatingAutoShift={false} {...({size: undefined, theme: undefined} as {})}>
        <DummyUiSmall />
    </Dropdown>}>
        <Head>
            <title>{`${dropdown.componentTag} Component`}</title>
            <meta name="description" content={`${dropdown.componentTag} is a non-visual container with dynamic visibility (show/hide) in sliding fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a non-visual container with dynamic visibility (show/hide) in sliding fashion.<br />
                    You need to place a visual (styled) component inside the <TheComponentLink /> in order to make the appearance.
                </p>
                <p>
                    <TheComponentLink /> is similar to {collapse.packageLink} with additional handling of <kbd>esc</kbd> key and <strong>blur</strong> event to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside the <TheComponentLink />.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdown />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
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
            <OrientationProperty>
                <Preview display='right' stretch={true} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
`
<Dropdown
    expanded={true}
    orientation='block'
>
    <YourComponent />
</Dropdown>



<Dropdown
    expanded={true}
    orientation='inline'
>
    <YourComponent />
</Dropdown>
`
                }</TypeScriptCode>
            </OrientationProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} floatingPlacement='top' floatingOffset={0} floatingShift={0} />
                <FloatingPlacementProperty />
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
