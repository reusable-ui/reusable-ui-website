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
export const ThemeProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.theme} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>} theme='secondary'>
                    <p>
                        Uses the nearest ancestor&apos;s theme -or- <em>un-themed</em> if not found.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'primary'</code>} theme='primary'>
                    <p>
                        The <strong>primary</strong> theme represents your <strong>website color</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'secondary'</code>} theme='secondary'>
                    <p>
                        The <strong>secondary</strong> theme represents your <strong>website alternative color</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'success'</code>} theme='success'>
                    <p>
                        The <strong>success</strong> theme represents a <strong>success result</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'info'</code>} theme='info'>
                    <p>
                        The <strong>info</strong> theme represents a <strong>general information</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'warning'</code>} theme='warning'>
                    <p>
                        The <strong>warning</strong> theme represents a <strong>warning message</strong> or notify something that <strong>could cause an error</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'danger'</code>} theme='danger'>
                    <p>
                        The <strong>danger</strong> theme represents an <strong>error result</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'light'</code>} theme='light'>
                    <p>
                        The <strong>light</strong> theme doen&apos;t have a meaning, just for helping a text content <strong>againts a dark background or dark background-image</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'dark'</code>} theme='dark'>
                    <p>
                        The <strong>dark</strong> theme doen&apos;t have a meaning, just for helping a text content <strong>againts a light background or light background-image</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>contextual theme</strong> of the component.
            </p>
        </PropertySection>
    );
}
