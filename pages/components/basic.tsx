import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../../components/Section'
import { basic } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Basic as OriBasic, BasicProps } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'



const Basic = (props: BasicProps) => <OriBasic {...props} theme={props.theme ?? 'primary'} />



const BasicPage: NextPage = () => {
    return (<ComponentContextProvider component={basic}>
        <Head>
            <title>{`${basic.componentTag} Component`}</title>
            <meta name="description" content={`${basic.componentTag} is a simple box layout component with built-in variants: ${packages.resizable.packageShortName}, ${packages.themable.packageShortName}, ${packages.gradientable.packageShortName}, ${packages.outlineable.packageShortName}, ${packages.mildable.packageShortName}, and ${packages.nudible.packageShortName}`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, {packages.gradientable.packageShortLink}, {packages.outlineable.packageShortLink}, {packages.mildable.packageShortLink}, and {packages.nudible.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Basic
                                key={index}
                                size={sizeName}
                            >
                                A {'<Basic>'} with {sizeName ?? 'default'} size
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Basic
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<Basic>'} with ${sizeName ?? 'default'} size
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Basic
                                key={index}
                                theme={themeName}
                            >
                                A {'<Basic>'} with {themeName} theme
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Basic
    theme='${themeName}'
>
    A {'<Basic>'} with ${themeName} theme
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Basic
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<Basic>'} with gradient mode
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Basic
    theme='${themeName}'
    gradient={true}
>
    A {'<Basic>'} with gradient mode
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Basic
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<Basic>'} with outlined mode
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Basic
    theme='${themeName}'
    outlined={true}
>
    A {'<Basic>'} with outlined mode
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Basic
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<Basic>'} with mild mode
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Basic
    theme='${themeName}'
    mild={true}
>
    A {'<Basic>'} with mild mode
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Basic
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<Basic>'} with nude mode
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Basic
    theme='${themeName}'
    nude={true}
>
    A {'<Basic>'} with nude mode
</Basic>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
        </Section>
    </ComponentContextProvider>);
}

export default BasicPage
