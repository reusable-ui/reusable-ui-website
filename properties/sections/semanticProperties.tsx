import React, { Suspense } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PropertySection, Section } from '../../components/Section'
import { ExtLink } from '../../components/ExtLink'
import * as properties from '../propertyList'
import { BusyBar } from '../../components/BusyBar'

const TagListLazy  = React.lazy(() => import(/* webpackChunkName: 'TagList' */'../../components/TagList'));
const RoleListLazy = React.lazy(() => import(/* webpackChunkName: 'RoleList' */'../../components/RoleList'));



export const SemanticProperties = () => {
    return (
        <Section title='Semantic Properties'>
            <p>
                Defines <strong>semantic meaning</strong> to the component, allowing <em>screen readers</em> and other tools to present and support <em>interaction</em> with the component in a way that is consistent with user expectations of that type of the component.
            </p>
            <TagProperty />
            <RoleProperty />
            <AriaProperty />
            <SemanticTagProperty />
            <SemanticRoleProperty />
        </Section>
    );
}
export const TagProperty = () => {
    return (
        <PropertySection property={properties.tag} possibleValues={
            <Accordion>
                <AccordionItem label={<>empty string (<code>''</code>)</>}>
                    <p>
                        Assigning an empty string (<code>''</code>) will rendered to <code>&lt;div&gt;</code> at runtime.
                    </p>
                </AccordionItem>
                <AccordionItem label={<>a valid HTML tag name</>} lazy={true}>
                    <p>
                        Assigning a <strong>valid HTML tag name</strong> will rendered to the <strong>given tag</strong> at runtime.
                    </p>
                    <p>
                        The valid HTML tag name are:
                    </p>
                    <Suspense fallback={<BusyBar />}>
                        <TagListLazy />
                    </Suspense>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the final <strong>rendered tag</strong> of the component.
            </p>
        </PropertySection>
    );
}
export const RoleProperty = () => {
    return (
        <PropertySection property={properties.role} possibleValues={
            <Accordion>
                <AccordionItem label={<>empty string (<code>''</code>)</>}>
                    <p>
                        Assigning an empty string (<code>''</code>) will rendered to <code>&lt;div&gt;</code> at runtime.
                    </p>
                </AccordionItem>
                <AccordionItem label={<>a valid ARIA role name</>} lazy={true}>
                    <p>
                        Assigning a <strong>valid ARIA role name</strong> will rendered to the <code>role='...'</code> at runtime.
                    </p>
                    <p>
                        The valid ARIA role name are:
                    </p>
                    <Suspense fallback={<BusyBar />}>
                        <RoleListLazy />
                    </Suspense>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>meaning</strong> of the component.
            </p>
        </PropertySection>
    );
}
export const AriaProperty = () => {
    return (
        <PropertySection property={properties.aria}>
            <p>
                Defines a specific <strong>ARIA property</strong> for this component.
            </p>
            <p>
                For more information using the ARIA properties, see:<br />
                <ExtLink href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques'>
                    Using ARIA: Roles, states, and properties
                </ExtLink>
            </p>
        </PropertySection>
    );
}

export const SemanticTagProperty = () => {
    return (
        <PropertySection property={properties.semanticTag}>
            <p>
                Defines a default <strong>semantic tag name</strong>(s) for the {properties.tag.propertyDisplay}, if its value is not specified.
            </p>
            <p>
                If the {properties.tag.propertyDisplay} is not specified, the system use {properties.semanticTag.propertyDisplay} and {properties.semanticRole.propertyDisplay} to determine the appropriate rendered <strong>tag</strong>.
            </p>
        </PropertySection>
    );
}

export const SemanticRoleProperty = () => {
    return (
        <PropertySection property={properties.semanticRole}>
            <p>
                Defines a default <strong>semantic tag name</strong>(s) for the {properties.role.propertyDisplay}, if its value is not specified.
            </p>
            <p>
                If the {properties.role.propertyDisplay} is not specified, the system use {properties.semanticTag.propertyDisplay} and {properties.semanticRole.propertyDisplay} to determine the appropriate rendered <code>role='...'</code>.
            </p>
        </PropertySection>
    );
}