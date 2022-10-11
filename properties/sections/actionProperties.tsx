import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Tips, Warning } from '../../components/Warning'
import { icon } from '../../packages/packageList'
import { TheComponentDisplay, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'
import {tag, role} from '../propertyList'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', undefined, 'lg'];
export const themeOptions : ThemeName[] = getThemeOptions();



export interface ClientSideLinkPropertyProps {
    tips ?: React.ReactNode
    children ?: React.ReactNode
}
export const ClientSideLinkProperty = ({tips, children: preview} : ClientSideLinkPropertyProps) => {
    const {component: {componentTag}} = useComponentInfo();
    const componentName = componentTag.slice(1, -1);
    
    return (
        <Section title='Client Side Link'>
            <p>
                <strong>Navigates</strong> between pages using <em>JavaScript</em> way, <strong>without</strong> causing <strong>a whole page HTTP request</strong>.
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
            {tips && <>
                <p></p>
                {tips}
            </>}
            {preview && <>
                <hr />
                <p>
                    Here the preview:
                </p>
                {preview}
            </>}
        </Section>
    );
}



export interface HrefPropertyProps {
    tips ?: React.ReactNode
    children ?: React.ReactNode
}
export const HrefProperty = ({tips, children: preview}: HrefPropertyProps) => {
    return (
        <PropertySection property={properties.href} preview={preview}>
            <p>
                <strong>Navigates</strong> to another pages or to external websites using <strong>traditional</strong> link.
            </p>
            {tips && <>
                <p></p>
                {tips}
            </>}
        </PropertySection>
    );
}



export interface OnClickPropertyProps {
    tips ?: React.ReactNode
    children ?: React.ReactNode
}
export const OnClickProperty = ({tips, children: preview}: OnClickPropertyProps) => {
    return (
        <PropertySection property={properties.onClick} preview={preview}>
            <p>
                <strong>Executes</strong> a JavaScript&apos;s <strong>callback function</strong> when the <TheComponentDisplay /> is clicked.
            </p>
            {tips && <>
                <p></p>
                {tips}
            </>}
        </PropertySection>
    );
}