import React from 'react'

import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import { TypeScriptCode } from '../../components/Code'
import { generic } from '../../packages/packageList'
import * as properties from '../propertyList'



export const ModalUiProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <Section title='Defines the Modal-ed UI'>
            <p>
                The <TheComponentLink /> should have <strong>one child</strong> to be <strong>modal</strong>-ed.
                The child shoud be a <strong>native DOM element</strong> or <strong>functional/class component</strong> that implements {generic.packageLink}&apos;s props.
            </p>
            <TypeScriptCode collapsible={false}>{
`
<${componentName}>
    <YourComponent />
</${componentName}>
`
            }</TypeScriptCode>
        </Section>
    );
}



export interface ModalViewportPropertyProps extends PreviewProps {
}
export const ModalViewportProperty = ({children: preview}: ModalViewportPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.modalViewport} preview={preview}>
            <p>
                Determines the <strong>container UI</strong> should be <strong>blocked</strong> by <TheComponentLink />&apos;s backdrop when <code>{`<${componentName} expanded={true}>`}</code>.<br />
                If not set (<code>undefined</code> or <code>null</code>), defaults to document&apos;s <code>{`<body>`}</code> (blocked a whole page).
            </p>
        </PropertySection>
    );
}
