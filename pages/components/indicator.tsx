import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { basic, indicator } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, Indicator as OriIndicator, IndicatorProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Indicator = (props: IndicatorProps) => <OriIndicator {...props} theme={props.theme ?? 'primary'} />



const IndicatorPage: NextPage = () => {
    return (<ComponentContextProvider component={indicator} baseComponents={basic}>
        <Head>
            <title>{`${indicator.componentTag} Component`}</title>
            <meta name="description" content={`${indicator.componentTag} is a simple box layout component with built-in variants and indication states: ${packages.disableable.packageShortName} and ${packages.activatable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a <strong>simple box</strong> layout component with built-in variants and indication states: {packages.disableable.packageShortLink} and {packages.activatable.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Indicator
                                key={index}
                                size={sizeName}
                            >
                                An {'<Indicator>'} with {sizeName ?? 'default'} size
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Indicator
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Indicator>'} with ${sizeName ?? 'default'} size
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                            >
                                An {'<Indicator>'} with {themeName} theme
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
>
    An {'<Indicator>'} with ${themeName} theme
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Indicator>'} with gradient mode
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    gradient={true}
>
    An {'<Indicator>'} with gradient mode
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Indicator>'} with outlined mode
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    outlined={true}
>
    An {'<Indicator>'} with outlined mode
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Indicator>'} without mild mode
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    mild={false}
>
    An {'<Indicator>'} without mild mode
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Indicator>'} with nude mode
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    nude={true}
>
    An {'<Indicator>'} with nude mode
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<Indicator>'} with disabled state
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    enabled={false}
>
    An {'<Indicator>'} with disabled state
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator theme='primary' enabled={false}>
                                <Indicator
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<Indicator>'} with inherit enabled
                                </Indicator>
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator theme='primary' enabled={false}>
    <Indicator
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<Indicator>'} with inherit enabled
    </Indicator>
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<Indicator>'} with active state
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator
    theme='${themeName}'
    active={true}
>
    An {'<Indicator>'} with active state
</Indicator>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Indicator theme='primary' active={true}>
                                <Indicator
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<Indicator>'} with inherit active
                                </Indicator>
                            </Indicator>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Indicator theme='primary' active={true}>
    <Indicator
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<Indicator>'} with inherit active
    </Indicator>
</Indicator>
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

import {indicators, indicatorValues} from '@reusable-ui/indicator';

indicators.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', indicators.filterActive);
console.log('filterActive variable value: ', indicatorValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default IndicatorPage
