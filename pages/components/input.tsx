import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { editableControl, input } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Input as OriInput, InputProps, InputType, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Input = (props: InputProps) => <OriInput {...props} theme={props.theme ?? 'primary'} placeholder={props.placeholder ?? 'Type something here...'} />
const inputTypes = ['TextInput', 'SearchInput', 'PasswordInput', 'EmailInput', 'TelInput', 'UrlInput', 'NumberInput', 'TimeInput', 'WeekInput', 'DateInput', 'DateTimeInput', 'MonthInput'];


const InputPage: NextPage = () => {
    return (<ComponentContextProvider component={input} baseComponents={editableControl}>
        <Head>
            <title>{`${input.componentTag} Component`}</title>
            <meta name="description" content={`${input.componentTag} is an interactive control in order to accept data from the user.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> is an interactive control in order to accept data from the user.
                </p>
                <p>
                    There are some specialized types of <TheComponentDisplay /> with built in validation corresponding to the data type:
                </p>
                <ul>
                    {inputTypes.map((inputType) => (
                        <li>
                            <code>{`<${inputType}>`}</code> or <code>{`<${inputType.slice(0, -5)}>`}</code>
                        </li>
                    ))}
                </ul>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    {inputTypes.map((inputType) => (
                        <Input type={inputType.slice(0, -5).toLowerCase() as InputType} enableValidation={true} placeholder={`type a ${inputType.slice(0, -5).toLowerCase()} here...`} />
                    ))}
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Input
                                key={index}
                                size={sizeName}
                            >
                                An {'<Input>'} with {sizeName ?? 'default'} size
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Input
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Input>'} with ${sizeName ?? 'default'} size
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                            >
                                An {'<Input>'} with {themeName} theme
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
>
    An {'<Input>'} with ${themeName} theme
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Input>'} with gradient mode
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    gradient={true}
>
    An {'<Input>'} with gradient mode
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Input>'} with outlined mode
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    outlined={true}
>
    An {'<Input>'} with outlined mode
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Input>'} without mild mode
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    mild={false}
>
    An {'<Input>'} without mild mode
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Input>'} with nude mode
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    nude={true}
>
    An {'<Input>'} with nude mode
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<Input>'} with disabled state
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    enabled={false}
>
    An {'<Input>'} with disabled state
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Input
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<Input>'} with inherit enabled
                                </Input>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Input
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<Input>'} with inherit enabled
    </Input>
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
                            <Input
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<Input>'} with active state
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    active={true}
>
    An {'<Input>'} with active state
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Input
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<Input>'} with inherit active
                                </Input>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <Input
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<Input>'} with inherit active
    </Input>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Input
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                An {'<Input>'} with focus indicator
                            </Input>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    focused={true}
>
    An {'<Input>'} with focus indicator
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Input
                                theme={themeName}
                                arrived={false}
                            >
                                An {'<Input>'} without arrive indicator
                            </Input>
                            <Input
                                theme={themeName}
                                arrived={true}
                            >
                                An {'<Input>'} with arrive indicator
                            </Input>
                            <Input
                                theme={themeName}
                                arrived={undefined}
                            >
                                An {'<Input>'} with auto arrive indicator
                            </Input>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    arrived={false}
>
    An {'<Input>'} without arrive indicator
</Input>
<Input
    theme='${themeName}'
    arrived={true}
>
    An {'<Input>'} with arrive indicator
</Input>
<Input
    theme='${themeName}'
    arrived={undefined}
>
    An {'<Input>'} with auto arrive indicator
</Input>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            An {'<Input>'} marked as neutral
                        </Input>
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            An {'<Input>'} marked as valid
                        </Input>
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            An {'<Input>'} marked as invalid
                        </Input>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Input
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    An {'<Input>'} marked as neutral
</Input>
<Input
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    An {'<Input>'} marked as valid
</Input>
<Input
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    An {'<Input>'} marked as invalid
</Input>
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

import {inputs, inputValues} from '@reusable-ui/input';

inputs.opacity = 0.5;
console.log('opacity variable name: ', inputs.opacity);
console.log('opacity variable value: ', inputValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default InputPage
