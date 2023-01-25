import React, {  } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/sections/sections'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { Tips, Warning } from '../../components/Warning'



export interface ScrollingPropertiesProps {
    targetComponentText   ?: React.ReactNode
    scrollingComponentText ?: React.ReactNode
    
    children               : React.ReactNode
}
export const ScrollingProperties = ({targetComponentText, scrollingComponentText, children} : ScrollingPropertiesProps) => {
    return (
        <Section title='Scrolling Properties'>
            <p>
                Determines how the {scrollingComponentText ?? <><TheNestedComponentDisplay />s of <TheComponentLink /></>} should be <strong>highlighted</strong> to reflect the {targetComponentText ?? <strong>corresponding visible section</strong>}.
            </p>
            {children}
        </Section>
    );
}



export const ScrollingOfProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.scrollingOf} preview={preview}>
            <p>
                Determines the <strong>scrollable container</strong> of <em>corresponding sections</em> where the <TheNestedComponentDisplay />s of <TheComponentLink /> should be <strong>highlighted</strong>.
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
                    The <strong>nested</strong> <TheComponentLink /> must have <code>{`scrollingOf={undefined}`}</code> or must omit the <code>scrollingOf</code> property in order to becomes <strong>nested</strong>-able.
                </p>
                <p>
                    Assigning the <code>scrollingOf</code> with a value other than <code>undefined</code> causes the <TheComponentLink /> to become a <strong>root</strong> <TheComponentLink />.
                </p>
            </Warning>
            <p></p>
            <Warning>
                <p>
                    At the <strong>root</strong> of <TheComponentLink/>, you need to set <code>{`<${componentName} scrollingSelector='section'>`}</code> to <strong>distinguish</strong> between the <code>{`<section>`}</code>, the sub <code>{`<section>`}</code>, and the <code>{`<another_element>`}</code>.
                </p>
                <p>
                    The default is <code>{`scrollingSelector='*'`}</code>, so <strong>any elements</strong> will be treated as the <em>corresponding sections</em>.
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

export const ScrollingSelectorProperty = ({children: preview}: PreviewProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.scrollingSelector} preview={preview}>
            <p>
                Filters the <strong>desired</strong> <code>{`<section>`}</code>s or <code>{`<whatever_element>`}</code>s you wish to be the <strong>corresponding sections</strong> by providing a <strong>valid CSS selector expression</strong>.
            </p>
            <p>
                The default is <code>{`scrollingSelector='*'`}</code>, so <strong>any elements</strong> will be treated as the <em>corresponding sections</em>.
            </p>
            <p>
                You can also set something like <code>{`<${componentName} scrollingSelector='section, div, .section'>`}</code> or whatever selector you want, depending on the project you&apos;re working on.
            </p>
        </PropertySection>
    );
}

export const ScrollingFilterProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.scrollingFilter} preview={preview}>
            <p>
                Filters the <strong>desired</strong> <code>{`<section>`}</code>s or <code>{`<whatever_element>`}</code>s you wish to be the <strong>corresponding sections</strong> by providing a <strong>JavaScript callback function</strong>.
            </p>
            <p>
                The callback function will receive a <code>HTMLElement</code> object and then should return a <code>boolean</code> value indicating the selection was passed (<code>true</code>) or not (<code>false</code>).
            </p>
            <Tips>
                <p>
                    For a relatively simple selection, prefer to use {properties.scrollingSelector.propertyDisplay} property.
                </p>
            </Tips>
        </PropertySection>
    );
}

export const ScrollingInterpolationProperty = ({children: preview, possibleValues}: PreviewProps & Pick<PropertySectionProps, 'possibleValues'>) => {
    return (
        <PropertySection property={properties.scrollingInterpolation} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> transition.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`false`}</code>}>
                    <p>
                        Uses <strong>first visible</strong> algorithm.
                    </p>
                    <p>
                        The first visible of <em>corresponding sections</em> in the <em>scrollable sections</em> wins, even if the intersecting area is 0x0 only pixel wide.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`true`}</code>}>
                    <p>
                        Uses <strong>most dominant</strong> algorithm.
                    </p>
                    <p>
                        The first visible widest area of <em>corresponding sections</em> in the <em>scrollable sections</em> wins.
                        The exception is for the <code>{`<first_section>`}</code> and <code>{`<last_section>`}</code>, when the scrollbar reaches the beginning/end of the range, it wins.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines how the <strong>highlighting transition</strong> between <em>corresponding sections</em> is performed.
            </p>
        </PropertySection>
    );
}
