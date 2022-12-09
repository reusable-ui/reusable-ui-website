import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { nav, pagination, listItem } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Pagination as OriPagination, PaginationProps, ListItem, Control, CardBody, NavPrevItem, NavNextItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { EnabledProperty, InheritEnabledProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ComponentProperties, NavComponentProperty } from '../../properties/sections/componentProperties'



interface PaginationSampleItemsProps {
}
const listSampleItems = () => {
    const items : ReturnType<typeof ListItem>[] = new Array<ReturnType<typeof ListItem>>(30);
    for (let i = 1; i <= items.length; i++) {
        items[i - 1] = <ListItem key={i} active={i === 12}>{i}</ListItem>
    } // for
    return items;
}

interface SamplePaginationProps extends PaginationProps, PaginationSampleItemsProps {
}
const Pagination = (props: SamplePaginationProps) => <OriPagination {...props} itemsLimit={props.itemsLimit ?? 7} theme={props.theme ?? 'primary'} prevItems={<NavPrevItem />} nextItems={<NavNextItem />}>
    {props.children ?? listSampleItems()}
</OriPagination>

interface PaginationSampleItemsArrayProps {
    indents     ?: number
}
const paginationSampleItemsArray = ({indents = 1} : PaginationSampleItemsArrayProps = {}) => {
    const tabs = (new Array(indents).fill('    ')).join('');
    return ([
`${tabs}<ListItem>1</ListItem>`,
`${tabs}<ListItem>2</ListItem>`,
`${tabs}{/* ... */}`,
`${tabs}<ListItem>29</ListItem>`,
`${tabs}<ListItem>30</ListItem>`
    ]);
}

interface PaginationSampleItemsStringProps extends PaginationSampleItemsArrayProps {
}
const paginationSampleItemsString = (options : PaginationSampleItemsStringProps = {}) => {
    return paginationSampleItemsArray(options).join('\n');
}



const DemoPagination = () => {
    return (
        <CardBody>
            <Pagination />
        </CardBody>
    );
}



const PaginationPage: NextPage = () => {
    return (<ComponentContextProvider component={pagination} nestedComponent={listItem} baseComponents={nav}>
        <Head>
            <title>{`${pagination.componentTag} Component`}</title>
            <meta name="description" content={`${pagination.componentTag} is a list of huge page numbers with limited displayed list.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a list of huge page numbers with limited displayed list.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoPagination />} />
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Pagination
                                key={index}
                                itemsLimit={5}
                                orientation={orientationName}
                                style={(orientationName === 'block') ? {justifySelf: 'center'} : undefined}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Pagination
    itemsLimit={5}
    orientation='${orientationName}'
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Pagination
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Pagination
    itemsLimit={7}
    size='${sizeName}'
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                        ).join('')
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Pagination
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Pagination
    itemsLimit={7}
    theme='${themeName}'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                        ).join('')
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false}>
                        <Pagination
                            gradient={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Pagination
    itemsLimit={7}
    gradient={true}
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false}>
                        <Pagination
                            outlined={true}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Pagination
    itemsLimit={7}
    outlined={true}
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false}>
                        <Pagination
                            mild={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Pagination
    itemsLimit={7}
    mild={false}
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Pagination
                            enabled={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Pagination
    itemsLimit={7}
    enabled={false}
    theme='primary'
    
    prevItems={<NavPrevItem />}
    nextItems={<NavNextItem />}
>
${paginationSampleItemsString()}
</Pagination>
`
                    }</TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview display='right' stretch={false}>
                        <Control theme='primary' enabled={false}>
                            <Pagination
                                inheritEnabled={true}
                            />
                        </Control>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Control theme='primary' enabled={false}>
    <Pagination
        itemsLimit={7}
        inheritEnabled={true}
        theme='primary'
        
        prevItems={<NavPrevItem />}
        nextItems={<NavNextItem />}
    >
${paginationSampleItemsString({indents: 2})}
    </Pagination>
</Control>
`
                    }</TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <NavComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default PaginationPage
