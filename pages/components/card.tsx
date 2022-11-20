import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { indicator, card, cardHeader, cardBody, cardFooter } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, CardStyleProperty, cardStyleOptions, OrientationProperty, orientationOptions, ActionCtrlProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Card as OriCard, CardProps, CardHeader, CardBody, CardFooter, List, ListItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay, TheNestedComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'



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
            <HeroSection title={<><TheComponentDisplay /> Component</>} theme='secondary'>
                <p>
                    <TheComponentDisplay /> is a content container, with optional header and footer.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Card theme='primary' />
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
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
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
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
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
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>transition</code>
                                <p>The card of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemTransition</code>
                                <p>The card of css properties to be <code>transition</code>-ed for each <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>contentTransition</code>
                                <p>The card of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`cardStyle='content'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>tabTransition</code>
                                <p>The card of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`cardStyle='tab'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletTransition</code>
                                <p>The card of css properties to be <code>transition</code>-ed for the whole <TheComponentDisplay /> when <code>{`cardStyle='bullet'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Buttons'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>buttonSpacing</code>
                                <p>The default <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`cardStyle='button'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingSm</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`cardStyle='button'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingLg</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`cardStyle='button'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Tabs'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>tabTextAlign</code>
                                <p>The <strong>text alignment</strong> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='tab'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Breadcrumbs'>
                        <Card cardStyle='flush'>
                            <ListItem>
                                <code>breadcrumbPaddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            
                            
                            
                            <ListItem>
                                <code>breadcrumbSeparatorImage</code>
                                <p>The default <strong>background image</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorImageBlock</code>
                                <p>The <strong>background image</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorInlineSize</code>
                                <p>The default <strong>width</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorBlockSize</code>
                                <p>The default <strong>height</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorInlineSizeBlock</code>
                                <p>The <strong>width</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorBlockSizeBlock</code>
                                <p>The <strong>height</strong> for each <strong>separator</strong> between <TheNestedComponentDisplay />s when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginInline</code>
                                <p>The default horizontal spacing between <strong>separator</strong> and <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginBlock</code>
                                <p>The default vertical spacing between <strong>separator</strong> and <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginInlineBlock</code>
                                <p>The horizontal spacing between <strong>separator</strong> and <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginBlockBlock</code>
                                <p>The vertical spacing between <strong>separator</strong> and <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                        </Card>
                    </AccordionItem>
                    <AccordionItem label='Bullets'>
                        <Card cardStyle='flush'>
                            <ListItem>
                                <code>bulletSpacing</code>
                                <p>The default <strong>spacing</strong> between <TheNestedComponentDisplay />s.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletSpacingSm</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletSpacingLg</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletPadding</code>
                                <p>The default <strong>inner spacing</strong> for each <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletPaddingSm</code>
                                <p>The <strong>inner spacing</strong> for each <TheNestedComponentDisplay /> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletPaddingLg</code>
                                <p>The <strong>inner spacing</strong> for each <TheNestedComponentDisplay /> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </Card>
                    </AccordionItem>
                    <AccordionItem label='Numbered'>
                        <Card cardStyle='flush'>
                            <ListItem>
                                <code>numberedContent</code>
                                <p>The <strong>numeric formatting counter</strong> for each <TheNestedComponentDisplay /> when <code>{`cardStyle='numbered'`}</code>.</p>
                            </ListItem>
                        </Card>
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
