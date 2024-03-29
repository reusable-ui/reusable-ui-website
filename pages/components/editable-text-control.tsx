import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { editableControl, editableTextControl } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, EditableTextControl as OriEditableTextControl, EditableTextControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { EnabledProperty, EnableValidationProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const EditableTextControl = (props: EditableTextControlProps) => <OriEditableTextControl {...props} theme={props.theme ?? 'primary'} />



const EditableTextControlPage: NextPage = () => {
    return (<ComponentContextProvider component={editableTextControl} baseComponents={editableControl}>
        <Head>
            <title>{`${editableTextControl.componentTag} Component`}</title>
            <meta name="description" content={`${editableTextControl.componentTag} is a generic text editor layout component with built-in variants, states, and ${packages.invalidable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is a generic <strong>text editor</strong> layout component with built-in variants, states, and {packages.invalidable.packageShortLink}.
                </p>
                <p>
                    If you plan to create a <strong>custom textBox</strong>, this <em>base component</em> is a great starting point.
                    It already have <strong>validation icon</strong>. You need to define the position of the <em>validation icon</em> by injecting a custom CSS.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <EditableTextControl
                                key={index}
                                size={sizeName}
                            >
                                An {'<EditableTextControl>'} with {sizeName} size
                            </EditableTextControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<EditableTextControl
    size='${sizeName}'
>
    An {'<EditableTextControl>'} with ${sizeName} size
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
                            <Control key={index} theme='primary' enabled={false}>
                                <EditableTextControl
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<EditableTextControl>'} with inherit enabled
                                </EditableTextControl>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <EditableTextControl
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<EditableTextControl>'} with inherit enabled
    </EditableTextControl>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
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
                                <p>A default <strong>cursor</strong>.</p>
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
        </Main>
    </ComponentContextProvider>);
}

export default EditableTextControlPage
