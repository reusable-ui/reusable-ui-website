import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, progress } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ProgressStyleProperty, progressStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button, Group, Progress, ProgressBar, Radio, TextInput } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const ProgressPage: NextPage = () => {
    return (<ComponentContextProvider component={progress} baseComponents={basic}>
        <Head>
            <title>{`${progress.componentTag} Component`}</title>
            <meta name="description" content={`${progress.componentTag} is a custom progress bar featuring support for multi bars, animated running progress, text labels, and horizontal/vertical orientation.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                <TheComponentLink /> is a custom progress bar featuring support for multi bars, animated running progress, text labels, and horizontal/vertical orientation.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview>
                    <Progress theme='primary'>
                        <ProgressBar value='30'>30%</ProgressBar>
                    </Progress>
                    
                    <Progress theme='success'>
                        <ProgressBar value='30'>30%</ProgressBar>
                        <ProgressBar value='40' theme='danger' progressBarStyle='striped'>40%</ProgressBar>
                    </Progress>
                    
                    <Progress gradient={true} theme='danger'>
                        <ProgressBar value='70' progressBarStyle='striped' running>70%</ProgressBar>
                    </Progress>
                    
                    <Progress outlined={true} theme='danger'>
                        <ProgressBar value='70' progressBarStyle='striped'>70%</ProgressBar>
                    </Progress>
                    
                    <Progress mild={true} theme='danger'>
                        <ProgressBar value='70' progressBarStyle='striped'>70%</ProgressBar>
                    </Progress>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <ProgressStyleProperty>
                    <Preview display='right' stretch={false}>
                        {progressStyleOptions.map((progressStyle, index) =>
                            <Progress
                                key={index}
                                progressStyle={progressStyle}
                            >
                                A {'<Progress>'} with {progressStyle} style
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {progressStyleOptions.map((progressStyle) =>
`
<Progress
    progressStyle='${progressStyle}'
>
    A {'<Progress>'} with ${progressStyle} style
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </ProgressStyleProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Progress
                                key={index}
                                size={sizeName}
                            >
                                An {'<Progress>'} with {sizeName} size
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Progress
    size='${sizeName}'
>
    An {'<Progress>'} with ${sizeName} size
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                            >
                                An {'<Progress>'} with {themeName} theme
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
>
    An {'<Progress>'} with ${themeName} theme
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Progress>'} with gradient mode
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    gradient={true}
>
    An {'<Progress>'} with gradient mode
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Progress>'} with outlined mode
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    outlined={true}
>
    An {'<Progress>'} with outlined mode
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Progress>'} without mild mode
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    mild={false}
>
    An {'<Progress>'} without mild mode
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Progress>'} with nude mode
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    nude={true}
>
    An {'<Progress>'} with nude mode
</Progress>
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

import {progresss, progressValues} from '@reusable-ui/progress';

progresss.opacity = 0.5;
console.log('opacity variable name: ', progresss.opacity);
console.log('opacity variable value: ', progressValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ProgressPage
