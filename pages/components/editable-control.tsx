import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { control, editableControl } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, EditableControl as OriEditableControl, EditableControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const EditableControl = (props: EditableControlProps) => <OriEditableControl {...props} theme={props.theme ?? 'primary'} />



const EditableControlPage: NextPage = () => {
    return (<ComponentContextProvider component={editableControl} baseComponents={control}>
        <Head>
            <title>{`${editableControl.componentTag} Component`}</title>
            <meta name="description" content={`${editableControl.componentTag} is an editable simple box layout component with built-in variants, states, and ${packages.invalidable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is an editable <strong>simple box</strong> layout component with built-in variants, states, and {packages.invalidable.packageShortLink}.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <EditableControl
                                key={index}
                                size={sizeName}
                            >
                                An {'<EditableControl>'} with {sizeName ?? 'default'} size
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<EditableControl
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<EditableControl>'} with ${sizeName ?? 'default'} size
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                            >
                                An {'<EditableControl>'} with {themeName} theme
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
>
    An {'<EditableControl>'} with ${themeName} theme
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<EditableControl>'} with gradient mode
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    gradient={true}
>
    An {'<EditableControl>'} with gradient mode
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<EditableControl>'} with outlined mode
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    outlined={true}
>
    An {'<EditableControl>'} with outlined mode
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<EditableControl>'} without mild mode
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    mild={false}
>
    An {'<EditableControl>'} without mild mode
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<EditableControl>'} with nude mode
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    nude={true}
>
    An {'<EditableControl>'} with nude mode
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<EditableControl>'} with disabled state
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    enabled={false}
>
    An {'<EditableControl>'} with disabled state
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <EditableControl
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<EditableControl>'} with inherit enabled
                                </EditableControl>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <EditableControl
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<EditableControl>'} with inherit enabled
    </EditableControl>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<EditableControl>'} with active state
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    active={true}
>
    An {'<EditableControl>'} with active state
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <EditableControl
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<EditableControl>'} with inherit active
                                </EditableControl>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <EditableControl
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<EditableControl>'} with inherit active
    </EditableControl>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableControl
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                An {'<EditableControl>'} with focus indicator
                            </EditableControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    focused={true}
>
    An {'<EditableControl>'} with focus indicator
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <EditableControl
                                theme={themeName}
                                arrived={false}
                            >
                                An {'<EditableControl>'} without arrive indicator
                            </EditableControl>
                            <EditableControl
                                theme={themeName}
                                arrived={true}
                            >
                                An {'<EditableControl>'} with arrive indicator
                            </EditableControl>
                            <EditableControl
                                theme={themeName}
                                arrived={undefined}
                            >
                                An {'<EditableControl>'} with auto arrive indicator
                            </EditableControl>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableControl
    theme='${themeName}'
    arrived={false}
>
    An {'<EditableControl>'} without arrive indicator
</EditableControl>
<EditableControl
    theme='${themeName}'
    arrived={true}
>
    An {'<EditableControl>'} with arrive indicator
</EditableControl>
<EditableControl
    theme='${themeName}'
    arrived={undefined}
>
    An {'<EditableControl>'} with auto arrive indicator
</EditableControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <EditableControl
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            An {'<EditableControl>'} marked as neutral
                        </EditableControl>
                        <EditableControl
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            An {'<EditableControl>'} marked as valid
                        </EditableControl>
                        <EditableControl
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            An {'<EditableControl>'} marked as invalid
                        </EditableControl>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<EditableControl
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    An {'<EditableControl>'} marked as neutral
</EditableControl>
<EditableControl
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    An {'<EditableControl>'} marked as valid
</EditableControl>
<EditableControl
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    An {'<EditableControl>'} marked as invalid
</EditableControl>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animValid</code>
                                <p>An animation represents <em>validating animation</em>, a transition from <strong>neutral/invalid</strong> to <strong>valid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animInvalid</code>
                                <p>An animation represents <em>invalidating animation</em>, a transition from <strong>neutral/valid</strong> to <strong>invalid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animUnvalid</code>
                                <p>An animation represents <em>de-validating animation</em>, a transition from <strong>valid</strong> to <strong>neutral/invalid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animUninvalid</code>
                                <p>An animation represents <em>de-invalidating animation</em>, a transition from <strong>invalid</strong> to <strong>neutral/valid</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {editableControls, editableControlValues} from '@reusable-ui/editable-control';

editableControls.opacity = 0.5;
console.log('opacity variable name: ', editableControls.opacity);
console.log('opacity variable value: ', editableControlValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default EditableControlPage
