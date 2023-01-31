import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation } from '../../components/sections/ComponentInstallation'
import { HeroSection } from '../../components/sections/HeroSection'
import { InheritedProperties } from '../../components/sections/InheritedProperties'
import { Main } from '../../components/sections/Main'
import { Variables } from '../../components/sections/Variables'
import { indicator, card, cardHeader, cardBody, cardFooter } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, CardStyleProperty, cardStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Card as OriCard, CardProps, CardHeader, CardBody, CardFooter, List, ListItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink, TheNestedComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'



interface CardSampleItemsProps extends Pick<CardProps, 'cardStyle'> {
}
const cardSampleItems = ({cardStyle: _cardStyle}: CardSampleItemsProps = {}) => {
    return [
        <CardHeader key={0}>
            Test Card
        </CardHeader>,
        <CardBody key={1}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
            {/* eslint-disable @next/next/no-img-element */}
            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
            </p>
        </CardBody>,
        <CardFooter key={2}>
            Just for fun!
        </CardFooter>,
    ];
}

interface SampleCardProps extends CardProps, CardSampleItemsProps {
}
const Card = (props: SampleCardProps) => <OriCard {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? cardSampleItems(props)}
</OriCard>

interface CardSampleItemsArrayProps {
    indents     ?: number
}
const cardSampleItemsArray = ({indents = 1} : CardSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
`${tabs}<CardHeader>
${tabs}    Test Card
${tabs}</CardHeader>`,
`${tabs}<CardBody>
${tabs}    <p>
${tabs}        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
${tabs}    </p>
${tabs}    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
${tabs}    <p>
${tabs}        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
${tabs}    </p>
${tabs}</CardBody>`,
`${tabs}<CardFooter>
${tabs}    Just for fun!
${tabs}</CardFooter>`,
    ]);
}

interface CardSampleItemsStringProps extends CardSampleItemsArrayProps {
}
const cardSampleItemsString = (options : CardSampleItemsStringProps = {}) => {
    return cardSampleItemsArray(options).join('\n');
}



const CardPage: NextPage = () => {
    return (<ComponentContextProvider component={card} nestedComponent={[cardHeader, cardBody, cardFooter]} nestedProperties={false} baseComponents={indicator}>
        <Head>
            <title>{`${card.componentTag} Component`}</title>
            <meta name="description" content={`${card.componentTag} is a content container, with optional header and footer.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a content container, with optional header and footer.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Card theme='primary'>
                        <CardHeader>
                            Test Card
                        </CardHeader>
                        <CardBody>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </CardBody>
                        <CardFooter>
                            Just for fun!
                        </CardFooter>
                    </Card>
                    <Card theme='success' />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <CardStyleProperty>
                    <Preview display='right' stretch={false}>
                        {cardStyleOptions.map((cardStyle, index) =>
                            <Card
                                key={index}
                                cardStyle={cardStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {cardStyleOptions.map((cardStyle) =>
`
<Card
    cardStyle='${cardStyle}'
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                        ).join('')}
                    </TypeScriptCode>
                </CardStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Card
                                key={index}
                                orientation={orientationName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Card
    orientation='${orientationName}'
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Card
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName, index) =>
`
<Card
    size='${sizeName}'
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                        ).join('')
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Card
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Card
    theme='${themeName}'
>
${cardSampleItemsString()}
</Card>
`
                        ).join('')
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Card
                            gradient={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Card
    gradient={true}
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Card
                            outlined={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Card
    outlined={true}
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Card
                            mild={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Card
    mild={false}
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Card
                            enabled={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Card
    enabled={false}
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <Card
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <Card
        inheritEnabled={true}
        theme='primary'
    >
${cardSampleItemsString({indents: 2})}
    </Card>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty>
                    <Preview display='right' stretch={false}>
                        <Card
                            active={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Card
    active={true}
    theme='primary'
>
${cardSampleItemsString()}
</Card>
`
                    }</TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' active={true}>
                            <Card
                                inheritActive={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' active={true}>
    <Card
        inheritActive={true}
        theme='primary'
    >
${cardSampleItemsString({indents: 2})}
    </Card>
</Control>
`
                    }</TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
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
                                <p>The rounded corner radius.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusSm</code>
                                <p>The rounded corner radius when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>borderRadiusLg</code>
                                <p>The rounded corner radius when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for each <TheNestedComponentDisplay />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Sizes'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>boxSizing</code>
                                <p>Specifies the <strong>measusing method</strong> of the <TheComponentLink />&apos;s size.</p>
                            </ListItem>
                            <ListItem>
                                <code>blockSize</code>
                                <p>The <strong>height</strong> of the whole <TheComponentLink />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>overflowWrap</code>
                                <p>Defines how a <strong>long word</strong> inside <TheComponentLink /> is handled.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Captions'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>captionFilter</code>
                                <p>A <strong>filter</strong> to apply on the {cardHeader.packageDisplay} and {cardFooter.packageDisplay}.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {cards, cardValues} from '@reusable-ui/card';

cards.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', cards.filterActive);
console.log('filterActive variable value: ', cardValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default CardPage
