import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable } from '../../packages/packageList'
import { Tips, Warning } from '../../components/Warning'
import { button, icon } from '../../packages/packageList'
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
                Overwrites the <strong>internal (sub) components</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            {children}
        </Section>
    );
}



export interface ButtonComponentPropertyProps {
    children ?: React.ReactNode
}
export const ButtonComponentProperty = ({children: preview} : ButtonComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {button.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <MyCustomButton />
} />`
            }</TypeScriptCode>
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
                Gets the <strong>DOM reference</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonRef={fooButtonRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button elmRef={fooButtonRef} />
} />`
            }</TypeScriptCode>
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
                Sets the <strong>orientation</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonOrientation='inline' />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button orientation='inline' />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

/*export interface ButtonStylePropertyProps {
    children ?: React.ReactNode
}
export const ButtonStyleProperty = ({children: preview} : ButtonStylePropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonStyle} preview={preview}>
            <p>
                Sets the <strong>alternative appearance</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonStyle='link' />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} buttonComponent={
    <Button buttonStyle='link' />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}*/

export interface ButtonChildrenPropertyProps {
    children ?: React.ReactNode
}
export const ButtonChildrenProperty = ({children: preview} : ButtonChildrenPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.buttonChildren} preview={preview}>
            <p>
                Defines the <strong>nested element</strong> of the internal {button.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
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
    </Button>
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface IconComponentPropertyProps {
    children ?: React.ReactNode
}
export const IconComponentProperty = ({children: preview} : IconComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.iconComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {icon.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} iconComponent={
    <MyCustomIcon />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
