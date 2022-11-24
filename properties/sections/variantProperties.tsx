import React from 'react'
import { OrientationName, SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import type { SizeName as IconSizeName } from '@reusable-ui/icon'
import type { SizeName as ButtonIconSizeName } from '@reusable-ui/button-icon'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { background, foreground, border, padding, themable, colorable, carousel, content, button } from '../../packages/packageList'
import { Tips } from '../../components/Warning'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { BadgeStyle, ButtonStyle, CardStyle, CheckStyle, IconPosition, LabelStyle, ListStyle } from '@reusable-ui/components'



export const sizeOptions               : (SizeName|undefined)[]           = [      'sm', 'md', 'lg'      ];
export const iconSizeOptions           : (IconSizeName|undefined)[]       = ['xs', 'sm', 'md', 'lg', 'xl'];
export const buttonIconSizeOptions     : (ButtonIconSizeName|undefined)[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const buttonIconPositionOptions : IconPosition[]                   = ['start','end'];

export const themeOptions              : ThemeName[]                      = getThemeOptions();

export const orientationOptions        : OrientationName[]                = ['inline', 'block'];

export const labelStyleOptions         : LabelStyle[]                     = ['regular', 'content'];
export const buttonStyleOptions        : ButtonStyle[]                    = ['regular', 'link', 'ghost'];
export const checkStyleOptions         : CheckStyle[]                     = ['regular', 'switch', 'button', 'toggleButton'];
export const listStyleOptions          : ListStyle[]                      = ['regular', 'flat', 'flush', 'joined', 'content', 'button', 'tab', 'breadcrumb', 'bullet', 'numbered'];
export const cardStyleOptions          : CardStyle[]                      = ['regular', 'flat', 'flush', 'joined'];
export const badgeStyleOptions         : BadgeStyle[]                     = ['regular', 'pill', 'square', 'circle'];



export interface VariantPropertiesProps {
    children : React.ReactNode
}
export const VariantProperties = ({children} : VariantPropertiesProps) => {
    return (
        <Section title='Variant Properties'>
            <p>
                The <strong>alternative appearances</strong> of the <TheComponentLink /> layout without changing the <TheComponentLink />&apos;s functionality.
            </p>
            {children}
        </Section>
    );
}
export interface SizePropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const SizeProperty = ({possibleValues, children: preview}: SizePropertyProps) => {
    const {nestedComponent, nestedProperties} = useComponentInfo();
    
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
                        <strong>Smaller</strong> size of the <code>font-size</code>, <code>padding</code> and <code>border-radius</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'md'`}</code>}>
                    <p>
                        <strong>Medium</strong> size of the <code>font-size</code>, <code>padding</code> and <code>border-radius</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'lg'`}</code>}>
                    <p>
                        <strong>Bigger</strong> size of the <code>font-size</code>, <code>padding</code> and <code>border-radius</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>alternative size</strong> of the <TheComponentLink />.
            </p>
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>size</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>}
        </PropertySection>
    );
}
export const ThemeProperty = ({children: preview}: PreviewProps) => {
    const {nestedComponent, nestedProperties} = useComponentInfo();
    
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
                Defines the <strong>contextual theme</strong> of the <TheComponentLink />.
            </p>
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>theme</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>}
        </PropertySection>
    );
}
export const GradientProperty = ({children: preview}: PreviewProps) => {
    const {nestedComponent, nestedProperties} = useComponentInfo();
    
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
                Activates a <strong>3D mode</strong> of the <TheComponentLink />.
            </p>
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>gradient</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>}
        </PropertySection>
    );
}
export const OutlinedProperty = ({children: preview}: PreviewProps) => {
    const {nestedComponent, nestedProperties} = useComponentInfo();
    
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
                Activates an <strong>outlined mode</strong> ({background.packageShortLink}-less, contrast {foreground.packageShortLink}, and contrast {border.packageShortLink}) of the <TheComponentLink />.
            </p>
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>outlined</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>}
        </PropertySection>
    );
}
export interface MildPropertyProps extends PreviewProps {
    description ?: React.ReactNode
    tips        ?: React.ReactNode
}
export const MildProperty = ({children: preview, description, tips}: MildPropertyProps) => {
    const {nestedComponent, nestedProperties} = useComponentInfo();
    
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
                Activates a <strong>mild mode</strong> (mild {background.packageShortLink}, contrast {foreground.packageShortLink}, and contrast {border.packageShortLink}) of the <TheComponentLink />.
            </p>}
            {!!nestedComponent && nestedProperties && <p>
                You can set the <code>mild</code> <strong>individually</strong> for each <TheNestedComponentDisplay />.
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
                Activates a <strong>mild mode</strong> (mild {colorable.packageShortLink}) of the <TheComponentLink />.
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
                Activates an <strong>nude mode</strong> ({background.packageShortLink}-less, {padding.packageShortLink}-less, and {border.packageShortLink}-less) of the <TheComponentLink />.
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
                Sets the <strong>orientation</strong> of the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}



