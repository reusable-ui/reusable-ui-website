import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { content, masonry } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Masonry as OriMasonry, MasonryProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const masonryStyle : React.CSSProperties = {
    boxSizing: 'border-box',
    maxWidth: 'min(650px, 100%)',
};
const masonryStyleInline : React.CSSProperties = {
    ...masonryStyle,
    maxWidth: '100%',
    maxBlockSize: '670px',
    overflow: 'auto',
}
const Masonry = (props: MasonryProps) => <OriMasonry {...props} theme={props.theme ?? 'primary'} style={props.style ?? ((props.orientation === 'inline') ? masonryStyleInline : masonryStyle)}>
    {props.children ?? [
        /* eslint-disable @next/next/no-img-element */
        <img key={0} alt='lorem image' src='/images/lorem-img/waves-800x600.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={1} alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={2} alt='lorem image' src='/images/lorem-img/building-800x500.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={3} alt='lorem image' src='/images/lorem-img/street-800x800.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={4} alt='lorem image' src='/images/lorem-img/flower-700x400.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={5} alt='lorem image' src='/images/lorem-img/water-500x800.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={6} alt='lorem image' src='/images/lorem-img/wood-700x600.jpg' />,
    ]}
</OriMasonry>


interface MasonrySampleItemsStringProps {
    indents ?: number
}
const masonrySampleItemsString = ({indents = 1}: MasonrySampleItemsStringProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    
    return (
`${tabs}<img alt='lorem image' src='/images/lorem-img/waves-800x600.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/leaf-800x700.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/building-800x500.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/street-800x800.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/flower-700x400.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/water-500x800.jpg' />
${tabs}<img alt='lorem image' src='/images/lorem-img/wood-700x600.jpg' />`
    );
}



const MasonryPage: NextPage = () => {
    return (<ComponentContextProvider component={masonry} baseComponents={content}>
        <Head>
            <title>{`${masonry.componentTag} Component`}</title>
            <meta name="description" content={`${masonry.componentTag} is a container in which the items are laid out one after the other in the inline (or block) direction.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a container in which the items are laid out one after the other in the inline (or block) direction.
                </p>
                <p>
                    This component is great for creating a <strong>gallery</strong>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false}>
                    <Masonry />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Masonry
                                key={index}
                                orientation={orientationName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Masonry
    orientation='${orientationName}'
    theme='primary'${(orientationName === 'inline') ?
`
    style={{
        boxSizing: 'border-box',
        maxWidth: '100%',
        maxBlockSize: '670px',
        overflow: 'auto',
    }}` : ''}
>
${masonrySampleItemsString()}
</Masonry>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='down' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Masonry
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Masonry
    size='${sizeName}'
    theme='primary'
>
${masonrySampleItemsString()}
</Masonry>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Masonry
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Masonry
    theme='${themeName}'
>
${masonrySampleItemsString()}
</Masonry>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='down' stretch={false}>
                        <Masonry
                            gradient={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Masonry
    gradient={true}
    theme='primary'
>
${masonrySampleItemsString()}
</Masonry>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='down' stretch={false}>
                        <Masonry
                            outlined={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Masonry
    outlined={true}
    theme='primary'
>
${masonrySampleItemsString()}
</Masonry>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='down' stretch={false}>
                        <Masonry
                            mild={false}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Masonry
    mild={false}
    theme='primary'
>
${masonrySampleItemsString()}
</Masonry>
`
                    }</TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview display='down' stretch={false}>
                        <Masonry
                            nude={true}
                            theme='primary'
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Masonry
    nude={true}
    theme='primary'
>
${masonrySampleItemsString()}
</Masonry>
`
                    }</TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>itemRaiseRowHeight</code>
                                <p>The default <strong>increment/decrement</strong> of the <strong>height</strong> of <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemRaiseRowHeightSm</code>
                                <p>The <strong>increment/decrement</strong> of the <strong>height</strong> of <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemRaiseRowHeightLg</code>
                                <p>The <strong>increment/decrement</strong> of the <strong>height</strong> of <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>itemMinColumnWidth</code>
                                <p>The default <strong>minimum column width</strong> of <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemMinColumnWidthSm</code>
                                <p>The <strong>minimum column width</strong> of <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemMinColumnWidthLg</code>
                                <p>The <strong>minimum column width</strong> of <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>gapInline</code>
                                <p>The default <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The default <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineSm</code>
                                <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockSm</code>
                                <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineLg</code>
                                <p>The <strong>horizontal spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockLg</code>
                                <p>The <strong>vertical spacing</strong> between <TheComponentLink />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {masonrys, masonryValues} from '@reusable-ui/masonry';

masonrys.mediaOpacity = 0.5;
console.log('mediaOpacity variable name: ', masonrys.mediaOpacity);
console.log('mediaOpacity variable value: ', masonryValues.mediaOpacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default MasonryPage
