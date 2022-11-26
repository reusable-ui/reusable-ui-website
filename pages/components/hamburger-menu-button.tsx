import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { toggleButton, hamburgerMenuButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { HamburgerMenuButton as OriHamburgerMenuButton, HamburgerMenuButtonProps, Control, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, DefaultActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, OnActiveChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'



const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => <OriHamburgerMenuButton {...props} theme={props.theme ?? 'primary'} />



const HamburgerMenuButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={hamburgerMenuButton} baseComponents={toggleButton}>
        <Head>
            <title>{`${hamburgerMenuButton.componentTag} Component`}</title>
            <meta name="description" content={`${hamburgerMenuButton.componentTag} is a toggleable button for showing/hiding menu in ${packages.navbar.componentTag}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a toggleable button for showing/hiding menu in {packages.navbar.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <HamburgerMenuButton theme='primary' />
                    <HamburgerMenuButton theme='success' />
                    <HamburgerMenuButton theme='danger' />
                    <HamburgerMenuButton theme='primary' gradient={true} />
                    <HamburgerMenuButton theme='primary' mild={true} />
                    <HamburgerMenuButton theme='primary' outlined={true} />
                    <HamburgerMenuButton theme='primary' buttonStyle='link' />
                    <HamburgerMenuButton theme='primary' size='sm' />
                    <HamburgerMenuButton theme='primary' enabled={false} />
                    <HamburgerMenuButton theme='primary' size='lg' />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <DefaultActiveProperty />
            <OnActiveChangeProperty />
            <OnClickPropertyOfButton tips={false} />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <HamburgerMenuButton
                                key={index}
                                buttonStyle={buttonStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<HamburgerMenuButton
    buttonStyle='${buttonStyle}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <HamburgerMenuButton
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<HamburgerMenuButton
    size='${sizeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<HamburgerMenuButton
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
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
<HamburgerMenuButton
    theme='${themeName}'
    gradient={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
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
<HamburgerMenuButton
    theme='${themeName}'
    outlined={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<HamburgerMenuButton
    theme='${themeName}'
    mild={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
                                key={index}
                                theme={themeName}
                                nude={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<HamburgerMenuButton
    theme='${themeName}'
    nude={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
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
<HamburgerMenuButton
    theme='${themeName}'
    enabled={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <HamburgerMenuButton
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
    <HamburgerMenuButton
        theme='${themeName}'
        inheritEnabled={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty outlinedMildWarning={false}>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <HamburgerMenuButton
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
<HamburgerMenuButton
    theme='${themeName}'
    active={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <HamburgerMenuButton
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
    <HamburgerMenuButton
        theme='${themeName}'
        inheritActive={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>hamburgerTopTransformIn</code>
                                <p>A <code>transform</code> to apply for <strong>line-1</strong> when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerMidTransformIn</code>
                                <p>A <code>transform</code> to apply for <strong>line-2</strong> when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerBtmTransformIn</code>
                                <p>A <code>transform</code> to apply for <strong>line-3</strong> when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>hamburgerTopTransformOut</code>
                                <p>A <code>transform</code> to apply for <strong>line-1</strong> when <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerMidTransformOut</code>
                                <p>A <code>transform</code> to apply for <strong>line-2</strong> when <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerBtmTransformOut</code>
                                <p>A <code>transform</code> to apply for <strong>line-3</strong> when <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>hamburgerAnimDuration</code>
                                <p>The <code>animation duration</code> for all <strong>3 animations</strong> below.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>hamburgerTopAnimIn</code>
                                <p>An animation for <strong>line-1</strong> represents <strong>activating animation</strong>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerMidAnimIn</code>
                                <p>An animation for <strong>line-2</strong> represents <strong>activating animation</strong>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerBtmAnimIn</code>
                                <p>An animation for <strong>line-3</strong> represents <strong>activating animation</strong>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>hamburgerTopAnimOut</code>
                                <p>An animation for <strong>line-1</strong> represents <strong>deactivating animation</strong>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerMidAnimOut</code>
                                <p>An animation for <strong>line-2</strong> represents <strong>deactivating animation</strong>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>hamburgerBtmAnimOut</code>
                                <p>An animation for <strong>line-3</strong> represents <strong>deactivating animation</strong>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {hamburgerMenuButtons, hamburgerMenuButtonValues} from '@reusable-ui/hamburger-menu-button';

hamburgerMenuButtons.opacity = 0.5;
console.log('opacity variable name: ', hamburgerMenuButtons.opacity);
console.log('opacity variable value: ', hamburgerMenuButtonValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default HamburgerMenuButtonPage
