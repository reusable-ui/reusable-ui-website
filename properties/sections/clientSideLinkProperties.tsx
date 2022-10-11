import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Warning } from '../../components/Warning'
import { icon } from '../../packages/packageList'
import { TheComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', undefined, 'lg'];
export const themeOptions : ThemeName[] = getThemeOptions();



export interface ClientSideLinkPropertiesProps {
    children ?: React.ReactNode
}
export const ClientSideLinkProperties = ({children} : ClientSideLinkPropertiesProps) => {
    const {component: {componentTag}} = useComponentInfo();
    const componentName = componentTag.slice(1, -1);
    
    return (
        <Section title='Client Side Link'>
            <p>
                Navigates between pages using <em>JavaScript</em> way, <strong>without</strong> causing <strong>a whole page HTTP request</strong>.
            </p>
            <p>
                <TheComponentDisplay /> designed to work with <code>{`<Link>`}</code> component of <strong>React Router</strong> and <strong>Next JS</strong> (<em>Gatsby JS</em> and <em>React Remix</em> are coming soon).
            </p>
            <p>
                When there is a <code>{`<Link>`}</code> component <em>inside</em> the <TheComponentDisplay />,
                at render phase, the hierarchy of <TheComponentDisplay /> and <code>{`<Link>`}</code> is <strong>automatically swapped</strong> for you.
                Here the illustration:
            </p>
            <TypeScriptCode>{`
// declaration:
<${componentName}>
    please
    <Link to='/about'>
        visit
    </Link>
    <span>
        here!
    </span>
</${componentName}>

// during render phase:
// for illustration purpose, the actuall is not this way
<Link to='/about'>
    <${componentName}>
        please
        visit
        <span>
            here!
        </span>
    </${componentName}>
</Link>
            `}</TypeScriptCode>
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
