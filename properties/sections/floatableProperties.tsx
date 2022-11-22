import React from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'



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



export const FloatingOnProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.floatingOn} preview={preview}>
            <p>
                Determines where the <TheComponentLink /> should be <strong>floating on</strong> the <strong>target DOM reference</strong>.<br />
                If not set (<code>undefined</code>), the <TheComponentLink /> becomes a normal element flow.
            </p>
        </PropertySection>
    );
}
