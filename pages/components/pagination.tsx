import React, { useState } from 'react'
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
import { ItemsLimitProperty, NextItemsProperty, PrevItemsProperty } from '../../properties/sections/paginationProperties'



interface PaginationSampleItemsProps {
    selection    : number
    setSelection : (selection: number) => void
}
const listSampleItems = ({selection, setSelection}: PaginationSampleItemsProps) => {
    return Array.from(
        (function* () {
            for (let num = 1; num <= 30; num++) {
                yield <ListItem key={num} active={selection === num} onClick={() => setSelection(num)}>{num}</ListItem>
            }
        })()
    );
}

const Pagination = (props: PaginationProps) => {
    const [selection, setSelection] = useState<number>(12);
    
    return (
        <OriPagination {...props} itemsLimit={props.itemsLimit ?? 7} theme={props.theme ?? 'primary'} prevItems={<NavPrevItem onClick={() => setSelection( 1)} />} nextItems={<NavNextItem onClick={() => setSelection(30)} />}>
            {props.children ?? listSampleItems({selection, setSelection})}
        </OriPagination>
    );
}

interface PaginationSampleItemsStringProps {
    indents ?: number
}
const paginationSampleItemsString = (options : PaginationSampleItemsStringProps = {}) => {
    const tabs = (new Array(options.indents ?? 1).fill('    ')).join('');
    return (
`${tabs}{Array.from(
${tabs}    (function* () {
${tabs}        for (let num = 1; num <= 30; num++) {
${tabs}            yield <ListItem key={num} active={selection === num} onClick={() => setSelection(num)}>{num}</ListItem>
${tabs}        }
${tabs}    })()
${tabs})}`
    );
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
            <ItemsLimitProperty />
            <PrevItemsProperty />
            <NextItemsProperty />
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
                    <TypeScriptCode>{
`
const [selection, setSelection] = useState(12);

/* ... */
`
                        +
                        orientationOptions.map((orientationName) =>
`
<Pagination
    itemsLimit={5}
    orientation='${orientationName}'
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
>
${paginationSampleItemsString()}
</Pagination>
`
                        ).join('')
                    }</TypeScriptCode>
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
`
const [selection, setSelection] = useState(12);

/* ... */
`
                        +
                        sizeOptions.map((sizeName) =>
`
<Pagination
    itemsLimit={7}
    size='${sizeName}'
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
`
const [selection, setSelection] = useState(12);

/* ... */
`
                        +
                        themeOptions.map((themeName) =>
`
<Pagination
    itemsLimit={7}
    theme='${themeName}'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
const [selection, setSelection] = useState(12);

/* ... */

<Pagination
    itemsLimit={7}
    gradient={true}
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
const [selection, setSelection] = useState(12);

/* ... */

<Pagination
    itemsLimit={7}
    outlined={true}
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
const [selection, setSelection] = useState(12);

/* ... */

<Pagination
    itemsLimit={7}
    mild={false}
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
const [selection, setSelection] = useState(12);

/* ... */

<Pagination
    itemsLimit={7}
    enabled={false}
    theme='primary'
    
    prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
    nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
const [selection, setSelection] = useState(12);

/* ... */

<Control theme='primary' enabled={false}>
    <Pagination
        itemsLimit={7}
        inheritEnabled={true}
        theme='primary'
        
        prevItems={<NavPrevItem onClick={() => setSelection( 1)} />}
        nextItems={<NavNextItem onClick={() => setSelection(30)} />}
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
