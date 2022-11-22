import React, { useRef } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { BasicProps, CardBody, List, ListItem } from '@reusable-ui/components'
import { Warning } from '../../components/Warning'
import { CollapsibleProps, FloatableProps } from '@reusable-ui/core'
import { TypeScriptCode } from '../../components/Code'
import { Preview } from '../../components/Preview'

const Button = React.lazy(() => import(/* webpackChunkName: 'Button' */'@reusable-ui/button'));




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
    targetComponent ?: React.ReactElement<BasicProps>
}
export interface CodeFloatingProps {
    targetTag        ?: string
    targetChildren   ?: string
    floatingChildren ?: string
}

const defaultTargetComponent  = <Button />;
const defaultTargetTag        = 'Button'
const defaultTargetChildren   = '    Order Now! Limited offer.'
const defaultFloatingChildren = '    Hurry up!'

const DemoFloatingOn = ({targetComponent = defaultTargetComponent}: DemoFloatingProps) => {
    const {componentFactory} = useComponentInfo();
    let   floatingComponent = componentFactory as React.ReactElement<FloatableProps & CollapsibleProps & BasicProps>
    const targetRef = useRef<HTMLElement>(null);
    
    
    
    targetComponent = React.cloneElement(targetComponent, {
        theme  : targetComponent.props.theme  ?? 'success',
        size   : targetComponent.props.size   ?? 'lg',
    }, defaultTargetChildren);
    floatingComponent = React.cloneElement(floatingComponent, {
        expanded : floatingComponent.props.expanded ?? true,
        theme    : floatingComponent.props.theme    ?? 'danger',
        size     : floatingComponent.props.size     ?? 'sm',
    }, defaultFloatingChildren);
    return (
        <CardBody style={{gap: '4rem'}}>
            <div>
                {targetComponent}
                {floatingComponent}
            </div>
            
            <div>
                {React.cloneElement(targetComponent, {
                    elmRef : targetComponent.props.elmRef ?? targetRef,
                })}
                {React.cloneElement(floatingComponent, {
                    floatingOn        : floatingComponent.props.floatingOn        ?? targetRef,
                    floatingPlacement : floatingComponent.props.floatingPlacement ?? 'right-start',
                    floatingOffset    : floatingComponent.props.floatingOffset    ?? -50,
                    floatingShift     : floatingComponent.props.floatingShift     ?? -15,
                })}
            </div>
        </CardBody>
    );
}
const CodeFloatingOn = ({targetTag = defaultTargetTag, targetChildren = defaultTargetChildren, floatingChildren = defaultFloatingChildren}: CodeFloatingProps) => {
    const {component: {componentName: componentTag}} = useComponentInfo();
    return (
        <TypeScriptCode>{
`
<${targetTag}
    theme='success'
    size='lg'
>
${targetChildren}
</${targetTag}>
<${componentTag}
    expanded={true}
    theme='danger'
    size='sm'
>
${floatingChildren}
</${componentTag}>



<${targetTag}
    elmRef={buttonRef}
    theme='success'
    size='lg'
>
${targetChildren}
</${targetTag}>
<${componentTag}
    floatingOn={buttonRef}
    floatingPlacement='right-start'
    floatingOffset={-50}
    floatingShift={-15}
    
    expanded={true}
    theme='danger'
    size='sm'
>
${floatingChildren}
</${componentTag}>
`
        }</TypeScriptCode>
    );
}





export const FloatingOnProperty = ({children: preview, targetComponent, targetTag}: PreviewProps & DemoFloatingProps & CodeFloatingProps) => {
    return (
        <PropertySection property={properties.floatingOn} preview={preview ?? <>
            <Preview display='down' stretch={true} cardBodyComponent={<DemoFloatingOn targetComponent={targetComponent} />} />
            <p></p>
            <CodeFloatingOn targetTag={targetTag} />
        </>}>
            <p>
                Determines the <strong>target DOM reference</strong> where the <TheComponentLink /> should be <strong>floating on</strong>.<br />
                If not set (<code>undefined</code>), the <TheComponentLink /> becomes a normal element flow.
            </p>
        </PropertySection>
    );
}
export const FloatingPlacementProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.floatingPlacement} preview={preview}>
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
export const FloatingAutoFlipProperty = ({possibleValues, children: preview}: FloatingAutoFlipPropertyProps) => {
    return (
        <PropertySection property={properties.floatingAutoFlip} preview={preview} possibleValues={possibleValues ??
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
        }>
            <p>
                <strong>Automatically flips</strong> the {properties.floatingPlacement.propertyShortDisplay} to <strong>opposite direction</strong> when the <TheComponentLink /> is about to be clipped.
            </p>
        </PropertySection>
    );
}
export interface FloatingAutoShiftPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingAutoShiftProperty = ({possibleValues, children: preview}: FloatingAutoShiftPropertyProps) => {
    return (
        <PropertySection property={properties.floatingAutoShift} preview={preview} possibleValues={possibleValues ??
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
        }>
            <p>
                <strong>Automatically shifts</strong> the {properties.floatingPlacement.propertyShortDisplay} to <strong>nearest safe position</strong> when the <TheComponentLink /> is about to be clipped.
            </p>
        </PropertySection>
    );
}
export interface FloatingOffsetPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingOffsetProperty = ({possibleValues, children: preview}: FloatingOffsetPropertyProps) => {
    return (
        <PropertySection property={properties.floatingOffset} preview={preview} possibleValues={possibleValues ??
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
        }>
            <p>
                The <strong>distance</strong> (in pixel) between the <TheComponentLink /> and the <strong>target DOM reference</strong>.
            </p>
        </PropertySection>
    );
}
export interface FloatingShiftPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingShiftProperty = ({possibleValues, children: preview}: FloatingShiftPropertyProps) => {
    return (
        <PropertySection property={properties.floatingShift} preview={preview} possibleValues={possibleValues ??
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
        }>
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
