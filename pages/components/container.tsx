import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { basic, container } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, Container as OriContainer, ContainerProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Container = (props: ContainerProps) => <OriContainer {...props} theme={props.theme ?? 'primary'} />



const ContainerPage: NextPage = () => {
    return (<ComponentContextProvider component={container} baseComponents={basic}>
        <Head>
            <title>{`${container.componentTag} Component`}</title>
            <meta name="description" content={`${container.componentTag} is a simple box layout component with built-in variants and indication states: ${packages.disableable.packageShortName} and ${packages.activatable.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a <strong>simple box</strong> layout component with built-in variants and indication states: {packages.disableable.packageShortLink} and {packages.activatable.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Container
                                key={index}
                                size={sizeName}
                            >
                                An {'<Container>'} with {sizeName ?? 'default'} size
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Container
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Container>'} with ${sizeName ?? 'default'} size
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Container
                                key={index}
                                theme={themeName}
                            >
                                An {'<Container>'} with {themeName} theme
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Container
    theme='${themeName}'
>
    An {'<Container>'} with ${themeName} theme
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Container
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Container>'} with gradient mode
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Container
    theme='${themeName}'
    gradient={true}
>
    An {'<Container>'} with gradient mode
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Container
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Container>'} with outlined mode
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Container
    theme='${themeName}'
    outlined={true}
>
    An {'<Container>'} with outlined mode
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Container
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Container>'} without mild mode
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Container
    theme='${themeName}'
    mild={false}
>
    An {'<Container>'} without mild mode
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Container
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Container>'} with nude mode
                            </Container>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Container
    theme='${themeName}'
    nude={true}
>
    An {'<Container>'} with nude mode
</Container>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
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
                                <p>An animation represents <em>enabling animation</em>, a transition from <code>{`enabled={false}`}</code> to <code>{`enabled={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animDisable</code>
                                <p>An animation represents <em>disabling animation</em>, a transition from <code>{`enabled={true}`}</code> to <code>{`enabled={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animActive</code>
                                <p>An animation represents <em>activating animation</em>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animPassive</code>
                                <p>An animation represents <em>deactivating animation</em>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {containers, containerValues} from '@reusable-ui/container';

containers.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', containers.filterActive);
console.log('filterActive variable value: ', containerValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default ContainerPage
