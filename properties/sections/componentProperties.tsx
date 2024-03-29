import React from 'react'
import { PropertySection } from '../../components/sections/PropertySection'
import { Section } from '../../components/sections/Section'
import * as properties from '../propertyList'
import { editableControl, generic, editableActionControl, control, toggleButton, dropdown, list, card, popup, modal, collapse, listItem, nav, navscroll, content, accordion, basic } from '../../packages/packageList'
import { button, icon } from '../../packages/packageList'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext'
import { TypeScriptCode } from '../../components/Code'
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



export interface BasicComponentPropertyProps {
    basic       ?: ComponentInfo
    componentOf ?: React.ReactNode
    children    ?: React.ReactNode
}
export const BasicComponentProperty = ({children: preview, basic: specificBasic, componentOf: specificComponent} : BasicComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.basicComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {(specificBasic ?? basic).packageLink} component</strong> used as {specificComponent ?? <>the <strong>composition</strong> of <TheComponentLink /> component</>}.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} basicComponent={
    <MyCustom${(specificBasic ?? basic).componentName} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface BodyComponentPropertyProps {
    content     ?: ComponentInfo
    componentOf ?: React.ReactNode
    children    ?: React.ReactNode
}
export const BodyComponentProperty = ({children: preview, content: specificContent, componentOf: specificComponent} : BodyComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.bodyComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {(specificContent ?? content).packageLink} component</strong> used as {specificComponent ?? <>the <strong>composition</strong> of <TheComponentLink /> component</>}.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} bodyComponent={
    <MyCustom${(specificContent ?? content).componentName} />
} />`
            }</TypeScriptCode>
        </PropertySection>
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

export interface ButtonOrientationPropertyProps {
    children ?: React.ReactNode
}
export const ButtonOrientationProperty = ({children: preview} : ButtonOrientationPropertyProps) => {
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



export interface ToggleButtonComponentPropertyProps {
    children ?: React.ReactNode
}
export const ToggleButtonComponentProperty = ({children: preview} : ToggleButtonComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.toggleButtonComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {toggleButton.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} toggleButtonComponent={
    <MyCustomToggleButton />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface PrevButtonComponentPropertyProps {
    children ?: React.ReactNode
}
export const PrevButtonComponentProperty = ({children: preview} : PrevButtonComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.prevButtonComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {button.packageLink} component</strong> used as the <TheComponentLink />&apos;s prev button.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} prevButtonComponent={
    <MyCustomPrevButton />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface NextButtonComponentPropertyProps {
    children ?: React.ReactNode
}
export const NextButtonComponentProperty = ({children: preview} : NextButtonComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.nextButtonComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {button.packageLink} component</strong> used as the <TheComponentLink />&apos;s next button.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} nextButtonComponent={
    <MyCustomNextButton />
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



export interface ArrowComponentPropertyProps {
    children ?: React.ReactNode
}
export const ArrowComponentProperty = ({children: preview} : ArrowComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.arrowComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {generic.packageLink} component</strong> used as the <strong>arrow</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} arrowComponent={
    <MyCustomArrow />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface ArrowRefPropertyProps {
    children ?: React.ReactNode
}
export const ArrowRefProperty = ({children: preview} : ArrowRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.arrowRef} preview={preview}>
            <p>
                Gets the <strong>DOM reference</strong> of the internal {generic.packageLink} component used as the <strong>arrow</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} arrowRef={fooArrowRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} arrowComponent={
    <Generic elmRef={fooArrowRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface DropdownComponentPropertyProps {
    children ?: React.ReactNode
}
export const DropdownComponentProperty = ({children: preview} : DropdownComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.dropdownComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {dropdown.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} dropdownComponent={
    <MyCustomDropdown />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}


export interface DropdownRefPropertyProps {
    children ?: React.ReactNode
}
export const DropdownRefProperty = ({children: preview} : DropdownRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.dropdownRef} preview={preview}>
            <p>
                Gets the <strong>DOM reference</strong> of the internal {dropdown.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} dropdownRef={fooDropdownRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} dropdownComponent={
    <Dropdown elmRef={fooDropdownRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface DropdownRefPropertyProps {
    children ?: React.ReactNode
}
export const DropdownOrientationProperty = ({children: preview} : DropdownRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.dropdownOrientation} preview={preview}>
            <p>
                Sets the <strong>orientation</strong> of the internal {dropdown.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} dropdownOrientation='inline' />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} dropdownComponent={
    <Dropdown orientation='inline' />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface ListComponentPropertyProps {
    children ?: React.ReactNode
}
export const ListComponentProperty = ({children: preview} : ListComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.listComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {list.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} listComponent={
    <MyCustomList />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface ListRefPropertyProps {
    children ?: React.ReactNode
}
export const ListRefProperty = ({children: preview} : ListRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.listRef} preview={preview}>
            <p>
                Gets the <strong>DOM reference</strong> of the internal {list.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} listRef={fooListRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} listComponent={
    <List elmRef={fooListRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface ListOrientationPropertyProps {
    children ?: React.ReactNode
}
export const ListOrientationProperty = ({children: preview} : ListOrientationPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.listOrientation} preview={preview}>
            <p>
                Sets the <strong>orientation</strong> of the internal {list.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} listOrientation='inline' />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} listComponent={
    <List orientation='inline' />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface ListItemsPropertyProps {
    children ?: React.ReactNode
}
export const ListItemsProperty = ({children: preview} : ListItemsPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.listItems} preview={preview}>
            <p>
                Defines the <strong>nested element</strong> of the internal {list.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} listItems={
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListSeparatorItem />
    <ListItem enabled={false}>
        A disabled item
    </ListItem>
} />`}
            </TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} listComponent={
    <List>
        <ListItem>
            A first item
        </ListItem>
        <ListItem>
            A second item
        </ListItem>
        <ListSeparatorItem />
        <ListItem enabled={false}>
            A disabled item
        </ListItem>
    </List>
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface ListItemComponentPropertyProps {
    componentOf ?: React.ReactNode
    children    ?: React.ReactNode
}
export const ListItemComponentProperty = ({children: preview, componentOf: specificComponent} : ListItemComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.listItemComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {listItem.packageLink} component</strong> used as {specificComponent ?? <>the <strong>composition</strong> of <TheComponentLink /> component</>}.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} listItemComponent={
    <MyCustomListItem />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface NavComponentPropertyProps {
    children ?: React.ReactNode
}
export const NavComponentProperty = ({children: preview} : NavComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.navComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {nav.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} navComponent={
    <MyCustomNav />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface NavscrollComponentPropertyProps {
    componentOf ?: React.ReactNode
    code        ?: string
    children    ?: React.ReactNode
}
export const NavscrollComponentProperty = ({children: preview, componentOf: specificComponent, code: specificCode} : NavscrollComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.navscrollComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {navscroll.packageLink} component</strong> used as {specificComponent ?? <>the <strong>composition</strong> of <TheComponentLink /> component</>}.
            </p>
            <TypeScriptCode collapsible={false}>{specificCode ??
`<${componentName} navscrollComponent={
    <MyCustomNavscroll />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface AccordionComponentPropertyProps {
    children ?: React.ReactNode
}
export const AccordionComponentProperty = ({children: preview} : AccordionComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.accordionComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {accordion.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} accordionComponent={
    <MyCustomAccordion />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface CardComponentPropertyProps {
    children ?: React.ReactNode
}
export const CardComponentProperty = ({children: preview} : CardComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.cardComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {card.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} cardComponent={
    <MyCustomCard />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface PopupComponentPropertyProps {
    children ?: React.ReactNode
}
export const PopupComponentProperty = ({children: preview} : PopupComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.popupComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {popup.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} popupComponent={
    <MyCustomPopup />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface CollapseComponentPropertyProps {
    children ?: React.ReactNode
}
export const CollapseComponentProperty = ({children: preview} : CollapseComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.collapseComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {collapse.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} collapseComponent={
    <MyCustomCollapse />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}



export interface ModalComponentPropertyProps {
    children ?: React.ReactNode
}
export const ModalComponentProperty = ({children: preview} : ModalComponentPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.modalComponent} preview={preview}>
            <p>
                Overwrites the <strong>internal {modal.packageLink} component</strong> used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} modalComponent={
    <MyCustomModal />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}

export interface ModalRefPropertyProps {
    children ?: React.ReactNode
}
export const ModalRefProperty = ({children: preview} : ModalRefPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.modalRef} preview={preview}>
            <p>
                Gets the <strong>DOM reference</strong> of the internal {modal.packageLink} component used as the <strong>composition</strong> of <TheComponentLink /> component.
            </p>
            <TypeScriptCode collapsible={false}>{
`<${componentName} modalRef={fooModalRef} />`
            }</TypeScriptCode>
            is equivalent to:
            <TypeScriptCode collapsible={false}>{
`<${componentName} modalComponent={
    <Modal elmRef={fooModalRef} />
} />`
            }</TypeScriptCode>
        </PropertySection>
    );
}
