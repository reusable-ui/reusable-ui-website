import React from 'react'

import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { Section } from '../../components/sections/Section'
import { TypeScriptCode } from '../../components/Code'
import { generic } from '../../packages/packageList'



export const DropdownUiProperty = () => {
    const {component: {packageName, componentName}} = useComponentInfo();
    
    return (
        <Section title='Defines the Dropdown-ed UI'>
            <p>
                The <TheComponentLink /> should have <strong>one child</strong> to be <strong>dropdown</strong>-ed.
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