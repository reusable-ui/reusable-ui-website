import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { background, foreground, border, padding, themable } from '../../packages/packageList'
import { Tips } from '../../components/Warning'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', undefined, 'lg'];
export const themeOptions : ThemeName[] = getThemeOptions();



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
                        Uses <strong>default</strong> size.
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
export const GradientProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.gradient} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> gradient setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'inherit'</code>}>
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
                <AccordionItem label={<code>'inherit'</code>}>
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
export const MildProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.mild} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> mild setting.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'inherit'</code>}>
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
            <p>
                Activates a <strong>mild mode</strong> (mild {background.packageShortLink}, contrast {foreground.packageShortLink}, and contrast {border.packageShortLink}) of the component.
            </p>
            <Tips>
                <p>
                    Note: <em>Mild</em> means <em>light background</em> on <em>light mode</em> or <em>dark background</em> on <em>dark mode</em>.
                    The default {themable.packageShortLink} scheme is light mode, so mild is <em>light background</em>.
                </p>
            </Tips>
        </PropertySection>
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

