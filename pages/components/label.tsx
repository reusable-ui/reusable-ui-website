import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, label } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, LabelStyleProperty, labelStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button, Group, Label, Radio, TextInput } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const LabelPage: NextPage = () => {
    return (<ComponentContextProvider component={label} baseComponents={basic}>
        <Head>
            <title>{`${label.componentTag} Component`}</title>
            <meta name="description" content={`${label.componentTag} represents a caption for the corresponding neighboring component.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    Represents a <strong>caption</strong> for the corresponding neighboring component.
                </p>
                <p>
                    This <TheComponentLink /> is usually used in <em>conjunction</em> with {packages.group.packageLink}, {packages.input.packageLink}, {packages.check.packageLink}, {packages.radio.packageLink}, and {packages.button.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview>
                    <div>
                        <Group theme='danger'>
                            <Label>
                                Spicy level:
                            </Label>
                            <Radio name='spicy' nude={false} defaultActive={true}>Light</Radio>
                            <Radio name='spicy' nude={false}>Hot</Radio>
                            <Radio name='spicy' nude={false}>Super</Radio>
                        </Group>
                    </div>
                    <div>
                        <Group theme='primary'>
                            <TextInput placeholder='Username' />
                            <Label>
                                @
                            </Label>
                            <TextInput placeholder='Server' />
                            <Button>
                                Submit
                            </Button>
                        </Group>
                    </div>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <LabelStyleProperty>
                    <Preview display='right' stretch={false}>
                        {labelStyleOptions.map((labelStyle, index) =>
                            <Label
                                key={index}
                                labelStyle={labelStyle}
                            >
                                A {'<Label>'} with {labelStyle} style
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {labelStyleOptions.map((labelStyle) =>
`
<Label
    labelStyle='${labelStyle}'
>
    A {'<Label>'} with ${labelStyle} style
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </LabelStyleProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Label
                                key={index}
                                size={sizeName}
                            >
                                An {'<Label>'} with {sizeName ?? 'default'} size
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Label
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Label>'} with ${sizeName ?? 'default'} size
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Label
                                key={index}
                                theme={themeName}
                            >
                                An {'<Label>'} with {themeName} theme
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Label
    theme='${themeName}'
>
    An {'<Label>'} with ${themeName} theme
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Label
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Label>'} with gradient mode
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Label
    theme='${themeName}'
    gradient={true}
>
    An {'<Label>'} with gradient mode
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Label
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Label>'} with outlined mode
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Label
    theme='${themeName}'
    outlined={true}
>
    An {'<Label>'} with outlined mode
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Label
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Label>'} without mild mode
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Label
    theme='${themeName}'
    mild={false}
>
    An {'<Label>'} without mild mode
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Label
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Label>'} with nude mode
                            </Label>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Label
    theme='${themeName}'
    nude={true}
>
    An {'<Label>'} with nude mode
</Label>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='No variable yet' enabled={false}>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {labels, labelValues} from '@reusable-ui/label';

labels.opacity = 0.5;
console.log('opacity variable name: ', labels.opacity);
console.log('opacity variable value: ', labelValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default LabelPage
