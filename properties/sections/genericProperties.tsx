import React from 'react'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { PropertySection, Section } from '../../components/Section'
import { ExtLink } from '../../components/ExtLink'
import * as properties from '../propertyList'

import loadable from '@loadable/component'
const TagListLazy = loadable(() => import(/* webpackChunkName: 'TagList' */'../../components/TagList'));
const RoleListLazy = loadable(() => import(/* webpackChunkName: 'RoleList' */'../../components/RoleList'));



export const GlobalProperties = () => {
    return (
        <Section title='Global Properties'>
            <p>
                Defines <strong>general properties</strong> to the component.
            </p>
            <ElmRefProperty />
            <OuterRefProperty />
            <IdProperty />
            <StyleProperty />
        </Section>
    );
}
export const ElmRefProperty = () => {
    return (
        <PropertySection property={properties.elmRef}>
            <p>
                Gets the <strong>DOM element reference</strong> to the component.
            </p>
            <p>
                If the component contains <em>multiple DOM elements</em>, you will get the <strong>most functioning</strong> element.
                For example: A <strong>custom textbox control</strong> contains some <code>&lt;div&gt;</code>s, <code>&lt;span&gt;</code>s, and an <code>&lt;input type='hidden'&gt;</code>.
                You will get the reference of <code>&lt;input type='hidden'&gt;</code> because it&apos;s the most functioning element, whereas the others are just for layouting purpose.
            </p>
        </PropertySection>
    );
}
export const OuterRefProperty = () => {
    return (
        <PropertySection property={properties.outerRef}>
            <p>
                Gets the most outer <strong>DOM element reference</strong> to the component.
            </p>
            <p>
                If the component contains <em>multiple DOM elements</em>, you will get the <strong>most outer</strong> element.
                For example: A <strong>custom textbox control</strong> contains an <code>&lt;input type='hidden'&gt;</code> wrapped with a <code>&lt;div&gt;</code>.
                You will get the reference of <code>&lt;div&gt;</code> because it&apos;s the most outer element.
            </p>
            <p>
                In <em>a rare case</em>, if there are multiple outer elements, the DOM element reference is decided by component&apos;s creator.
            </p>
        </PropertySection>
    );
}
export const IdProperty = () => {
    return (
        <PropertySection property={properties.id}>
            <p>
                Defines an identifier (ID) which must be unique in the whole document.
                Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
            </p>
        </PropertySection>
    );
}
export const StyleProperty = () => {
    return (
        <PropertySection property={properties.style}>
            <p>
                Defines a <strong>simple CSS styling</strong> declarations to be applied to the element.
            </p>
            <p>
                For a <strong>complex CSS styling</strong>, it is recommended for styles to be defined in a separate file(s).
            </p>
        </PropertySection>
    );
}



export const ClassProperties = () => {
    return (
        <Section title='Class Properties'>
            <p>
                Defines <strong>space-separated classes</strong> as grouping identifiers so that the CSS and JavaScript can select and access specific element via <em>class selectors</em> or <em>special functions</em>.
            </p>
            <p>
                These classes below are actually <em>do the same thing</em>.
                They will be unified at rendering phase.
                They are divided into <em>specific class names</em> for <em>grouping and code maintenance purpose</em>.
            </p>
            <MainClassProperty />
        </Section>
    );
}
export const MainClassProperty = () => {
    return (
        <PropertySection property={properties.mainClass}>
            <p>
                Gets the <strong>DOM element reference</strong> to the component.
            </p>
            <p>
                If the component contains <em>multiple DOM elements</em>, you will get the <strong>most functioning</strong> element.
                For example: A <strong>custom textbox control</strong> contains some <code>&lt;div&gt;</code>s, <code>&lt;span&gt;</code>s, and an <code>&lt;input type='hidden'&gt;</code>.
                You will get the reference of <code>&lt;input type='hidden'&gt;</code> because it&apos;s the most functioning element, whereas the others are just for layouting purpose.
            </p>
        </PropertySection>
    );
}
