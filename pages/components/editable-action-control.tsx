import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, InheritedProperties, Section } from '../../components/Section'
import { editableControl, actionControl, editableActionControl } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Control, EditableActionControl as OriEditableActionControl, EditableActionControlProps } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const EditableActionControl = (props: EditableActionControlProps) => <OriEditableActionControl {...props} theme={props.theme ?? 'primary'} />



const EditableActionControlPage: NextPage = () => {
    return (<ComponentContextProvider component={editableActionControl} baseComponents={[editableControl, actionControl]}>
        <Head>
            <title>{`${editableActionControl.componentTag} Component`}</title>
            <meta name="description" content={`${editableActionControl.componentTag} is an editable &amp; clickable simple box layout component with built-in variants, states, ${packages.invalidable.packageShortName} and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is an editable &amp; clickable <strong>simple box</strong> layout component with built-in variants, states, {packages.invalidable.packageShortLink} and {packages.clickable.packageShortLink}.
            </p>
            <p>
                If you plan to create a <strong>custom checkbox</strong>, this <em>base component</em> is a great starting point.
                It already have {packages.invalidable.packageShortLink} and {packages.clickable.packageShortLink}.
            </p>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <EditableActionControl
                                key={index}
                                size={sizeName}
                            >
                                An {'<EditableActionControl>'} with {sizeName ?? 'default'} size
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<EditableActionControl
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<EditableActionControl>'} with ${sizeName ?? 'default'} size
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                            >
                                An {'<EditableActionControl>'} with {themeName} theme
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
>
    An {'<EditableActionControl>'} with ${themeName} theme
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<EditableActionControl>'} with gradient mode
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    gradient={true}
>
    An {'<EditableActionControl>'} with gradient mode
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<EditableActionControl>'} with outlined mode
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    outlined={true}
>
    An {'<EditableActionControl>'} with outlined mode
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<EditableActionControl>'} without mild mode
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    mild={false}
>
    An {'<EditableActionControl>'} without mild mode
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<EditableActionControl>'} with nude mode
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    nude={true}
>
    An {'<EditableActionControl>'} with nude mode
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<EditableActionControl>'} with disabled state
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    enabled={false}
>
    An {'<EditableActionControl>'} with disabled state
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <EditableActionControl
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<EditableActionControl>'} with inherit enabled
                                </EditableActionControl>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <EditableActionControl
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<EditableActionControl>'} with inherit enabled
    </EditableActionControl>
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
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<EditableActionControl>'} with active state
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    active={true}
>
    An {'<EditableActionControl>'} with active state
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <EditableActionControl
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<EditableActionControl>'} with inherit active
                                </EditableActionControl>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <EditableActionControl
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<EditableActionControl>'} with inherit active
    </EditableActionControl>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableActionControl
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                An {'<EditableActionControl>'} with focus indicator
                            </EditableActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    focused={true}
>
    An {'<EditableActionControl>'} with focus indicator
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <EditableActionControl
                                theme={themeName}
                                arrived={false}
                            >
                                An {'<EditableActionControl>'} without arrive indicator
                            </EditableActionControl>
                            <EditableActionControl
                                theme={themeName}
                                arrived={true}
                            >
                                An {'<EditableActionControl>'} with arrive indicator
                            </EditableActionControl>
                            <EditableActionControl
                                theme={themeName}
                                arrived={undefined}
                            >
                                An {'<EditableActionControl>'} with auto arrive indicator
                            </EditableActionControl>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    arrived={false}
>
    An {'<EditableActionControl>'} without arrive indicator
</EditableActionControl>
<EditableActionControl
    theme='${themeName}'
    arrived={true}
>
    An {'<EditableActionControl>'} with arrive indicator
</EditableActionControl>
<EditableActionControl
    theme='${themeName}'
    arrived={undefined}
>
    An {'<EditableActionControl>'} with auto arrive indicator
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <EditableActionControl
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            An {'<EditableActionControl>'} marked as neutral
                        </EditableActionControl>
                        <EditableActionControl
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            An {'<EditableActionControl>'} marked as valid
                        </EditableActionControl>
                        <EditableActionControl
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            An {'<EditableActionControl>'} marked as invalid
                        </EditableActionControl>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<EditableActionControl
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    An {'<EditableActionControl>'} marked as neutral
</EditableActionControl>
<EditableActionControl
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    An {'<EditableActionControl>'} marked as valid
</EditableActionControl>
<EditableActionControl
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    An {'<EditableActionControl>'} marked as invalid
</EditableActionControl>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <EditableActionControl
                                theme={themeName}
                                pressed={false}
                            >
                                An {'<EditableActionControl>'} without pressed indicator
                            </EditableActionControl>
                            <EditableActionControl
                                theme={themeName}
                                pressed={true}
                            >
                                An {'<EditableActionControl>'} with pressed indicator
                            </EditableActionControl>
                            <EditableActionControl
                                theme={themeName}
                                pressed={undefined}
                            >
                                An {'<EditableActionControl>'} with auto pressed indicator
                            </EditableActionControl>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableActionControl
    theme='${themeName}'
    pressed={false}
>
    An {'<EditableActionControl>'} without pressed indicator
</EditableActionControl>
<EditableActionControl
    theme='${themeName}'
    pressed={true}
>
    An {'<EditableActionControl>'} with pressed indicator
</EditableActionControl>
<EditableActionControl
    theme='${themeName}'
    pressed={undefined}
>
    An {'<EditableActionControl>'} with auto pressed indicator
</EditableActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <InheritedProperties />
        </Section>
    </ComponentContextProvider>);
}

export default EditableActionControlPage
