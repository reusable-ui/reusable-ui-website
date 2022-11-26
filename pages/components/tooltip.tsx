import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { popup, tooltip, closeButton } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Tooltip as OriTooltip, TooltipProps, List, ListItem, CardBody, Button } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { CollapseDelayProperty, ExpandDelayProperty, LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { DetailedIconProperty } from '../../properties/sections/iconProperties'
import { ArrowComponentProperty, ArrowRefProperty, ComponentProperties, ControlComponentProperty, IconComponentProperty } from '../../properties/sections/componentProperties'



const Tooltip = (props: TooltipProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <>
            <Button elmRef={buttonRef} theme='success' size='lg'>
                Order Now!
            </Button>
            <OriTooltip
                theme={props.theme ?? 'warning'}
                expanded={props.expanded ?? true}
                
                floatingOn={buttonRef}
                floatingPlacement='right'
                floatingAutoFlip={false}
                floatingAutoShift={false}
                
                {...props}
            >
                {props.children ?? <>
                    <p>
                        Hurry up! Limited edition.
                    </p>
                    <p>
                        A <strong>special discount</strong> today.
                    </p>
                </>}
            </OriTooltip>
        </>
    );
};

// const defaultFloatingChildren      = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore molestiae incidunt.';
const defaultFloatingChildrenShort = '    Click here to order!';



const DemoTooltip = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '10rem', overflow: 'hidden'}}>
            <Tooltip expanded={isFlip} floatingAutoFlip={true} floatingAutoShift={true} />
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '10rem', overflow: 'hidden', justifyContent: 'start'}}>
            <p>
                <code>{`<Tooltip expanded={${isFlip}}>`}</code>
            </p>
            <Tooltip expanded={isFlip} floatingAutoFlip={true} floatingAutoShift={true} />
        </CardBody>
    );
}



const TooltipPage: NextPage = () => {
    return (<ComponentContextProvider component={tooltip} baseComponents={popup} componentFactory={<OriTooltip theme='warning' size='md' floatingAutoFlip={false} floatingAutoShift={false} />}
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
            <ExpandedProperty uncontrollableBehavior={<p><strong>Automatically show/hide</strong> the <TheComponentLink /> when the user <strong>hover</strong>/<strong>focus</strong> on the corresponding component.</p>}>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
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
            <ExpandDelayProperty />
            <CollapseDelayProperty />
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildrenShort} floatingPlacement='top' floatingOffset={0} floatingShift={0} />
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
                    <Preview stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Tooltip
                                key={index}
                                size={sizeName}
                            >
                                <p>
                                    A {'<Tooltip>'} with {sizeName} size
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} with ${sizeName} size
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                theme={themeName}
                            >
                                <p>
                                    A {'<Tooltip>'} with {themeName} theme
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} with ${themeName} theme
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                <p>
                                    A {'<Tooltip>'} with gradient mode
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} with gradient mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                <p>
                                    A {'<Tooltip>'} with outlined mode
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} with outlined mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                mild={false}
                                theme={themeName}
                            >
                                <p>
                                    A {'<Tooltip>'} without mild mode
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} without mild mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Tooltip
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                <p>
                                    A {'<Tooltip>'} with nude mode
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
    
    floatingOn={buttonRef}
    floatingPlacement='right'
>
    <p>
        A {'<Tooltip>'} with nude mode
    </p>
</Tooltip>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <ComponentProperties>
                <ArrowComponentProperty />
                <ArrowRefProperty />
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
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>transformOrigin</code>
                                <p>The default <code>transform-origin</code> to apply to the <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>transformOriginTop</code>
                                <p>The <code>transform-origin</code> to apply to the <TheComponentLink /> when the <TheComponentLink /> is <strong>on the top</strong> of corresponding component (pointing to bottom).</p>
                            </ListItem>
                            <ListItem>
                                <code>transformOriginRight</code>
                                <p>The <code>transform-origin</code> to apply to the <TheComponentLink /> when the <TheComponentLink /> is <strong>on the right</strong> of corresponding component (pointing to left).</p>
                            </ListItem>
                            <ListItem>
                                <code>transformOriginBottom</code>
                                <p>The <code>transform-origin</code> to apply to the <TheComponentLink /> when the <TheComponentLink /> is <strong>on the bottom</strong> of corresponding component (pointing to top).</p>
                            </ListItem>
                            <ListItem>
                                <code>transformOriginLeft</code>
                                <p>The <code>transform-origin</code> to apply to the <TheComponentLink /> when the <TheComponentLink /> is <strong>on the left</strong> of corresponding component (pointing to right).</p>
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
                                <code>arrowInlineSizeSm</code>
                                <p>The <strong>width</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowBlockSizeSm</code>
                                <p>The <strong>height</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowInlineSizeLg</code>
                                <p>The <strong>width</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowBlockSizeLg</code>
                                <p>The <strong>height</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>arrowClipPath</code>
                                <p>The <strong>shape</strong> of the <TheComponentLink />&apos;s <strong>arrow</strong>.</p>
                            </ListItem>
                            
                            
                            <ListItem>
                                <code>arrowTransform</code>
                                <p>The default <code>transform</code> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowTransformTop</code>
                                <p>The <code>transform</code> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the top</strong> of corresponding component (pointing to bottom).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowTransformRight</code>
                                <p>The <code>transform</code> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the right</strong> of corresponding component (pointing to left).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowTransformBottom</code>
                                <p>The <code>transform</code> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the bottom</strong> of corresponding component (pointing to top).</p>
                            </ListItem>
                            <ListItem>
                                <code>arrowTransformLeft</code>
                                <p>The <code>transform</code> to apply to the <TheComponentLink />&apos;s <strong>arrow</strong> when the <TheComponentLink /> is <strong>on the left</strong> of corresponding component (pointing to right).</p>
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
