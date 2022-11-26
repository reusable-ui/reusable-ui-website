import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { editableTextControl, input } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Input as OriInput, InputProps, InputType, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, EnableValidationProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Input = (props: InputProps) => <OriInput {...props} theme={props.theme ?? 'primary'} placeholder={props.placeholder ?? 'Type something here...'} />
const inputTypes = ['TextInput', 'SearchInput', 'PasswordInput', 'EmailInput', 'TelInput', 'UrlInput', 'NumberInput', 'TimeInput', 'WeekInput', 'DateInput', 'DateTimeInput', 'MonthInput'];



const InputPage: NextPage = () => {
    return (<ComponentContextProvider component={input} baseComponents={editableTextControl}>
        <Head>
            <title>{`${input.componentTag} Component`}</title>
            <meta name="description" content={`${input.componentTag} is an interactive control in order to accept data from the user.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is an interactive control in order to accept data from the user.
                </p>
                <p>
                    There are some specialized types of <TheComponentLink /> with built in validation corresponding to the data type:
                </p>
                <ul>
                    {inputTypes.map((inputType, index) => (
                        <li key={index}>
                            <code>{`<${inputType}>`}</code> or <code>{`<${inputType.slice(0, -5)}>`}</code>
                        </li>
                    ))}
                </ul>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    {inputTypes.map((inputType, index) => (
                        <Input key={index} type={inputType.slice(0, -5).toLowerCase() as InputType} enableValidation={true} placeholder={`type a ${inputType.slice(0, -5).toLowerCase()} here...`} />
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
                                placeholder={`An <Input> with ${sizeName} size`}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Input
    size='${sizeName}'
    placeholder={\`An <Input> with ${sizeName} size\`}
/>
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
                                placeholder={`An <Input> with ${themeName} theme`}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    placeholder={\`An <Input> with ${themeName ?? 'default'} theme\`}
/>
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
                                placeholder='An <Input> with gradient mode'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    gradient={true}
    placeholder='An <Input> with gradient mode'
/>
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
                                placeholder='An <Input> with outlined mode'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    outlined={true}
    placeholder='An <Input> with outlined mode'
/>
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
                                placeholder='An <Input> with mild-less mode'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    mild={false}
    placeholder='An <Input> with mild-less mode'
/>
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
                                placeholder='An <Input> with nude mode'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    nude={true}
    placeholder='An <Input> with nude mode'
/>
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
                                placeholder='An <Input> with disabled state'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    enabled={false}
    placeholder='An <Input> with disabled state'
/>
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
                                    placeholder='An <Input> with inherit disabled'
                                />
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
        placeholder='An <Input> with inherit disabled'
    />
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
                                placeholder='An <Input> with active state'
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Input
    theme='${themeName}'
    active={true}
    placeholder='An <Input> with active state'
/>
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
                                    placeholder='An <Input> with inherit active'
                                />
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
        placeholder='An <Input> with inherit active'
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                            placeholder='An <Input> marked as neutral'
                        />
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                            placeholder='An <Input> marked as valid'
                        />
                        <Input
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                            placeholder='An <Input> marked as invalid'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Input
    theme='primary'
    enableValidation={true}
    isValid={null}
    placeholder='An <Input> marked as neutral'
/>
<Input
    theme='primary'
    enableValidation={true}
    isValid={true}
    placeholder='An <Input> marked as valid'
/>
<Input
    theme='primary'
    enableValidation={true}
    isValid={false}
    placeholder='An <Input> marked as invalid'
/>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Appearances'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>placeholderOpacity</code>
                                <p>The <strong>opacity level</strong> of the <TheComponentLink />&apos;s <code>::placeholder</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>backgGrad</code>
                                <p>The <strong>background gradient</strong> when <code>{`gradient={true}`}</code>.</p>
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
