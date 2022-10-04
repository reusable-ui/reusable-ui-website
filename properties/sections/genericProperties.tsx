import React from 'react'
import { PropertySection, Section } from '../../components/Section'
import { ExtLink } from '../../components/ExtLink'
import * as properties from '../propertyList'



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
                Defines <strong>some classes</strong> as grouping identifiers so that the CSS and JavaScript can select and access specific element via <em>class selectors</em> or <em>special functions</em>.
            </p>
            <p>
                These class properties below are actually <em>do the same thing</em>.
                They will be merged at rendering phase.
                They are divided into <em>special class names</em> for <em>grouping and code maintenance purpose</em>.
            </p>
            <MainClassProperty />
            <VariantClassesProperty />
            <StateClassesProperty />
            <ClassesProperty />
            <ClassNameProperty />
        </Section>
    );
}
export const MainClassProperty = () => {
    return (
        <PropertySection property={properties.mainClass}>
            <p>
                Defines the <strong>main class</strong> which is <em>responsible</em> for constructing the <strong>component layout</strong>.
            </p>
            <p>
                For example: <code>mainClass='coolButton'</code>.
            </p>
        </PropertySection>
    );
}
export const VariantClassesProperty = () => {
    return (
        <PropertySection property={properties.variantClasses}>
            <p>
                Defines an array of classes which are <em>responsible</em> for making <strong>styling variants</strong> of the component layout, without changing the component&apos;s functionality.
            </p>
            <p>
                For example: <code>variantClasses={`{['outlined', 'rounded', 'glassy']}`}</code>.
            </p>
            <ParagraphStableReferenceArray />
        </PropertySection>
    );
}
export const StateClassesProperty = () => {
    return (
        <PropertySection property={properties.stateClasses}>
            <p>
                Defines an array of classes which are <em>responsible</em> for changing the <strong>conditions</strong> of the component <strong>behavior</strong> or <strong>functionality</strong>.
            </p>
            <p>
                For example: <code>stateClasses={`{['toggledOn', 'actived', 'pressed']}`}</code>.
            </p>
            <ParagraphStableReferenceArray />
        </PropertySection>
    );
}
export const ClassesProperty = () => {
    return (
        <PropertySection property={properties.classes}>
            <p>
                Defines an array of <strong>general purpose</strong> classes.
                If the classes don&apos;t seem suitable for {properties.variantClasses.propertyDisplay} or {properties.stateClasses.propertyDisplay}, this is the most suitable property to place.
            </p>
            <p>
                For example: <code>classes={`{['boo', 'foo', 'awesome']}`}</code>.
            </p>
            <ParagraphStableReferenceArray />
        </PropertySection>
    );
}
export const ClassNameProperty = () => {
    return (
        <PropertySection property={properties.className}>
            <p>
                A <strong>traditional</strong> React class property.
                Defines the desired class(es) as <strong>single string</strong> with <strong>spaces as separators</strong> between the classes.
            </p>
            <p>
                For example: <code>className='awesomeButton highlighted dark-mode'</code>.
            </p>
        </PropertySection>
    );
}
const ParagraphStableReferenceArray = () => {
    return (
        <p>
            To further minimize the excess re-render effect, make sure the passed array is a <strong>stable reference</strong>.
            You can wrap the array with <code>useMemo()</code> or declare the array at <em>top level module</em>.
        </p>
    );
}



export const OnProperties = () => {
    return (
        <Section title={<><code>on*</code> Properties</>}>
            <p>
                Defines a callback of <strong>React synthetic event</strong>.
            </p>
            <p>
                For detailed information using React synthetic event, see:<br />
                <ExtLink href='https://reactjs.org/docs/events.html'>
                    The Documentation of React Synthetic Events
                </ExtLink>
            </p>
        </Section>
    );
}