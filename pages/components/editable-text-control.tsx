import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { editableControl, editableTextControl } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { EditableTextControl as OriEditableTextControl, EditableTextControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const EditableTextControl = (props: EditableTextControlProps) => <OriEditableTextControl {...props} theme={props.theme ?? 'primary'} />



const EditableTextControlPage: NextPage = () => {
    return (<ComponentContextProvider component={editableTextControl} baseComponents={editableControl}>
        <Head>
            <title>{`${editableTextControl.componentTag} Component`}</title>
            <meta name="description" content={`${editableTextControl.componentTag} is a generic text editor layout component with built-in variants, states, and ${packages.invalidable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a generic <strong>text editor</strong> layout component with built-in variants, states, and {packages.invalidable.packageShortLink}.
            </p>
            <p>
                If you plan to create a <strong>custom textBox</strong>, this <em>base component</em> is a great starting point.
                It already have <strong>validation icon</strong>. You need to define the position of the <em>validation icon</em> by injecting a custom CSS.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <EditableTextControl
                                key={index}
                                size={sizeName}
                            >
                                An {'<EditableTextControl>'} with {sizeName ?? 'default'} size
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<EditableTextControl
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<EditableTextControl>'} with ${sizeName ?? 'default'} size
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                            >
                                An {'<EditableTextControl>'} with {themeName} theme
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
>
    An {'<EditableTextControl>'} with ${themeName} theme
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<EditableTextControl>'} with gradient mode
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    gradient={true}
>
    An {'<EditableTextControl>'} with gradient mode
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<EditableTextControl>'} with outlined mode
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    outlined={true}
>
    An {'<EditableTextControl>'} with outlined mode
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<EditableTextControl>'} without mild mode
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    mild={false}
>
    An {'<EditableTextControl>'} without mild mode
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<EditableTextControl>'} with nude mode
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    nude={true}
>
    An {'<EditableTextControl>'} with nude mode
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<EditableTextControl>'} with disabled state
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    enabled={false}
>
    An {'<EditableTextControl>'} with disabled state
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl theme='primary' enabled={false}>
                                <EditableTextControl
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<EditableTextControl>'} with inherit enabled
                                </EditableTextControl>
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl theme='primary' enabled={false}>
    <EditableTextControl
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<EditableTextControl>'} with inherit enabled
    </EditableTextControl>
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<EditableTextControl>'} with active state
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    active={true}
>
    An {'<EditableTextControl>'} with active state
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl theme='primary' active={true}>
                                <EditableTextControl
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<EditableTextControl>'} with inherit active
                                </EditableTextControl>
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl theme='primary' active={true}>
    <EditableTextControl
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<EditableTextControl>'} with inherit active
    </EditableTextControl>
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                An {'<EditableTextControl>'} with focus indicator
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    focused={true}
>
    An {'<EditableTextControl>'} with focus indicator
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                arrived={false}
                            >
                                An {'<EditableTextControl>'} without arrive indicator
                            </EditableTextControl>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                arrived={true}
                            >
                                An {'<EditableTextControl>'} with arrive indicator
                            </EditableTextControl>
                            <EditableTextControl
                                key={index}
                                theme={themeName}
                                arrived={undefined}
                            >
                                An {'<EditableTextControl>'} with auto arrive indicator
                            </EditableTextControl>
                        </>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<EditableTextControl
    theme='${themeName}'
    arrived={false}
>
    An {'<EditableTextControl>'} without arrive indicator
</EditableTextControl>
<EditableTextControl
    theme='${themeName}'
    arrived={true}
>
    An {'<EditableTextControl>'} with arrive indicator
</EditableTextControl>
<EditableTextControl
    theme='${themeName}'
    arrived={undefined}
>
    An {'<EditableTextControl>'} with auto arrive indicator
</EditableTextControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <EditableTextControl
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            An {'<EditableTextControl>'} marked as neutral
                        </EditableTextControl>
                        <EditableTextControl
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            An {'<EditableTextControl>'} marked as valid
                        </EditableTextControl>
                        <EditableTextControl
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            An {'<EditableTextControl>'} marked as invalid
                        </EditableTextControl>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<EditableTextControl
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    An {'<EditableTextControl>'} marked as neutral
</EditableTextControl>
<EditableTextControl
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    An {'<EditableTextControl>'} marked as valid
</EditableTextControl>
<EditableTextControl
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    An {'<EditableTextControl>'} marked as invalid
</EditableTextControl>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Accessibilities'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>cursor</code>
                                <p>A default <code>cursor</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>iconSize</code>
                                <p>An icon height (the width is automatically by <code>aspect-ratio</code>).</p>
                            </ListItem>
                            <ListItem>
                                <code>iconValid</code>
                                <p>An icon image to show when <code>{`isValid={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>iconInvalid</code>
                                <p>An icon image to show when <code>{`isValid={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {editableTextControls, editableTextControlValues} from '@reusable-ui/editable-text-control';

editableTextControls.opacity = 0.5;
console.log('opacity variable name: ', editableTextControls.opacity);
console.log('opacity variable value: ', editableTextControlValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default EditableTextControlPage
