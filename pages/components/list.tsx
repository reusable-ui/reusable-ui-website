import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, list } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { List as OriList, ListProps, List as List2, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const List = (props: ListProps) => <OriList {...props} theme={props.theme ?? 'primary'} />



const ListPage: NextPage = () => {
    return (<ComponentContextProvider component={list} baseComponents={basic}>
        <Head>
            <title>{`${list.componentTag} Component`}</title>
            <meta name="description" content={`${list.componentTag} represents a series of content.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> represents a series of content.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <List theme='primary'>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem tag='span' role='presentation'>
                            A second item
                        </ListItem>
                        <ListItem theme='success'>
                            A third item
                        </ListItem>
                        <ListItem>
                            A fourth item
                        </ListItem>
                        <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
                            A fifth item
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A sixth item
                        </ListItem>
                        <ListItem theme='danger' actionCtrl={true}>
                            A seventh item
                        </ListItem>
                    </List>
                    <List theme='primary' mild={false}>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem tag='span' role='presentation'>
                            A second item
                        </ListItem>
                        <ListItem theme='success'>
                            A third item
                        </ListItem>
                        <ListItem>
                            A fourth item
                        </ListItem>
                        <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
                            A fifth item
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A sixth item
                        </ListItem>
                        <ListItem theme='danger' actionCtrl={true}>
                            A seventh item
                        </ListItem>
                    </List>
                    <List theme='primary' outlined={true}>
                        <ListItem>
                            A first item
                        </ListItem>
                        <ListItem tag='span' role='presentation'>
                            A second item
                        </ListItem>
                        <ListItem theme='success'>
                            A third item
                        </ListItem>
                        <ListItem>
                            A fourth item
                        </ListItem>
                        <ListItem active={true} actionCtrl={true} href='https://www.google.com'>
                            A fifth item
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A sixth item
                        </ListItem>
                        <ListItem theme='danger' actionCtrl={true}>
                            A seventh item
                        </ListItem>
                    </List>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <List
                                key={index}
                                size={sizeName}
                            >
                                An {'<List>'} with {sizeName ?? 'default'} size
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<List
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<List>'} with ${sizeName ?? 'default'} size
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                            >
                                An {'<List>'} with {themeName} theme
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
>
    An {'<List>'} with ${themeName} theme
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<List>'} with gradient mode
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
    gradient={true}
>
    An {'<List>'} with gradient mode
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<List>'} with outlined mode
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
    outlined={true}
>
    An {'<List>'} with outlined mode
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<List>'} without mild mode
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
    mild={false}
>
    An {'<List>'} without mild mode
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                An {'<List>'} with disabled state
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
    enabled={false}
>
    An {'<List>'} with disabled state
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List key={index} theme='primary' enabled={false}>
                                <List
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    An {'<List>'} with inherit enabled
                                </List>
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List theme='primary' enabled={false}>
    <List
        theme='${themeName}'
        inheritEnabled={true}
    >
        An {'<List>'} with inherit enabled
    </List>
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                An {'<List>'} with active state
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
    active={true}
>
    An {'<List>'} with active state
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <List key={index} theme='primary' active={true}>
                                <List
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    An {'<List>'} with inherit active
                                </List>
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List theme='primary' active={true}>
    <List
        theme='${themeName}'
        inheritActive={true}
    >
        An {'<List>'} with inherit active
    </List>
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List2 listStyle='flush'>
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
                        </List2>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {lists, listValues} from '@reusable-ui/list';

lists.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', lists.filterActive);
console.log('filterActive variable value: ', listValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ListPage
