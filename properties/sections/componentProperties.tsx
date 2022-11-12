import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Tips, Warning } from '../../components/Warning'
import { button } from '../../packages/packageList'
import { TheComponentDisplay, TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'
import {tag, role} from '../propertyList'



export interface ComponentPropertiesProps {
    children : React.ReactNode
}
export const ComponentProperties = ({children} : ComponentPropertiesProps) => {
    return (
        <Section title='Component Properties'>
            <p>
                <strong>Overwrites</strong> the internal (sub) components used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            {children}
        </Section>
    );
}



export interface ButtonComponentPropertyProps {
    children ?: React.ReactNode
}
export const ButtonComponentProperty = ({children: preview} : ButtonComponentPropertyProps) => {
    return (
        <PropertySection property={properties.buttonComponent} preview={preview}>
            <p>
                <strong>Overwrites</strong> the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
        </PropertySection>
    );
}

export interface ButtonRefPropertyProps {
    children ?: React.ReactNode
}
export const ButtonRefProperty = ({children: preview} : ButtonRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonRef} preview={preview}>
            <p>
                <strong>Gets</strong> the <strong>DOM reference</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <p>
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonRef={fooButtonRef} />`
                }</TypeScriptCode>
                is equivalent to:
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button elmRef={fooButtonRef} />
} />`
                }</TypeScriptCode>
            </p>
        </PropertySection>
    );
}

export interface ButtonRefPropertyProps {
    children ?: React.ReactNode
}
export const ButtonOrientationProperty = ({children: preview} : ButtonRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonOrientation} preview={preview}>
            <p>
                <strong>Sets</strong> the <strong>orientation</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <p>
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonOrientation='inline' />`
                }</TypeScriptCode>
                is equivalent to:
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button orientation='inline' />
} />`
                }</TypeScriptCode>
            </p>
        </PropertySection>
    );
}

export interface ButtonStylePropertyProps {
    children ?: React.ReactNode
}
export const ButtonStyleProperty = ({children: preview} : ButtonStylePropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonStyle} preview={preview}>
            <p>
                <strong>Sets</strong> the <strong>alternative appearance</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <p>
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonStyle='link' />`
                }</TypeScriptCode>
                is equivalent to:
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button buttonStyle='link' />
} />`
                }</TypeScriptCode>
            </p>
        </PropertySection>
    );
}

export interface ButtonChildrenPropertyProps {
    children ?: React.ReactNode
    buttonChildrenAsNested ?: boolean
}
export const ButtonChildrenProperty = ({children: preview, buttonChildrenAsNested = false} : ButtonChildrenPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonChildren} preview={preview}>
            <p>
                <strong>Defines</strong> the <strong>nested element</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <p>
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonChildren={
    <span>Hello World</span>
} />`}
                </TypeScriptCode>
                is equivalent to:
                <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button>
        <span>Hello World</span>
    </Button>}
/>`
                }</TypeScriptCode>
                {buttonChildrenAsNested && <>
                    is equivalent to:
                    <TypeScriptCode collapsible={false}>{
`<${componentName}>
    <span>Hello World</span>
</${componentName}>`
                    }</TypeScriptCode>
                </>}
            </p>
        </PropertySection>
    );
}
