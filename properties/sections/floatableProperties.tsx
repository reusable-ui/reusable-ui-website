import React, { Suspense, useEffect, useRef, useState } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { BasicProps, CardBody, List, ListItem } from '@reusable-ui/components'
import { Warning } from '../../components/Warning'
import { CollapsibleProps, FloatableProps, FloatingPlacement } from '@reusable-ui/core'
import { TypeScriptCode } from '../../components/Code'
import { Preview } from '../../components/Preview'
import { useFlipFlop } from '../../hooks/flipFlop'
import SelectFloatingPlacement from '../../components/SelectFloatingPlacement'
import { useInViewport } from '../../hooks/inViewport'

const Button = React.lazy(() => import(/* webpackChunkName: 'Button' */'@reusable-ui/button'));
const Range  = React.lazy(() => import(/* webpackChunkName: 'Range'  */'@reusable-ui/range'));




export interface FloatingPropertiesProps {
    children : React.ReactNode
}
export const FloatingProperties = ({children} : FloatingPropertiesProps) => {
    return (
        <Section title='Floating Properties'>
            <p>
                Determines how the <TheComponentLink /> should be <strong>floating on</strong> the <strong>target DOM reference</strong>.
            </p>
            {children}
        </Section>
    );
}



export interface DemoFloatingProps {
    floatingComponent ?: React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    targetComponent   ?: React.ReactElement<BasicProps>
    
    targetChildren    ?: string|false
    floatingChildren  ?: string|false
}
export interface CodeFloatingProps {
    floatingComponent ?: React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    targetTag         ?: string
    
    targetChildren    ?: string|false
    floatingChildren  ?: string|false
}

const defaultTargetComponent   = <Button />;
const defaultTargetTag         = 'Button'
const defaultTargetChildren    = '    Order Now! Limited offer.'
const defaultAltTargetChildren =
`    Order
    <br />
    Now!
    <br />
    <br />
    Limited
    <br />
    offer`;
const defaultFloatingChildren  = '    Hurry up!'



interface UseComponentPropertiesProps {
    overrideFloatingComponent ?: React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
}
const useComponentProperties = ({overrideFloatingComponent}: UseComponentPropertiesProps) => {
    const {component: {componentName: floatingTag}, componentFactory} = useComponentInfo();
    const floatingComponent = overrideFloatingComponent ?? componentFactory;
    
    const componentOrientation        = floatingComponent?.props.orientation ?? undefined;
    const componentOrientationStr     = (componentOrientation !== undefined) ? `\n    orientation='${componentOrientation}'` : '';
    
    const componentSize        = ('size'  in floatingComponent?.props) ? floatingComponent?.props.size  : 'sm';
    const componentSizeStr     = (componentSize !== undefined) ? `\n    size='${componentSize}'` : '';
    
    const componentTheme       = ('theme' in floatingComponent?.props) ? floatingComponent?.props.theme : 'danger';
    const componentThemeStr    = (componentTheme !== undefined) ? `\n    theme='${componentTheme}'` : '';
    
    const componentOutlined    = floatingComponent?.props.outlined ?? undefined;
    const componentOutlinedStr = (componentOutlined !== undefined) ? `\n    outlined={${componentOutlined}}` : '';
    
    const componentNude        = floatingComponent?.props.nude     ?? undefined;
    const componentNudeStr     = (componentNude !== undefined) ? `\n    nude={${componentNude}}` : '';
    
    return ({
        floatingTag,
        floatingProperties: (
            componentOrientationStr
            +
            componentSizeStr
            +
            componentThemeStr
            +
            componentOutlinedStr
            +
            componentNudeStr
        ),
    });
}




