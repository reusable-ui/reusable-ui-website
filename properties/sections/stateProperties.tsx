import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Warning } from '../../components/Warning'
import { icon } from '../../packages/packageList'



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


export const EnabledProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.enabled} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> enabled/disabled state.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The component is <strong>enabled</strong>.
                    </p>
                    <p>
                        Note: The component can be disabled <em>indirectly</em> by <code>{`<ancestor enabled={false}>`}</code> if <code>{`inheritEnabled={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The component is <strong>disabled</strong>.
                    </p>
                    <p>
                        Note: The component can be disabled <em>indirectly</em> by <code>{`<ancestor enabled={false}>`}</code> if <code>{`inheritEnabled={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>enabled/disabled state</strong> of the component.
            </p>
        </PropertySection>
    );
}
export const InheritEnabledProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.inheritEnabled} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> inheritance setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Influences the component&apos;s {disableable.packageShortDisplay} by <code>{`<ancestor enabled={false}>`}</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Independent the component&apos;s {disableable.packageShortDisplay}.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Influences the component&apos;s {disableable.packageShortDisplay} by <code>{`<ancestor enabled={false}>`}</code>.
            </p>
        </PropertySection>
    );
}

export const ReadOnlyProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.readOnly} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> readOnly state.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The component is <strong>readOnly</strong> (locked).
                    </p>
                    <p>
                        Note: The component can be readOnly <em>indirectly</em> by <code>{`<ancestor readOnly={true}>`}</code> if <code>{`inheritReadOnly={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The component is <strong>mutable</strong> (editable).
                    </p>
                    <p>
                        Note: The component can be readOnly <em>indirectly</em> by <code>{`<ancestor readOnly={true}>`}</code> if <code>{`inheritReadOnly={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>readOnly/mutable state</strong> of the component.
            </p>
            <Warning>
                <p>
                    By default, there is <strong>no visual appearance</strong> for indicating {properties.readOnly.propertyShortDisplay} state.
                </p>
                <p>
                    You should add an {icon.packageLink} or another visual appearance for indicating {properties.readOnly.propertyShortDisplay} state.
                </p>
            </Warning>
        </PropertySection>
    );
}
export const InheritReadOnlyProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.inheritReadOnly} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> inheritance setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Influences the component&apos;s {properties.readOnly.propertyShortDisplay} by <code>{`<ancestor readOnly={true}>`}</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Independent the component&apos;s {properties.readOnly.propertyShortDisplay}.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Influences the component&apos;s {properties.readOnly.propertyShortDisplay} by <code>{`<ancestor readOnly={true}>`}</code>.
            </p>
        </PropertySection>
    );
}

export const ActiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.active} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> active state.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> the component.
                    </p>
                    <p>
                        Note: The component can be activated <em>indirectly</em> by <code>{`<ancestor active={true}>`}</code> if <code>{`inheritActive={true}`}</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> (normalize) the component.
                    </p>
                    <p>
                        Note: The component can be activated <em>indirectly</em> by <code>{`<ancestor active={true}>`}</code> if <code>{`inheritActive={true}`}</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the current <strong>active state</strong> of the component.
            </p>
            <Warning>
                <p>
                    The default <em>styling implementation</em> of active state is by removing {outlineable.packageShortLink} and {mildable.packageShortLink} effects.
                    So if the {outlineable.packageShortLink} or {mildable.packageShortLink} is not activated, the {activatable.packageShortDisplay} is not <em>visually</em> visible.
                </p>
            </Warning>
        </PropertySection>
    );
}
export const InheritActiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.inheritActive} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> inheritance setting.
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
