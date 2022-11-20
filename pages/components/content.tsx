import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Section, Variables } from '../../components/Section'
import { basic, content } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Basic, Button, Carousel, Content as OriContent, ContentProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { CommaSeparated, ComponentContextProvider, TheComponentDisplay, TheComponentLink } from '../../packages/componentContext'
import { Warning } from '../../components/Warning'



const Content = (props: ContentProps) => <OriContent {...props} theme={props.theme ?? 'primary'} />
export const MediaList = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['figure', 'img', 'svg', 'video', 'picture', 'embed', 'object', ...(props.includeCustom ? ['.media'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;
export const LinkList  = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['a', ...(props.includeCustom ? ['.link'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;



const ContentPage: NextPage = () => {
    return (<ComponentContextProvider component={content} baseComponents={basic}>
        <Head>
            <title>{`${content.componentTag} Component`}</title>
            <meta name="description" content={`${content.componentTag} is a generic media container with pre-formatted media elements such as images, videos, etc.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>}>
                <p>
                    <TheComponentDisplay /> is a generic <strong>media container</strong> with pre-formatted media elements such as <strong>images</strong>, <strong>videos</strong>, etc.
                </p>
                <p>
                    This component is great for creating <code>{`<article>`}</code> or <strong>newspaper-like</strong> content.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <Section title='Images &amp; Media'>
                <p>
                    Media elements such as <MediaList includeCustom={true} /> are <strong>automatically styled</strong> to <strong>fill</strong> over the <TheComponentLink />&apos;s padding.
                </p>
                <p>
                    Here the demonstration:
                </p>
                <Preview>
                    <Content tag='article' theme='primary'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        {/* eslint-disable @next/next/no-img-element */}
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        {/* eslint-disable @next/next/no-img-element */}
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                    </Content>
                </Preview>
                <p></p>
                <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                }</TypeScriptCode>
                <Section title='Images &amp; Media at the Beginning and End'>
                    <p>
                        If the media position is at <strong>the first</strong> and/or <strong>the last</strong>, the media are bit <strong>clipped</strong> by <TheComponentLink />&apos;s <strong>border-radius</strong>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='secondary' size='lg'>
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='secondary' size='lg'>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='The Sequence of Images &amp; Media'>
                    <p>
                        If there are multiple media <strong>in a sequence</strong> (without being inserted by another types), the media are <strong>joined together</strong> separated by borders.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='Custom Media'>
                    <p>
                        If you need a <strong>custom element</strong> to be treated <strong>as media</strong>, add a <code>{"'media'"}</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Carousel theme='success' className='media'>
                                {/* eslint-disable @next/next/no-img-element */}
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                {/* eslint-disable @next/next/no-img-element */}
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                {/* eslint-disable @next/next/no-img-element */}
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            </Carousel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Basic theme='success' className='media' style={{ textAlign: 'center' }}>
                                <p>
                                    hello world!
                                </p>
                            </Basic>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Carousel theme='success' className='media'>
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    </Carousel>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Basic theme='success' className='media' style={{ textAlign: 'center' }}>
        <p>
            hello world!
        </p>
    </Basic>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='Excluding Media'>
                    <p>
                        Sometimes we need to put a media (<MediaList includeCustom={false} />) <strong>without</strong> to apply the <strong>default styling</strong>.
                        For example an <strong>emoji</strong> of <code>{`<img>`}</code>.
                    </p>
                    <p>
                        Add a <code>{"'not-media'"}</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            {/* eslint-disable @next/next/no-img-element */}
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
            </Section>
            <Section title='Links'>
                <p>
                    Link elements such as <LinkList includeCustom={true} /> are <strong>automatically styled</strong> and get <strong>separated</strong> from each other.
                </p>
                <Warning>
                    <p>
                        Actually we don&apos;t style the link elements, instead we mutate them with {React.cloneElement(packages.button.packageLink, undefined, <code>{`<Button buttonStyle='link'>`}</code>)} and styled them for adding margin.
                    </p>
                    <p>
                        If the link elements are <strong>function component</strong> or <strong>class component</strong>, we don&apos;t mutate them.
                    </p>
                </Warning>
                <p>
                    Here the demonstration:
                </p>
                <Preview>
                    <Content tag='article' theme='primary'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <a href='#'>Link 1</a>
                        <a href='#'>Link 2</a>
                        <a href='#'>Link 3</a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                    </Content>
                </Preview>
                <p></p>
                <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <a href='#'>Link 1</a>
    <a href='#'>Link 2</a>
    <a href='#'>Link 3</a>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                }</TypeScriptCode>
                <Section title='Custom Links'>
                    <p>
                        If you need a <strong>custom element</strong> to be treated <strong>as link</strong>, add a <code>{"'link'"}</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Button buttonStyle='link' href='#'>Link 1</Button>
                            <Button buttonStyle='link' onClick={() => alert('hello world')}>Link 2</Button>
                            <div className='link'>Link 3</div>
                            <span className='link'>Link 4</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Button buttonStyle='link' href='#'>Link 1</Button>
    <Button buttonStyle='link' onClick={() => alert('hello world')}>Link 2</Button>
    <div className='link'>Link 3</div>
    <span className='link'>Link 4</span>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='Excluding Links'>
                    <p>
                        Sometimes we need to put a link (<LinkList includeCustom={false} />) <strong>without</strong> to apply the <strong>default styling</strong>.
                        For example a <strong>custom button</strong> of <code>{`<a>`}</code>.
                    </p>
                    <p>
                        Add a <code>{"'not-link'"}</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <a href='#' className='not-link'>Link 1</a>
                            <a href='#' className='not-link'>Link 2</a>
                            <a href='#' className='not-link'>Link 3</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <a href='#' className='not-link'>Link 1</a>
    <a href='#' className='not-link'>Link 2</a>
    <a href='#' className='not-link'>Link 3</a>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
            </Section>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Content
                                key={index}
                                size={sizeName}
                            >
                                An {'<Content>'} with {sizeName ?? 'default'} size
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Content
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Content>'} with ${sizeName ?? 'default'} size
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                            >
                                An {'<Content>'} with {themeName} theme
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
>
    An {'<Content>'} with ${themeName} theme
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Content>'} with gradient mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    gradient={true}
>
    An {'<Content>'} with gradient mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Content>'} with outlined mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    outlined={true}
>
    An {'<Content>'} with outlined mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Content>'} without mild mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    mild={false}
>
    An {'<Content>'} without mild mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Content>'} with nude mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    nude={true}
>
    An {'<Content>'} with nude mode
</Content>
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
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed.</p>
                            </ListItem>
                            <ListItem>
                                <code>mediaTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the <strong>media</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>linkSpacing</code>
                                <p>The gap between <strong>link</strong>s.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {contents, contentValues} from '@reusable-ui/content';

contents.mediaOpacity = 0.5;
console.log('mediaOpacity variable name: ', contents.mediaOpacity);
console.log('mediaOpacity variable value: ', contentValues.mediaOpacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ContentPage
