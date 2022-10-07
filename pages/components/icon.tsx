import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { generic, icon } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ContextualMildProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, Basic, Icon as OriIcon, IconProps, List, ListItem } from '@reusable-ui/components'
import type { SizeName } from '@reusable-ui/icon'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



export const sizeOptions  : (SizeName|undefined)[] = ['sm', 'nm', 'md', 'lg'];


const Icon = (props: IconProps) => <OriIcon {...props} theme={props.theme ?? 'primary'} />



const IconPage: NextPage = () => {
    return (<ComponentContextProvider component={icon} baseComponents={generic}>
        <Head>
            <title>{`${icon.componentTag} Component`}</title>
            <meta name="description" content={`${icon.componentTag} is a simple box layout component with built-in variants and indication states: ${packages.disableable.packageShortName} and ${packages.activatable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                Displays an <strong>emoticon</strong> or other icon to attract user&apos;s attention with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, and {packages.mildable.packageShortLink}.
            </p>
            <Section title='Icon Sets'>
                <Section title='Built-in Icon Sets'>
                    //
                </Section>
                <Section title='Adding Custom Icon Sets'>
                    //
                </Section>
            </Section>
            <VariantProperties>
                <SizeProperty possibleValues={
                    <Accordion>
                        <AccordionItem label={<code>undefined</code>}>
                            <p>
                                Uses <strong>default</strong> size.
                            </p>
                        </AccordionItem>
                        <AccordionItem label={<code>'sm'</code>}>
                            <p>
                                Makes the <TheComponentDisplay /> <strong>smaller</strong> size.
                            </p>
                        </AccordionItem>
                        <AccordionItem label={<code>'nm'</code>}>
                            <p>
                                Makes the <TheComponentDisplay /> <strong>normal</strong> size.
                            </p>
                        </AccordionItem>
                        <AccordionItem label={<code>'md'</code>}>
                            <p>
                                Makes the <TheComponentDisplay /> <strong>bigger</strong> size.
                            </p>
                        </AccordionItem>
                        <AccordionItem label={<code>'lg'</code>}>
                            <p>
                                Makes the <TheComponentDisplay /> <strong>biggest</strong> size.
                            </p>
                        </AccordionItem>
                        <AccordionItem label={<code>'1em'</code>}>
                            <p>
                                Makes the <TheComponentDisplay /> as tall as <strong>current font size</strong>.
                            </p>
                        </AccordionItem>
                    </Accordion>
                }>
                    <Preview blockDisplay={true}>
                        {sizeOptions.map((sizeName, index) =>
                            <Icon
                                key={index}
                                icon='face'
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Icon
    icon='face'
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        <Basic theme='secondary' gradient={true} mild={false}>
                            {themeOptions.map((themeName, index) =>
                                <Icon
                                    key={index}
                                    icon='face'
                                    theme={themeName}
                                />
                            )}
                        </Basic>
                        <Basic theme='secondary' gradient={true} mild={true}>
                            {themeOptions.map((themeName, index) =>
                                <Icon
                                    key={index}
                                    icon='face'
                                    theme={themeName}
                                />
                            )}
                        </Basic>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Icon
    icon='face'
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <ContextualMildProperty>
                    <Preview>
                        <Basic theme='secondary' gradient={true} mild={false}>
                            {themeOptions.map((themeName, index) =>
                                <Icon
                                    key={index}
                                    icon='face'
                                    theme={themeName}
                                    mild={true}
                                />
                            )}
                        </Basic>
                        <Basic theme='secondary' gradient={true} mild={true}>
                            {themeOptions.map((themeName, index) =>
                                <Icon
                                    key={index}
                                    icon='face'
                                    theme={themeName}
                                    mild={true}
                                />
                            )}
                        </Basic>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Icon
    icon='face'
    theme='${themeName}'
    mild={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ContextualMildProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>size</code>
                                <p>The default icon height.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeSm</code>
                                <p>The icon height when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeNm</code>
                                <p>The icon height when <code>{`size='nm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeMd</code>
                                <p>The icon height when <code>{`size='md'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeLg</code>
                                <p>The icon height when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>size1em</code>
                                <p>The icon height when <code>{`size='1em'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {icons, iconValues} from '@reusable-ui/icon';

icons.opacity = 0.5;
console.log('opacity variable name: ', icons.opacity);
console.log('opacity variable value: ', iconValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default IconPage
