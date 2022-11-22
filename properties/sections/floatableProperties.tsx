import React from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'



export interface FloatingPropertiesProps {
    children : React.ReactNode
}
export const FloatingProperties = ({children} : FloatingPropertiesProps) => {
    return (
        <Section title='Floating Properties'>
            <p>
                Determines how the <TheComponentLink /> should be <strong>floating on</strong> the <strong>target DOM reference</strong>.
            </p>
            {children}
        </Section>
    );
}



export const FloatingOnProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.floatingOn} preview={preview}>
            <p>
                Determines the <strong>target DOM reference</strong> where the <TheComponentLink /> should be <strong>floating on</strong>.<br />
                If not set (<code>undefined</code>), the <TheComponentLink /> becomes a normal element flow.
            </p>
        </PropertySection>
    );
}
export const FloatingPlacementProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.floatingPlacement} preview={preview}>
            <p>
                Determines the <strong>location</strong> where the <TheComponentLink /> should be <strong>floating on</strong> the <em>target DOM reference</em>.
            </p>
        </PropertySection>
    );
}
export interface FloatingStrategyPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const FloatingStrategyProperty = ({possibleValues, children: preview}: FloatingStrategyPropertyProps) => {
    return (
        <PropertySection property={properties.floatingStrategy} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> strategy.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'absolute'`}</code>}>
                    <p>
                        Makes the <TheComponentLink /> positioned <code>absolute</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'fixed'`}</code>}>
                    <p>
                        Makes the <TheComponentLink /> positioned <code>fixed</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines the <strong>technical strategy</strong> how the <TheComponentLink /> can float.<br />
                In <em>most cases</em>, you should not worry about the detail mechanism how the <TheComponentLink /> can float.
            </p>
        </PropertySection>
    );
}