export const LabelStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.labelStyle} preview={preview} possibleValues={
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
                <AccordionItem label={<code>'content'</code>}>
                    <p>
                        Makes the <TheComponentLink />&apos;s layout <strong>partially match</strong> to {content.packageLink}&apos;s layout.
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
export const CheckStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.checkStyle} preview={preview} possibleValues={
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
                <AccordionItem label={<code>'switch'</code>}>
                    <p>
                        Makes the <TheComponentLink /> appear as a <strong>sliding switch</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'button'</code>}>
                    <p>
                        Makes the <TheComponentLink /> appear as a <strong>button</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'toggleButton'</code>}>
                    <p>
                        Makes the <TheComponentLink /> appear as a <strong>toggle button</strong>.
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
export const ListStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.listStyle} preview={preview} possibleValues={
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
                <AccordionItem label={<code>'flat'</code>}>
                    <p>
                        Removes the <strong>surrounding border</strong> and removes <strong>separator borders</strong> between <TheNestedComponentDisplay />s.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'flush'</code>}>
                    <p>
                        Removes the <strong>surrounding border</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'joined'</code>}>
                    <p>
                        Removes <strong>separator borders</strong> between <TheNestedComponentDisplay />s.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'content'</code>}>
                    <p>
                        Makes the <TheNestedComponentDisplay />&apos;s layout <strong>match</strong> to {content.packageLink}&apos;s layout.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'button'</code>}>
                    <p>
                        Makes the <TheNestedComponentDisplay />&apos;s layout <strong>match</strong> to {button.packageLink}&apos;s layout.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'tab'</code>}>
                    <p>
                        Makes the <TheComponentLink />&apos;s layout like a <strong>tabular header</strong> layout.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'breadcrumb'</code>}>
                    <p>
                        Makes the <TheComponentLink />&apos;s layout like a <strong>navigation breadcrumb</strong> layout.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'bullet'</code>}>
                    <p>
                        Makes the <TheNestedComponentDisplay />&apos;s layout like a <strong>bullet</strong>.
                    </p>
                    <p>
                        Note: Requires each <TheNestedComponentDisplay /> have an <strong>empty children</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'numbered'</code>}>
                    <p>
                        Makes each <TheNestedComponentDisplay /> have a <strong>numbered counter</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } possibleValueNotes={
            <>
                <p></p>
                <Tips>
                    <p>
                        For the <code>{`'regular'`}</code>, <code>{`'flat'`}</code>, <code>{`'flush'`}</code> and <code>{`'joined'`}</code>, you can mix with one of another items.<br />
                        Eg: <code>{`listStyle={['joined', 'numbered']}`}</code>
                    </p>
                </Tips>
            </>
        }>
            <p>
                Sets the <strong>alternative appearances</strong> of the <TheComponentLink />.
            </p>
        </PropertySection>
    );
}
export const CardStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.cardStyle} preview={preview} possibleValues={
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
                <AccordionItem label={<code>'flat'</code>}>
                    <p>
                        Removes the <strong>surrounding border</strong> and removes <strong>separator borders</strong> between <TheNestedComponentDisplay />s.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'flush'</code>}>
                    <p>
                        Removes the <strong>surrounding border</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'joined'</code>}>
                    <p>
                        Removes <strong>separator borders</strong> between <TheNestedComponentDisplay />s.
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
export const BadgeStyleProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.badgeStyle} preview={preview} possibleValues={
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
                <AccordionItem label={<code>'pill'</code>}>
                    <p>
                        Makes the <TheComponentLink /> have <strong>big rounded corners</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'square'</code>}>
                    <p>
                        Makes the <TheComponentLink /> have <strong>small rounded corners</strong> and have <strong>equal width and height</strong> (if possible).
                    </p>
                    <p>
                        The <TheComponentLink /> requires having <strong>no children</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>'circle'</code>}>
                    <p>
                        Makes the <TheComponentLink /> have <strong>circle shape</strong> and have <strong>equal width and height</strong> (if possible).
                    </p>
                    <p>
                        The <TheComponentLink /> requires having <strong>no children</strong>.
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
