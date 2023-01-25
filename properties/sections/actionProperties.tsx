import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/sections/sections'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Tips, Warning } from '../../components/Warning'
import { icon } from '../../packages/packageList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'
import {tag, role} from '../propertyList'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', undefined, 'lg'];
export const themeOptions : ThemeName[] = getThemeOptions();



export interface ClientSideLinkPropertyProps {
    tips ?: React.ReactNode
    children ?: React.ReactNode
}
export const ClientSideLinkProperty = ({tips, children: preview} : ClientSideLinkPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <Section title='Client Side Link'>
            <p>
                <strong>Navigates</strong> between pages using <em>JavaScript</em> way, <strong>without</strong> causing <strong>a whole page HTTP request</strong>.
            </p>
            <p>
                <TheComponentLink /> designed to work with <code>{`<Link>`}</code> component of <strong>React Router</strong> and <strong>Next JS</strong> (<em>Gatsby JS</em> and <em>React Remix</em> are coming soon).
            </p>
            <p>
                When there is a <code>{`<Link>`}</code> component <em>inside</em> the <TheComponentLink />,
                at render phase, the hierarchy of <TheComponentLink /> and <code>{`<Link>`}</code> is <strong>automatically swapped</strong> for you.
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
<Link to='/about' legacyBehavior={true}>
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
export const ClientSideLinkPropertyOfButton = ({tips, ...rest} : ClientSideLinkPropertyProps) => {
    return (
        <ClientSideLinkProperty {...rest} tips={tips ?? <TipsAutoTagToAnchorForHref conditionText={<>there is a <code>{`<Link>`}</code> inside the <TheComponentLink /></>} />} />
    )
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
export const HrefPropertyOfButton = ({tips, ...rest}: HrefPropertyProps) => {
    return (
        <HrefProperty {...rest} tips={tips ?? <TipsAutoTagToAnchorForHref conditionText={<>you assign the <code>{`href`}</code> property of the <TheComponentLink /></>} />} />
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
                <strong>Executes</strong> a JavaScript&apos;s <strong>callback function</strong> when the <TheComponentLink /> is clicked.
            </p>
            {tips && <>
                <p></p>
                {tips}
            </>}
        </PropertySection>
    );
}
export const OnClickPropertyOfButton = ({tips, ...rest}: OnClickPropertyProps) => {
    return (
        <OnClickProperty {...rest} tips={tips ?? <TipsButtonTag />} />
    );
}
export const OnClickPropertyOfRoleButton = ({tips, ...rest}: OnClickPropertyProps) => {
    return (
        <OnClickProperty {...rest} tips={tips ?? <TipsButtonRole />} />
    );
}



export const ParagraphChangeTagRole = () => <p>
    You can also <em>manually</em> change the {tag.propertyShortDisplay} and/or the {role.propertyShortDisplay} as well.
</p>

const TipsAutoTagToAnchorForLink = () => <Tips>
    <p>
        The <TheComponentLink />&apos;s default {tag.propertyShortLink} will <strong>automatically</strong> changed to <code>{`<a>`}</code> if there is a client-side <code>{`<Link>`}</code> component inside the <TheComponentLink />.
    </p>
    <ParagraphChangeTagRole />
</Tips>

interface TipsAutoTagToAnchorForHrefProps {
    conditionText : React.ReactNode
}
const TipsAutoTagToAnchorForHref = ({conditionText}: TipsAutoTagToAnchorForHrefProps) => <Tips>
    <p>
        The <TheComponentLink />&apos;s default {tag.propertyShortLink} will <strong>automatically</strong> changed to <code>{`<a>`}</code> if {conditionText}.
    </p>
    <ParagraphChangeTagRole />
</Tips>

const TipsButtonTag = () => <Tips>
    <p>
        The <TheComponentLink />&apos;s default {tag.propertyShortLink} will <strong>remain</strong> to <code>{`<button>`}</code>,
        as long as you don&apos;t assign the <code>{`href`}</code> property and there is no a client-side <code>{`<Link>`}</code> component inside the <TheComponentLink />.
    </p>
    <ParagraphChangeTagRole />
</Tips>

const TipsButtonRole = () => <Tips>
    <p>
        The <TheComponentLink />&apos;s default {role.propertyShortLink} will <strong>remain</strong> to <code>{`role='button'`}</code>,
        as long as you don&apos;t assign the <code>{`href`}</code> property and there is no a client-side <code>{`<Link>`}</code> component inside the <TheComponentLink />.
    </p>
    <ParagraphChangeTagRole />
</Tips>