import React, { Suspense, useEffect, useRef, useState } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { BasicProps, CardBody, List, ListItem } from '@reusable-ui/components'
import { Warning } from '../../components/Warning'
import { CollapsibleProps, FloatableProps } from '@reusable-ui/core'
import { TypeScriptCode } from '../../components/Code'
import { Preview } from '../../components/Preview'
import { useFlipFlop } from '../../hooks/flipFlop'
import { useInViewport } from '../../hooks/inViewport'
import { dropdown, toggleButton } from '../../packages/packageList'

const Button = React.lazy(() => import(/* webpackChunkName: 'Button' */'@reusable-ui/button'));
const Range  = React.lazy(() => import(/* webpackChunkName: 'Range'  */'@reusable-ui/range'));




export interface ScrollingPropertiesProps {
    targetComponentText   ?: React.ReactNode
    scrollingComponentText ?: React.ReactNode
    
    children               : React.ReactNode
}
export const ScrollingProperties = ({targetComponentText, scrollingComponentText, children} : ScrollingPropertiesProps) => {
    return (
        <Section title='Scrolling Properties'>
            <p>
                Determines how the {scrollingComponentText ?? <><TheNestedComponentDisplay />s of <TheComponentLink /></>} should be <strong>highlighted</strong> to reflect the {targetComponentText ?? <strong>correspoding visible section</strong>}.
            </p>
            {children}
        </Section>
    );
}



export const ScrollingOfProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.scrollingOf} preview={preview}>
            <p>
                Determines the <strong>scrollable container</strong> of <em>correspoding sections</em> where the <TheNestedComponentDisplay />s of <TheComponentLink /> should be <strong>highlighted</strong>.
            </p>
            <p>
                The structure of <TheNestedComponentDisplay />s should be <strong>match to</strong> the structure of the <code>{`<scrollable_container>`}</code>&apos;s children (<code>{`<section>`}</code>s or <code>{`<div>`}</code>s or any <code>{`<element>`}</code>s).
            </p>
        </PropertySection>
    );
}

export interface NestedSubSectionsProps {
    children ?: React.ReactNode
}
export const NestedSubSections = ({children : preview}: NestedSubSectionsProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <Section title='Nested Sub Sections'>
            <p>
                <TheComponentLink /> supports mapping <strong>nested sub sections</strong>.
            </p>
            <p>
                Place another <code>{`<${componentName} scrollingOf={undefined}>...</${componentName}>`}</code> in the corresponding <TheNestedComponentDisplay />, with the same structure of <TheNestedComponentDisplay />s <strong>match to</strong> the structure of the <code>{`<nested_section>`}</code>s.
            </p>
            <Warning>
                <p>
                    At the root of <TheComponentLink/>, you need to set <code>{`<${componentName} scrollingSelector='section'>`}</code> to <strong>distinguish</strong> between the <code>{`<section>`}</code>, sub <code>{`<section>`}</code>, and the <code>{`<another_element>`}</code>.
                </p>
                <p>
                    The default is <code>{`scrollingSelector='*'`}</code>, so <strong>any elements</strong> will be treated as the correspoding <code>{`<section>`}</code>s.
                </p>
                <p>
                    You can also set something like <code>{`<${componentName} scrollingSelector='section, div, .section'>`}</code> or whatever selector you want, depending on the project you&apos;re working on.
                </p>
            </Warning>
            {preview && <>
                <hr />
                <p>
                    Here the preview:
                </p>
                {preview}
            </>}
        </Section>
    )
}
