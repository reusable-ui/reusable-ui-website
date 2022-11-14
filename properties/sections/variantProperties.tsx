import React from 'react'
import { OrientationName, SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import type { SizeName as IconSizeName } from '@reusable-ui/icon'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { background, foreground, border, padding, themable, colorable, carousel } from '../../packages/packageList'
import { Tips } from '../../components/Warning'
import { TheComponentLink } from '../../packages/componentContext'
import { ButtonStyle } from '@reusable-ui/components'



export const sizeOptions        : (SizeName|undefined)[]     = ['sm', undefined, 'lg'];
export const iconSizeOptions    : (IconSizeName|undefined)[] = ['sm', 'nm', 'md', 'lg'];

export const themeOptions       : ThemeName[]                = getThemeOptions();

export const orientationOptions : OrientationName[]          = ['inline', 'block'];

export const buttonStyleOptions : ButtonStyle[]              = ['regular', 'link', 'ghost'];



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
export interface SizePropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const SizeProperty = ({possibleValues, children: preview}: SizePropertyProps) => {
    return (
        <PropertySection property={properties.size} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'sm'`}</code>}>
                    <p>
                        Makes the <code>font-size</code>, <code>padding</code> and <code>border-radius</code> <strong>smaller</strong> than the default.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'lg'`}</code>}>
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
                <AccordionItem label={<code>{`'primary'`}</code>} theme='primary'>
                    <p>
                        The <strong>primary</strong> theme represents your <strong>website color</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'secondary'`}</code>} theme='secondary'>
                    <p>
                        The <strong>secondary</strong> theme represents your <strong>website alternative color</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'success'`}</code>} theme='success'>
                    <p>
                        The <strong>success</strong> theme represents a <strong>success result</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'info'`}</code>} theme='info'>
                    <p>
                        The <strong>info</strong> theme represents a <strong>general information</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'warning'`}</code>} theme='warning'>
                    <p>
                        The <strong>warning</strong> theme represents a <strong>warning message</strong> or notify something that <strong>could cause an error</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'danger'`}</code>} theme='danger'>
                    <p>
                        The <strong>danger</strong> theme represents an <strong>error result</strong> to the user.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'light'`}</code>} theme='light'>
                    <p>
                        The <strong>light</strong> theme doen&apos;t have a meaning, just for helping a text content <strong>againts a dark background or dark background-image</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'dark'`}</code>} theme='dark'>
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
export const GradientProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.gradient} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> gradient setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'inherit'`}</code>}>
                    <p>
                        <strong>Inherits</strong> <code>&lt;parent&gt;</code>&apos;s gradient.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> a <strong>3D mode</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> a <strong>3D mode</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Activates a <strong>3D mode</strong> of the component.
            </p>
        </PropertySection>
    );
}
export const OutlinedProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.outlined} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> outlined setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'inherit'`}</code>}>
                    <p>
                        <strong>Inherits</strong> <code>&lt;parent&gt;</code>&apos;s outlined.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> an <strong>outlined mode</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> an <strong>outlined mode</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Activates an <strong>outlined mode</strong> ({background.packageShortLink}-less, contrast {foreground.packageShortLink}, and contrast {border.packageShortLink}) of the component.
            </p>
        </PropertySection>
    );
}
export interface MildPropertyProps extends PreviewProps {
    description ?: React.ReactNode
    tips        ?: React.ReactNode
}
export const MildProperty = ({children: preview, description, tips}: MildPropertyProps) => {
    return (
        <PropertySection property={properties.mild} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> mild setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'inherit'`}</code>}>
                    <p>
                        <strong>Inherits</strong> <code>&lt;parent&gt;</code>&apos;s mild.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> a <strong>mild mode</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> a <strong>mild mode</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            {description ?? <p>
                Activates a <strong>mild mode</strong> (mild {background.packageShortLink}, contrast {foreground.packageShortLink}, and contrast {border.packageShortLink}) of the component.
            </p>}
            {tips ?? <Tips>
                <p>
                    Note: <strong>Mild</strong> means <em>light background</em> on <em>light mode</em> and <em>dark background</em> on <em>dark mode</em>.
                    The <strong>default</strong> {themable.packageShortLink} scheme is <strong>light mode</strong>, so mild is <strong>light background</strong>.
                </p>
            </Tips>}
        </PropertySection>
    );
}
export const ContextualMildProperty = ({description, tips, ...props}: MildPropertyProps) => {
    return (
        <MildProperty
            {...props}
            
            description={description ?? <p>
                Activates a <strong>mild mode</strong> (mild {colorable.packageShortLink}) of the component.
            </p>}
            
            tips={tips ?? <Tips>
                <p>
                    Note: <strong>Mild</strong> means <strong>near <code>{`<parent>`}</code>&apos;s background brightness</strong>, that is <em>smooth color</em> on <em>smooth <code>{`<parent>`}</code></em> and <em>strong color</em> on <em>strong <code>{`<parent>`}</code></em>.
                    The <strong>default</strong> behavior is <strong>contrast mode</strong>, that is <em>strong color</em> on <em>smooth <code>{`<parent>`}</code></em> and <em>smooth color</em> on <em>strong <code>{`<parent>`}</code></em>.
                </p>
            </Tips>}
        />
    );
}
export const NudeProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.nude} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> nude setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        <strong>Activates</strong> a <strong>nude mode</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        <strong>Deactivates</strong> a <strong>nude mode</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Activates an <strong>nude mode</strong> ({background.packageShortLink}-less, {padding.packageShortLink}-less, and {border.packageShortLink}-less) of the component.
            </p>
            <Tips>
                <p>
                    Useful to make a <strong>wrapper</strong> for the <code>&lt;child&gt;</code> component.
                    Only the <code>&lt;child&gt;</code> is visually visible.
                </p>
            </Tips>
        </PropertySection>
    );
}



export const OrientationProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.orientation} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> orientation setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'inline'</code>}>
                    <p>
                        Set the orientation to <strong>horizontal</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'block'</code>}>
                    <p>
                        Set the orientation to <strong>vertical</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Sets the <strong>orientation</strong> of the component.
            </p>
        </PropertySection>
    );
}



export const ButtonStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.buttonStyle} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> appearance setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'regular'</code>}>
                    <p>
                        Uses <strong>regular</strong> appearance.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'link'</code>}>
                    <p>
                        Makes the <TheComponentLink /> appear as a <strong>link</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'ghost'</code>}>
                    <p>
                        Makes the <TheComponentLink /> appear <strong>semi invisible</strong>.
                    </p>
                    <p>
                        Useful when placed on the top of an image without distracting the image.
                        Used in {carousel.packageLink} component.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Sets the <strong>alternative appearances</strong> of the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}
