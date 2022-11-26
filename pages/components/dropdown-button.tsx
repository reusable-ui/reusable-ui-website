import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { toggleButton, dropdownButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { DropdownButton as OriDropdownButton, DropdownButtonProps, Control, CardBody, CardBodyProps } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, DefaultActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, OnActiveChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { useMergeClasses } from '@reusable-ui/core'
import { DummyUiBig } from '../../components/DummyUi'



const useCardBodyStyleSheet = dynamicStyleSheet(() => ({
    boxSizing: 'content-box',
    blockSize: 'calc(128px + 3rem)',
    alignItems: 'start !important',
}), { id: 'afullz9rxv' });



const DropdownButton = (props: Partial<DropdownButtonProps>) => <OriDropdownButton {...props} theme={props.theme ?? 'primary'} buttonChildren={
    'Show Menu'
}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdownButton>

const DropdownCardBody = (props: CardBodyProps) => {
    const styleSheet = useCardBodyStyleSheet();
    
    const classes = useMergeClasses(
        props.classes,
        styleSheet.main,
    );
    
    return (
        <CardBody {...props} classes={classes} />
    )
}

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdownButton = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <DropdownCardBody elmRef={viewportRef}>
            <DropdownButton expanded={isFlip} orientation='block-end' />
        </DropdownCardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '12rem', justifyContent: 'start'}}>
            <p>
                <code>{`<DropdownButton expanded={${isFlip}}>`}</code>
            </p>
            <DropdownButton expanded={isFlip} orientation='block-end' />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '8rem', alignItems: 'start'}}>
            <div style={{display: 'flex', gap: 'inherit', justifyContent: 'center', alignSelf: 'stretch'}}>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <DropdownButton expanded={isFlip} orientation='block-end' />
                </div>
                <div style={{boxSizing: 'border-box', inlineSize: '8rem', blockSize: '8rem'}}>
                    <DropdownButton expanded={isFlip} orientation='inline-end' />
                </div>
            </div>
        </CardBody>
    );
}



const DropdownButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdownButton} baseComponents={toggleButton}>
        <Head>
            <title>{`${dropdownButton.componentTag} Component`}</title>
            <meta name="description" content={`${dropdownButton.componentTag} is a ${packages.button.componentTag} component with a ${packages.dropdown.componentTag}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a {packages.button.packageLink} component with a {packages.dropdown.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownButton />} />
            </HeroSection>
            <ComponentInstallation />
            <DefaultActiveProperty />
            <OnActiveChangeProperty />
            <OnClickPropertyOfButton tips={false} />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <DropdownButton
                                key={index}
                                buttonStyle={buttonStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<DropdownButton
    buttonStyle='${buttonStyle}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <DropdownButton
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<DropdownButton
    size='${sizeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
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
<DropdownButton
    theme='${themeName}'
    gradient={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
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
<DropdownButton
    theme='${themeName}'
    outlined={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
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
<DropdownButton
    theme='${themeName}'
    mild={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                nude={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    theme='${themeName}'
    nude={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
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
<DropdownButton
    theme='${themeName}'
    enabled={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <DropdownButton
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
    <DropdownButton
        theme='${themeName}'
        inheritEnabled={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty outlinedMildWarning={false}>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                active={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    theme='${themeName}'
    active={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <DropdownButton
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                />
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <DropdownButton
        theme='${themeName}'
        inheritActive={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default DropdownButtonPage
