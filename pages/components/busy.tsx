import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { badge, busy } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Busy as OriBusy, BusyProps, List, ListItem, CardBody, Button } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Busy = (props: BusyProps) => <OriBusy {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

const defaultTargetChildren    = '    Processing... Please wait.'
const defaultAltTargetChildren =
`    Processing
    <br />
    ...
    <br />
    <br />
    Please
    <br />
    wait.`;
const defaultFloatingChildren = false;



const DemoBusy = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    const buttonRef1 = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem', gap: '4rem'}}>
            <Button elmRef={buttonRef1} theme='primary' size='lg' pressed={true}>
                Processing...
            </Button>
            <Busy theme='primary' size='lg' expanded={true} floatingOn={buttonRef1} floatingPlacement='right' floatingOffset={8}>
                {defaultFloatingChildren}
            </Busy>
            
            <Button theme='danger' size='lg'>
                Saving
                <Busy mild='inherit' outlined={false}>
                    New!
                </Busy>
            </Button>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Busy expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <Busy expanded={isFlip} size='lg'>
                {defaultFloatingChildren}
            </Busy>
        </CardBody>
    );
}



const BusyPage: NextPage = () => {
    return (<ComponentContextProvider component={busy} baseComponents={badge} componentFactory={
        <Busy theme='primary' size='lg' />
    }>
        <Head>
            <title>{`${busy.componentTag} Component`}</title>
            <meta name="description" content={`${busy.componentTag} represents counters or labels.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents counters or labels.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoBusy />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Busy
    expanded={true}
    theme='primary'
    size='lg'
/>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty targetChildren={defaultTargetChildren} floatingChildren={defaultFloatingChildren} floatingOffset={-15} floatingShift={-12} floatingComponent={<Busy theme='primary' size='md' outlined={false} nude={false} />} />
                <FloatingPlacementProperty targetChildren={defaultTargetChildren} floatingChildren={defaultFloatingChildren} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty targetChildren={defaultTargetChildren} floatingChildren={defaultFloatingChildren} />
                <FloatingAutoShiftProperty targetChildren={defaultAltTargetChildren} floatingChildren={defaultFloatingChildren} />
                <FloatingOffsetProperty targetChildren={defaultTargetChildren} floatingChildren={defaultFloatingChildren} />
                <FloatingShiftProperty targetChildren={defaultTargetChildren} floatingChildren={defaultFloatingChildren} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Busy
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Busy
    size='${sizeName}'
    theme='primary'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Busy
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Busy
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Busy
                                key={index}
                                gradient={true}
                                nude={false}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Busy
    gradient={true}
    nude={false}
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Busy
                                key={index}
                                outlined={false}
                                nude={false}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Busy
    outlined={false}
    nude={false}
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Busy
                                key={index}
                                mild={true}
                                outlined={false}
                                nude={false}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Busy
    mild={true}
    outlined={false}
    nude={false}
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Busy
                                key={index}
                                nude={false}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Busy
    nude={false}
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {busys, busyValues} from '@reusable-ui/busy';

busys.opacity = 0.5;
console.log('opacity variable name: ', busys.opacity);
console.log('opacity variable value: ', busyValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default BusyPage
