import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { button, toggleButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { ToggleButton as OriToggleButton, ToggleButtonProps, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, DefaultActiveProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, OnActiveChangeProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import {active, onClick} from '../../properties/propertyList'
import { ButtonComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'



const ToggleButton = (props: ToggleButtonProps) => <OriToggleButton {...props} theme={props.theme ?? 'primary'} />



const ToggleButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={toggleButton} baseComponents={button}>
        <Head>
            <title>{`${toggleButton.componentTag} Component`}</title>
            <meta name="description" content={`${toggleButton.componentTag} is a ${button.componentTag} component with toggleable ${active.propertyName} state each time the ${toggleButton.componentTag} is clicked.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a {button.packageLink} component with toggleable {active.propertyShortLink} state each time the <TheComponentLink /> is clicked.
                </p>
                <p>
                    This is equivalent to a {button.packageLink} with {onClick.propertyShortLink} event handles the {active.propertyShortLink} property via <code>{`useState()`}</code>.
                </p>
                <p>
                    If you want to handle the {active.propertyShortLink} property programatically, thus the <TheComponentLink /> becomes <em>useless</em>.
                    So it&apos;s better to use {button.packageLink} <em>directly</em>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <ToggleButton theme='primary'>Regular</ToggleButton>
                    <ToggleButton theme='success'>Success</ToggleButton>
                    <ToggleButton theme='danger'>Error</ToggleButton>
                    <ToggleButton theme='primary' gradient={true}>Gradient</ToggleButton>
                    <ToggleButton theme='primary' mild={true}>Mild</ToggleButton>
                    <ToggleButton theme='primary' outlined={true}>Outlined</ToggleButton>
                    <ToggleButton theme='primary' buttonStyle='link'>Link</ToggleButton>
                    <ToggleButton theme='primary' size='sm'>Small</ToggleButton>
                    <ToggleButton theme='primary' size='lg'>Big</ToggleButton>
                    <ToggleButton theme='primary' enabled={false}>Disabled</ToggleButton>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <DefaultActiveProperty />
            <OnActiveChangeProperty />
            <ClientSideLinkPropertyOfButton />
            <HrefPropertyOfButton />
            <OnClickPropertyOfButton />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <ToggleButton
                                key={index}
                                buttonStyle={buttonStyle}
                            >
                                A {'<ToggleButton>'} with {buttonStyle} style
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<ToggleButton
    buttonStyle='${buttonStyle}'
>
    A {'<ToggleButton>'} with ${buttonStyle} style
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <ToggleButton
                                key={index}
                                orientation={orientationName}
                            >
                                <span>A {'<ToggleButton>'}</span>
                                <span>with</span>
                                <span>{orientationName} oriented</span>
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<ToggleButton
    orientation='${orientationName}'
>
    <span>A {'<ToggleButton>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <ToggleButton
                                key={index}
                                size={sizeName}
                            >
                                A {'<ToggleButton>'} with {sizeName} size
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<ToggleButton
    size='${sizeName}'
>
    A {'<ToggleButton>'} with ${sizeName} size
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                            >
                                A {'<ToggleButton>'} with {themeName} theme
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
>
    A {'<ToggleButton>'} with ${themeName} theme
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<ToggleButton>'} with gradient mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    gradient={true}
>
    A {'<ToggleButton>'} with gradient mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<ToggleButton>'} with outlined mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    outlined={true}
>
    A {'<ToggleButton>'} with outlined mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<ToggleButton>'} with mild mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    mild={true}
>
    A {'<ToggleButton>'} with mild mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<ToggleButton>'} with nude mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    nude={true}
>
    A {'<ToggleButton>'} with nude mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<ToggleButton>'} with disabled state
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    enabled={false}
>
    A {'<ToggleButton>'} with disabled state
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <ToggleButton
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<ToggleButton>'} with inherit enabled
                                </ToggleButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <ToggleButton
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<ToggleButton>'} with inherit enabled
    </ToggleButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty outlinedMildWarning={false}>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<ToggleButton>'} with active state
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    active={true}
>
    A {'<ToggleButton>'} with active state
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <ToggleButton
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<ToggleButton>'} with inherit active
                                </ToggleButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <ToggleButton
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<ToggleButton>'} with inherit active
    </ToggleButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<ToggleButton>'} with focus indicator
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    focused={true}
>
    A {'<ToggleButton>'} with focus indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ToggleButton
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<ToggleButton>'} without arrive indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<ToggleButton>'} with arrive indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<ToggleButton>'} with auto arrive indicator
                            </ToggleButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    arrived={false}
>
    A {'<ToggleButton>'} without arrive indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    arrived={true}
>
    A {'<ToggleButton>'} with arrive indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    arrived={undefined}
>
    A {'<ToggleButton>'} with auto arrive indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ToggleButton
                                theme={themeName}
                                pressed={false}
                            >
                                A {'<ToggleButton>'} without pressed indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                pressed={true}
                            >
                                A {'<ToggleButton>'} with pressed indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                pressed={undefined}
                            >
                                A {'<ToggleButton>'} with auto pressed indicator
                            </ToggleButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    pressed={false}
>
    A {'<ToggleButton>'} without pressed indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    pressed={true}
>
    A {'<ToggleButton>'} with pressed indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    pressed={undefined}
>
    A {'<ToggleButton>'} with auto pressed indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default ToggleButtonPage
