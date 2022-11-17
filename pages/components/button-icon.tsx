import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { button, buttonIcon, icon } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions, buttonIconSizeOptions, buttonIconPositionOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { ButtonIcon as OriButtonIcon, ButtonIconProps, Control, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonComponentProperty, ComponentProperties, IconComponentProperty } from '../../properties/sections/componentProperties'
import { ButtonIconPositionProperty, ButtonIconSizeProperty, ConfiguringIconResources, DetailedIconProperty } from '../../properties/sections/iconProperties'



const ButtonIcon = (props: ButtonIconProps) => <OriButtonIcon {...props} theme={props.theme ?? 'primary'} icon={props.icon ?? 'face'} />



const ButtonIconPage: NextPage = () => {
    return (<ComponentContextProvider component={buttonIcon} baseComponents={button}>
        <Head>
            <title>{`${buttonIcon.componentTag} Component`}</title>
            <meta name="description" content={`${buttonIcon.componentTag} is a ${button.componentTag} component with built in ${icon.componentTag} component.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> is a {button.packageLink} component with built in {icon.packageLink} component.
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
            <ComponentInstallation>
                <ConfiguringIconResources />
            </ComponentInstallation>
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
            <ButtonIconPositionProperty>
                <Preview display='right' stretch={false}>
                    {buttonIconPositionOptions.map((iconPosition, index) =>
                        <ButtonIcon
                            key={index}
                            iconPosition={iconPosition}
                        >
                            A {'<ButtonIcon>'} with an icon at the {iconPosition}
                        </ButtonIcon>
                    )}
                </Preview>
                <p></p>
                <TypeScriptCode>
                    {buttonIconPositionOptions.map((iconPosition) =>
`
<ButtonIcon
    iconPosition='${iconPosition}'
    icon='face'
>
    A {'<ButtonIcon>'} with an icon at the ${iconPosition}
</ButtonIcon>
`
                    ).join('')}
                </TypeScriptCode>
            </ButtonIconPositionProperty>
            <ComponentProperties>
                <ButtonComponentProperty />
                <IconComponentProperty />
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
    icon='face'
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
    icon='face'
>
    <span>A {'<ButtonIcon>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <ButtonIconSizeProperty>
                    <Preview display='right' stretch={false}>
                        {buttonIconSizeOptions.map((sizeName, index) =>
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
                        {buttonIconSizeOptions.map((sizeName) =>
`
<ButtonIcon
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    icon='face'
>
    A {'<ButtonIcon>'} with ${sizeName ?? 'default'} size
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonIconSizeProperty>
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
    icon='face'
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
    icon='face'
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
    icon='face'
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
    icon='face'
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
    icon='face'
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
    icon='face'
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
        icon='face'
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
    icon='face'
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
        icon='face'
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
    icon='face'
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
    icon='face'
>
    A {'<ButtonIcon>'} without arrive indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    arrived={true}
    icon='face'
>
    A {'<ButtonIcon>'} with arrive indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    arrived={undefined}
    icon='face'
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
    icon='face'
>
    A {'<ButtonIcon>'} without pressed indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    pressed={true}
    icon='face'
>
    A {'<ButtonIcon>'} with pressed indicator
</ButtonIcon>
<ButtonIcon
    theme='${themeName}'
    pressed={undefined}
    icon='face'
>
    A {'<ButtonIcon>'} with auto pressed indicator
</ButtonIcon>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The default rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusXs</code>
                                <p>The rounded corner radius when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusSm</code>
                                <p>The rounded corner radius when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusLg</code>
                                <p>The rounded corner radius when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusXl</code>
                                <p>The rounded corner radius when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineXs</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockXs</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineXl</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockXl</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>gapInline</code>
                                <p>The default horizontal spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The default vertical spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineXs</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockXs</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineSm</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockSm</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineLg</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockLg</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineXl</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockXl</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeXs</code>
                                <p>The text size when <code>{`size='xs'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeXl</code>
                                <p>The text size when <code>{`size='xl'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {buttonIcons, buttonIconValues} from '@reusable-ui/button-icon';

buttonIcons.whiteSpace = 'nowrap';
console.log('whiteSpace variable name: ', buttonIcons.whiteSpace);
console.log('whiteSpace variable value: ', buttonIconValues.whiteSpace);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ButtonIconPage
