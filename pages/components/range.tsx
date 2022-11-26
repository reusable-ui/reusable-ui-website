import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { editableActionControl, range } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Control, Range as OriRange, RangeProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, EnableValidationProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, InheritValidationProperty, IsValidProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, ThumbClassesProperty, ThumbComponentProperty, ThumbRefProperty, ThumbStyleProperty, TrackClassesProperty, TrackComponentProperty, TrackLowerClassesProperty, TrackLowerComponentProperty, TrackLowerRefProperty, TrackLowerStyleProperty, TrackRefProperty, TrackStyleProperty, TrackUpperClassesProperty, TrackUpperComponentProperty, TrackUpperRefProperty, TrackUpperStyleProperty } from '../../properties/sections/componentProperties'



const Range = (props: RangeProps) => <OriRange {...props} theme={props.theme ?? 'primary'} />



const RangePage: NextPage = () => {
    return (<ComponentContextProvider component={range} baseComponents={editableActionControl}>
        <Head>
            <title>{`${range.componentTag} Component`}</title>
            <meta name="description" content={`${range.componentTag} is an interactive control in order to accept numeric value within a specified range.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is an interactive control in order to accept numeric value within a specified range.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false} display='right'>
                    <Range orientation='block' />
                    <Range orientation='block' outlined={true} />
                    <Range orientation='block' nude={false} />
                    <div style={{display: 'flex', flexDirection: 'column', gap: 'inherit'}}>
                        <Range orientation='inline' />
                        <Range orientation='inline' outlined={true} />
                        <Range orientation='inline' nude={false} />
                    </div>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Range
                                key={index}
                                orientation={orientationName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Range
    orientation='${orientationName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Range
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Range
    size='${sizeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Range
    theme='${themeName}'
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
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
<Range
    theme='${themeName}'
    gradient={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
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
<Range
    theme='${themeName}'
    outlined={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
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
<Range
    theme='${themeName}'
    mild={true}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
                                key={index}
                                theme={themeName}
                                nude={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Range
    theme='${themeName}'
    nude={false}
/>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Range
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
<Range
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
                                <Range
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
    <Range
        theme='${themeName}'
        inheritEnabled={true}
    />
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
                            <Range
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
<Range
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
                                <Range
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
    <Range
        theme='${themeName}'
        inheritActive={true}
    />
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Range
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        />
                        <Range
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        />
                        <Range
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Range
    theme='primary'
    enableValidation={true}
    isValid={null}
/>
<Range
    theme='primary'
    enableValidation={true}
    isValid={true}
/>
<Range
    theme='primary'
    enableValidation={true}
    isValid={false}
/>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <ComponentProperties>
                <TrackComponentProperty />
                <TrackLowerComponentProperty />
                <TrackUpperComponentProperty />
                <ThumbComponentProperty />
                <TrackRefProperty />
                <TrackLowerRefProperty />
                <TrackUpperRefProperty />
                <ThumbRefProperty />
                <TrackClassesProperty />
                <TrackLowerClassesProperty />
                <TrackUpperClassesProperty />
                <ThumbClassesProperty />
                <TrackStyleProperty />
                <TrackLowerStyleProperty />
                <TrackUpperStyleProperty />
                <ThumbStyleProperty />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>minInlineSize</code>
                                <p>A default <strong>minimum width</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minBlockSize</code>
                                <p>A default <strong>minimum height</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minInlineSizeBlock</code>
                                <p>A <strong>minimum width</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>minBlockSizeBlock</code>
                                <p>A <strong>minimum height</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Accessibilities'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>cursor</code>
                                <p>A default <strong>cursor</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>cursorBlock</code>
                                <p>A <strong>cursor</strong> to apply when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Tracks'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>trackInlineSize</code>
                                <p>The <strong>width</strong> of the <strong>main track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackBlockSize</code>
                                <p>The <strong>height</strong> of the <strong>main track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackBorderRadius</code>
                                <p>The <strong>border radius</strong> of the <strong>main track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackPaddingInline</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> of the <strong>main track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackPaddingBlock</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> of the <strong>main track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackInlineSizeBlock</code>
                                <p>The <strong>width</strong> of the <strong>main track</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackBlockSizeBlock</code>
                                <p>The <strong>height</strong> of the <strong>main track</strong> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>tracklowerFilter</code>
                                <p>A <strong>filter</strong> to apply on the <strong>lower track</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>trackupperFilter</code>
                                <p>A <strong>filter</strong> to apply on the <strong>upper track</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Thumbs'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>thumbInlineSize</code>
                                <p>The <strong>width</strong> of the <strong>thumb</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>thumbBlockSize</code>
                                <p>The <strong>height</strong> of the <strong>thumb</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>thumbBorderRadius</code>
                                <p>The <strong>border radius</strong> of the <strong>thumb</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>thumbPaddingInline</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> of the <strong>thumb</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>thumbPaddingBlock</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> of the <strong>thumb</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {ranges, rangeValues} from '@reusable-ui/range';

ranges.opacity = 0.5;
console.log('opacity variable name: ', ranges.opacity);
console.log('opacity variable value: ', rangeValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default RangePage
