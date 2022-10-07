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
            <meta name="description" content={`${container.componentTag} is a generic container with responsive padding width & height based on browser's width at certain ${packages.breakpoints.packageShortName}.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a generic container with <strong>responsive padding width &amp; height</strong> based on browser&apos;s width at certain {packages.breakpoints.packageShortLink}.
            </p>
            <p>
                This component is great for creating <code>{`<main>`}</code> or <code>{`<section>`}</code> of your page.
            </p>
            <Section title='Adjusting the Children Space'>
                <p>
                    By default the <TheComponentDisplay />&apos;s childen space is <strong>inside</strong> the <TheComponentDisplay />&apos;s padding.
                </p>
                <p>
                    But in <em>some cases</em>, you may want some children or sub <code>{`<section>`}</code>s to <strong>fill accross</strong> the <TheComponentDisplay />&apos;s padding.
                    For example: a <strong>hero section</strong> or <strong>highlighted sections</strong>.
                    There are 2 special <code>className</code> to do that: <code>'fill'</code> and <code>'fill-self'</code>.
                </p>
                <Section title={<>Fill the <TheComponentDisplay />&apos;s Padding</>}>
                    <p>
                        To make the child element(s) or sub <code>{`<section>`}</code>(s) <strong>fills</strong> the <TheComponentDisplay />&apos;s padding, add a <code>'fill'</code> to the child&apos;s <code>className</code>.
                    </p>
                    <p>
                        The <strong>child&apos;s padding</strong> itself is <strong>preserved</strong> as original, so the content alignment is shifted.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Container tag='section' theme='primary'>
                            <section style={{ background: '#FFC0CB' }}>
                                The first child
                            </section>
                            <section style={{ background: '#FFFF00' }} className='fill'>
                                The second child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }} className='fill'>
                                The fourth child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#D2B48C' }}>
                                The fifth child
                            </section>
                        </Container>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Container tag='section' theme='primary'>
    <section style={{ background: '#FFC0CB' }}>
        The first child
    </section>
    <section style={{ background: '#FFFF00' }} className='fill'>
        The second child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }} className='fill'>
        The fourth child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#D2B48C' }}>
        The fifth child
    </section>
</Container>
`
                    }</TypeScriptCode>
                    
                    <hr />
                    
                    <p>
                        When the child is located at the <strong>top</strong> or <strong>bottom</strong>, the <code>'fill'</code> class <strong>removes</strong> the <strong>padding-top</strong> and/or <strong>padding-bottom</strong> of the <TheComponentDisplay />.
                    </p>
                    <Preview>
                        <Container tag='section' theme='primary'>
                            <section style={{ background: '#FFC0CB' }} className='fill'>
                                The first child applied <code>className='fill'</code>
                            </section>
                            <section style={{ background: '#FFFF00' }}>
                                The second child
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }}>
                                The fourth child
                            </section>
                            <section style={{ background: '#D2B48C' }} className='fill'>
                                The fifth child applied <code>className='fill'</code>
                            </section>
                        </Container>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Container tag='section' theme='primary'>
    <section style={{ background: '#FFC0CB' }} className='fill'>
        The first child applied <code>className='fill'</code>
    </section>
    <section style={{ background: '#FFFF00' }}>
        The second child
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }}>
        The fourth child
    </section>
    <section style={{ background: '#D2B48C' }} className='fill'>
        The fifth child applied <code>className='fill'</code>
    </section>
</Container>
`
                    }</TypeScriptCode>
                </Section>
                <Section title={<>Take Over the <TheComponentDisplay />&apos;s Padding</>}>
                    <p>
                        To make the child element(s) or sub <code>{`<section>`}</code>(s) <strong>takes over</strong> the <TheComponentDisplay />&apos;s padding, add a <code>'fill'</code> to the child&apos;s <code>className</code>.
                    </p>
                    <p>
                        The <strong>child&apos;s padding</strong> copies (take over) the <TheComponentDisplay />&apos;s padding, so the content alignment is preserved.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Container tag='section' theme='primary'>
                            <section style={{ background: '#FFC0CB' }}>
                                The first child
                            </section>
                            <section style={{ background: '#FFFF00' }} className='fill-self'>
                                The second child applied <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }} className='fill-self'>
                                The fourth child applied <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#D2B48C' }}>
                                The fifth child
                            </section>
                        </Container>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Container tag='section' theme='primary'>
    <section style={{ background: '#FFC0CB' }}>
        The first child
    </section>
    <section style={{ background: '#FFFF00' }} className='fill-self'>
        The second child applied <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }} className='fill-self'>
        The fourth child applied <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#D2B48C' }}>
        The fifth child
    </section>
</Container>
`
                    }</TypeScriptCode>
                    
                    <hr />
                    
                    <p>
                        When the child is located at the <strong>top</strong> or <strong>bottom</strong>, the <code>'fill-self'</code> class also <strong>takes over</strong> the <strong>padding-top</strong> and/or <strong>padding-bottom</strong> of the <TheComponentDisplay />.
                    </p>
                    <Preview>
                        <Container tag='section' theme='primary'>
                            <section style={{ background: '#FFC0CB' }} className='fill-self'>
                                The first child applied <code>className='fill-self'</code>
                            </section>
                            <section style={{ background: '#FFFF00' }}>
                                The second child
                            </section>
                            <section style={{ background: '#90EE90' }}>
                                The third child
                            </section>
                            <section style={{ background: '#E9967A' }}>
                                The fourth child
                            </section>
                            <section style={{ background: '#D2B48C' }} className='fill-self'>
                                The fifth child applied <code>className='fill-self'</code>
                            </section>
                        </Container>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Container tag='section' theme='primary'>
    <section style={{ background: '#FFC0CB' }} className='fill-self'>
        The first child applied <code>className='fill-self'</code>
    </section>
    <section style={{ background: '#FFFF00' }}>
        The second child
    </section>
    <section style={{ background: '#90EE90' }}>
        The third child
    </section>
    <section style={{ background: '#E9967A' }}>
        The fourth child
    </section>
    <section style={{ background: '#D2B48C' }} className='fill-self'>
        The fifth child applied <code>className='fill-self'</code>
    </section>
</Container>
`
                    }</TypeScriptCode>
                </Section>
            </Section>
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
