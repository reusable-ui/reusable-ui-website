import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { indicator, list, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListStyleProperty, listStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { List as OriList, ListProps, List as List2, ListItem, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink, TheNestedComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, EnabledProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ActionCtrlProperty } from '../../properties/sections/behaviorProperties'



interface ListSampleItemsProps extends Pick<ListProps, 'listStyle'> {
    mixVaraints ?: boolean
}
const listSampleItems = ({mixVaraints = true, listStyle}: ListSampleItemsProps = {}) => {
    return ((listStyle === 'bullet') ? [
        <ListItem key={0} />,
        <ListItem key={1} />,
        <ListItem key={2} theme='success' />,
        <ListItem key={3} />,
        <ListItem key={4} active={true} actionCtrl={true} href='https://www.google.com' />,
        <ListItem key={5} actionCtrl={true} />,
        <ListItem key={6} theme='danger' actionCtrl={true} />,
    ] : [
        <ListItem key={0}>
            A first item
        </ListItem>,
        <ListItem key={1}>
            A second item
        </ListItem>,
        <ListItem key={2} {...(mixVaraints ? { theme: 'success'} : undefined)}>
            A third item
        </ListItem>,
        <ListItem key={3}>
            A fourth item
        </ListItem>,
        <ListItem key={4} {...(mixVaraints ? { active: true, actionCtrl: true, href: 'https://www.google.com'} : undefined)}>
            A fifth item
        </ListItem>,
        <ListItem key={5} {...(mixVaraints ? { actionCtrl: true} : undefined)}>
            A sixth item
        </ListItem>,
        <ListItem key={6} {...(mixVaraints ? { theme: 'danger', actionCtrl: true} : undefined)}>
            A seventh item
        </ListItem>,
    ]);
}

interface SampleListProps extends ListProps, ListSampleItemsProps {
}
const List = (props: SampleListProps) => <OriList {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? listSampleItems(props)}
</OriList>

interface ListSampleItemsArrayProps {
    indents     ?: number
    mixVaraints ?: boolean
}
const listSampleItemsArray = ({indents = 1, mixVaraints = true} : ListSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    A first item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    A second item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${mixVaraints ? " theme='success'" : ""}${prop ? ` ${prop}` : ''}>
${tabs}    A third item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${prop ? ` ${prop}` : ''}>
${tabs}    A fourth item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${mixVaraints ? " active={true} actionCtrl={true} href='https://www.google.com'" : ""}${prop ? ` ${prop}` : ''}>
${tabs}    A fifth item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${mixVaraints ? " actionCtrl={true}" : ""}${prop ? ` ${prop}` : ''}>
${tabs}    A sixth item
${tabs}</ListItem>`,
(prop?: string) => `${tabs}<ListItem${mixVaraints ? " theme='danger' actionCtrl={true}" : ""}${prop ? ` ${prop}` : ''}>
${tabs}    A seventh item
${tabs}</ListItem>`
    ]);
}

interface ListSampleItemsStringProps extends ListSampleItemsArrayProps {
}
const listSampleItemsString = (options : ListSampleItemsStringProps = {}) => {
    return listSampleItemsArray(options).map((listItem) => listItem()).join('\n');
}
const listSampleEmptyItemsString = (indents: number = 1) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return (
`${tabs}<ListItem />
${tabs}<ListItem />
${tabs}<ListItem theme='success' />
${tabs}<ListItem />
${tabs}<ListItem active={true} actionCtrl={true} href='https://www.google.com' />
${tabs}<ListItem actionCtrl={true} />
${tabs}<ListItem theme='danger' actionCtrl={true} />`
    );
}



const ListPage: NextPage = () => {
    return (<ComponentContextProvider component={list} nestedComponent={listItem} baseComponents={indicator}>
        <Head>
            <title>{`${list.componentTag} Component`}</title>
            <meta name="description" content={`${list.componentTag} represents a series of content.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents a series of content.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <List theme='primary' />
                    <List theme='primary' mild={false} />
                    <List theme='primary' outlined={true} />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ActionCtrlProperty>
                <Preview display='right' stretch={false}>
                    <List
                        actionCtrl={true}
                        mixVaraints={false}
                    />
                    <List
                        mixVaraints={false}
                    >
                        <ListItem actionCtrl={true}>
                            A first item (clickable)
                        </ListItem>
                        <ListItem>
                            A second item
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A third item (clickable)
                        </ListItem>
                        <ListItem>
                            A fourth item
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A fifth item (clickable)
                        </ListItem>
                        <ListItem actionCtrl={true}>
                            A sixth item (clickable)
                        </ListItem>
                        <ListItem>
                            A seventh item
                        </ListItem>
                    </List>
                </Preview>
                <p></p>
                <TypeScriptCode>{
`
<List
    actionCtrl={true}
    theme='primary'
>
${listSampleItemsString({mixVaraints: false})}
</List>

<List
    theme='primary'
>
    <ListItem actionCtrl={true}>
        A first item (clickable)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem actionCtrl={true}>
        A third item (clickable)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem actionCtrl={true}>
        A fifth item (clickable)
    </ListItem>
    <ListItem actionCtrl={true}>
        A sixth item (clickable)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                }</TypeScriptCode>
            </ActionCtrlProperty>
            <VariantProperties>
                <ListStyleProperty>
                    <Preview display='right' stretch={false}>
                        {listStyleOptions.map((listStyle, index) =>
                            <List
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listStyleOptions.map((listStyle) =>
`
<List
    listStyle='${listStyle}'
    theme='primary'
>
${(listStyle === 'bullet') ? listSampleEmptyItemsString() : listSampleItemsString()}
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <List
                                key={index}
                                orientation={orientationName}
                            >
                                <ListItem>
                                    A first item
                                </ListItem>
                                <ListItem>
                                    A second item
                                </ListItem>
                                <ListItem>
                                    A third item
                                </ListItem>
                            </List>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<List
    orientation='${orientationName}'
    theme='primary'
>
    <ListItem>
        A first item
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem>
        A third item
    </ListItem>
</List>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <List
                                key={index}
                                size={sizeName}
                            />
                        )}
                        
                        <List
                            mixVaraints={false}
                        >
                            {listSampleItems({mixVaraints: false}).map((listItem, index) => React.cloneElement(listItem, { size: sizeOptions[index] ?? undefined }))}
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName, index) =>
`
<List
    size='${sizeName}'
    theme='primary'
>
${listSampleItemsString({mixVaraints: false})}
</List>
`
                        ).join('')
