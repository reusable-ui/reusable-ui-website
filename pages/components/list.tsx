import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { indicator, list, listItem } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { List as OriList, ListProps, List as List2, ListItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay, TheComponentLink, TheNestedComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const List = (props: ListProps) => <OriList {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? [
        <ListItem key={0}>
            A first item
        </ListItem>,
        <ListItem key={1} tag='span' role='presentation'>
            A second item
        </ListItem>,
        <ListItem key={2} theme='success'>
            A third item
        </ListItem>,
        <ListItem key={3}>
            A fourth item
        </ListItem>,
        <ListItem key={4} active={true} actionCtrl={true} href='https://www.google.com'>
            A fifth item
        </ListItem>,
        <ListItem key={5} actionCtrl={true}>
            A sixth item
        </ListItem>,
        <ListItem key={6} theme='danger' actionCtrl={true}>
            A seventh item
        </ListItem>,
    ]}
</OriList>

const listSampleItems = (indents: number = 1) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return (
`${tabs}<ListItem>
${tabs}    A first item
${tabs}</ListItem>
${tabs}<ListItem tag='span' role='presentation'>
${tabs}    A second item
${tabs}</ListItem>
${tabs}<ListItem theme='success'>
${tabs}    A third item
${tabs}</ListItem>
${tabs}<ListItem>
${tabs}    A fourth item
${tabs}</ListItem>
${tabs}<ListItem active={true} actionCtrl={true} href='https://www.google.com'>
${tabs}    A fifth item
${tabs}</ListItem>
${tabs}<ListItem actionCtrl={true}>
${tabs}    A sixth item
${tabs}</ListItem>
${tabs}<ListItem theme='danger' actionCtrl={true}>
${tabs}    A seventh item
${tabs}</ListItem>`
    );
}



const ListPage: NextPage = () => {
    return (<ComponentContextProvider component={list} nestedComponent={listItem} baseComponents={indicator}>
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
                    <List theme='primary' />
                    <List theme='primary' mild={false} />
                    <List theme='primary' outlined={true} />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <List
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<List
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
>
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
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
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
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
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                mild={false}
                            />
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
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                enabled={false}
                            />
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
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <List
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                />
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <List
        theme='${themeName}'
        inheritEnabled={true}
    >
${listSampleItems(2)}
    </List>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                                active={true}
                            />
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
${listSampleItems()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <List
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                />
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <List
        theme='${themeName}'
        inheritActive={true}
    >
${listSampleItems(2)}
    </List>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>borderStyle</code>
                                <p>The shape of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderWidth</code>
                                <p>The thickness of border (stroke).</p>
                            </ListItem>
                            <ListItem>
                                <code>borderColor</code>
                                <p>The un-themed color of border (stroke).</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The default rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusSm</code>
                                <p>The rounded corner radius when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusLg</code>
                                <p>The rounded corner radius when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the individual <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>contentTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`listStyle='content'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>tabTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`listStyle='tab'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`listStyle='bullet'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Buttons'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>buttonSpacing</code>
                                <p>The <strong>default spacing between <TheNestedComponentDisplay /></strong> when <code>{`listStyle='button'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingSm</code>
                                <p>The <strong>spacing between <TheNestedComponentDisplay /></strong> when <code>{`listStyle='button'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingLg</code>
                                <p>The <strong>spacing between <TheNestedComponentDisplay /></strong> when <code>{`listStyle='button'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Tabs'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>tabTextAlign</code>
                                <p>The <strong>text alignment</strong> for the individual <TheNestedComponentDisplay /> when <code>{`listStyle='tab'`}</code>.</p>
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
