import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { check, radio } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, CheckStyleProperty, checkStyleOptions } from '../../properties/sections/variantProperties'
import { Preview as OriPreview, PreviewProps } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Radio as OriRadio, RadioProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, EnableValidationProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Radio = (props: RadioProps) => <OriRadio {...props} theme={props.theme ?? 'primary'} name={props.name ?? 'test'} />
const Preview = (props: PreviewProps) => <OriPreview {...props} cardBodyComponent={<CardBody tag='form' />} />


const RadioPage: NextPage = () => {
    return (<ComponentContextProvider component={radio} baseComponents={check}>
        <Head>
            <title>{`${radio.componentTag} Component`}</title>
            <meta name="description" content={`${radio.componentTag} is an interactive control in order to select single option.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is an interactive control in order to select single option.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    <Radio theme='primary'>radio</Radio>
                    <Radio theme='primary' checkStyle='switch'>radio</Radio>
                    <Radio theme='success' nude={false}>radio</Radio>
                    <Radio theme='dark' checkStyle='switch' nude={false}>radio</Radio>
                    <Radio theme='danger' checkStyle='toggleButton'>toggle radio</Radio>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <CheckStyleProperty>
                    <Preview display='right' stretch={false}>
                        {checkStyleOptions.map((checkStyle, index) =>
                            <Radio
                                key={index}
                                checkStyle={checkStyle}
                            >
                                A {'<Radio>'} with {checkStyle} style
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {checkStyleOptions.map((checkStyle) =>
`
<Radio
    checkStyle='${checkStyle}'
    name='test'
>
    A {'<Radio>'} with ${checkStyle} style
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </CheckStyleProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Radio
                                key={index}
                                size={sizeName}
                            >
                                A {'<Radio>'} with {sizeName} size
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Radio
    size='${sizeName}'
    name='test'
>
    A {'<Radio>'} with ${sizeName} size
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                            >
                                A {'<Radio>'} with {themeName} theme
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    name='test'
>
    A {'<Radio>'} with ${themeName} theme
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<Radio>'} with gradient mode
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    gradient={true}
    name='test'
>
    A {'<Radio>'} with gradient mode
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<Radio>'} with outlined mode
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    outlined={true}
    name='test'
>
    A {'<Radio>'} with outlined mode
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<Radio>'} with mild mode
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    mild={true}
    name='test'
>
    A {'<Radio>'} with mild mode
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                nude={false}
                            >
                                A {'<Radio>'} with nude-less mode
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    nude={false}
    name='test'
>
    A {'<Radio>'} with nude-less mode
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<Radio>'} with disabled state
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    enabled={false}
    name='test'
>
    A {'<Radio>'} with disabled state
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Radio
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<Radio>'} with inherit disabled
                                </Radio>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Radio
        theme='${themeName}'
        inheritEnabled={true}
        name='test'
    >
        A {'<Radio>'} with inherit disabled
    </Radio>
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
                            <Radio
                                key={index}
                                theme={themeName}
                                active={true}
                                name={`test${index + 1}`}
                            >
                                A {'<Radio>'} with active state
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName, index) =>
`
<Radio
    theme='${themeName}'
    active={true}
    name='test${index + 1}'
>
    A {'<Radio>'} with active state
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Radio
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                    name={`test${index + 1}`}
                                >
                                    A {'<Radio>'} with inherit active
                                </Radio>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName, index) =>
`
<Control theme='primary' active={true}>
    <Radio
        theme='${themeName}'
        inheritActive={true}
        name='test${index + 1}'
    >
        A {'<Radio>'} with inherit active
    </Radio>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Radio
                                key={index}
                                theme={themeName}
                                focused={true}
                                name='test'
                            >
                                A {'<Radio>'} with focus indicator
                            </Radio>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    focused={true}
    name='test'
>
    A {'<Radio>'} with focus indicator
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Radio
                                theme={themeName}
                                arrived={false}
                                name='test'
                            >
                                A {'<Radio>'} without arrive indicator
                            </Radio>
                            <Radio
                                theme={themeName}
                                arrived={true}
                                name='test'
                            >
                                A {'<Radio>'} with arrive indicator
                            </Radio>
                            <Radio
                                theme={themeName}
                                arrived={undefined}
                                name='test'
                            >
                                A {'<Radio>'} with auto arrive indicator
                            </Radio>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Radio
    theme='${themeName}'
    arrived={false}
    name='test'
>
    A {'<Radio>'} without arrive indicator
</Radio>
<Radio
    theme='${themeName}'
    arrived={true}
    name='test'
>
    A {'<Radio>'} with arrive indicator
</Radio>
<Radio
    theme='${themeName}'
    arrived={undefined}
    name='test'
>
    A {'<Radio>'} with auto arrive indicator
</Radio>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Radio
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                            name='test'
                        >
                            A {'<Radio>'} marked as neutral
                        </Radio>
                        <Radio
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                            name='test'
                        >
                            A {'<Radio>'} marked as valid
                        </Radio>
                        <Radio
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                            name='test'
                        >
                            A {'<Radio>'} marked as invalid
                        </Radio>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Radio
    theme='primary'
    enableValidation={true}
    isValid={null}
    name='test'
>
    A {'<Radio>'} marked as neutral
</Radio>
<Radio
    theme='primary'
    enableValidation={true}
    isValid={true}
    name='test'
>
    A {'<Radio>'} marked as valid
</Radio>
<Radio
    theme='primary'
    enableValidation={true}
    isValid={false}
    name='test'
>
    A {'<Radio>'} marked as invalid
</Radio>
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
                                <code>indicator</code>
                                <p>An <code>indicating image</code> to show when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {radios, radioValues} from '@reusable-ui/radio';

radios.opacity = 0.5;
console.log('opacity variable name: ', radios.opacity);
console.log('opacity variable value: ', radioValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default RadioPage
