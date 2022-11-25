import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { generic, collapse } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Collapse as OriCollapse, CollapseProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Collapse = (props: CollapseProps) => <OriCollapse {...props} expanded={props.expanded ?? true} />

const DemoCollapse = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem'}}>
            <Collapse expanded={isFlip}>
                Hurry up!
            </Collapse>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Collapse expanded={${isFlip}}>`}</code>
            </p>
            <Collapse expanded={isFlip}>
                Hopla!
            </Collapse>
        </CardBody>
    );
}



const CollapsePage: NextPage = () => {
    return (<ComponentContextProvider component={collapse} baseComponents={generic} componentFactory={<Collapse {...({size: undefined, theme: undefined} as {})} />}>
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
                <Preview display='down' stretch={false} cardBodyComponent={<DemoCollapse />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Collapse
    expanded={true}
>
    Hopla!
</Collapse>
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
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Collapse
                                key={index}
                                orientation={orientationName}
                            >
                                A {'<Collapse>'} with collapsing ${orientationName}
                            </Collapse>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Collapse
    orientation='${orientationName}'
>
    A ${'<Collapse>'} with collapsing ${orientationName}
</Collapse>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
            </VariantProperties>
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
