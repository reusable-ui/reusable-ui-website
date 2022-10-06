import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { indicator, control } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, Control as OriControl, ControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Control = (props: ControlProps) => <OriControl {...props} theme={props.theme ?? 'primary'} />



const ControlPage: NextPage = () => {
    return (<ComponentContextProvider component={control} baseComponents={indicator}>
        <Head>
            <title>{`${control.componentTag} Component`}</title>
            <meta name="description" content={`${control.componentTag} is a simple box layout component with built-in variants and indication states: ${packages.disableable.packageShortName} and ${packages.activatable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a <strong>simple box</strong> layout component with built-in variants and indication states: {packages.disableable.packageShortLink} and {packages.activatable.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Control
                                key={index}
                                size={sizeName}
                            >
                                An {'<Control>'} with {sizeName ?? 'default'} size
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Control
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Control>'} with ${sizeName ?? 'default'} size
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                            >
                                An {'<Control>'} with {themeName} theme
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
>
    An {'<Control>'} with ${themeName} theme
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Control>'} with gradient mode
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    gradient={true}
>
    An {'<Control>'} with gradient mode
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Control>'} with outlined mode
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    outlined={true}
>
    An {'<Control>'} with outlined mode
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Control>'} without mild mode
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    mild={false}
>
    An {'<Control>'} without mild mode
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Control>'} with nude mode
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    nude={true}
>
    An {'<Control>'} with nude mode
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<Control>'} with disabled state
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    enabled={false}
>
    An {'<Control>'} with disabled state
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control theme='primary' enabled={false}>
                                <Control
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<Control>'} with inherit enabled
                                </Control>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Control
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<Control>'} with inherit enabled
    </Control>
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
                            <Control
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<Control>'} with active state
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    active={true}
>
    An {'<Control>'} with active state
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control theme='primary' active={true}>
                                <Control
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<Control>'} with inherit active
                                </Control>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <Control
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<Control>'} with inherit active
    </Control>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>filterDisable</code>
                                <p>A <code>filter</code> to apply when <code>{`enabled={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>filterActive</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>animEnable</code>
                                <p>An animation represents <em>enabling animation</em>, transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animDisable</code>
                                <p>An animation represents <em>disabling animation</em>, transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animActive</code>
                                <p>An animation represents <em>activating animation</em>, transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>deactivating animation</em>, transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {controls, controlValues} from '@reusable-ui/control';

controls.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', controls.filterActive);
console.log('filterActive variable value: ', controlValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default ControlPage