+
`
<List
    theme='primary'
>
${listSampleItemsArray({mixVaraints: false}).map((listItem, index) => listItem(sizeOptions[index] ? `size='${sizeOptions[index]}'` : '')).join('\n')}
</List>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <List
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <List
                            mixVaraints={false}
                        >
                            {listSampleItems({mixVaraints: false}).map((listItem, index) => React.cloneElement(listItem, { theme: themeOptions[index] ?? undefined }))}
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<List
    theme='${themeName}'
>
${listSampleItemsString()}
</List>
`
                        ).join('')
+
`
<List
    theme='primary'
>
${listSampleItemsArray({mixVaraints: false}).map((listItem, index) => listItem(themeOptions[index] ? `theme='${themeOptions[index]}'` : '')).join('\n')}
</List>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <List
                            gradient={true}
                        />
                        <List
                            mixVaraints={false}
                        >
                            <ListItem gradient={true}>
                                A first item (gradient)
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem gradient={true}>
                                A third item (gradient)
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem gradient={true}>
                                A fifth item (gradient)
                            </ListItem>
                            <ListItem gradient={true}>
                                A sixth item (gradient)
                            </ListItem>
                            <ListItem>
                                A seventh item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<List
    gradient={true}
    theme='primary'
>
${listSampleItemsString()}
</List>

<List
    theme='primary'
>
    <ListItem gradient={true}>
        A first item (gradient)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem gradient={true}>
        A third item (gradient)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem gradient={true}>
        A fifth item (gradient)
    </ListItem>
    <ListItem gradient={true}>
        A sixth item (gradient)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <List
                            outlined={true}
                        />
                        <List
                            mixVaraints={false}
                        >
                            <ListItem outlined={true}>
                                A first item (outlined)
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem outlined={true}>
                                A third item (outlined)
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem outlined={true}>
                                A fifth item (outlined)
                            </ListItem>
                            <ListItem outlined={true}>
                                A sixth item (outlined)
                            </ListItem>
                            <ListItem>
                                A seventh item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<List
    outlined={true}
    theme='primary'
>
${listSampleItemsString()}
</List>

<List
    theme='primary'
>
    <ListItem outlined={true}>
        A first item (outlined)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem outlined={true}>
        A third item (outlined)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem outlined={true}>
        A fifth item (outlined)
    </ListItem>
    <ListItem outlined={true}>
        A sixth item (outlined)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <List
                            mild={false}
                        />
                        <List
                            mixVaraints={false}
                        >
                            <ListItem mild={false}>
                                A first item (not mild)
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem mild={false}>
                                A third item (not mild)
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem mild={false}>
                                A fifth item (not mild)
                            </ListItem>
                            <ListItem mild={false}>
                                A sixth item (not mild)
                            </ListItem>
                            <ListItem>
                                A seventh item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<List
    mild={false}
    theme='primary'
>
${listSampleItemsString()}
</List>

<List
    theme='primary'
>
    <ListItem mild={false}>
        A first item (not mild)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem mild={false}>
        A third item (not mild)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem mild={false}>
        A fifth item (not mild)
    </ListItem>
    <ListItem mild={false}>
        A sixth item (not mild)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <List
                            enabled={false}
                        />
                        <List
                            mixVaraints={false}
                        >
                            <ListItem enabled={false}>
                                A first item (disabled)
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem enabled={false}>
                                A third item (disabled)
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem enabled={false}>
                                A fifth item (disabled)
                            </ListItem>
                            <ListItem enabled={false}>
                                A sixth item (disabled)
                            </ListItem>
                            <ListItem>
                                A seventh item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<List
    enabled={false}
    theme='primary'
>
${listSampleItemsString()}
</List>

<List
    theme='primary'
>
    <ListItem enabled={false}>
        A first item (disabled)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem enabled={false}>
        A third item (disabled)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem enabled={false}>
        A fifth item (disabled)
    </ListItem>
    <ListItem enabled={false}>
        A sixth item (disabled)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <List
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <List
        inheritEnabled={true}
        theme='primary'
    >
${listSampleItemsString({indents: 2})}
    </List>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
                <ActiveProperty>
                    <Preview display='right' stretch={false}>
                        <List
                            active={true}
                        />
                        <List
                            mixVaraints={false}
                        >
                            <ListItem active={true}>
                                A first item (active)
                            </ListItem>
                            <ListItem>
                                A second item
                            </ListItem>
                            <ListItem active={true}>
                                A third item (active)
                            </ListItem>
                            <ListItem>
                                A fourth item
                            </ListItem>
                            <ListItem active={true}>
                                A fifth item (active)
                            </ListItem>
                            <ListItem active={true}>
                                A sixth item (active)
                            </ListItem>
                            <ListItem>
                                A seventh item
                            </ListItem>
                        </List>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<List
    active={true}
    theme='primary'
>
${listSampleItemsString()}
</List>

<List
    theme='primary'
>
    <ListItem active={true}>
        A first item (active)
    </ListItem>
    <ListItem>
        A second item
    </ListItem>
    <ListItem active={true}>
        A third item (active)
    </ListItem>
    <ListItem>
        A fourth item
    </ListItem>
    <ListItem active={true}>
        A fifth item (active)
    </ListItem>
    <ListItem active={true}>
        A sixth item (active)
    </ListItem>
    <ListItem>
        A seventh item
    </ListItem>
</List>
`
                    }</TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' active={true}>
                            <List
                                inheritActive={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' active={true}>
    <List
        inheritActive={true}
        theme='primary'
    >
${listSampleItemsString({indents: 2})}
    </List>
</Control>
`
                    }</TypeScriptCode>
                </InheritActiveProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List2 listStyle='flush'>
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
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Animations'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>transition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>itemTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for each <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>contentTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentLink /> when <code>{`listStyle='content'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>tabTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentLink /> when <code>{`listStyle='tab'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>bulletTransition</code>
                                <p>The list of css properties to be <code>transition</code>-ed for the whole <TheComponentLink /> when <code>{`listStyle='bullet'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Buttons'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>buttonSpacing</code>
                                <p>The default <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`listStyle='button'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingSm</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`listStyle='button'`}</code> and <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>buttonSpacingLg</code>
                                <p>The <strong>spacing</strong> between <TheNestedComponentDisplay />s when <code>{`listStyle='button'`}</code> and <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Tabs'>
                        <List2 listStyle='flush'>
                            <ListItem>
                                <code>tabTextAlign</code>
                                <p>The <strong>text alignment</strong> for each <TheNestedComponentDisplay /> when <code>{`listStyle='tab'`}</code>.</p>
                            </ListItem>
                        </List2>
                    </AccordionItem>
                    <AccordionItem label='Breadcrumbs'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>breadcrumbPaddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbPaddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code> for each <TheNestedComponentDisplay /> when <code>{`listStyle='breadcrumb'`}</code>.</p>
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
                                <p>The default <strong>horizontal spacing</strong> between <strong>separator</strong> and <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginBlock</code>
                                <p>The default <strong>vertical spacing</strong> between <strong>separator</strong> and <TheNestedComponentDisplay />.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginInlineBlock</code>
                                <p>The <strong>horizontal spacing</strong> between <strong>separator</strong> and <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>breadcrumbSeparatorMarginBlockBlock</code>
                                <p>The <strong>vertical spacing</strong> between <strong>separator</strong> and <TheNestedComponentDisplay /> when <code>{`orientation='block'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Bullets'>
                        <List listStyle='flush'>
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
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Numbered'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>numberedContent</code>
                                <p>The <strong>numeric formatting counter</strong> for each <TheNestedComponentDisplay /> when <code>{`listStyle='numbered'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {lists, listValues} from '@reusable-ui/list';

lists.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', lists.filterActive);
console.log('filterActive variable value: ', listValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ListPage
