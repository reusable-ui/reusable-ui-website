import React from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { Tips } from '../../components/Warning'



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
    const {component} = useComponentInfo();
    
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
