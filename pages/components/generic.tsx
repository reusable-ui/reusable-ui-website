import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AccordionItem, Accordion, Button } from '@reusable-ui/components'
import { PropertySection, Section, SectionProps } from '../../components/Section'
import { ExtLink } from '../../components/ExtLink'
import { generic } from '../../packages/packageList'
import * as properties from '../../properties/propertyList'

import loadable from '@loadable/component'
const TagListLazy = loadable(() => import(/* webpackChunkName: 'TagList' */'../../components/TagList'));
const RoleListLazy = loadable(() => import(/* webpackChunkName: 'RoleList' */'../../components/RoleList'));



export const SemanticProperties = () => {
    return (
        <Section title='Semantic Properties'>
            <p>
                Defines <strong>semantic meaning</strong> to the component, allowing <em>screen readers</em> and other tools to present and support <em>interaction</em> with the component in a way that is consistent with user expectations of that type of the component.
            </p>
            <TagProperty />
            <RoleProperty />
            <AriaProperty />
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
                <AccordionItem label={<>a valid HTML tag name</>}>
                    <p>
                        Assigning a <strong>valid HTML tag name</strong> will rendered to the <strong>given tag</strong> at runtime.
                    </p>
                    <p>
                        The valid HTML tag name are:
                    </p>
                    <TagListLazy />
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
                <AccordionItem label={<>a valid ARIA role name</>}>
                    <p>
                        Assigning a <strong>valid ARIA role name</strong> will rendered to the <code>role='...'</code> at runtime.
                    </p>
                    <p>
                        The valid ARIA role name are:
                    </p>
                    <RoleListLazy />
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



const GenericPage: NextPage = () => {
    return (<>
        <Head>
            <title>{generic.componentTag} Components</title>
            <meta name="description" content={`${generic.componentTag} is an unstyled generic element. It governs the semantics, classes, refs and more.`} />
        </Head>
        <Section title={<>{generic.packageDisplay} Component</>}>
            <p>
                {generic.packageDisplay} is an unstyled generic element. It governs the semantics, classes, refs and more.
            </p>
            <SemanticProperties />
        </Section>
    </>);
}

export default GenericPage
