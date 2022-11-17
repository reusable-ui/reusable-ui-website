import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable, invalidable } from '../../packages/packageList'
import { Warning } from '../../components/Warning'
import { icon, form } from '../../packages/packageList'
import { TheComponentDisplay, useComponentInfo } from '../../packages/componentContext'



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

export interface ActivePropertyProps extends PreviewProps {
    outlinedMildWarning ?: boolean
}
export const ActiveProperty = ({children: preview, outlinedMildWarning = true}: ActivePropertyProps) => {
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
            {outlinedMildWarning && <Warning>
                <p>
                    The default <em>styling implementation</em> of active state is by removing {outlineable.packageShortLink} and {mildable.packageShortLink} effects.
                    So if the {outlineable.packageShortLink} or {mildable.packageShortLink} is not activated, the {activatable.packageShortDisplay} is not <em>visually</em> visible.
                </p>
            </Warning>}
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
export const DefaultActiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.defaultActive} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> initial state.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The {properties.active.propertyShortLink} state is <strong>initially activated</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The {properties.active.propertyShortLink} state is <strong>initially deactivated</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                <strong>Defines</strong> the <strong>initial</strong> {properties.active.propertyShortLink} state when the <TheComponentDisplay /> is <strong>first loaded</strong>.
            </p>
        </PropertySection>
    );
}
export const OnActiveChangeProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.onActiveChange} preview={preview}>
            <p>
                <strong>Executes</strong> a JavaScript&apos;s <strong>callback function</strong> when the {properties.active.propertyShortLink} state <strong>changed</strong>.
            </p>
        </PropertySection>
    );
}



export const FocusedProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.focused} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        <strong>Automatically</strong> shows/hides the <strong>focus indicator</strong>, if needed.
                    </p>
                    <Warning>
                        <p>
                            In <em>most cases</em>, the <strong>focus indicator</strong> will <strong>be shown</strong> if the component is focused by the <kbd>tab</kbd> key.
                            Focusing by a <strong>pointing device</strong> will <strong>not show</strong> the <strong>focus indicator</strong>, except when containing <code>{`<input> or <textarea>`}</code> -or- when <code>{`assertiveFocusable={true}`}</code>.
                        </p>
                    </Warning>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Shows</strong> the <strong>focus indicator</strong>, regradless the component is <em>actually</em> in focus or not.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Hides</strong> the <strong>focus indicator</strong>, regradless the component is <em>actually</em> in focus or not.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Shows the <strong>focus indicator</strong> of the component.
            </p>
        </PropertySection>
    );
}



export const ArrivedProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.arrived} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        <strong>Automatically</strong> shows/hides the <strong>arrive indicator</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Shows</strong> the <strong>arrive indicator</strong>, regradless the component is <em>actually</em> in <code>{`:hover`}</code> or not.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Hides</strong> the <strong>arrive indicator</strong>, regradless the component is <em>actually</em> in <code>{`:hover`}</code> or not.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Shows the <strong>arrive indicator</strong> (being touched but not clicked) of the component.
            </p>
            <p>
                It&apos;s similar to <code>{`:is(:hover, :focus-visible)`}</code> in CSS, but we toggle our <em>:hover</em> by <em>our logic way</em> (controllable and/or uncontrollable).
                In the future, we <em>may</em> change our algorithm to determine how the control will interact with the user.
            </p>
        </PropertySection>
    );
}



export const PressedProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.pressed} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        <strong>Automatically</strong> shows/hides the <strong>pressed indicator</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Shows</strong> the <strong>pressed indicator</strong>, regradless the component is <em>actually</em> being pressed or not.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Hides</strong> the <strong>pressed indicator</strong>, regradless the component is <em>actually</em> being pressed or not.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Shows the <strong>pressed indicator</strong> of the component.
            </p>
        </PropertySection>
    );
}



export const EnableValidationProperty = ({children: preview}: PreviewProps) => {
    const {component: {packageName}} = useComponentInfo();
    const isCurrentForm = (packageName === form.packageName);
    
    return (
        <PropertySection property={properties.enableValidation} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> enableValidation setting.
                    </p>
                    {!isCurrentForm && <p>
                        The default value is <code>false</code>, if outside <code>{`Form`}</code> and <code>{`ValidationProvider`}</code>.
                        If inside <code>{`Form`}</code> or <code>{`ValidationProvider`}</code>, default to <code>true</code>.
                    </p>}
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The component {invalidable.packageShortDisplay} is <strong>activated</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The component {invalidable.packageShortDisplay} is <strong>deactivated</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Activates the {invalidable.packageShortDisplay} of the component.
            </p>
        </PropertySection>
    );
}
export const IsValidProperty = ({children: preview}: PreviewProps) => {
    const {component: {packageName}} = useComponentInfo();
    const isCurrentForm = (packageName === form.packageName);
    
    return (
        <PropertySection property={properties.isValid} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        <strong>Automatically</strong> marks the <strong>validity status</strong> based on its value.
                    </p>
                    {!isCurrentForm && <Warning>
                        <p>
                            Note: The component creator is responsible for making the validation algorithm.
                            The default algorithm of the <TheComponentDisplay /> is by checking <code>:valid</code>/<code>:invalid</code> match of the first child of <code>{`<input>`}</code>/<code>{`<textarea>`}</code>/<code>{`<select>`}</code>.
                        </p>
                    </Warning>}
                </AccordionItem>
                <AccordionItem label={<code>null</code>}>
                    <p>
                        <strong>Marks</strong> the component status as <strong>neutral</strong>.
                    </p>
                    <p>
                        Note: The component status can be marked as valid/invalid <em>indirectly</em> by <code>{`<ancestor isValid={true|false} enableValidation={true}>`}</code> if <code>{`inheritValidation={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Marks</strong> the component status as <strong>valid</strong>.
                        The component appearance will be <strong>green</strong>-ish (by default <em>success theme</em>), overwrites its current theme.
                    </p>
                    <p>
                        Note: The component status can be marked as valid/invalid <em>indirectly</em> by <code>{`<ancestor isValid={true|false} enableValidation={true}>`}</code> if <code>{`inheritValidation={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Marks</strong> the component status as <strong>invalid</strong>.
                        The component appearance will be <strong>redd</strong>-ish (by default <em>danger theme</em>), overwrites its current theme.
                    </p>
                    <p>
                        Note: The component status can be marked as valid/invalid <em>indirectly</em> by <code>{`<ancestor isValid={true|false} enableValidation={true}>`}</code> if <code>{`inheritValidation={true}`}</code> (was configured by default).
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Marks the <strong>validity status</strong> of the component.
            </p>
        </PropertySection>
    );
}
export const InheritValidationProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.inheritValidation} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> inheritance setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Influences the component&apos;s {invalidable.packageShortDisplay} by <code>{`<ancestor isValid={true|false} enableValidation={true}>`}</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Independent the component&apos;s {invalidable.packageShortDisplay}.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Influences the component&apos;s {invalidable.packageShortDisplay} by <code>{`<ancestor isValid={true|false} enableValidation={true}>`}</code>.
            </p>
        </PropertySection>
    );
}
