import React from 'react'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import { ExtLink } from '../../components/ExtLink'
import * as properties from '../propertyList'

import loadable from '@loadable/component'
const TagListLazy = loadable(() => import(/* webpackChunkName: 'TagList' */'../../components/TagList'));
const RoleListLazy = loadable(() => import(/* webpackChunkName: 'RoleList' */'../../components/RoleList'));



export interface VariantPropertiesProps {
    children : React.ReactNode
}
export const VariantProperties = ({children} : VariantPropertiesProps) => {
    return (
        <Section title='Variant Properties'>
            <p>
                The <strong>alternative appearances</strong> of the component layout without changing the component&apos;s functionality.
            </p>
            {children}
        </Section>
    );
}
export const SizeProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.size} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses default size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'sm'</code>}>
                    <p>
                        Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> <strong>smaller</strong> than the default.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'lg'</code>}>
                    <p>
                        Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> <strong>bigger</strong> than the default.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>alternative size</strong> of the component.
            </p>
        </PropertySection>
    );
}
