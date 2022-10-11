import React, { Suspense, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, ComponentInstallation, Section, Variables } from '../../../components/Section'
import { generic, icon } from '../../../packages/packageList'
import * as packages from '../../../packages/packageList'
import { iconSizeOptions as sizeOptions, ThemeProperty, themeOptions, VariantProperties, ContextualMildProperty } from '../../../properties/sections/variantProperties'
import { IconProperty, IconSizeProperty as SizeProperty } from '../../../properties/sections/iconProperties'
import { Preview } from '../../../components/Preview'
import { AccordionItem, Accordion } from '../../../components/Accordion'
import { Basic, Details, ExclusiveAccordion, Icon as OriIcon, IconProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../../components/Code'
import { ComponentContextProvider, TheComponentDisplay, TheComponentPackage } from '../../../packages/componentContext'
import { BusyBar } from '../../../components/BusyBar'
import { Warning } from '../../../components/Warning'

import { useRouter } from 'next/router'

const IconGalleryLazy = React.lazy(() => import(/* webpackChunkName: 'IconGallery' */'../../../components/IconGallery'))



const Icon = (props: IconProps) => <OriIcon {...props} theme={props.theme ?? 'primary'} />



const IconPage: NextPage = () => {
    const router = useRouter();
    const params = router.query.params ?? [];
    const param  = Array.isArray(params) ? params.join('/') : params;
    
    
    const sectionConfigureRef = useRef<HTMLElement>(null);
    useEffect(() => {
        switch(param.toLocaleLowerCase()) {
            case 'configure':
                sectionConfigureRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
                break;
        } // switch
    }, [param]);
    
    
    
    return (<ComponentContextProvider component={icon} baseComponents={generic}>
        <Head>
            <title>{`${icon.componentTag} Component`}</title>
            <meta name="description" content={`${icon.componentTag} is a simple box layout component with built-in variants and indication states: ${packages.disableable.packageShortName} and ${packages.activatable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                Displays an <strong>emoticon</strong> or other icon to attract user&apos;s attention with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, and {packages.mildable.packageShortLink}.
            </p>
            <ComponentInstallation />
            <Section elmRef={sectionConfigureRef} title={<>Configuring <TheComponentDisplay />&apos;s Resources</>}>
                <p>
                    After you install the <TheComponentPackage />, you need to <strong>manually copy</strong> some resources into your <strong>application public directory</strong>.
                </p>
                <p>
                    Go to <code>/node_modules/@reusable-ui/icon/public</code> directory.
                    Inside it, copy the <code>fonts</code> and <code>icons</code> directories into <strong>application public directory</strong> (in React: <code>/public</code>).
                    So, the final files are something like this:
                </p>
                <ul>
                    <li><code>/public/fonts/*.(ttf|woff|woff2)</code></li>
                    <li><code>/public/icons/*.svg</code></li>
                </ul>
                <p>
                    Done! The required resources by the <TheComponentDisplay /> component are now set! 😉
                </p>
            </Section>
            <IconProperty>
                <p>
                    There are 2 types of icon sets: <strong>Built-in</strong> icon set and <strong>Custom</strong> icon set.
                </p>
                <Section title='Built-in Icon Sets'>
                    <p>
                        There a pretty much of <strong>common icon sets</strong> that ready to use for <em>general</em> projects.
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
                    <ExclusiveAccordion lazy={true} theme='primary'>
                        <AccordionItem label='Prepare the Image'>
                            <p>
                                You can either use a <strong>SVG</strong> or <strong>PNG</strong> file format, but the SVG is more recommended.
                            </p>
                            <p>
                                For the SVG format, you can use any image size.
                                For the PNG format, the image size should be the biggest icon size you&apos;ll use.
                            </p>
                            <p>
                                The <code>alpha = 255</code> of the image (<code>rgb(any, any, any, 255)</code>) will be <strong>fully opaque</strong>, whereas the <code>alpha = 0</code> of the image (<code>rgb(any, any, any, 0)</code>) will be <strong>fully transparent</strong>.
                                The <code>alpha</code> value between <code>0</code> and <code>255</code> will be <strong>semi transparent</strong>.
                                The color part <code>R, G, B</code> don&apos;t matter.
                            </p>
                            <p>
                                Here the samples:
                            </p>
                            <Preview display='right' stretch={false}>
                                <div style={{display: 'inherit', justifyContent: 'inherit', alignItems: 'inherit', gap: 'inherit'}}>
                                    {/* eslint-disable @next/next/no-img-element */}
                                    <img alt='sample icon image' src='/icons/reusable-ui.svg' style={{height: '48px'}} />
                                    {/*  alt='lorem image'eslint-disable @next/next/no-img-element */}
                                    <img alt='sample icon image' src='/icons/instagram.svg' style={{height: '48px'}} />
                                    {/*  alt='lorem image'eslint-disable @next/next/no-img-element */}
                                    <img alt='sample icon image' src='/icons/whatsapp.svg' style={{height: '48px'}} />
                                    {/*  alt='lorem image'eslint-disable @next/next/no-img-element */}
                                    <img alt='sample icon image' src='/icons/busy.svg' style={{height: '48px'}} />
                                </div>
                            </Preview>
                        </AccordionItem>
                        <AccordionItem label='Store the Image'>
                            <p>
                                Let&apos;s say you have 2 images: <code>your-logo.svg</code> and <code>your-face.png</code>.
                                Then store them into <code>icons</code> folder which is inside your <strong>application public directory</strong> (in React: <code>/public</code>).
                            </p>
                            <p>
                                Example:
                            </p>
                            <ul>
                                <li><code>/public/icons/your-logo.svg</code></li>
                                <li><code>/public/icons/your-face.svg</code></li>
                            </ul>
                            <p>
                                If the location is correct, then the files can be accessed via url:
                            </p>
                            <ul>
                                <li><code>https://yourdomain.com/icons/your-logo.svg</code></li>
                                <li><code>https://yourdomain.com/icons/your-face.svg</code></li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem label='Registering the Custom Icons'>
                            <p>
                                To make the <TheComponentDisplay /> component <em>aware</em> of your custom icons, at the <strong>application main file</strong> (in React: <code>/src/App.jsx</code>, in NextJS: <code>/pages/_app.jsx</code>), add the following code:
                            </p>
                            <TypeScriptCode collapsible={false}>{
`
/* ... */
import { iconConfig } from '@reusable-ui/icon'
// -or- import { iconConfig } from '@reusable-ui/components'
/* ... */

/* ... */
iconConfig.image.path = '/icons';
iconConfig.image.files.push(
    'your-logo.svg',
    'your-face.png',
);
/* ... */
`
                            }</TypeScriptCode>
                            <p></p>
                            <Warning>
                                <p>
                                    Because the <code>iconConfig</code> is a <strong>singleton</strong>, so you <strong>don&apos;t need</strong> to configure the <TheComponentDisplay /> on <strong>every page</strong> that uses it. Just configure it on the <strong>main file</strong> and done!
                                </p>
                            </Warning>
                        </AccordionItem>
                        <AccordionItem label='Using the Registered Custom Icons'>
                            <p>
                                Finally, insert an <TheComponentDisplay /> component into your <strong>jsx code</strong>, with property <code>{"icon='your-logo'"}</code> or <code>{"icon='your-face'"}</code>, something like this code:
                            </p>
                            <TypeScriptCode collapsible={false}>{
`
/* ... */
import { Icon } from '@reusable-ui/icon'
// -or- import { Icon } from '@reusable-ui/components'
/* ... */

/* ... */
export const MyComponent = () => {
    return (
        <>
            <p>blah...</p>
            
            <Icon icon='your-logo' theme='primary' size='lg' />
            
            <p>blah...</p>
        </>
    );
}
/* ... */
`
                            }</TypeScriptCode>
                        </AccordionItem>
                    </ExclusiveAccordion>
                </Section>
            </IconProperty>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
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
