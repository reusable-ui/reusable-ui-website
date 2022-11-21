import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, popup } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Popup as OriPopup, PopupProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Popup = (props: PopupProps) => <OriPopup {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />



const PopupPage: NextPage = () => {
    return (<ComponentContextProvider component={popup} baseComponents={basic}>
        <Head>
            <title>{`${popup.componentTag} Component`}</title>
            <meta name="description" content={`${popup.componentTag} is a generic element with dynamic visibility (show/hide) in popup fashion.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is a generic element with dynamic visibility (show/hide) in popup fashion.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Popup
                                key={index}
                                size={sizeName}
                            >
                                An {'<Popup>'} with {sizeName ?? 'default'} size
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Popup
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Popup>'} with ${sizeName ?? 'default'} size
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                            >
                                An {'<Popup>'} with {themeName} theme
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
>
    An {'<Popup>'} with ${themeName} theme
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Popup>'} with gradient mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
    gradient={true}
>
    An {'<Popup>'} with gradient mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Popup>'} with outlined mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
    outlined={true}
>
    An {'<Popup>'} with outlined mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Popup>'} without mild mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
    mild={false}
>
    An {'<Popup>'} without mild mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Popup
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Popup>'} with nude mode
                            </Popup>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Popup
    theme='${themeName}'
    nude={true}
>
    An {'<Popup>'} with nude mode
</Popup>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animExpand</code>
                                <p>An animation represents <em>expanding animation</em>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapse</code>
                                <p>An animation represents <em>collapsing animation</em>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {popups, popupValues} from '@reusable-ui/popup';

popups.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', popups.filterActive);
console.log('filterActive variable value: ', popupValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default PopupPage
