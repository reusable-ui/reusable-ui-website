import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, progress, progressBar } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ProgressStyleProperty, progressStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button, Group, Progress as OriProgress, ProgressBar, ProgressProps, Radio, TextInput } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const Progress = (props: ProgressProps) => <OriProgress {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? [
        <ProgressBar key={0} value={30}>30%</ProgressBar>,
    ]}
</OriProgress>



const ProgressPage: NextPage = () => {
    return (<ComponentContextProvider component={progress} nestedComponent={progressBar} baseComponents={basic}>
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
                        <ProgressBar value={30}>30%</ProgressBar>
                    </Progress>
                    
                    <Progress theme='success'>
                        <ProgressBar value={30}>30%</ProgressBar>
                        <ProgressBar value={40} theme='danger' progressBarStyle='striped'>40%</ProgressBar>
                    </Progress>
                    
                    <Progress gradient={true} theme='danger'>
                        <ProgressBar value={70} progressBarStyle='striped' running>70%</ProgressBar>
                    </Progress>
                    
                    <Progress outlined={true} theme='danger'>
                        <ProgressBar value={70} progressBarStyle='striped'>70%</ProgressBar>
                    </Progress>
                    
                    <Progress mild={true} theme='danger'>
                        <ProgressBar value={70} progressBarStyle='striped'>70%</ProgressBar>
                    </Progress>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <ProgressStyleProperty>
                    <Preview>
                        {progressStyleOptions.map((progressStyle, index) =>
                            <Progress
                                key={index}
                                progressStyle={progressStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {progressStyleOptions.map((progressStyle) =>
`
<Progress
    progressStyle='${progressStyle}'
    theme='primary'
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </ProgressStyleProperty>
                <OrientationProperty>
                    <Preview>
                        {orientationOptions.map((orientationName, index) =>
                            <div key={index} style={{display: 'grid'}}>
                                <Progress
                                    orientation={orientationName}
                                    style={(orientationName === 'block') ? {justifySelf: 'center'} : undefined}
                                />
                            </div>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Progress
    orientation='${orientationName}'
    theme='primary'
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Progress
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <Progress>
                            <ProgressBar size='sm' value={30}>30%</ProgressBar>
                            <ProgressBar size='md' value={20}>20%</ProgressBar>
                            <ProgressBar size='lg' value={40}>40%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Progress
    size='${sizeName}'
    theme='primary'
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')
                        +
`
<Progress
    theme='primary'
>
    <ProgressBar size='sm' value={30}>30%</ProgressBar>
    <ProgressBar size='md' value={20}>20%</ProgressBar>
    <ProgressBar size='lg' value={40}>40%</ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <Progress>
                            <ProgressBar                 value={30}>30%</ProgressBar>
                            <ProgressBar theme='success' value={20}>20%</ProgressBar>
                            <ProgressBar theme='danger'  value={40}>40%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')
                        +
`
<Progress
    theme='primary'
>
    <ProgressBar                 value={30}>30%</ProgressBar>
    <ProgressBar theme='success' value={20}>20%</ProgressBar>
    <ProgressBar theme='danger'  value={40}>40%</ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
                        )}
                        <Progress>
                            <ProgressBar                 value={30}>30%</ProgressBar>
                            <ProgressBar gradient={true} value={20}>20%</ProgressBar>
                            <ProgressBar                 value={40}>40%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    gradient={true}
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')
                        +
`
<Progress
    theme='primary'
>
    <ProgressBar                 value={30}>30%</ProgressBar>
    <ProgressBar gradient={true} value={20}>20%</ProgressBar>
    <ProgressBar                 value={40}>40%</ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
                        )}
                        <Progress outlined={true}>
                            <ProgressBar                  value={30}>30%</ProgressBar>
                            <ProgressBar outlined={false} value={20}>20%</ProgressBar>
                            <ProgressBar                  value={40}>40%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    outlined={true}
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')
                        +
`
<Progress
    outlined={true}
    theme='primary'
>
    <ProgressBar                  value={30}>30%</ProgressBar>
    <ProgressBar outlined={false} value={20}>20%</ProgressBar>
    <ProgressBar                  value={40}>40%</ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                mild={false}
                            />
                        )}
                        <Progress mild={true}>
                            <ProgressBar              value={30}>30%</ProgressBar>
                            <ProgressBar mild={false} value={20}>20%</ProgressBar>
                            <ProgressBar              value={40}>40%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Progress
    theme='${themeName}'
    mild={false}
>
    <ProgressBar value={30}>30%</ProgressBar>
</Progress>
`
                        ).join('')
                        +
`
<Progress
    mild={true}
    theme='primary'
>
    <ProgressBar              value={30}>30%</ProgressBar>
    <ProgressBar mild={false} value={20}>20%</ProgressBar>
    <ProgressBar              value={40}>40%</ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Progress
                                key={index}
                                theme={themeName}
                                nude={true}
                            />
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
    <ProgressBar value={30}>30%</ProgressBar>
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
