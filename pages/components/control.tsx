import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { indicator, control } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control as OriControl, ControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'



const Control = (props: ControlProps) => <OriControl {...props} theme={props.theme ?? 'primary'} />



const ControlPage: NextPage = () => {
    return (<ComponentContextProvider component={control} baseComponents={indicator}>
        <Head>
            <title>{`${control.componentTag} Component`}</title>
            <meta name="description" content={`${control.componentTag} is an interactive simple box layout component with built-in variants, states, and interaction states: ${packages.focusable.packageShortName} and ${packages.interactable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is an interactive <strong>simple box</strong> layout component with built-in variants, states, and interaction states: {packages.focusable.packageShortLink} and {packages.interactable.packageShortLink}.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Control
                                key={index}
                                size={sizeName}
                            >
                                A {'<Control>'} with {sizeName} size
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Control
    size='${sizeName}'
>
    A {'<Control>'} with ${sizeName} size
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
                                A {'<Control>'} with {themeName} theme
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
    A {'<Control>'} with ${themeName} theme
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
                                A {'<Control>'} with gradient mode
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
    A {'<Control>'} with gradient mode
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
                                A {'<Control>'} with outlined mode
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
    A {'<Control>'} with outlined mode
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
                                A {'<Control>'} without mild mode
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
    A {'<Control>'} without mild mode
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
                                A {'<Control>'} with nude mode
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
    A {'<Control>'} with nude mode
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
                                A {'<Control>'} with disabled state
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
    A {'<Control>'} with disabled state
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Control
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<Control>'} with inherit enabled
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
        A {'<Control>'} with inherit enabled
    </Control>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<Control>'} with active state
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
    A {'<Control>'} with active state
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Control
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<Control>'} with inherit active
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
        A {'<Control>'} with inherit active
    </Control>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<Control>'} with focus indicator
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    focused={true}
>
    A {'<Control>'} with focus indicator
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <Control
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<Control>'} without arrive indicator
                            </Control>
                            <Control
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<Control>'} with arrive indicator
                            </Control>
                            <Control
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<Control>'} with auto arrive indicator
                            </Control>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control
    theme='${themeName}'
    arrived={false}
>
    A {'<Control>'} without arrive indicator
</Control>
<Control
    theme='${themeName}'
    arrived={true}
>
    A {'<Control>'} with arrive indicator
</Control>
<Control
    theme='${themeName}'
    arrived={undefined}
>
    A {'<Control>'} with auto arrive indicator
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Accessibilities'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>cursorDisable</code>
                                <p>A <strong>cursor</strong> to apply when <code>{`enabled={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>boxShadowFocus</code>
                                <p>A <code>boxShadow</code> (focus indicator) to apply when the control is <strong>in focus</strong> -or- when <code>{`focus={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>filterArrive</code>
                                <p>A <code>filter</code> to apply when the pointing device <strong>arrives</strong> at the control -or- when <code>{`arrive={true}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>animFocus</code>
                                <p>Represents <strong>focusing animation</strong>, a transition from <strong>out of focus</strong> to <strong>in focus</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animBlur</code>
                                <p>Represents <strong>blurring animation</strong>, a transition from <strong>in focus</strong> to <strong>out of focus</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animArrive</code>
                                <p>Represents <strong>arriving animation</strong>, a transition from <strong>left</strong> to <strong>arrived</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animLeave</code>
                                <p>Represents <strong>leaving animation</strong>, a transition from <strong>arrived</strong> to <strong>left</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {controls, controlValues} from '@reusable-ui/control';

controls.filterArrive = [[
    'contrast(80%)',
    'brightness(80%)',
]];
console.log('filterArrive variable name: ', controls.filterArrive);
console.log('filterArrive variable value: ', controlValues.filterArrive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ControlPage
