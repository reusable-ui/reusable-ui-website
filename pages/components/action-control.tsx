import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { indicator, actionControl } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, ActionControl as OriActionControl, ActionControlProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const ActionControl = (props: ActionControlProps) => <OriActionControl {...props} theme={props.theme ?? 'primary'} />



const ActionControlPage: NextPage = () => {
    return (<ComponentContextProvider component={actionControl} baseComponents={indicator}>
        <Head>
            <title>{`${actionControl.componentTag} Component`}</title>
            <meta name="description" content={`${actionControl.componentTag} is a clickable simple box layout component with built-in variants, states, and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a clickable <strong>simple box</strong> layout component with built-in variants, states, and {packages.clickable.packageShortLink}.
            </p>
            <p>
                If you plan to create a <strong>custom button</strong>, this <em>base component</em> is a great starting point.
                It already handle the <kbd>enter</kbd> and <kbd>space</kbd> keys for triggering the <code>onClick</code> event for you.
                It also handle a special child: <code>{`<Link href/to='...'>`}</code>, a <strong>client side link</strong> in <strong>React Router</strong>/<strong>Next JS</strong>/<strong>Gatsby JS</strong>, for handling <code>onClick</code> event.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <ActionControl
                                key={index}
                                size={sizeName}
                            >
                                An {'<ActionControl>'} with {sizeName ?? 'default'} size
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<ActionControl
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<ActionControl>'} with ${sizeName ?? 'default'} size
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                            >
                                An {'<ActionControl>'} with {themeName} theme
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
>
    An {'<ActionControl>'} with ${themeName} theme
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<ActionControl>'} with gradient mode
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    gradient={true}
>
    An {'<ActionControl>'} with gradient mode
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<ActionControl>'} with outlined mode
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    outlined={true}
>
    An {'<ActionControl>'} with outlined mode
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<ActionControl>'} without mild mode
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    mild={false}
>
    An {'<ActionControl>'} without mild mode
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<ActionControl>'} with nude mode
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    nude={true}
>
    An {'<ActionControl>'} with nude mode
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<ActionControl>'} with disabled state
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    enabled={false}
>
    An {'<ActionControl>'} with disabled state
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl theme='primary' enabled={false}>
                                <ActionControl
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<ActionControl>'} with inherit enabled
                                </ActionControl>
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl theme='primary' enabled={false}>
    <ActionControl
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<ActionControl>'} with inherit enabled
    </ActionControl>
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<ActionControl>'} with active state
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    active={true}
>
    An {'<ActionControl>'} with active state
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl theme='primary' active={true}>
                                <ActionControl
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<ActionControl>'} with inherit active
                                </ActionControl>
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl theme='primary' active={true}>
    <ActionControl
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<ActionControl>'} with inherit active
    </ActionControl>
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                An {'<ActionControl>'} with focus indicator
                            </ActionControl>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    focused={true}
>
    An {'<ActionControl>'} with focus indicator
</ActionControl>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                arrived={false}
                            >
                                An {'<ActionControl>'} without arrive indicator
                            </ActionControl>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                arrived={true}
                            >
                                An {'<ActionControl>'} with arrive indicator
                            </ActionControl>
                            <ActionControl
                                key={index}
                                theme={themeName}
                                arrived={undefined}
                            >
                                An {'<ActionControl>'} with auto arrive indicator
                            </ActionControl>
                        </>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ActionControl
    theme='${themeName}'
    arrived={false}
>
    An {'<ActionControl>'} without arrive indicator
</ActionControl>
<ActionControl
    theme='${themeName}'
    arrived={true}
>
    An {'<ActionControl>'} with arrive indicator
</ActionControl>
<ActionControl
    theme='${themeName}'
    arrived={undefined}
>
    An {'<ActionControl>'} with auto arrive indicator
</ActionControl>
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
                                <p>A <code>cursor</code> to apply when <code>{`enabled={false}`}</code>.</p>
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
                                <p>An animation represents <em>focusing animation</em>, a transition from <strong>out of focus</strong> to <strong>in focus</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animBlur</code>
                                <p>An animation represents <em>blurring animation</em>, a transition from <strong>in focus</strong> to <strong>out of focus</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animArrive</code>
                                <p>An animation represents <em>arriving animation</em>, a transition from <strong>left</strong> to <strong>arrived</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animLeave</code>
                                <p>An animation represents <em>leaving animation</em>, a transition from <strong>arrived</strong> to <strong>left</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {actionControls, actionControlValues} from '@reusable-ui/action-control';

actionControls.filterArrive = [[
    'contrast(80%)',
    'brightness(80%)',
]];
console.log('filterActive variable name: ', actionControls.filterArrive);
console.log('filterActive variable value: ', actionControlValues.filterArrive);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default ActionControlPage
