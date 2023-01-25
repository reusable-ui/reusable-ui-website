import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/sections/sections'
import { basic, progress, progressBar } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ProgressStyleProperty, progressStyleOptions, OrientationProperty, orientationOptions, ProgressBarStyleProperty, progressBarStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { List, ListItem, Progress as OriProgress, ProgressBar, ProgressProps } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink, TheNestedComponentDisplay } from '../../packages/componentContext'
import { RunningProperty } from '../../properties/sections/stateProperties'



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
                <ProgressBarStyleProperty>
                    <Preview>
                        {progressBarStyleOptions.map((progressBarStyle, index) =>
                            <Progress
                                key={index}
                            >
                                <ProgressBar progressBarStyle={progressBarStyle} value={30}>30%</ProgressBar>
                            </Progress>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {progressBarStyleOptions.map((progressBarStyle) =>
`
<Progress
    theme='primary'
>
    <ProgressBar
        progressBarStyle='${progressBarStyle}'
        value={30}
    >
        30%
    </ProgressBar>
</Progress>
`
                        ).join('')}
                    </TypeScriptCode>
                </ProgressBarStyleProperty>
                <RunningProperty>
                    <Preview>
                        <Progress>
                            <ProgressBar running={true} progressBarStyle='striped' value={30}>30%</ProgressBar>
                        </Progress>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Progress
    theme='primary'
>
    <ProgressBar
        running={true}
        progressBarStyle='striped'
        value={30}
    >
        30%
    </ProgressBar>
</Progress>
`
                    }</TypeScriptCode>
                </RunningProperty>
                <OrientationProperty>
                    <Preview stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Progress
                                key={index}
                                orientation={orientationName}
                                style={(orientationName === 'block') ? {justifySelf: 'center'} : undefined}
                            />
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
    gradient={true}
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
    outlined={true}
    theme='${themeName}'
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
                                mild={true}
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
    mild={true}
    theme='${themeName}'
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
    nude={true}
    theme='${themeName}'
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
                    <AccordionItem label='Sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>minInlineSize</code>
                                <p>A default <strong>minimum width</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minBlockSize</code>
                                <p>A default <strong>minimum height</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minInlineSizeBlock</code>
                                <p>A <strong>minimum width</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minBlockSizeBlock</code>
                                <p>A <strong>minimum height</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            
                            
                            
                            <ListItem>
                                <code>barBoxSizing</code>
                                <p>Specifies the <strong>measusing method</strong> of the <TheNestedComponentDisplay />&apos;s size.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>barMinInlineSize</code>
                                <p>A default <strong>minimum width</strong> on the <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinBlockSize</code>
                                <p>A default <strong>minimum height</strong> on the <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinBlockSizeSm</code>
                                <p>A <strong>minimum height</strong> on the <TheNestedComponentDisplay /> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinBlockSizeLg</code>
                                <p>A <strong>minimum height</strong> on the <TheNestedComponentDisplay /> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>barMinBlockSizeBlock</code>
                                <p>A default <strong>minimum height</strong> on the <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinInlineSizeBlock</code>
                                <p>A default <strong>minimum width</strong> on the <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinInlineSizeBlockSm</code>
                                <p>A default <strong>minimum width</strong> on the <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barMinInlineSizeBlockLg</code>
                                <p>A default <strong>minimum width</strong> on the <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>backgGrad</code>
                                <p>The <strong>background gradient</strong> when <code>{`gradient={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>backgGradBlock</code>
                                <p>The <strong>background gradient</strong> when <code>{`gradient={true}`}</code> and  <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            
                            
                            
                            <ListItem>
                                <code>barBackgStripedImg</code>
                                <p>A <strong>background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedWidth</code>
                                <p>A default <strong>width of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedWidthSm</code>
                                <p>A <strong>width of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedWidthLg</code>
                                <p>A <strong>width of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedHeight</code>
                                <p>A default <strong>height of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedHeightSm</code>
                                <p>A <strong>height of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>barBackgStripedHeightLg</code>
                                <p>A <strong>height of background image</strong> to show on the <TheNestedComponentDisplay /> when <code>{`progressBarStyle='striped'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>barAnimRunning</code>
                                <p>Represents default <strong>running animation</strong> of the <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>barAnimRunningBlock</code>
                                <p>Represents <strong>running animation</strong> of the <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong> of the <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> of the <TheNestedComponentDisplay />.</p>
                            </ListItem>
                        </List>
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