interface BaseFloatingOnProps {
    floatingPlacement ?: FloatingPlacement
    floatingOffset    ?: number
    floatingShift     ?: number
}
interface DemoFloatingOnProps extends DemoFloatingProps, BaseFloatingOnProps {
}
const DemoFloatingOn = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren, floatingPlacement = 'right-start', floatingOffset = -50, floatingShift = -15}: DemoFloatingOnProps) => {
    const {componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    const buttonRef = useRef<HTMLElement>(null);
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, targetComponent.props.children ?? targetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    return (
        <CardBody style={{gap: '4rem'}}>
            <Suspense>
                <div>
                    {targetComponent}
                    {floatingComponent}
                </div>
                
                <div>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? floatingPlacement,
                        floatingOffset    : floatingComponent.props.floatingOffset    ?? floatingOffset,
                        floatingShift     : floatingComponent.props.floatingShift     ?? floatingShift,
                    })}
                </div>
            </Suspense>
        </CardBody>
    );
}
interface CodeFloatingOnProps extends CodeFloatingProps, BaseFloatingOnProps {
}
const CodeFloatingOn = ({floatingComponent: overrideFloatingComponent, targetTag = defaultTargetTag, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren, floatingPlacement = 'right-start', floatingOffset = -50, floatingShift = -15}: CodeFloatingOnProps) => {
    const {floatingTag, floatingProperties} = useComponentProperties({overrideFloatingComponent});
    
    
    return (
        <TypeScriptCode>{
`
<${targetTag}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}



<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    floatingOn={buttonRef}
    floatingPlacement='${floatingPlacement}'
    floatingOffset={${floatingOffset}}
    floatingShift={${floatingShift}}
    
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}
`
        }</TypeScriptCode>
    );
}

const DemoFloatingPlacement = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: DemoFloatingProps) => {
    const {componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, targetComponent.props.children ?? targetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    return (
        <SelectFloatingPlacement>{(floatingPlacement) =>
            <Suspense>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? floatingPlacement,
                    })}
                </div>
            </Suspense>
        }</SelectFloatingPlacement>
    );
}

const DemoAutoFlip = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: DemoFloatingProps) => {
    const {componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, targetComponent.props.children ?? targetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    const [viewportRef, isInViewport] = useInViewport<HTMLElement>();
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        const viewportElm = viewportRef.current;
        if (!viewportElm) return;
        
        
        
        // setups:
        const interval = 2000;
        const steps = 20;
        const scrollLength = viewportElm.scrollHeight - viewportElm.clientHeight;
        const cancelInterval = setInterval(() => {
            const globalTick     = Date.now();
            const subInterval    = interval / steps;
            const globalScrolls  = Math.ceil(globalTick / subInterval) % (steps * 2);
            const globalFlipFlop = (globalScrolls <= steps) ? globalScrolls : ((steps * 2) - globalScrolls);
            viewportElm.scrollTo({top: Math.round(globalFlipFlop * (scrollLength / steps)), behavior: 'smooth'});
        }, interval / steps);
        
        
        
        // cleanups:
        return () => {
            clearInterval(cancelInterval);
        };
    }, [isInViewport]);
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', pointerEvents: 'none', gap: '5rem', justifyContent: 'start', overflowY: 'scroll'}}>
            <Suspense>
                <div>
                </div>
                
                <div>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'top',
                        floatingAutoFlip  : true,
                    })}
                </div>
                
                <div style={{width: '1px', height: '1px', flex: '0 0 auto'}}>
                </div>
            </Suspense>
        </CardBody>
    );
}
const CodeAutoFlip = ({floatingComponent: overrideFloatingComponent, targetTag = defaultTargetTag, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: CodeFloatingProps) => {
const {floatingTag, floatingProperties} = useComponentProperties({overrideFloatingComponent});
    
    
    
    return (
        <TypeScriptCode>{
`
<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingAutoFlip={true}
    
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}
`
        }</TypeScriptCode>
    );
}

const DemoAutoShift = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultAltTargetChildren, floatingChildren = defaultFloatingChildren}: DemoFloatingProps) => {
    const {componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, ((targetChildren === false) ? false : targetChildren.split('<br />').flatMap((child, index, arr) => (index < (arr.length - 1) ? [child, <br key={index} />] : [child]))));
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    const [viewportRef, isFlip, isInViewport] = useFlipFlop<boolean, HTMLElement>({defaultState: true});
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    
    
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        const viewportElm = viewportRef.current;
        if (!viewportElm) return;
        
        
        
        // setups:
        const interval = 2000;
        const steps = 20;
        const scrollLength = viewportElm.scrollHeight - viewportElm.clientHeight;
        const cancelInterval = setInterval(() => {
            const globalTick     = Date.now();
            const subInterval    = interval / steps;
            const globalScrolls  = Math.ceil(globalTick / subInterval) % (steps * 2);
            const globalFlipFlop = (globalScrolls <= steps) ? globalScrolls : ((steps * 2) - globalScrolls);
            viewportElm.scrollTo({top: Math.round(globalFlipFlop * (scrollLength / steps)), behavior: 'smooth'});
        }, interval / steps);
        
        
        
        // cleanups:
        return () => {
            clearInterval(cancelInterval);
        };
    }, [isFlip, isInViewport]);
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', pointerEvents: 'none', gap: '5rem', justifyContent: 'start', overflowY: 'scroll'}}>
            <Suspense>
                <div>
                </div>
                
                <div>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'right',
                        floatingAutoShift : true,
                    })}
                </div>
                
                <div style={{width: '1px', height: '1px', flex: '0 0 auto'}}>
                </div>
            </Suspense>
        </CardBody>
    );
}
const CodeAutoShift = ({floatingComponent: overrideFloatingComponent, targetTag = defaultTargetTag, targetChildren = defaultAltTargetChildren, floatingChildren = defaultFloatingChildren}: CodeFloatingProps) => {
const {floatingTag, floatingProperties} = useComponentProperties({overrideFloatingComponent});
    
    
    
    return (
        <TypeScriptCode>{
`
<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    floatingOn={buttonRef}
    floatingPlacement='right'
    floatingAutoShift={true}
    
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}
`
        }</TypeScriptCode>
    );
}

