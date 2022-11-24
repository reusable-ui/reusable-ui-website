import React, { Suspense } from 'react'

import { AccordionItem, Accordion } from '../../components/Accordion'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { SizeProperty, SizePropertyProps } from "./variantProperties";
import { Preview } from '../../components/Preview'
import { PreviewProps, PropertySection, PropertySectionProps, Section } from '../../components/Section'
import * as properties from '../propertyList'
import { Details, ExclusiveAccordion } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { Tips } from '../../components/Warning'
import { icon } from '../../packages/packageList'

import { BusyBar } from '../../components/BusyBar'
import { ItemProps } from '../../components/Gallery';

const IconGalleryLazy = React.lazy(() => import(/* webpackChunkName: 'IconGallery' */'../../components/IconGallery'))



export const ConfiguringIconResources = () => {
    const {component: {packageName}} = useComponentInfo();
    const isCurrentIcon = (packageName === icon.packageName);
    
    return (
        <>
            <p>
                {
                    isCurrentIcon
                    ?
                    <>
                        Because {icon.packageLink}
                    </>
                    :
                    <>
                        Because <TheComponentLink /> uses {icon.packageLink} and the {icon.packageLink} itself
                    </>
                }
                {' '}needs to be configured first,
                you&apos;ll need to do: <strong><u>Configuring {icon.packageDisplay}&apos;s Resources</u></strong> below:
            </p>
            <Section title={<>Configuring {icon.packageDisplay}&apos;s Resources</>}>
                <p>
                    <strong>After you install</strong> the <TheComponentLink />, you need to <strong>manually copy</strong> some resources into your <strong>application public directory</strong>.
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
                    Done! The required resources by the {!isCurrentIcon && <>{icon.packageLink} and </>} <TheComponentLink /> component are now set! 😉
                </p>
            </Section>
        </>
    );
}


export const IconProperty = ({children}: PreviewProps) => {
    return (
        <PropertySection property={properties.icon}>
            <p>
                Select an <strong>icon set</strong> (a <code>string</code> value) corresponding to the <strong>icon image</strong>.
            </p>
            {children}
        </PropertySection>
    );
}

export interface DetailedIconPropertyProps extends PreviewProps {
    itemComponent ?: (itemName: string, itemProps: ItemProps) => React.ReactElement
}
export const DetailedIconProperty = ({children, itemComponent}: DetailedIconPropertyProps) => {
    const {component: {packageName, componentName}} = useComponentInfo();
    
    return (
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
                        <IconGalleryLazy cardStyle='flush' itemComponent={itemComponent} />
                    </Suspense>
                </Details>
            </Section>
            <Section title='Adding Custom Icon Sets'>
                <p>
                    To add custom icons, for example a <strong>logo</strong> icon, follow these steps:
                </p>
                <ExclusiveAccordion lazy={true} theme='primary' listStyle='numbered'>
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
                            To make the <TheComponentLink /> component <em>aware</em> of your custom icons, at the <strong>application main file</strong> (in React: <code>/src/App.jsx</code>, in NextJS: <code>/pages/_app.jsx</code>), add the following code:
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
                        <Tips>
                            <p>
                                Because the <code>iconConfig</code> is a <strong>singleton</strong>, so you <strong>don&apos;t need</strong> to configure the <TheComponentLink /> on <strong>every page</strong> that uses it. Just configure it on the <strong>main file</strong> and done!
                            </p>
                        </Tips>
                    </AccordionItem>
                    <AccordionItem label='Using the Registered Custom Icons'>
                        <p>
                            Finally, insert an <TheComponentLink /> component into your <strong>jsx code</strong>, with property <code>{"icon='your-logo'"}</code> or <code>{"icon='your-face'"}</code>, something like this code:
                        </p>
                        {children || <TypeScriptCode collapsible={false}>{
`
/* ... */
import { ${componentName} } from '@reusable-ui/${packageName}'
// -or- import { ${componentName} } from '@reusable-ui/components'
/* ... */

/* ... */
export const MyComponent = () => {
    return (
        <>
            <p>blah...</p>
            
            <${componentName} icon='your-logo' theme='primary' size='lg' />
            
            <p>blah...</p>
        </>
    );
}
/* ... */
`
                        }</TypeScriptCode>}
                    </AccordionItem>
                </ExclusiveAccordion>
            </Section>
        </IconProperty>
    );
}



export const IconSizeProperty = ({possibleValues, ...restProps}: SizePropertyProps) => {
    return (
        <SizeProperty {...restProps} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'xs'`}</code>}>
                    <p>
                        <strong>More smaller</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'sm'`}</code>}>
                    <p>
                        <strong>Smaller</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'md'`}</code>}>
                    <p>
                        <strong>Medium</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'lg'`}</code>}>
                    <p>
                        <strong>Bigger</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'xl'`}</code>}>
                    <p>
                        <strong>More bigger</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'1em'`}</code>}>
                    <p>
                        Makes the <TheComponentLink /> as tall as <strong>current font size</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } />
    );
}
export const ButtonIconSizeProperty = ({possibleValues, ...restProps}: SizePropertyProps) => {
    return (
        <SizeProperty {...restProps} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'xs'`}</code>}>
                    <p>
                        <strong>More smaller</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'sm'`}</code>}>
                    <p>
                        <strong>Smaller</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'md'`}</code>}>
                    <p>
                        <strong>Medium</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'lg'`}</code>}>
                    <p>
                        <strong>Bigger</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'xl'`}</code>}>
                    <p>
                        <strong>More bigger</strong> size of the <TheComponentLink />.
                    </p>
                </AccordionItem>
            </Accordion>
        } />
    );
}


export interface IconPositionPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const ButtonIconPositionProperty = ({possibleValues, children: preview}: IconPositionPropertyProps) => {
    return (
        <PropertySection property={properties.iconPosition} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> position.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'start'`}</code>}>
                    <p>
                        The icon is positioned <strong>at the beginning</strong> of <code>writing-mode</code>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'end'`}</code>}>
                    <p>
                    The icon is positioned <strong>at the end</strong> of <code>writing-mode</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines the <strong>position</strong> of the icon.
            </p>
        </PropertySection>
    );
}
