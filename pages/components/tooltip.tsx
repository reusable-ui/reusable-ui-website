import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { popup, tooltip, closeButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Tooltip as OriTooltip, TooltipProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { DetailedIconProperty } from '../../properties/sections/iconProperties'
import { ComponentProperties, ControlComponentProperty, IconComponentProperty } from '../../properties/sections/componentProperties'



const Tooltip = (props: TooltipProps) => <OriTooltip {...props} theme={props.theme ?? 'warning'} expanded={props.expanded ?? true} />

// const defaultFloatingChildren      = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore molestiae incidunt.';
const defaultFloatingChildrenShort = '    Click here to order!';



const DemoTooltip = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', overflow: 'hidden'}}>
            <Tooltip expanded={isFlip} style={{maxBlockSize: '100%', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi, perferendis recusandae, neque totam voluptatem unde nihil illum quibusdam facilis? Deserunt aperiam possimus deleniti. Minima, debitis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi.
                </p>
            </Tooltip>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '13rem', overflow: 'hidden', justifyContent: 'start'}}>
            <p>
                <code>{`<Tooltip expanded={${isFlip}}>`}</code>
            </p>
            <Tooltip expanded={isFlip} style={{maxBlockSize: '100%', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi, perferendis recusandae, neque totam voluptatem unde nihil illum quibusdam facilis? Deserunt aperiam possimus deleniti. Minima, debitis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero blanditiis ullam officia quasi.
                </p>
            </Tooltip>
        </CardBody>
    );
}



const TooltipPage: NextPage = () => {
    return (<ComponentContextProvider component={tooltip} baseComponents={popup} componentFactory={<OriTooltip theme='warning' floatingAutoFlip={false} floatingAutoShift={false} />}
    >
        <Head>
            <title>{`${tooltip.componentTag} Component`}</title>
            <meta name="description" content={`${tooltip.componentTag} represents advisory information related to the element it belongs.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents advisory information related to the element it belongs.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoTooltip />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Tooltip
    expanded={true}
    theme='warning'
>
    <p>
        ...
    </p>
    <p>
        ...
    </p>
</Tooltip>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildrenShort} floatingPlacement='right' floatingOffset={0} floatingShift={0} />
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
                            <Tooltip
                                key={index}
                                size={sizeName}
                            >
                                <p>
                                    An {'<Tooltip>'} with {sizeName} size
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Tooltip
    size='${sizeName}'
    theme='warning'
>
    <p>
        An {'<Tooltip>'} with ${sizeName} size
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                theme={themeName}
                            >
                                <p>
                                    An {'<Tooltip>'} with {themeName} theme
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Tooltip
    theme='${themeName}'
>
    <p>
        An {'<Tooltip>'} with ${themeName} theme
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                <p>
                                    An {'<Tooltip>'} with gradient mode
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Tooltip
    gradient={true}
    theme='${themeName}'
>
    <p>
        An {'<Tooltip>'} with gradient mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                <p>
                                    An {'<Tooltip>'} with outlined mode
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Tooltip
    outlined={true}
    theme='${themeName}'
>
    <p>
        An {'<Tooltip>'} with outlined mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                mild={false}
                                theme={themeName}
                            >
                                <p>
                                    An {'<Tooltip>'} without mild mode
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Tooltip
    mild={false}
    theme='${themeName}'
>
    <p>
        An {'<Tooltip>'} without mild mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                <p>
                                    An {'<Tooltip>'} with nude mode
                                </p>
                            </Tooltip>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Tooltip
    nude={true}
    theme='${themeName}'
>
    <p>
        An {'<Tooltip>'} with nude mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <ComponentProperties>
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>boxShadow</code>
                                <p>The <code>boxShadow</code> to apply, so that the <TheComponentLink /> appears hovering over the corresponding component.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <TheComponentLink /> is handled.</p>
                            </ListItem>
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
                    <AccordionItem label='Arrows'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>arrowInlineSize</code>
                                <p>The <strong>width</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowBlockSize</code>
                                <p>The <strong>height</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>arrowClipPath</code>
                                <p>The <strong>shape</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>arrowTopTransform</code>
                                <p>The <strong>transform</strong> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the top</strong> of corresponding component (pointing to bottom).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowRightTransform</code>
                                <p>The <strong>transform</strong> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the right</strong> of corresponding component (pointing to left).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowBottomTransform</code>
                                <p>The <strong>transform</strong> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the bottom</strong> of corresponding component (pointing to top).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowLeftTransform</code>
                                <p>The <strong>transform</strong> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the left</strong> of corresponding component (pointing to right).</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {tooltips, tooltipValues} from '@reusable-ui/tooltip';

tooltips.opacity = 0.5;
console.log('opacity variable name: ', tooltips.opacity);
console.log('opacity variable value: ', tooltipValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default TooltipPage