const DemoFloatingOffset = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: DemoFloatingProps) => {
    const {component: {componentName: floatingTag}, componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, targetComponent.props.children ?? targetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [floatingOffset, setFloatingOffset] = useState<number>(0);
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFloatingOffset(event.target.valueAsNumber);
    };
    
    
    
    return (
        <CardBody style={{boxSizing: 'content-box', minBlockSize: '12rem'}}>
            <Suspense>
                <p style={{marginBlockEnd: '3rem'}}>
                    <code>{`<${floatingTag} floatingOffset={${floatingOffset}}>`}</code>
                </p>
                
                <div>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'top',
                        floatingOffset    : floatingComponent.props.floatingOffset    ?? floatingOffset,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'right',
                        floatingOffset    : floatingComponent.props.floatingOffset    ?? floatingOffset,
                    })}
                </div>
                
                <Range theme='primary' min={-20} max={20} onChange={handleChange} />
            </Suspense>
        </CardBody>
    );
}
const CodeFloatingOffset = ({floatingComponent: overrideFloatingComponent, targetTag = defaultTargetTag, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: CodeFloatingProps) => {
const {floatingTag, floatingProperties} = useComponentProperties({overrideFloatingComponent});
    
    
    
    return (
        <TypeScriptCode>{
`
<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingOffset={10}
    
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}
`
        }</TypeScriptCode>
    );
}

const DemoFloatingShift = ({floatingComponent: overrideFloatingComponent, targetComponent = defaultTargetComponent, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: DemoFloatingProps) => {
    const {component: {componentName: floatingTag}, componentFactory} = useComponentInfo();
    let   floatingComponent = overrideFloatingComponent ?? componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, targetComponent.props.children ?? targetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, floatingComponent.props.children ?? floatingChildren);
    
    
    
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [floatingShift, setFloatingShift] = useState<number>(0);
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFloatingShift(event.target.valueAsNumber);
    };
    
    
    
    return (
        <CardBody style={{boxSizing: 'content-box', minBlockSize: '12rem'}}>
            <Suspense>
                <p style={{marginBlockEnd: '3rem'}}>
                    <code>{`<${floatingTag} floatingShift={${floatingShift}}>`}</code>
                </p>
                
                <div>
                    {React.cloneElement(targetComponent, {
                        elmRef : targetComponent.props.elmRef ?? buttonRef,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'top',
                        floatingShift     : floatingComponent.props.floatingShift     ?? floatingShift,
                    })}
                    {React.cloneElement(floatingComponent, {
                        floatingOn        : floatingComponent.props.floatingOn        ?? buttonRef,
                        floatingPlacement : floatingComponent.props.floatingPlacement ?? 'right',
                        floatingShift     : floatingComponent.props.floatingShift     ?? floatingShift,
                    })}
                </div>
                
                <Range theme='primary' min={-20} max={20} onChange={handleChange} />
            </Suspense>
        </CardBody>
    );
}
const CodeFloatingShift = ({floatingComponent: overrideFloatingComponent, targetTag = defaultTargetTag, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: CodeFloatingProps) => {
const {floatingTag, floatingProperties} = useComponentProperties({overrideFloatingComponent});
    
    
    
    return (
        <TypeScriptCode>{
`
<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
${(targetChildren === false) ? '/>' :
`>
${targetChildren}
</${targetTag}>`
}
<${floatingTag}
    floatingOn={buttonRef}
    floatingPlacement='top'
    floatingShift={10}
    
    expanded={true}${floatingProperties}
${(floatingChildren === false) ? '/>' :
`>
${floatingChildren}
</${floatingTag}>`
}
`
        }</TypeScriptCode>
    );
}



export interface FloatingOnPropertyProps extends PreviewProps, BaseFloatingOnProps {
}
export const FloatingOnProperty = ({children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren, floatingPlacement, floatingOffset, floatingShift}: FloatingOnPropertyProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingOn} preview={preview ?? <>
            <Preview display='down' stretch={true} cardBodyComponent={<DemoFloatingOn targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} floatingPlacement={floatingPlacement} floatingOffset={floatingOffset} floatingShift={floatingShift} />} />
            <p></p>
            <CodeFloatingOn floatingComponent={floatingComponent} targetTag={targetTag} targetChildren={targetChildren} floatingChildren={floatingChildren} floatingPlacement={floatingPlacement} floatingOffset={floatingOffset} floatingShift={floatingShift} />
        </>}>
            <p>
                Determines the <strong>target DOM reference</strong> where the <TheComponentLink /> should be <strong>floating on</strong>.<br />
                If not set (<code>undefined</code>), the <TheComponentLink /> becomes a normal element flow.
            </p>
        </PropertySection>
    );
}
export const FloatingPlacementProperty = ({children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren}: PreviewProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingPlacement} preview={preview ?? <>
            <DemoFloatingPlacement targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} />
        </>}>
            <p>
                Determines the <strong>location</strong> where the <TheComponentLink /> should be <strong>floating on</strong> the <em>target DOM reference</em>.
            </p>
        </PropertySection>
    );
}
export interface FloatingStrategyPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingStrategyProperty = ({possibleValues, children: preview}: FloatingStrategyPropertyProps) => {
    return (
        <PropertySection property={properties.floatingStrategy} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> strategy.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'absolute'`}</code>}>
                    <p>
                        Makes the <TheComponentLink /> positioned <code>absolute</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'fixed'`}</code>}>
                    <p>
                        Makes the <TheComponentLink /> positioned <code>fixed</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines the <strong>technical strategy</strong> how the <TheComponentLink /> can float.<br />
                In <em>most cases</em>, you should not worry about the detail mechanism how the <TheComponentLink /> can float.
            </p>
        </PropertySection>
    );
}
export interface FloatingAutoFlipPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingAutoFlipProperty = ({possibleValues, children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren}: FloatingAutoFlipPropertyProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingAutoFlip} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`true`}</code>}>
                    <p>
                        <strong>Activates</strong> the <strong>auto flip</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`false`}</code>}>
                    <p>
                        <strong>Deactivates</strong> the <strong>auto flip</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } preview={preview ?? <>
            <Preview display='down' stretch={false} cardBodyComponent={<DemoAutoFlip targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} />} />
            <p></p>
            <CodeAutoFlip floatingComponent={floatingComponent} targetTag={targetTag} targetChildren={targetChildren} floatingChildren={floatingChildren} />
        </>}>
            <p>
                <strong>Automatically flips</strong> the {properties.floatingPlacement.propertyShortDisplay} to <strong>opposite direction</strong> when the <TheComponentLink /> is about to be clipped.
            </p>
        </PropertySection>
    );
}
export interface FloatingAutoShiftPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingAutoShiftProperty = ({possibleValues, children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren}: FloatingAutoShiftPropertyProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingAutoShift} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`true`}</code>}>
                    <p>
                        <strong>Activates</strong> the <strong>auto shift</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`false`}</code>}>
                    <p>
                        <strong>Deactivates</strong> the <strong>auto shift</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } preview={preview ?? <>
            <Preview display='down' stretch={false} cardBodyComponent={<DemoAutoShift targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} />} />
            <p></p>
            <CodeAutoShift floatingComponent={floatingComponent} targetTag={targetTag} targetChildren={targetChildren} floatingChildren={floatingChildren} />
        </>}>
            <p>
                <strong>Automatically shifts</strong> the {properties.floatingPlacement.propertyShortDisplay} to <strong>nearest safe position</strong> when the <TheComponentLink /> is about to be clipped.
            </p>
        </PropertySection>
    );
}
export interface FloatingOffsetPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingOffsetProperty = ({possibleValues, children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren}: FloatingOffsetPropertyProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingOffset} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> distance.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>0</code>}>
                    <p>
                        Makes the <TheComponentLink /> <strong>touch</strong> the <strong>target DOM reference</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<strong>positive number</strong>}>
                    <p>
                        Makes a <strong>gap</strong> between the <TheComponentLink /> and the <strong>target DOM reference</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<strong>negative number</strong>}>
                    <p>
                        Makes the <TheComponentLink /> <strong>inside</strong> the <strong>target DOM reference</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } preview={preview ?? <>
            <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingOffset targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} />} />
            <p></p>
            <CodeFloatingOffset floatingComponent={floatingComponent} targetTag={targetTag} targetChildren={targetChildren} floatingChildren={floatingChildren} />
        </>}>
            <p>
                The <strong>distance</strong> (in pixel) between the <TheComponentLink /> and the <strong>target DOM reference</strong>.
            </p>
        </PropertySection>
    );
}
export interface FloatingShiftPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingShiftProperty = ({possibleValues, children: preview, targetComponent, targetTag, targetChildren, floatingComponent, floatingChildren}: FloatingShiftPropertyProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingShift} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> distance.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>0</code>}>
                    <p>
                        Makes the <TheComponentLink /> placed <strong>at</strong> the <strong>default {properties.floatingPlacement.propertyShortDisplay} location</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<strong>positive number</strong>}>
                    <p>
                        Makes the <TheComponentLink /> placed <strong>before</strong> the <strong>default {properties.floatingPlacement.propertyShortDisplay} location</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<strong>negative number</strong>}>
                    <p>
                        Makes the <TheComponentLink /> placed <strong>after</strong> the <strong>default {properties.floatingPlacement.propertyShortDisplay} location</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } preview={preview ?? <>
            <Preview display='down' stretch={false} cardBodyComponent={<DemoFloatingShift targetComponent={targetComponent} targetChildren={targetChildren} floatingComponent={floatingComponent} floatingChildren={floatingChildren} />} />
            <p></p>
            <CodeFloatingShift floatingComponent={floatingComponent} targetTag={targetTag} targetChildren={targetChildren} floatingChildren={floatingChildren} />
        </>}>
            <p>
                The <strong>distance</strong> (in pixel) between the <TheComponentLink /> and the <strong>default {properties.floatingPlacement.propertyShortDisplay} location</strong>.
            </p>
        </PropertySection>
    );
}
export const OnFloatingUpdateProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.onFloatingUpdate} preview={preview}>
            <p>
                Sets a <strong>callback function</strong> to be called when the <TheComponentLink /> <strong>updates the position</strong> relative to the <strong>target DOM reference</strong>.
            </p>
            <p>
                The callback function parameters:
            </p>
            <Accordion theme='primary'>
                <AccordionItem label={<code>event: FloatingPosition</code>}>
                    <List listStyle='flush'>
                        <ListItem>
                            <code>placement: Placement</code>
                            <p>
                                A <code>string</code> represents {properties.floatingPlacement.propertyShortDisplay}.
                            </p>
                        </ListItem>
                        <ListItem>
                            <code>strategy: Strategy</code>
                            <p>
                                A <code>string</code> represents {properties.floatingStrategy.propertyShortDisplay}.
                            </p>
                        </ListItem>
                        <ListItem>
                            <code>middlewareData: MiddlewareData</code>
                            <p>
                                An <code>object</code> represents an information of <em>floating state</em> (offset, shift, placement, etc).
                            </p>
                            <Warning>
                                <p>
                                    We&apos;ll improve this detail soon. Sorry for a bad documentation. 😅
                                </p>
                            </Warning>
                        </ListItem>
                    </List>
                </AccordionItem>
            </Accordion>
        </PropertySection>
    );
}
