import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { dropdownButton, dropdownListButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, orientationWithDirectionOptions, OrientationWithDirectionProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { DropdownListButton as OriDropdownListButton, DropdownListButtonProps, Control, CardBody, DropdownExpandedChangeEvent } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { DefaultExpandedProperty, EnabledProperty, ExpandedProperty, InheritEnabledProperty, OnExpandedChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonChildrenProperty, ButtonComponentProperty, ButtonOrientationProperty, ButtonRefProperty, ComponentProperties, DropdownComponentProperty, DropdownOrientationProperty, DropdownRefProperty, ToggleButtonComponentProperty } from '../../properties/sections/componentProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { EventHandler, useEvent } from '@reusable-ui/core'
import { DummyUiBig, DummyUiSmall } from '../../components/DummyUi'
import { DropdownCardBody } from '../../components/DropdownCardBody'
import { DropdownUiProperty } from '../../properties/sections/dropdownProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, DropdownButtonFloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const DropdownListButton = (props: Partial<DropdownListButtonProps>) => <OriDropdownListButton {...props} theme={props.theme ?? 'primary'} buttonChildren={
    'Show Menu'
}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdownListButton>

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdownListButton = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    const [expanded, setExpanded] = useState<boolean>(false);
    
    useEffect(() => {
        setExpanded(isFlip);
    }, [isFlip]);
    const handleExpandedChange : EventHandler<DropdownExpandedChangeEvent> = useEvent((event) => {
        setExpanded(event.expanded);
    });
    
    
    return (
        <DropdownCardBody elmRef={viewportRef}>
            <DropdownListButton expanded={expanded} onExpandedChange={handleExpandedChange} focused={false} orientation='block-end' />
        </DropdownCardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '15rem', justifyContent: 'start'}}>
            <p>
                <code>{`<DropdownListButton expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <DropdownListButton expanded={isFlip} orientation='block-end' floatingAutoFlip={false} floatingAutoShift={false} />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            {orientationWithDirectionOptions.map((orientation, index) =>
                <div key={index} style={{
                    display      : 'grid',
                    justifyItems : 'center',
                    alignItems   : 'center',
                    
                    boxSizing : 'border-box',
                    ...(orientation.startsWith('inline') ? {
                        inlineSize     : 'calc(128px + 8rem)',
                        blockSize      : '128px',
                        justifyContent : orientation.endsWith('start') ? 'end' : 'start',
                    } : {
                        blockSize      : 'calc(128px + 3rem)',
                        inlineSize     : '128px',
                        alignContent   : orientation.endsWith('start') ? 'end' : 'start',
                    }),
                }}>
                    <DropdownListButton expanded={isFlip} orientation={orientation} floatingAutoFlip={false} floatingAutoShift={false} />
                </div>
            )}
        </CardBody>
    );
}



const DropdownListButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdownListButton} baseComponents={dropdownButton} componentFactory={
        <DropdownListButton orientation='block-end' theme='primary' floatingAutoFlip={false} floatingAutoShift={false} />
    }>
        <Head>
            <title>{`${dropdownListButton.componentTag} Component`}</title>
            <meta name="description" content={`${dropdownButton.componentTag} is a ${packages.toggleButton.componentTag} component with a ${packages.dropdown.componentTag} of ${packages.list.componentTag}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a {packages.toggleButton.packageLink} component with a {packages.dropdown.packageLink} of {packages.list.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownListButton />} />
            </HeroSection>
            <ComponentInstallation />
            <DropdownUiProperty />
            <ExpandedProperty collapsibleComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<DropdownListButton
    expanded={true}
    orientation='block-end'
    theme='primary'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <DefaultExpandedProperty />
            <OnExpandedChangeProperty />
            <OrientationWithDirectionProperty>
                <Preview display='right' stretch={true} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
                    orientationWithDirectionOptions.map((orientation) =>
`
<DropdownListButton
    orientation='${orientation}'
    theme='primary'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                    ).join('\n\n')
                }</TypeScriptCode>
            </OrientationWithDirectionProperty>
            <LazyProperty />
            <OnClickPropertyOfButton tips={false} />
            <FloatingProperties
                floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                targetComponentText={<>{packages.toggleButton.packageLink} of <TheComponentLink /></>}
            >
                <DropdownButtonFloatingOnProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingPlacement='top-end' floatingOffset={-10} floatingShift={20} />
                <FloatingPlacementProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponentText={<>{packages.toggleButton.packageLink} of <TheComponentLink /></>}
                    targetComponent={false} targetTag={false} floatingComponent={<DropdownListButton theme='primary'>
                    <DummyUiSmall />
                </DropdownListButton>} />
                <FloatingStrategyProperty floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>} />
                <FloatingAutoFlipProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingPlacement='bottom'
                />
                <FloatingAutoShiftProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownListButton orientation='inline-end' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownListButton>}
                />
                <FloatingOffsetProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponentText={<>{packages.toggleButton.packageLink} of <TheComponentLink /></>}
                    targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownListButton orientation='block-start' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownListButton>}
                />
                <FloatingShiftProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownListButton orientation='block-start' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownListButton>}
                />
                <OnFloatingUpdateProperty
                    floatingComponentText={<>{packages.dropdown.packageLink} of <TheComponentLink /></>}
                    targetComponentText={<>{packages.toggleButton.packageLink} of <TheComponentLink /></>}
                />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {sizeOptions.map((sizeName, index) =>
                            <DropdownListButton
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<DropdownListButton
    size='${sizeName}'
    theme='primary'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownListButton
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownListButton
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownListButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownListButton
    gradient={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownListButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownListButton
    outlined={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownListButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownListButton
    mild={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownListButton
                                key={index}
                                theme={themeName}
                                enabled={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownListButton
    enabled={false}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownListButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <DropdownListButton
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                />
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <DropdownListButton
        inheritEnabled={true}
        theme='${themeName}'
        buttonChildren={
            'Show Menu'
        }
    >
        <YourComponent />
    </DropdownListButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
                <ButtonRefProperty />
                <ButtonOrientationProperty />
                <ButtonChildrenProperty />
                
                <ToggleButtonComponentProperty />
                
                <DropdownComponentProperty />
                <DropdownRefProperty />
                <DropdownOrientationProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default DropdownListButtonPage
