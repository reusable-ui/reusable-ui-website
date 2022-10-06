import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable } from '../../packages/packageList'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', undefined, 'lg'];
export const themeOptions : ThemeName[] = getThemeOptions();



export interface StatePropertiesProps {
    children : React.ReactNode
}
export const StateProperties = ({children} : StatePropertiesProps) => {
    return (
        <Section title='State Properties'>
            <p>
                The <strong>conditions</strong> of the component <strong>behavior</strong> or <strong>functionality</strong>.
            </p>
            {children}
        </Section>
    );
}
export const ActiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.active} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses default active state.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> the component.
                    </p>
                    <p>
                        Note: The component can be activated <em>indirectly</em> by <code>{`<ancestor active={true}>`}</code> if <code>{`inheritActive={true}`}</code>
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> (normalize) the component.
                    </p>
                    <p>
                        Note: The component can be activated <em>indirectly</em> by <code>{`<ancestor active={true}>`}</code> if <code>{`inheritActive={true}`}</code>
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the current <strong>active state</strong> of the component.
            </p>
            <p>
                The default <em>styling implementation</em> of active state is by removing {outlineable.packageShortLink} and {mildable.packageShortLink} effects.
                So if the {outlineable.packageShortLink} or {mildable.packageShortLink} is not activated, the {activatable.packageShortDisplay} is not <em>visually</em> visible.
            </p>
        </PropertySection>
    );
}
export const InheritActiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.inheritActive} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses default inheritance setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Influences the component&apos;s {activatable.packageShortDisplay} by <code>{`<ancestor active={true}>`}</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Independent the component&apos;s {activatable.packageShortDisplay}.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Influences the component&apos;s {activatable.packageShortDisplay} by <code>{`<ancestor active={true}>`}</code>.
            </p>
        </PropertySection>
    );
}
