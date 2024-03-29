import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { editableActionControl, check } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, CheckStyleProperty, checkStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Check as OriCheck, CheckProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, EnableValidationProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



const Check = (props: CheckProps) => <OriCheck {...props} theme={props.theme ?? 'primary'} />



const CheckPage: NextPage = () => {
    return (<ComponentContextProvider component={check} baseComponents={editableActionControl}>
        <Head>
            <title>{`${check.componentTag} Component`}</title>
            <meta name="description" content={`${check.componentTag} is an interactive control in order to select multiple options.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is an interactive control in order to select multiple options.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    <Check defaultChecked={true} theme='primary'>check</Check>
                    <Check defaultChecked={true} theme='primary' checkStyle='switch'>check</Check>
                    <Check defaultChecked={true} theme='success' nude={false}>check</Check>
                    <Check defaultChecked={true} theme='dark' checkStyle='switch' nude={false}>check</Check>
                    <Check defaultChecked={true} theme='danger' checkStyle='toggleButton'>toggle check</Check>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <CheckStyleProperty>
                    <Preview display='right' stretch={false}>
                        {checkStyleOptions.map((checkStyle, index) =>
                            <Check
                                key={index}
                                checkStyle={checkStyle}
                            >
                                A {'<Check>'} with {checkStyle} style
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {checkStyleOptions.map((checkStyle) =>
`
<Check
    checkStyle='${checkStyle}'
>
    A {'<Check>'} with ${checkStyle} style
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </CheckStyleProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Check
                                key={index}
                                size={sizeName}
                            >
                                A {'<Check>'} with {sizeName} size
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Check
    size='${sizeName}'
>
    A {'<Check>'} with ${sizeName} size
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                            >
                                A {'<Check>'} with {themeName} theme
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
>
    A {'<Check>'} with ${themeName} theme
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<Check>'} with gradient mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    gradient={true}
>
    A {'<Check>'} with gradient mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<Check>'} with outlined mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    outlined={true}
>
    A {'<Check>'} with outlined mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<Check>'} with mild mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    mild={true}
>
    A {'<Check>'} with mild mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                nude={false}
                            >
                                A {'<Check>'} with nude-less mode
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    nude={false}
>
    A {'<Check>'} with nude-less mode
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Check
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<Check>'} with disabled state
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    enabled={false}
>
    A {'<Check>'} with disabled state
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <Check
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<Check>'} with inherit disabled
                                </Check>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <Check
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<Check>'} with inherit disabled
    </Check>
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
                            <Check
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<Check>'} with active state
                            </Check>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Check
    theme='${themeName}'
    active={true}
>
    A {'<Check>'} with active state
</Check>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <Check
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<Check>'} with inherit active
                                </Check>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <Check
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<Check>'} with inherit active
    </Check>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        >
                            A {'<Check>'} marked as neutral
                        </Check>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        >
                            A {'<Check>'} marked as valid
                        </Check>
                        <Check
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        >
                            A {'<Check>'} marked as invalid
                        </Check>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Check
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    A {'<Check>'} marked as neutral
</Check>
<Check
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    A {'<Check>'} marked as valid
</Check>
<Check
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    A {'<Check>'} marked as invalid
</Check>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>spacing</code>
                                <p>The spacing between <strong>check indicator</strong> and <strong>check label</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>indicator</code>
                                <p>An <code>indicating image</code> to show when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>switchIndicator</code>
                                <p>An <code>indicating image</code> to show when <code>{`active={true}`}</code> and <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            
                            
                            
                            <ListItem>
                                <code>checkFilterIn</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>checkFilterOut</code>
                                <p>A <code>filter</code> to apply when <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>checkTransformIn</code>
                                <p>A <code>transform</code> to apply when <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>checkTransformOut</code>
                                <p>A <code>transform</code> to apply when <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>checkAnimIn</code>
                                <p>Represents <strong>activating animation</strong>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>checkAnimOut</code>
                                <p>Represents <strong>deactivating animation</strong>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>.</p>
                            </ListItem>
                            
                            
                            
                            <ListItem>
                                <code>switchCheckFilterIn</code>
                                <p>A <code>filter</code> to apply when <code>{`active={true}`}</code> and <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>switchCheckFilterOut</code>
                                <p>A <code>filter</code> to apply when <code>{`active={false}`}</code> and <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>switchCheckTransformIn</code>
                                <p>A <code>transform</code> to apply when <code>{`active={true}`}</code> and <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>switchCheckTransformOut</code>
                                <p>A <code>transform</code> to apply when <code>{`active={false}`}</code> and <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>switchCheckAnimIn</code>
                                <p>Represents <strong>activating animation</strong>, a transition from <code>{`active={false}`}</code> to <code>{`active={true}`}</code>, when <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>switchCheckAnimOut</code>
                                <p>Represents <strong>deactivating animation</strong>, a transition from <code>{`active={true}`}</code> to <code>{`active={false}`}</code>, when <code>{`checkStyle='switch'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {checks, checkValues} from '@reusable-ui/check';

checks.opacity = 0.5;
console.log('opacity variable name: ', checks.opacity);
console.log('opacity variable value: ', checkValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default CheckPage
