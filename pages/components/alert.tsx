import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { popup, alert, closeButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Alert as OriAlert, AlertProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { DetailedIconProperty } from '../../properties/sections/iconProperties'
import { ComponentProperties, ControlComponentProperty, IconComponentProperty } from '../../properties/sections/componentProperties'



const Alert = (props: AlertProps) => <OriAlert {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

// const defaultFloatingChildren      = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore molestiae incidunt.';
const defaultFloatingChildrenShort = '    Lorem ipsum dolor.';



const DemoAlert = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', overflow: 'hidden'}}>
            <Alert expanded={isFlip} style={{maxBlockSize: '100%', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi, perferendis recusandae, neque totam voluptatem unde nihil illum quibusdam facilis? Deserunt aperiam possimus deleniti. Minima, debitis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi.
                </p>
            </Alert>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '13rem', overflow: 'hidden', justifyContent: 'start'}}>
            <p>
                <code>{`<Alert expanded={${isFlip}}>`}</code>
            </p>
            <Alert expanded={isFlip} style={{maxBlockSize: '100%', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi, perferendis recusandae, neque totam voluptatem unde nihil illum quibusdam facilis? Deserunt aperiam possimus deleniti. Minima, debitis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi.
                </p>
            </Alert>
        </CardBody>
    );
}



const AlertPage: NextPage = () => {
    return (<ComponentContextProvider component={alert} baseComponents={popup} componentFactory={<Alert theme='danger' size='sm' />}
    >
        <Head>
            <title>{`${alert.componentTag} Component`}</title>
            <meta name="description" content={`${alert.componentTag} is a UI for displaying feedback messages.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a UI for displaying feedback messages.
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
    <p>
        ...
    </p>
    <p>
        ...
    </p>
</Alert>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <DetailedIconProperty />
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildrenShort} floatingPlacement='right-start' floatingOffset={-20} floatingShift={-30} />
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
                                <p>
                                    An {'<Alert>'} with {sizeName} size
                                </p>
                            </Alert>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Alert
    size='${sizeName}'
    theme='primary'
>
    <p>
        An {'<Alert>'} with ${sizeName} size
    </p>
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
                                <p>
                                    An {'<Alert>'} with {themeName} theme
                                </p>
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
    <p>
        An {'<Alert>'} with ${themeName} theme
    </p>
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
                                <p>
                                    An {'<Alert>'} with gradient mode
                                </p>
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
    <p>
        An {'<Alert>'} with gradient mode
    </p>
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
                                <p>
                                    An {'<Alert>'} with outlined mode
                                </p>
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
    <p>
        An {'<Alert>'} with outlined mode
    </p>
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
                                <p>
                                    An {'<Alert>'} without mild mode
                                </p>
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
    <p>
        An {'<Alert>'} without mild mode
    </p>
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
                                <p>
                                    An {'<Alert>'} with nude mode
                                </p>
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
    <p>
        An {'<Alert>'} with nude mode
    </p>
</Alert>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <ComponentProperties>
                <IconComponentProperty />
                <ControlComponentProperty control={closeButton} />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                <AccordionItem label='Spacings'>
                    <List listStyle='flush'>
                        <ListItem>
                            <code>gapInline</code>
                            <p>The default <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children.</p>
                        </ListItem>
                        <ListItem>
                            <code>gapBlock</code>
                            <p>The default <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children.</p>
                        </ListItem>
                        <ListItem>
                            <code>gapInlineSm</code>
                            <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                        </ListItem>
                        <ListItem>
                            <code>gapBlockSm</code>
                            <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                        </ListItem>
                        <ListItem>
                            <code>gapInlineLg</code>
                            <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                        </ListItem>
                        <ListItem>
                            <code>gapBlockLg</code>
                            <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
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
