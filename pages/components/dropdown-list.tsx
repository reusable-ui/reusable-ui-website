import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/sections/sections'
import { collapse, list, dropdownList, listItem } from '../../packages/packageList'
import { orientationOptions, OrientationProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { DropdownList as OriDropdownList, DropdownListProps, ListItem, CardBody, ListSeparatorItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { ComponentProperties, DropdownComponentProperty, DropdownOrientationProperty, DropdownRefProperty, ListComponentProperty } from '../../properties/sections/componentProperties'



const DummyListItems = () => {
    return [
        <ListItem key={0}>
            A first item
        </ListItem>,
        <ListItem key={1}>
            A second item
        </ListItem>,
        <ListSeparatorItem key={2} />,
        <ListItem key={3} enabled={false}>
            A disabled item
        </ListItem>,
    ];
}
const DummyListItemsText = () => {
    return (
`    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListSeparatorItem />
    <ListItem enabled={false}>
        A disabled item
    </ListItem>`
    );
}

const DropdownList = (props: Partial<DropdownListProps>) => <OriDropdownList {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} setFocus={false} restoreFocus={false}>
    {[props.children].flat().every((child) => React.isValidElement(child)) ? props.children : DummyListItems()}
</OriDropdownList>

const defaultFloatingChildren = DummyListItemsText();



const DemoDropdownList = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '9rem',
                blockSize    : '7rem',
                alignContent : 'start',
                
                whiteSpace: 'nowrap',
            }}>
                <DropdownList expanded={isFlip} dropdownOrientation='block' />
            </div>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '9rem',
                blockSize    : '7rem',
                alignContent : 'start',
                
                whiteSpace: 'nowrap',
            }}>
                <DropdownList expanded={isFlip} dropdownOrientation='inline' />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<DropdownList expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                inlineSize   : '9rem',
                blockSize    : '7rem',
                alignContent : 'start',
                
                whiteSpace: 'nowrap',
            }}>
                <DropdownList expanded={isFlip} dropdownOrientation='block' />
            </div>
        </CardBody>
    );
}
const DemoOrientation = () => {
    return (
        <CardBody>
            {orientationOptions.map((orientation, index) =>
                <div key={index} style={{
                    display      : 'grid',
                    justifyItems : 'center',
                    alignItems   : 'center',
                    
                    ...((orientation === 'inline') ? {
                        inlineSize   : '23rem',
                        blockSize    : '3rem',
                        alignContent : 'start',
                    } : {
                        inlineSize   : '9rem',
                        blockSize    : '7rem',
                        alignContent : 'start',
                    }),
                    
                    whiteSpace: 'nowrap',
                }}>
                    <DropdownList expanded={true} orientation={orientation} floatingAutoFlip={false} floatingAutoShift={false} />
                </div>
            )}
        </CardBody>
    );
}
const DemoDropdownOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            {orientationOptions.map((orientation, index) =>
                <div key={index} style={{
                    display      : 'grid',
                    justifyItems : 'center',
                    alignItems   : 'center',
                    
                    inlineSize   : '9rem',
                    blockSize    : '7rem',
                    alignContent : 'start',
                    
                    whiteSpace: 'nowrap',
                }}>
                    <DropdownList expanded={isFlip} dropdownOrientation={orientation} />
                </div>
            )}
        </CardBody>
    );
}



const DropdownListPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdownList} baseComponents={list} componentFactory={
        <DropdownList dropdownOrientation='block' size='sm' theme='primary' floatingAutoFlip={false} floatingAutoShift={false} />
    }>
        <Head>
            <title>{`${dropdownList.componentTag} Component`}</title>
            <meta name="description" content={`${dropdownList.componentTag} is a context menu of ${list.componentTag}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a context menu of {list.packageLink}.
                </p>
                <p>
                    <TheComponentLink /> is similar to {collapse.packageLink} with additional handling of <kbd>esc</kbd> key and <strong>blur</strong> event to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable {listItem.packageDisplay} inside the <TheComponentLink />.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownList />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<DropdownList
    expanded={true}
    dropdownOrientation='block'
    theme='primary'
>
${defaultFloatingChildren}
</DropdownList>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <OrientationProperty>
            <Preview display='right' stretch={false} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>
                    {orientationOptions.map((orientationName) =>
`
<DropdownList
    expanded={true}
    orientation='${orientationName}'
    theme='primary'
>
${defaultFloatingChildren}
</DropdownList>
`
                    ).join('')}
                </TypeScriptCode>
            </OrientationProperty>
            <DropdownOrientationProperty>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownOrientation />} />
                <p></p>
                <TypeScriptCode>{
                    orientationOptions.map((orientation) =>
`
<DropdownList
    expanded={true}
    dropdownOrientation='${orientation}'
    theme='primary'
>
${defaultFloatingChildren}
</DropdownList>
`
                    ).join('\n\n')
                }</TypeScriptCode>
            </DropdownOrientationProperty>
            <LazyProperty childrenText={list.packageDisplay} />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} floatingPlacement='top-end' floatingOffset={-10} floatingShift={20} />
                <FloatingPlacementProperty floatingComponent={
                    <DropdownList dropdownOrientation='block' size='sm' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem>
                            A second item
                        </ListItem>
                    </DropdownList>
                } />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty floatingChildren={defaultFloatingChildren} />
                <FloatingAutoShiftProperty floatingChildren={defaultFloatingChildren} />
                <FloatingOffsetProperty floatingChildren={defaultFloatingChildren} />
                <FloatingShiftProperty floatingChildren={defaultFloatingChildren} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <ComponentProperties>
                <ListComponentProperty />
                
                <DropdownComponentProperty />
                <DropdownRefProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default DropdownListPage
