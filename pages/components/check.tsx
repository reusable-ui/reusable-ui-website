import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { editableTextControl, check } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Check as OriCheck, CheckProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Check = (props: CheckProps) => <OriCheck {...props} theme={props.theme ?? 'primary'} />


const CheckPage: NextPage = () => {
    return (<ComponentContextProvider component={check} baseComponents={editableTextControl}>
        <Head>
            <title>{`${check.componentTag} Component`}</title>
            <meta name="description" content={`${check.componentTag} is an interactive control in order to select multiple options.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> is an interactive control in order to select multiple options.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    <Check defaultChecked={true} theme='primary'>check</Check>
                    <Check defaultChecked={true} theme='primary' checkStyle='switch'>check</Check>
                    <Check defaultChecked={true} theme='success' nude={false}>check</Check>
                    <Check defaultChecked={true} theme='dark' checkStyle='switch' nude={false}>check</Check>
                    <Check defaultChecked={true} theme='danger' checkStyle='toggleButton' nude={false}>toggle check</Check>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Check
                                key={index}
                                size={sizeName}
                            >
                                A {'<Check>'} with {sizeName ?? 'default'} size
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Check
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<Check>'} with ${sizeName ?? 'default'} size
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                            >
                                A {'<Check>'} with {themeName} theme
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
>
    A {'<Check>'} with ${themeName} theme
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<Check>'} with gradient mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    gradient={true}
>
    A {'<Check>'} with gradient mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<Check>'} with outlined mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    outlined={true}
>
    A {'<Check>'} with outlined mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<Check>'} with mild mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    mild={true}
>
    A {'<Check>'} with mild mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                nude={false}
                            >
                                A {'<Check>'} with nude-less mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    nude={false}
>
    A {'<Check>'} with nude-less mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<Check>'} with disabled state
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    enabled={false}
>
    A {'<Check>'} with disabled state
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Check
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<Check>'} with inherit disabled
                                </Check>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Check
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<Check>'} with inherit disabled
    </Check>
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
                            <Check
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<Check>'} with active state
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    active={true}
>
    A {'<Check>'} with active state
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Check
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<Check>'} with inherit active
                                </Check>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <Check
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<Check>'} with inherit active
    </Check>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<Check>'} with focus indicator
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    focused={true}
>
    A {'<Check>'} with focus indicator
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Check
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<Check>'} without arrive indicator
                            </Check>
                            <Check
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<Check>'} with arrive indicator
                            </Check>
                            <Check
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<Check>'} with auto arrive indicator
                            </Check>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    arrived={false}
>
    A {'<Check>'} without arrive indicator
</Check>
<Check
    theme='${themeName}'
    arrived={true}
>
    A {'<Check>'} with arrive indicator
</Check>
<Check
    theme='${themeName}'
    arrived={undefined}
>
    A {'<Check>'} with auto arrive indicator
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            A {'<Check>'} marked as neutral
                        </Check>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            A {'<Check>'} marked as valid
                        </Check>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            A {'<Check>'} marked as invalid
                        </Check>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Check
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    A {'<Check>'} marked as neutral
</Check>
<Check
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    A {'<Check>'} marked as valid
</Check>
<Check
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    A {'<Check>'} marked as invalid
</Check>
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
                                <p>The opacity level of the <TheComponentLink />&apos;s <code>::placeholder</code>.</p>
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

import {checks, checkValues} from '@reusable-ui/check';

checks.opacity = 0.5;
console.log('opacity variable name: ', checks.opacity);
console.log('opacity variable value: ', checkValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default CheckPage
