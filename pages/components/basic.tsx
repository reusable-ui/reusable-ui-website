import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { generic, basic } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Basic as OriBasic, BasicProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const Basic = (props: BasicProps) => <OriBasic {...props} theme={props.theme ?? 'primary'} />



const BasicPage: NextPage = () => {
    return (<ComponentContextProvider component={basic} baseComponents={generic}>
        <Head>
            <title>{`${basic.componentTag} Component`}</title>
            <meta name="description" content={`${basic.componentTag} is a simple box layout component with built-in variants: ${packages.resizable.packageShortName}, ${packages.themable.packageShortName}, ${packages.gradientable.packageShortName}, ${packages.outlineable.packageShortName}, ${packages.mildable.packageShortName}, and ${packages.nudible.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is a <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, {packages.gradientable.packageShortLink}, {packages.outlineable.packageShortLink}, {packages.mildable.packageShortLink}, and {packages.nudible.packageShortLink}.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Basic
                                key={index}
                                size={sizeName}
                            >
                                A {'<Basic>'} with {sizeName} size
                            </Basic>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Basic
    size='${sizeName}'
>
    A {'<Basic>'} with ${sizeName} size
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
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>backg</code>
                                <p>The un-themed background color.</p>
                            </ListItem>
                            <ListItem>
                                <code>altBackg</code>
                                <p>The un-themed alternate (selection) background color.</p>
                            </ListItem>
                            <ListItem>
                                <code>backgGrad</code>
                                <p>The <strong>background gradient</strong> when <code>{`gradient={true}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>foreg</code>
                                <p>The un-themed foreground (text) color.</p>
                            </ListItem>
                            <ListItem>
                                <code>altForeg</code>
                                <p>The un-themed alternate (selection) foreground (text) color.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>borderStyle</code>
                                <p>The shape of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderWidth</code>
                                <p>The thickness of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderColor</code>
                                <p>The un-themed color of border (stroke).</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The default rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusSm</code>
                                <p>The rounded corner radius when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusLg</code>
                                <p>The rounded corner radius when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>ring</code>
                                <p>The un-themed ring (focus indicator) color.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>transitionDuration</code>
                                <p>The default duration of <code>transition</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontFamily</code>
                                <p>The text appearance.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontStyle</code>
                                <p>The text style such as <em>italic</em>, <em>oblique</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>textDecoration</code>
                                <p>The text strokes such as <em>underline</em>, <em>overline</em>, <em>line-through</em>, etc.</p>
                            </ListItem>
                            <ListItem>
                                <code>lineHeight</code>
                                <p>The text height (including the gap between text rows).</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {basics, basicValues} from '@reusable-ui/basic';

basics.paddingInline = '3rem';
console.log('padding-inline variable name: ', basics.paddingInline);
console.log('padding-inline variable value: ', basicValues.paddingInline);

basics.fontFamily = 'Arial';
basics.lineHeight = 2;
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default BasicPage
