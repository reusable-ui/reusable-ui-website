import React from 'react'
import { SizeName, ThemeName, themeOptions as getThemeOptions } from '@reusable-ui/core'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { outlineable, mildable, activatable, disableable, editableControl, generic, editableActionControl, control } from '../../packages/packageList'
import { Tips, Warning } from '../../components/Warning'
import { button, icon } from '../../packages/packageList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'
import {tag, role} from '../propertyList'
import { ComponentInfo } from '../../packages/packageInfo'



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



export interface ControlComponentPropertyProps {
    control  ?: ComponentInfo
    children ?: React.ReactNode
}
export const ControlComponentProperty = ({children: preview, control: specificControl} : ControlComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.controlComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {(specificControl ?? control).packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} controlComponent={
    <MyCustom${(specificControl ?? control).componentName} />
} />`
            }</TypeScriptCode>
        </PropertySection>
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



export const TrackComponentProperty = () => {
    return (
        <PropertySection property={properties.trackComponent}>
            <p>
                Overwrites the <strong>internal {editableControl.packageLink} component</strong> used as the <strong>main track</strong> of <TheComponentLink /> component.
            </p>
        </PropertySection>
    );
}
export const TrackLowerComponentProperty = () => {
    return (
        <PropertySection property={properties.trackLowerComponent}>
            <p>
                Overwrites the <strong>internal {generic.packageLink} component</strong> used as the <strong>lower track</strong> of <TheComponentLink /> component.
            </p>
        </PropertySection>
    );
}
export const TrackUpperComponentProperty = () => {
    return (
        <PropertySection property={properties.trackUpperComponent}>
            <p>
                Overwrites the <strong>internal {generic.packageLink} component</strong> used as the <strong>upper track</strong> of <TheComponentLink /> component.
            </p>
        </PropertySection>
    );
}
export const ThumbComponentProperty = () => {
    return (
        <PropertySection property={properties.thumbComponent}>
            <p>
                Overwrites the <strong>internal {editableActionControl.packageLink} component</strong> used as the <strong>thumb</strong> of <TheComponentLink /> component.
            </p>
        </PropertySection>
    );
}

export const TrackRefProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackRef}>
            <p>
                Gets the <strong>DOM reference</strong> of the <strong>internal {editableControl.packageLink} component</strong> used as the <strong>main track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackRef={fooTrackRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackComponent={
    <EditableControl elmRef={fooTrackRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackLowerRefProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackLowerRef}>
            <p>
                Gets the <strong>DOM reference</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>lower track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerRef={fooTrackLowerRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerComponent={
    <Generic elmRef={fooTrackLowerRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackUpperRefProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackUpperRef}>
            <p>
                Gets the <strong>DOM reference</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>upper track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperRef={fooTrackUpperRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperComponent={
    <Generic elmRef={fooTrackUpperRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const ThumbRefProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.thumbRef}>
            <p>
                Gets the <strong>DOM reference</strong> of the <strong>internal {editableActionControl.packageLink} component</strong> used as the <strong>thumb</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbRef={fooThumbRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbComponent={
    <EditableActionControl elmRef={fooThumbRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export const TrackClassesProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackClasses}>
            <p>
                Appends the <strong>CSS class</strong> of the <strong>internal {editableControl.packageLink} component</strong> used as the <strong>main track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackClasses={['boo', 'foo']} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackComponent={
    <EditableControl classes={['boo', 'foo']} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackLowerClassesProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackLowerClasses}>
            <p>
                Appends the <strong>CSS class</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>lower track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerClasses={['boo', 'foo']} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerComponent={
    <Generic classes={['boo', 'foo']} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackUpperClassesProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackUpperClasses}>
            <p>
                Appends the <strong>CSS class</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>upper track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperClasses={['boo', 'foo']} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperComponent={
    <Generic classes={['boo', 'foo']} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const ThumbClassesProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.thumbClasses}>
            <p>
                Appends the <strong>CSS class</strong> of the <strong>internal {editableActionControl.packageLink} component</strong> used as the <strong>thumb</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbClasses={['boo', 'foo']} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbComponent={
    <EditableActionControl classes={['boo', 'foo']} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export const TrackStyleProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackStyle}>
            <p>
                Appends the <strong>inline CSS</strong> of the <strong>internal {editableControl.packageLink} component</strong> used as the <strong>main track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackStyle={{ opacity: 0.5, cursor: 'pointer' }} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackComponent={
    <EditableControl style={{ opacity: 0.5, cursor: 'pointer' }} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackLowerStyleProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackLowerStyle}>
            <p>
                Appends the <strong>inline CSS</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>lower track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerStyle={{ opacity: 0.5, cursor: 'pointer' }} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackLowerComponent={
    <Generic style={{ opacity: 0.5, cursor: 'pointer' }} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const TrackUpperStyleProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.trackUpperStyle}>
            <p>
                Appends the <strong>inline CSS</strong> of the <strong>internal {generic.packageLink} component</strong> used as the <strong>upper track</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperStyle={{ opacity: 0.5, cursor: 'pointer' }} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} trackUpperComponent={
    <Generic style={{ opacity: 0.5, cursor: 'pointer' }} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
export const ThumbStyleProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.thumbStyle}>
            <p>
                Appends the <strong>inline CSS</strong> of the <strong>internal {editableActionControl.packageLink} component</strong> used as the <strong>thumb</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbStyle={{ opacity: 0.5, cursor: 'pointer' }} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} thumbComponent={
    <EditableActionControl style={{ opacity: 0.5, cursor: 'pointer' }} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
