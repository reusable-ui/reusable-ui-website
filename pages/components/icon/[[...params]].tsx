import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties } from '../../../components/sections/InheritedProperties'
import { ComponentInstallation } from '../../../components/sections/ComponentInstallation'
import { Variables } from '../../../components/sections/Variables'
import { HeroSection } from '../../../components/sections/HeroSection'
import { Main } from '../../../components/sections/Main'
import { generic, icon } from '../../../packages/packageList'
import * as packages from '../../../packages/packageList'
import { iconSizeOptions as sizeOptions, ThemeProperty, themeOptions, VariantProperties, ContextualMildProperty } from '../../../properties/sections/variantProperties'
import { ConfiguringIconResources, DetailedIconProperty, IconSizeProperty as SizeProperty } from '../../../properties/sections/iconProperties'
import { Preview } from '../../../components/Preview'
import { AccordionItem, Accordion } from '../../../components/Accordion'
import { Basic, Icon as OriIcon, IconProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../../packages/componentContext'



const Icon = (props: IconProps) => <OriIcon {...props} theme={props.theme ?? 'primary'} />



const IconPage: NextPage = () => {
    // const router = useRouter();
    // const params = router.query.params ?? [];
    // const param  = Array.isArray(params) ? params.join('/') : params;
    
    
    // const sectionConfigureRef = useRef<HTMLElement>(null);
    // useEffect(() => {
    //     switch(param.toLocaleLowerCase()) {
    //         case 'configure':
    //             sectionConfigureRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    //             break;
    //     } // switch
    // }, [param]);
    
    
    
    return (<ComponentContextProvider component={icon} baseComponents={generic}>
        <Head>
            <title>{`${icon.componentTag} Component`}</title>
            <meta name="description" content={`${icon.componentTag} displays an emoticon or other icon to attract user's attention with built-in variants: ${packages.resizable.packageShortName}, ${packages.themable.packageShortName}, and ${packages.mildable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    Displays an <strong>emoticon</strong> or other icon to attract user&apos;s attention with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, and {packages.mildable.packageShortLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Icon icon='face' theme='primary' />
                    <Icon icon='instagram' theme='primary' />
                    <Icon icon='whatsapp' theme='primary' />
                    <Icon icon='reusable-ui' theme='primary' />
                    <Icon icon='face' theme='success' />
                    <Icon icon='face' theme='danger' />
                    <Icon icon='face' theme='primary' size='sm' />
                    <Icon icon='face' theme='primary' size='md' />
                    <Icon icon='face' theme='primary' size='lg' />
                    <Icon icon='face' theme='primary' size='xl' />
                </Preview>
            </HeroSection>
            <ComponentInstallation>
                <ConfiguringIconResources />
            </ComponentInstallation>
            <DetailedIconProperty />
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
    size='${sizeName}'
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
                                <code>sizeMd</code>
                                <p>The icon height when <code>{`size='md'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeLg</code>
                                <p>The icon height when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>sizeXl</code>
                                <p>The icon height when <code>{`size='xl'`}</code>.</p>
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
        </Main>
    </ComponentContextProvider>);
}

export default IconPage
