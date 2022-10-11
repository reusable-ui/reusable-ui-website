import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, InheritedProperties, Section, Variables } from '../../components/Section'
import { actionControl, button } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button as OriButton, ButtonProps, Control, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkProperty, HrefProperty, OnClickProperty } from '../../properties/sections/actionProperties'
import {tag, role} from '../../properties/propertyList'
import { Tips } from '../../components/Warning'



const Button = (props: ButtonProps) => <OriButton {...props} theme={props.theme ?? 'primary'} />

const ParagraphChangeTagRole = () => <p>
    You can also <em>manually</em> change the {tag.propertyShortDisplay} and/or the {role.propertyShortDisplay} as well.
</p>

const TipsAutoTagToAnchorForLink = () => <Tips>
    <p>
        The <TheComponentDisplay />&apos;s default {tag.propertyShortLink} will <strong>automatically</strong> changed to <code>{`<a>`}</code> if there is a client-side <code>{`<Link>`}</code> component inside the <TheComponentDisplay />.
    </p>
    <ParagraphChangeTagRole />
</Tips>

const TipsAutoTagToAnchorForHref = () => <Tips>
    <p>
        The <TheComponentDisplay />&apos;s default {tag.propertyShortLink} will <strong>automatically</strong> changed to <code>{`<a>`}</code> if you assign the <code>{`href`}</code> property.
    </p>
    <ParagraphChangeTagRole />
</Tips>

const TipsButtonTag = () => <Tips>
    <p>
        The <TheComponentDisplay />&apos;s default {tag.propertyShortLink} will <strong>remain</strong> to <code>{`<button>`}</code>,
        as long as you don&apos;t assign the <code>{`href`}</code> property and there is no a client-side <code>{`<Link>`}</code> component inside the <TheComponentDisplay />.
    </p>
    <ParagraphChangeTagRole />
</Tips>



const ButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={button} baseComponents={actionControl}>
        <Head>
            <title>{`${button.componentTag} Component`}</title>
            <meta name="description" content={`${button.componentTag} is a clickable simple box layout component with built-in variants, states, and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a button component with built-in variants, states, and {packages.clickable.packageShortLink}.
            </p>
            <p>
                <TheComponentDisplay /> also handles a special child: <code>{`<Link href/to='...'>`}</code>, a <strong>client side link</strong> in <strong>React Router</strong>/<strong>Next JS</strong>/<strong>Gatsby JS</strong>, for handling <code>onClick</code> event.
            </p>
            <p>
                The default {tag.propertyShortDisplay} is <code>{`<button>`}</code>, but can be <em>automatically</em> changed to <code>{`<a>`}</code> if <code>{`href`}</code> property is present -or- there is a client-side <code>{`<Link>`}</code> component inside the <TheComponentDisplay />.
            </p>
            <p>
                You can also <em>manually</em> change the {tag.propertyShortDisplay} and/or the {role.propertyShortDisplay} as well.
            </p>
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
            <ComponentInstallation />
            <ClientSideLinkProperty tips={<TipsAutoTagToAnchorForLink />} />
            <HrefProperty tips={<TipsAutoTagToAnchorForHref />} />
            <OnClickProperty tips={<TipsButtonTag />} />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Button
                                key={index}
                                size={sizeName}
                            >
                                A {'<Button>'} with {sizeName ?? 'default'} size
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Button
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<Button>'} with ${sizeName ?? 'default'} size
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
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
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
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Button
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<Button>'} with focus indicator
                            </Button>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    focused={true}
>
    A {'<Button>'} with focus indicator
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Button
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<Button>'} without arrive indicator
                            </Button>
                            <Button
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<Button>'} with arrive indicator
                            </Button>
                            <Button
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<Button>'} with auto arrive indicator
                            </Button>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    arrived={false}
>
    A {'<Button>'} without arrive indicator
</Button>
<Button
    theme='${themeName}'
    arrived={true}
>
    A {'<Button>'} with arrive indicator
</Button>
<Button
    theme='${themeName}'
    arrived={undefined}
>
    A {'<Button>'} with auto arrive indicator
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Button
                                theme={themeName}
                                pressed={false}
                            >
                                A {'<Button>'} without pressed indicator
                            </Button>
                            <Button
                                theme={themeName}
                                pressed={true}
                            >
                                A {'<Button>'} with pressed indicator
                            </Button>
                            <Button
                                theme={themeName}
                                pressed={undefined}
                            >
                                A {'<Button>'} with auto pressed indicator
                            </Button>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Button
    theme='${themeName}'
    pressed={false}
>
    A {'<Button>'} without pressed indicator
</Button>
<Button
    theme='${themeName}'
    pressed={true}
>
    A {'<Button>'} with pressed indicator
</Button>
<Button
    theme='${themeName}'
    pressed={undefined}
>
    A {'<Button>'} with auto pressed indicator
</Button>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>gapInline</code>
                                <p>The default horizontal spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The default vertical spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineSm</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockSm</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineLg</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockLg</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <TheComponentDisplay /> is handled.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Styles'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>ghostOpacity</code>
                                <p>The default opacity level when <code>{`buttonStyle='ghost'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>ghostOpacityArrive</code>
                                <p>The opacity level when <code>{`buttonStyle='ghost'`}</code> and a pointer is on the <TheComponentDisplay />.</p>
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
        </Section>
    </ComponentContextProvider>);
}

export default ButtonPage
