import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { popup, alert } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Alert as OriAlert, AlertProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Alert = (props: AlertProps) => <OriAlert {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

const defaultFloatingChildren      = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore molestiae incidunt, iste tenetur recusandae fuga voluptates cum architecto odit!';
const defaultFloatingChildrenShort = 'Lorem ipsum dolor.';



const DemoAlert = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem'}}>
            <Alert expanded={isFlip} theme='danger' size='lg'>
                Hurry up!
            </Alert>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Alert expanded={${isFlip}}>`}</code>
            </p>
            <Alert expanded={isFlip} theme='primary'>
                Hopla!
            </Alert>
        </CardBody>
    );
}



const AlertPage: NextPage = () => {
    return (<ComponentContextProvider component={alert} baseComponents={popup} componentFactory={<Alert theme='primary' />}
    >
        <Head>
            <title>{`${alert.componentTag} Component`}</title>
            <meta name="description" content={`${alert.componentTag} is a generic element with dynamic visibility (show/hide) in alert fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a generic element with dynamic visibility (show/hide) in alert fashion.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoAlert />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Alert
    expanded={true}
    theme='primary'
>
    Hopla!
</Alert>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} />
                <FloatingPlacementProperty floatingChildren={defaultFloatingChildrenShort} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty floatingChildren={defaultFloatingChildrenShort} />
                <FloatingAutoShiftProperty floatingChildren={defaultFloatingChildrenShort} />
                <FloatingOffsetProperty floatingChildren={defaultFloatingChildrenShort} />
                <FloatingShiftProperty floatingChildren={defaultFloatingChildrenShort} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Alert
                                key={index}
                                size={sizeName}
                            >
                                An {'<Alert>'} with {sizeName ?? 'default'} size
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Alert
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    theme='primary'
>
    An {'<Alert>'} with ${sizeName ?? 'default'} size
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Alert
                                key={index}
                                theme={themeName}
                            >
                                An {'<Alert>'} with {themeName} theme
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Alert
    theme='${themeName}'
>
    An {'<Alert>'} with ${themeName} theme
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Alert
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                An {'<Alert>'} with gradient mode
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Alert
    gradient={true}
    theme='${themeName}'
>
    An {'<Alert>'} with gradient mode
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Alert
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                An {'<Alert>'} with outlined mode
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Alert
    outlined={true}
    theme='${themeName}'
>
    An {'<Alert>'} with outlined mode
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Alert
                                key={index}
                                mild={false}
                                theme={themeName}
                            >
                                An {'<Alert>'} without mild mode
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Alert
    mild={false}
    theme='${themeName}'
>
    An {'<Alert>'} without mild mode
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Alert
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                An {'<Alert>'} with nude mode
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Alert
    nude={true}
    theme='${themeName}'
>
    An {'<Alert>'} with nude mode
</Alert>
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

import {alerts, alertValues} from '@reusable-ui/alert';

alerts.opacity = 0.5;
console.log('opacity variable name: ', alerts.opacity);
console.log('opacity variable value: ', alertValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default AlertPage
