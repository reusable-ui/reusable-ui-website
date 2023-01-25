import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/sections/sections'
import { actionControl, button } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button as OriButton, ButtonProps, Control, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton, ParagraphChangeTagRole } from '../../properties/sections/actionProperties'
import {tag} from '../../properties/propertyList'



const Button = (props: ButtonProps) => <OriButton {...props} theme={props.theme ?? 'primary'} />



const ButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={button} baseComponents={actionControl}>
        <Head>
            <title>{`${button.componentTag} Component`}</title>
            <meta name="description" content={`${button.componentTag} is a button component with built-in variants, states, and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a button component with built-in variants, states, and {packages.clickable.packageShortLink}.
                </p>
                <p>
                    <TheComponentLink /> also handles a special child: <code>{`<Link href/to='...'>`}</code>, a <strong>client side link</strong> in <strong>React Router</strong>/<strong>Next JS</strong>/<strong>Gatsby JS</strong>, for handling <code>onClick</code> event.
                </p>
                <p>
                    The default {tag.propertyShortDisplay} is <code>{`<button>`}</code>, but can be <em>automatically</em> changed to <code>{`<a>`}</code> if <code>{`href`}</code> property is present -or- there is a client-side <code>{`<Link>`}</code> component inside the <TheComponentLink />.
                </p>
                <ParagraphChangeTagRole />
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Button theme='primary'>Regular</Button>
                    <Button theme='success'>Success</Button>
                    <Button theme='danger'>Error</Button>
                    <Button theme='primary' gradient={true}>Gradient</Button>
                    <Button theme='primary' mild={true}>Mild</Button>
                    <Button theme='primary' outlined={true}>Outlined</Button>
                    <Button theme='primary' buttonStyle='link'>Link</Button>
                    <Button theme='primary' size='sm'>Small</Button>
                    <Button theme='primary' size='lg'>Big</Button>
                    <Button theme='primary' enabled={false}>Disabled</Button>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ClientSideLinkPropertyOfButton />
            <HrefPropertyOfButton />
            <OnClickPropertyOfButton />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <Button
                                key={index}
                                buttonStyle={buttonStyle}
                            >
                                A {'<Button>'} with {buttonStyle} style
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<Button
    buttonStyle='${buttonStyle}'
>
    A {'<Button>'} with ${buttonStyle} style
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Button
                                key={index}
                                orientation={orientationName}
                            >
                                <span>A {'<Button>'}</span>
                                <span>with</span>
                                <span>{orientationName} oriented</span>
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Button
    orientation='${orientationName}'
    theme='primary'
>
    <span>A {'<Button>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Button
                                key={index}
                                size={sizeName}
                            >
                                A {'<Button>'} with {sizeName} size
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Button
    size='${sizeName}'
>
    A {'<Button>'} with ${sizeName} size
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                            >
                                A {'<Button>'} with {themeName} theme
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
>
    A {'<Button>'} with ${themeName} theme
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<Button>'} with gradient mode
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    gradient={true}
>
    A {'<Button>'} with gradient mode
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<Button>'} with outlined mode
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    outlined={true}
>
    A {'<Button>'} with outlined mode
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<Button>'} with mild mode
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    mild={true}
>
    A {'<Button>'} with mild mode
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<Button>'} with nude mode
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    nude={true}
>
    A {'<Button>'} with nude mode
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<Button>'} with disabled state
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    enabled={false}
>
    A {'<Button>'} with disabled state
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Button
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<Button>'} with inherit enabled
                                </Button>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Button
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<Button>'} with inherit enabled
    </Button>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty outlinedMildWarning={false}>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<Button>'} with active state
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    active={true}
>
    A {'<Button>'} with active state
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Button
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<Button>'} with inherit active
                                </Button>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <Button
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<Button>'} with inherit active
    </Button>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>gapInline</code>
                                <p>The default <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The default <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineSm</code>
                                <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockSm</code>
                                <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineLg</code>
                                <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockLg</code>
                                <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <TheComponentLink /> is handled.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Styles'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>ghostOpacity</code>
                                <p>The default <strong>opacity level</strong> when <code>{`buttonStyle='ghost'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>ghostOpacityArrive</code>
                                <p>The <strong>opacity level</strong> when <code>{`buttonStyle='ghost'`}</code> and a pointer is on the <TheComponentLink />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {buttons, buttonValues} from '@reusable-ui/button';

buttons.whiteSpace = 'nowrap';
console.log('whiteSpace variable name: ', buttons.whiteSpace);
console.log('whiteSpace variable value: ', buttonValues.whiteSpace);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ButtonPage
