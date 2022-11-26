import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { generic, collapse } from '../../packages/packageList'
import { OrientationProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Collapse as OriCollapse, CollapseProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { useMergeClasses } from '@reusable-ui/core'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'



const useCollapseStyleSheet = dynamicStyleSheet(() => ({
    display: 'grid',
}));



const DummyUiSmall = () => {
    return (
        <Image alt='<YourComponent />' src='/images/lorem-image-1.svg' width={48} height={48} />
    );
}
const DummyUiBig = () => {
    return (
        <Image alt='<YourComponent />' src='/images/lorem-image-1.svg' width={128} height={128} />
    );
}
const Collapse = (props: CollapseProps) => {
    const styleSheet = useCollapseStyleSheet();
    
    const classes = useMergeClasses(
        props.classes,
        styleSheet.main,
    );
    
    return (
        <OriCollapse
            {...props}
            expanded={props.expanded ?? true}
            classes={classes}
        >
            {props.children ?? <DummyUiBig />}
        </OriCollapse>
    );
}

const defaultFloatingChildren = '    <YourComponent />'



const DemoCollapse = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '128px', alignItems: 'start'}}>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <Collapse expanded={isFlip} orientation='block' />
            </div>
            <div style={{boxSizing: 'border-box', inlineSize: '128px', blockSize: '128px'}}>
                <Collapse expanded={isFlip} orientation='inline' />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Collapse expanded={${isFlip}}>`}</code>
            </p>
            <Collapse expanded={isFlip} orientation='block' />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '8rem', alignItems: 'start'}}>
            <div style={{display: 'flex', gap: 'inherit', justifyContent: 'center', alignSelf: 'stretch'}}>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <Collapse expanded={isFlip} orientation='block' />
                </div>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <Collapse expanded={isFlip} orientation='inline' />
                </div>
            </div>
        </CardBody>
    );
}



const CollapsePage: NextPage = () => {
    return (<ComponentContextProvider component={collapse} baseComponents={generic} componentFactory={<Collapse orientation='block' {...({size: undefined, theme: undefined} as {})}>
        <DummyUiSmall />
    </Collapse>}>
        <Head>
            <title>{`${collapse.componentTag} Component`}</title>
            <meta name="description" content={`${collapse.componentTag} is a non-visual container with dynamic visibility (show/hide) in sliding fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a non-visual container with dynamic visibility (show/hide) in sliding fashion.<br />
                    You need to place a visual (styled) component inside the <TheComponentLink /> in order to make the appearance.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoCollapse />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Collapse
    expanded={true}
    orientation='block'
>
    <YourComponent />
</Collapse>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OrientationProperty>
                <Preview display='right' stretch={true} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
`
<Collapse
    expanded={true}
    orientation='block'
>
    <YourComponent />
</Collapse>



<Collapse
    expanded={true}
    orientation='inline'
>
    <YourComponent />
</Collapse>
`
                }</TypeScriptCode>
            </OrientationProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} floatingPlacement='top' floatingOffset={0} floatingShift={0} />
                <FloatingPlacementProperty floatingComponent={<Collapse>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img alt='<YourComponent />' src='/images/lorem-image-1.svg' width={32} height={32} />
                </Collapse>} />
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
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animExpand</code>
                                <p>Represents default <strong>expanding animation</strong>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapse</code>
                                <p>Represents default <strong>collapsing animation</strong>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animExpandInline</code>
                                <p>Represents <strong>expanding animation</strong>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code> when <code>{`orientation='inline'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapseInline</code>
                                <p>Represents <strong>collapsing animation</strong>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code> when <code>{`orientation='inline'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {collapses, collapseValues} from '@reusable-ui/collapse';

collapses.opacity = 0.5;
console.log('opacity variable name: ', collapses.opacity);
console.log('opacity variable value: ', collapseValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default CollapsePage
