import React from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection } from '../../components/sections/sections'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { Tips, Warning } from '../../components/Warning'
import { breakpoints, responsiveProvider } from '../../packages/packageList'



export const ActionCtrlProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.actionCtrl} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> behavior.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Makes <TheNestedComponentDisplay /> <strong>not clickable</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Makes <TheNestedComponentDisplay /> <strong>clickable</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Sets the <strong>default</strong> <code>actionCtrl</code> property on <TheComponentLink /> level.
            </p>
            <p>
                You can set the <code>actionCtrl</code> property <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>
        </PropertySection>
    );
}



export interface LazyPropertyProps extends PreviewProps {
    childrenText ?: React.ReactNode
}
export const LazyProperty = ({children: preview, childrenText}: LazyPropertyProps) => {
    const {component, nestedComponent, nestedProperties} = useComponentInfo();
    
    return (
        <PropertySection property={properties.lazy} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> behavior.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The {childrenText ?? <><TheComponentLink />&apos;s <code>children</code></>} <strong>always</strong> be rendered.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The {childrenText ?? <><TheComponentLink />&apos;s <code>children</code></>} <strong>conditionally</strong> be rendered when the <code>{`<${component.componentName} expanded={true}>`}</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines whenever the {childrenText ?? <><TheComponentLink />&apos;s <code>children</code></>} should be rendered or not when the <code>{`<${component.componentName} expanded={false}>`}</code>.
            </p>
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>lazy</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>}
            <Tips>
                <p>
                    Useful in combination with <strong>React Lazy</strong> and <strong>React Suspense</strong>.
                </p>
            </Tips>
        </PropertySection>
    );
}



export const ExpandDelayProperty = ({children: preview}: PreviewProps) => {
    const {component} = useComponentInfo();
    
    return (
        <PropertySection property={properties.expandDelay} preview={preview}>
            <p>
                Defines the <strong>minimum duration</strong> (in milliseconds) of the user for <strong>hovering</strong>/<strong>focusing</strong> of the corresponding component to <strong>show</strong> the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}
export const CollapseDelayProperty = ({children: preview}: PreviewProps) => {
    const {component} = useComponentInfo();
    
    return (
        <PropertySection property={properties.collapseDelay} preview={preview}>
            <p>
                Defines the <strong>minimum duration</strong> (in milliseconds) of the user for <strong>leaving</strong>/<strong>un-focusing</strong> of the corresponding component to <strong>hide</strong> the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}



export const BreakpointProperty = ({children: preview}: PreviewProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.breakpoint} preview={preview}>
            <p>
                Statically defines the <strong>minimum width</strong> (as defined in {breakpoints.packageLink}) of the <TheComponentLink /> to <strong>responsively</strong> expand itself based on the available browser&apos;s width.
            </p>
            <p>
                If not defined (or <code>{`<${componentName} breakpoint={undefined}>`}</code>), the <TheComponentLink /> uses {responsiveProvider.packageLink} to dynamically detect the occurrence of <em>overflowed elements</em> and determines the best widest mode without causing overflowed.
            </p>
            <Warning>
                <p>
                    If possible, statically define the <code>breakpoint</code> property.
                </p>
                <p>
                    Our <em>automatic detection</em> is a bit inefficient to <em>try &amp; error</em> to find the best mode, several re-render may occur.
                </p>
            </Warning>
        </PropertySection>
    );
}
