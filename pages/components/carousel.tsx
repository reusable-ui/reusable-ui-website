import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, carousel } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Carousel as OriCarousel, CarouselProps, AccordionItem, Accordion, List, ListItem, CardBody, Navscroll } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { BasicComponentProperty, ComponentProperties, NavscrollComponentProperty, NextButtonComponentProperty, PrevButtonComponentProperty } from '../../properties/sections/componentProperties'
import { ParagraphLorem } from '../../components/ParagraphLorem'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { style, children } from '@cssfn/core'
import { InfiniteLoopProperty, ScrollingRefProperty } from '../../properties/sections/carouselProperties'



const useCarouselDemoStyle = dynamicStyleSheet(() => style({
    inlineSize: '20rem',
    ...children('ul>li>article', {
        padding: '1rem',
        overflow: 'hidden',
    }),
}), { id: 'zerha4340z' });



const carouselSampleItems = () => {
    return [
        /* eslint-disable @next/next/no-img-element */
        <img key={0} alt='waves'    src='/images/lorem-img/waves-800x600.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={1} alt='leaf'     src='/images/lorem-img/leaf-800x700.jpg' />,
        <article key={2}>
            <ParagraphLorem words={10} />
            <ParagraphLorem words={10} />
        </article>,
        /* eslint-disable @next/next/no-img-element */
        <img key={3} alt='building' src='/images/lorem-img/building-800x500.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={4} alt='street'   src='/images/lorem-img/street-800x800.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={5} alt='flower'   src='/images/lorem-img/flower-700x400.jpg' />,
        /* eslint-disable @next/next/no-img-element */
        <img key={6} alt='wood'     src='/images/lorem-img/wood-700x600.jpg' />,
    ];
}

interface SampleCarouselProps extends CarouselProps {
}
const Carousel = (props: SampleCarouselProps) => {
    const carouselDemoStyle = useCarouselDemoStyle();
    return (
        <OriCarousel {...props} theme={props.theme ?? 'primary'} className={carouselDemoStyle.main}>
            {props.children ?? carouselSampleItems()}
        </OriCarousel>
    );
}

interface CarouselSampleItemsStringProps {
    indents ?: number
}
const carouselSampleItemsString = ({indents = 1} : CarouselSampleItemsStringProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return (
`${tabs}<img alt='waves'  src='/images/lorem-img/waves-800x600.jpg' />
${tabs}<img alt='leaf'   src='/images/lorem-img/leaf-800x700.jpg' />
${tabs}<article>...</article>
${tabs}{/* ... */}
${tabs}<img alt='flower' src='/images/lorem-img/flower-700x400.jpg' />
${tabs}<img alt='wood'   src='/images/lorem-img/wood-700x600.jpg' />`
    );
}



const DemoScrollingRef = () => {
    const carouselScrollingRef = useRef<HTMLElement>(null);
    
    
    
    return (
        <CardBody>
            <Carousel
                scrollingRef={carouselScrollingRef}
            />
            <Navscroll
                scrollingOf={carouselScrollingRef}
                theme='primary'
            >
                <ListItem>Waves</ListItem>
                <ListItem>Leaf</ListItem>
                <ListItem>Lorem Ipsum</ListItem>
                <ListItem>Building</ListItem>
                <ListItem>Street</ListItem>
                <ListItem>Flower</ListItem>
                <ListItem>Wood</ListItem>
            </Navscroll>
        </CardBody>
    );
}



const CarouselPage: NextPage = () => {
    return (<ComponentContextProvider component={carousel} baseComponents={basic}>
        <Head>
            <title>{`${carousel.componentTag} Component`}</title>
            <meta name="description" content={`${carousel.componentTag} is a slideshow component for cycling through images, slides, or another elements.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a slideshow component for cycling through images, slides, or another elements.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Carousel />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <InfiniteLoopProperty>
                <Preview display='right' stretch={false}>
                    <Carousel
                        infiniteLoop={true}
                    />
                </Preview>
                <p></p>
                <TypeScriptCode>{
`
<Carousel
    infiniteLoop={true}
    theme='primary'
>
${carouselSampleItemsString()}
</Carousel>
`
                }</TypeScriptCode>
            </InfiniteLoopProperty>
            <ScrollingRefProperty>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoScrollingRef />} />
                <p></p>
                <TypeScriptCode>{
`
const carouselScrollingRef = useRef(null);

/* ... */

<Carousel
    scrollingRef={carouselScrollingRef}
    theme='primary'
>
${carouselSampleItemsString()}
</Carousel>

<Navscroll
    scrollingOf={carouselScrollingRef}
    theme='primary'
>
    <ListItem>Waves</ListItem>
    <ListItem>Leaf</ListItem>
    <ListItem>Lorem Ipsum</ListItem>
    <ListItem>Building</ListItem>
    <ListItem>Street</ListItem>
    <ListItem>Flower</ListItem>
    <ListItem>Wood</ListItem>
</Navscroll>
`
                }</TypeScriptCode>
            </ScrollingRefProperty>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Carousel
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Carousel
    size='${sizeName}'
    theme='primary'
>
${carouselSampleItemsString()}
</Carousel>
`
                        ).join('')
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Carousel
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Carousel
    theme='${themeName}'
>
${carouselSampleItemsString()}
</Carousel>
`
                        ).join('')
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Carousel
                            gradient={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Carousel
    gradient={true}
    theme='primary'
>
${carouselSampleItemsString()}
</Carousel>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Carousel
                            outlined={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Carousel
    outlined={true}
    theme='primary'
>
${carouselSampleItemsString()}
</Carousel>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Carousel
                            mild={false}
                            
                            navscrollComponent={<Navscroll mild={true} outlined={false} />}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Carousel
    mild={false}
    theme='primary'
    
    navscrollComponent={<Navscroll mild={true} outlined={false} />}
>
${carouselSampleItemsString()}
</Carousel>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <ComponentProperties>
                <BasicComponentProperty componentOf={<>the <strong>base</strong> of <TheComponentLink /> component</>} />
                
                <PrevButtonComponentProperty />
                <NextButtonComponentProperty />
                
                <NavscrollComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>navBtnBorderWidth</code>
                                <p>The thickness of border (stroke) of the prev/next button.</p>
                            </ListItem>
                            <ListItem>
                                <code>navBtnBorderRadius</code>
                                <p>The rounded corner radius of the prev/next button.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong>.</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>navMarginBlockEnd</code>
                                <p>The default <strong>outer spacing</strong> on the <strong>bottom</strong> of the navigation bullets.</p>
                            </ListItem>
                            <ListItem>
                                <code>navMarginBlockEndSm</code>
                                <p>The <strong>outer spacing</strong> on the <strong>bottom</strong> of the navigation bullets when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>navMarginBlockEndLg</code>
                                <p>The <strong>outer spacing</strong> on the <strong>bottom</strong> of the navigation bullets when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {carousels, carouselValues} from '@reusable-ui/carousel';

carousels.opacity = 0.5;
console.log('opacity variable name: ', carousels.opacity);
console.log('opacity variable value: ', carouselValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default CarouselPage
