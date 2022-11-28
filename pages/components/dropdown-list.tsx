import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { collapse, list, dropdownList } from '../../packages/packageList'
import { orientationOptions, OrientationProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { DropdownList as OriDropdownList, DropdownListProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { DropdownUiProperty } from '../../properties/sections/dropdownProperties'
import { DummyUiBig } from '../../components/DummyUi'



const DropdownList = (props: Partial<DropdownListProps>) => <OriDropdownList {...props} expanded={props.expanded ?? true}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdownList>

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdownList = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '128px', alignItems: 'start'}}>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <DropdownList expanded={isFlip} orientation='block' />
            </div>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <DropdownList expanded={isFlip} orientation='inline' />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', justifyContent: 'start'}}>
            <p>
                <code>{`<DropdownList expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <DropdownList expanded={isFlip} orientation='block' floatingAutoFlip={false} floatingAutoShift={false} />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '8rem', alignItems: 'start'}}>
            <div style={{display: 'flex', gap: 'inherit', justifyContent: 'center', alignSelf: 'stretch'}}>
                {orientationOptions.map((orientation, index) =>
                    <div key={index} style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                        <DropdownList expanded={isFlip} orientation={orientation} floatingAutoFlip={false} floatingAutoShift={false} />
                    </div>
                )}
            </div>
        </CardBody>
    );
}



const DropdownListPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdownList} baseComponents={list} componentFactory={
        <DropdownList orientation='block' floatingAutoFlip={false} floatingAutoShift={false} {...({size: undefined, theme: undefined} as {})}>
            <DummyUiBig />
        </DropdownList>
    }>
        <Head>
            <title>{`${dropdownList.componentTag} Component`}</title>
            <meta name="description" content={`${dropdownList.componentTag} is an overlayed ${list.componentTag} as context menu.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is an overlayed {list.packageLink} as context menu.
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
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownList />} />
            </HeroSection>
            <ComponentInstallation />
            <DropdownUiProperty />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<DropdownList
    expanded={true}
    orientation='block'
>
    <YourComponent />
</DropdownList>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <OrientationProperty>
                <Preview display='right' stretch={true} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
                    orientationOptions.map((orientation) =>
`
<DropdownList
    expanded={true}
    orientation='${orientation}'
>
    <YourComponent />
</DropdownList>
`
                    ).join('\n\n')
                }</TypeScriptCode>
            </OrientationProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} floatingPlacement='top-end' floatingOffset={-10} floatingShift={20} />
                <FloatingPlacementProperty floatingComponent={<DropdownList>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img alt='<YourComponent />' src='/images/lorem-image-1.svg' width={32} height={32} />
                </DropdownList>} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty floatingChildren={defaultFloatingChildren} />
                <FloatingAutoShiftProperty floatingChildren={defaultFloatingChildren} />
                <FloatingOffsetProperty floatingChildren={defaultFloatingChildren} />
                <FloatingShiftProperty floatingChildren={defaultFloatingChildren} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default DropdownListPage
