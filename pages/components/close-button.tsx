import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/sections/sections'
import { buttonIcon, closeButton, alert, modalCard, modalSide } from '../../packages/packageList'
import { ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions, buttonIconSizeOptions, buttonIconPositionOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { CloseButton as OriCloseButton, CloseButtonProps, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { EnabledProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonComponentProperty, ComponentProperties, IconComponentProperty } from '../../properties/sections/componentProperties'
import { ButtonIconPositionProperty, ButtonIconSizeProperty, ConfiguringIconResources } from '../../properties/sections/iconProperties'



const CloseButton = (props: CloseButtonProps) => <OriCloseButton {...props} theme={props.theme ?? 'primary'} />



const CloseButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={closeButton} baseComponents={buttonIcon}>
        <Head>
            <title>{`${closeButton.componentTag} Component`}</title>
            <meta name="description" content={`${closeButton.componentTag} is a special ${buttonIcon.componentTag} for dismising a content.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a special {buttonIcon.packageLink} for dismising a content.<br />
                    It&apos;s used in {alert.packageLink}, {modalCard.packageLink}, {modalSide.packageLink}, and more.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <CloseButton theme='primary' />
                    <CloseButton theme='primary' nude={false} />
                    <CloseButton theme='danger'>Close</CloseButton>
                    <CloseButton theme='dark' iconPosition='end' size='sm' nude={false}>Ignore</CloseButton>
                    <CloseButton theme='success' outlined={true} iconPosition='end' nude={false}>Continue</CloseButton>
                    <CloseButton theme='secondary' enabled={false} />
                </Preview>
            </HeroSection>
            <ComponentInstallation>
                <ConfiguringIconResources />
            </ComponentInstallation>
            <ButtonIconPositionProperty>
                <Preview display='right' stretch={false}>
                    {buttonIconPositionOptions.map((iconPosition, index) =>
                        <CloseButton
                            key={index}
                            iconPosition={iconPosition}
                            nude={false}
                        >
                            Close
                        </CloseButton>
                    )}
                </Preview>
                <p></p>
                <TypeScriptCode>
                    {buttonIconPositionOptions.map((iconPosition) =>
`
<CloseButton
    iconPosition='${iconPosition}'
    nude={false}
>
    Close
</CloseButton>
`
                    ).join('')}
                </TypeScriptCode>
            </ButtonIconPositionProperty>
            <OnClickPropertyOfButton />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <CloseButton
                                key={index}
                                buttonStyle={buttonStyle}
                            >
                                A {'<CloseButton>'} with {buttonStyle} style
                            </CloseButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<CloseButton
    buttonStyle='${buttonStyle}'
>
    A {'<CloseButton>'} with ${buttonStyle} style
</CloseButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <CloseButton
                                key={index}
                                orientation={orientationName}
                            >
                                <span>A {'<CloseButton>'}</span>
                                <span>with</span>
                                <span>{orientationName} oriented</span>
                            </CloseButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<CloseButton
    orientation='${orientationName}'
    theme='primary'
>
    <span>A {'<CloseButton>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</CloseButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <ButtonIconSizeProperty>
                    <Preview display='right' stretch={false}>
                        {buttonIconSizeOptions.map((sizeName, index) =>
                            <CloseButton
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonIconSizeOptions.map((sizeName) =>
`
<CloseButton
    size='${sizeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonIconSizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <CloseButton
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<CloseButton
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <CloseButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                                nude={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<CloseButton
    theme='${themeName}'
    gradient={true}
    nude={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <CloseButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                                nude={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<CloseButton
    theme='${themeName}'
    outlined={true}
    nude={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <CloseButton
                                key={index}
                                theme={themeName}
                                mild={false}
                                nude={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<CloseButton
    theme='${themeName}'
    mild={false}
    nude={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <CloseButton
                                key={index}
                                theme={themeName}
                                nude={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<CloseButton
    theme='${themeName}'
    nude={false}
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
                            <CloseButton
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
<CloseButton
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
                                <CloseButton
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
    <CloseButton
        theme='${themeName}'
        inheritEnabled={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
                <IconComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default CloseButtonPage
