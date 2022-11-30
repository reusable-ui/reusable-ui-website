import React from 'react'

import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { Section } from '../../components/Section'
import { TypeScriptCode } from '../../components/Code'
import { generic } from '../../packages/packageList'



export const ModalUiProperty = () => {
    const {component: {packageName, componentName}} = useComponentInfo();
    
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