import React, { Suspense } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { generic, icon } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { iconSizeOptions as sizeOptions, ThemeProperty, themeOptions, VariantProperties, ContextualMildProperty, IconSizeProperty as SizeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Basic, Details, Icon as OriIcon, IconProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { BusyBar } from '../../components/BusyBar'

const IconGalleryLazy = React.lazy(() => import(/* webpackChunkName: 'IconGallery' */'../../components/IconGallery'))



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
                    <p>
                        There a lot of <strong>common icons</strong> that ready to use for your projects.
                    </p>
                    <Details theme='primary' detailsStyle='content' label='Show icon gallery' lazy={true}>
                        <Suspense fallback={<BusyBar />}>
                            <IconGalleryLazy cardStyle='flush' />
                        </Suspense>
                    </Details>
                </Section>
                <Section title='Adding Custom Icon Sets'>
                    <p>
                        To add custom icons, for example a <strong>logo</strong> icon, follow these steps:
                    </p>
                    <Section title='Prepare the Image'>
                        <p>
                            You can either use a <strong>SVG</strong> or <strong>PNG</strong> file format, but the SVG is more recommended.
                        </p>
                        <p>
                            For the SVG format, you can use any image size.
                            For the PNG format, the image size should be the biggest icon size you'll use.
                        </p>
                        <p>
                            The <code>alpha = 255</code> of the image (<code>rgb(any, any, any, 255)</code>) will be <strong>fully opaque</strong>, whereas the <code>alpha = 0</code> of the image (<code>rgb(any, any, any, 0)</code>) will be <strong>fully transparent</strong>.
                            The <code>alpha</code> value between <code>0</code> and <code>255</code> will be <strong>semi transparent</strong>.
                            The color part <code>R, G, B</code> don&apos;t matter.
                        </p>
                        <p>
                            Here the samples:
                        </p>
                        <Preview blockDisplay={true}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img src='/icons/reusable-ui.svg' style={{height: '48px'}} />
                                <img src='/icons/instagram.svg' style={{height: '48px'}} />
                                <img src='/icons/whatsapp.svg' style={{height: '48px'}} />
                                <img src='/icons/busy.svg' style={{height: '48px'}} />
                            </div>
                        </Preview>
                    </Section>
                </Section>
            </Section>
            <VariantProperties>
                <SizeProperty>
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
