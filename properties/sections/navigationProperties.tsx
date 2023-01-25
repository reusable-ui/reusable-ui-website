import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/sections/sections'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable, invalidable } from '../../packages/packageList'
import { Warning } from '../../components/Warning'
import { icon } from '../../packages/packageList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import {active, onClick} from '../../properties/propertyList'
import { TypeScriptCode } from '../../components/Code'



export interface NavigationPropertiesProps {
    children : React.ReactNode
}
export const NavigationProperties = ({children} : NavigationPropertiesProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <Section title='Navigation Properties'>
            <p>
                Specifies how comparisons are made for the <em>current URL</em> with the <code>href</code>/<code>to</code> property inside <code>{'<Link>'}</code> component.
            </p>
            <p>
                In order to the properties below to work, you should place a <code>{'<Link>'}</code> component inside the <TheComponentLink />, with the <code>href</code> property (NextJS) or <code>to</code> property (ReactRouter).
            </p>
            <TypeScriptCode collapsible={false}>{
`
// NextJs:
<${componentName} caseSensitive={false} end={false}>
    <Link href='/products'>Products</Link>
</${componentName}>

// ReactRouter:
<${componentName} caseSensitive={false} end={false}>
    <Link to='/products'>Products</Link>
</${componentName}>
`
            }</TypeScriptCode>
            {children}
        </Section>
    );
}



export const CaseSensitiveProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.caseSensitive} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Defaults to <strong>false</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The comparison is <strong>case sensitive</strong> which is the <em>uppercase letter</em> and <em>lowercase letter</em> are <strong>different</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The comparison is <strong>case insensitive</strong> which is the <em>uppercase letter</em> and <em>lowercase letter</em> are <strong>the same</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>string sensivity comparison</strong> for the <em>current URL</em> with the <code>href</code>/<code>to</code> property inside <code>{'<Link>'}</code> component.
            </p>
        </PropertySection>
    );
}
export const EndProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.end} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Defaults to <strong>true</strong> if the destination URL is forward slash (<code>'/'</code>) which represents home page.
                    </p>
                    <p>
                        Defaults to <strong>false</strong> is the destination URL is not forward slash (<code>'/'</code>).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        The nested URLs are treated as <strong>not the part</strong> of destination URL described in the <code>href</code>/<code>to</code> property inside <code>{'<Link>'}</code> component.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The nested URLs are treated as <strong>the sub part</strong> of destination URL described in the <code>href</code>/<code>to</code> property inside <code>{'<Link>'}</code> component.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines how <strong>nested URL</strong>s are treated against the <code>href</code>/<code>to</code> property inside <code>{'<Link>'}</code> component.
            </p>
        </PropertySection>
    );
}
