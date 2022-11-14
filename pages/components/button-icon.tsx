import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { button, buttonIcon, icon } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { ButtonIcon as OriButtonIcon, ButtonIconProps, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, DefaultActiveProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, OnActiveChangeProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'
import { DetailedIconProperty } from '../../properties/sections/iconProperties'



const ButtonIcon = (props: ButtonIconProps) => <OriButtonIcon {...props} theme={props.theme ?? 'primary'} />



const ButtonIconPage: NextPage = () => {
    return (<ComponentContextProvider component={buttonIcon} baseComponents={button}>
        <Head>
            <title>{`${buttonIcon.componentTag} Component`}</title>
            <meta name="description" content={`${buttonIcon.componentTag} is a clickable simple box layout component with built-in variants, states, and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> is a {button.packageLink} component with built in {icon.packageLink} component.<br />
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <ButtonIcon theme='primary' icon='instagram'>Instragram</ButtonIcon>
                    <ButtonIcon theme='primary' icon='whatsapp'>Whatsapp</ButtonIcon>
                    <ButtonIcon theme='danger' icon='error'>Try Again</ButtonIcon>
                    <ButtonIcon theme='success' gradient={true} icon='follow_the_signs' iconPosition='end'>Continue</ButtonIcon>
                    <ButtonIcon theme='primary' icon='location_searching' buttonStyle='link'>Select location</ButtonIcon>
                    <ButtonIcon theme='primary' icon='file_download' outlined={true}>Find</ButtonIcon>
                    <ButtonIcon theme='primary' icon='file_download' enabled={false} orientation='block'>Download (member only)</ButtonIcon>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <DetailedIconProperty itemComponent={
                (itemName) => <OriButtonIcon icon={itemName}><span className='label'>{itemName}</span></OriButtonIcon>
            }>
                <TypeScriptCode collapsible={false}>{
`
/* ... */
import { ButtonIcon } from '@reusable-ui/button-icon'
// -or- import { ButtonIcon } from '@reusable-ui/components'
/* ... */

/* ... */
export const MyComponent = () => {
    return (
        <>
            <p>blah...</p>
            
            <ButtonIcon icon='your-logo' theme='primary' size='lg' />
            
            <p>blah...</p>
        </>
    );
}
/* ... */
`
                }</TypeScriptCode>
            </DetailedIconProperty>
            <ComponentProperties>
                <ButtonComponentProperty />
            </ComponentProperties>
            <ClientSideLinkPropertyOfButton />
            <HrefPropertyOfButton />
            <OnClickPropertyOfButton />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <ButtonIcon
                                key={index}
                                buttonStyle={buttonStyle}
                            >
                                A {'<ButtonIcon>'} with {buttonStyle} style
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<ButtonIcon
    buttonStyle='${buttonStyle}'
>
    A {'<ButtonIcon>'} with ${buttonStyle} style
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <ButtonIcon
                                key={index}
                                orientation={orientationName}
                            >
                                <span>A {'<ButtonIcon>'}</span>
                                <span>with</span>
                                <span>{orientationName} oriented</span>
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<ButtonIcon
    orientation='${orientationName}'
>
    <span>A {'<ButtonIcon>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <ButtonIcon
                                key={index}
                                size={sizeName}
                            >
                                A {'<ButtonIcon>'} with {sizeName ?? 'default'} size
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<ButtonIcon
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<ButtonIcon>'} with ${sizeName ?? 'default'} size
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                            >
                                A {'<ButtonIcon>'} with {themeName} theme
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
>
    A {'<ButtonIcon>'} with ${themeName} theme
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<ButtonIcon>'} with gradient mode
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    gradient={true}
>
    A {'<ButtonIcon>'} with gradient mode
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<ButtonIcon>'} with outlined mode
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    outlined={true}
>
    A {'<ButtonIcon>'} with outlined mode
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<ButtonIcon>'} with mild mode
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    mild={true}
>
    A {'<ButtonIcon>'} with mild mode
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<ButtonIcon>'} with nude mode
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    nude={true}
>
    A {'<ButtonIcon>'} with nude mode
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<ButtonIcon>'} with disabled state
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    enabled={false}
>
    A {'<ButtonIcon>'} with disabled state
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <ButtonIcon
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<ButtonIcon>'} with inherit enabled
                                </ButtonIcon>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <ButtonIcon
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<ButtonIcon>'} with inherit enabled
    </ButtonIcon>
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
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<ButtonIcon>'} with active state
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    active={true}
>
    A {'<ButtonIcon>'} with active state
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <ButtonIcon
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<ButtonIcon>'} with inherit active
                                </ButtonIcon>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <ButtonIcon
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<ButtonIcon>'} with inherit active
    </ButtonIcon>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ButtonIcon
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<ButtonIcon>'} with focus indicator
                            </ButtonIcon>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    focused={true}
>
    A {'<ButtonIcon>'} with focus indicator
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ButtonIcon
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<ButtonIcon>'} without arrive indicator
                            </ButtonIcon>
                            <ButtonIcon
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<ButtonIcon>'} with arrive indicator
                            </ButtonIcon>
                            <ButtonIcon
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<ButtonIcon>'} with auto arrive indicator
                            </ButtonIcon>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    arrived={false}
>
    A {'<ButtonIcon>'} without arrive indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    arrived={true}
>
    A {'<ButtonIcon>'} with arrive indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    arrived={undefined}
>
    A {'<ButtonIcon>'} with auto arrive indicator
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ButtonIcon
                                theme={themeName}
                                pressed={false}
                            >
                                A {'<ButtonIcon>'} without pressed indicator
                            </ButtonIcon>
                            <ButtonIcon
                                theme={themeName}
                                pressed={true}
                            >
                                A {'<ButtonIcon>'} with pressed indicator
                            </ButtonIcon>
                            <ButtonIcon
                                theme={themeName}
                                pressed={undefined}
                            >
                                A {'<ButtonIcon>'} with auto pressed indicator
                            </ButtonIcon>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ButtonIcon
    theme='${themeName}'
    pressed={false}
>
    A {'<ButtonIcon>'} without pressed indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    pressed={true}
>
    A {'<ButtonIcon>'} with pressed indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    pressed={undefined}
>
    A {'<ButtonIcon>'} with auto pressed indicator
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default ButtonIconPage
