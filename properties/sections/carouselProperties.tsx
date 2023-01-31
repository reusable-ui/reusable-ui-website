import React, {  } from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps } from '../../components/sections/PropertySection'
import * as properties from '../propertyList'
import { TheComponentLink } from '../../packages/componentContext'
import { navscroll } from '../../packages/packageList'



export interface InfiniteLoopPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const InfiniteLoopProperty = ({possibleValues, children: preview}: InfiniteLoopPropertyProps) => {
    return (
        <PropertySection property={properties.infiniteLoop} preview={preview} possibleValues={possibleValues ??
            <Accordion>
            <AccordionItem label={<code>undefined</code>}>
                <p>
                    Uses <strong>default</strong> infinite illusion setting.
                </p>
            </AccordionItem>
            <AccordionItem label={<code>{`false`}</code>}>
                <p>
                    <strong>Deactivates</strong> the infinite illusion.
                </p>
            </AccordionItem>
            <AccordionItem label={<code>{`true`}</code>}>
                <p>
                    <strong>Activates</strong> the infinite illusion.
                </p>
            </AccordionItem>
            </Accordion>
        }>
            <p>
                Makes an <strong>infinite illusion</strong> as if the <TheComponentLink /> has infinite items when the user scrolls the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}

export const ScrollingRefProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.scrollingRef} preview={preview}>
            <p>
                Gets the <strong>DOM element reference</strong> of the <em>scrolling container</em> used for an external {navscroll.packageLink}.
            </p>
        </PropertySection>
    );
}
