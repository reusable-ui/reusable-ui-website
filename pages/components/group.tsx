import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/sections/sections'
import { list, group, components, modal, popup, dropdown } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, ListBasicStyleProperty, listBasicStyleOptions, OrientationProperty, orientationOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Group as OriGroup, GroupProps, TextInput, Label, Button, Radio } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const Group = (props: GroupProps) => <OriGroup {...props} theme={props.theme ?? 'primary'}>
    {props.children ?? [
        <TextInput key={0} placeholder='Username' />,
        <Label key={1}>
            @
        </Label>,
        <TextInput key={2} placeholder='Server' />,
        <Button key={3}>
            Submit
        </Button>,
    ]}
</OriGroup>



const GroupPage: NextPage = () => {
    return (<ComponentContextProvider component={group} baseComponents={list}>
        <Head>
            <title>{`${group.componentTag} Component`}</title>
            <meta name="description" content={`${group.componentTag} merges a list of components to a single composite component.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> merges a list of components to form a single composite component.
                </p>
                <p>
                    Almost all our {components.packageLink} can be <TheComponentLink />-ed, with a few exceptions like {modal.packageLink}, {popup.packageLink}, {dropdown.packageLink}, and <strong>non-static</strong> positioned components.
                </p>
                <p>
                    <TheComponentLink /> supports of (virtually) <strong>unlimited depth</strong> of nested <TheComponentLink />s.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <Group theme='danger'>
                        <Label>
                            Spicy level:
                        </Label>
                        <Radio name='spicy' nude={false} defaultActive={true}>Light</Radio>
                        <Radio name='spicy' nude={false}>Hot</Radio>
                        <Radio name='spicy' nude={false}>Super</Radio>
                    </Group>
                    
                    <Group theme='primary'>
                        <TextInput placeholder='Username' />
                        <Label>
                            @
                        </Label>
                        <TextInput placeholder='Server' />
                        <Button>
                            Submit
                        </Button>
                    </Group>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <ListBasicStyleProperty alternateNestedComponent={<><TheComponentLink />&apos;s <strong>children</strong></>}>
                    <Preview display='right' stretch={false}>
                        {listBasicStyleOptions.map((listStyle, index) =>
                            <Group
                                key={index}
                                listStyle={listStyle}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {listBasicStyleOptions.map((listStyle) =>
`
<Group
    listStyle='${listStyle}'
    theme='primary'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')}
                    </TypeScriptCode>
                </ListBasicStyleProperty>
                <OrientationProperty>
                    <Preview display='down' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <Group
                                key={index}
                                orientation={orientationName}
                                style={(orientationName === 'block') ? {justifySelf: 'center'} : undefined}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<Group
    orientation='${orientationName}'
    theme='primary'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='down' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Group
                                key={index}
                                size={sizeName}
                            />
                        )}
                        <Group>
                            <TextInput size='sm' placeholder='Username' />
                            <Label>
                                @
                            </Label>
                            <TextInput size='md' placeholder='Server' />
                            <Button size='lg'>
                                Submit
                            </Button>
                        </Group>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        sizeOptions.map((sizeName) =>
`
<Group
    size='${sizeName}'
    theme='primary'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')
                        +
`
<Group
    theme='primary'
>
    <TextInput size='sm' placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput size='md' placeholder='Server' />
    <Button size='lg'>
        Submit
    </Button>
</Group>
`
                    }</TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Group
                                key={index}
                                theme={themeName}
                            />
                        )}
                        <Group>
                            <TextInput theme='success' placeholder='Username' />
                            <Label theme='primary'>
                                @
                            </Label>
                            <TextInput theme='danger' placeholder='Server' />
                            <Button theme='warning'>
                                Submit
                            </Button>
                        </Group>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Group
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')
                        +
`
<Group
    theme='primary'
>
    <TextInput theme='success' placeholder='Username' />
    <Label theme='primary'>
        @
    </Label>
    <TextInput theme='danger' placeholder='Server' />
    <Button theme='warning'>
        Submit
    </Button>
</Group>
`
                    }</TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Group
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
                        )}
                        <Group>
                            <TextInput gradient={true} placeholder='Username' />
                            <Label gradient={false}>
                                @
                            </Label>
                            <TextInput gradient={true} placeholder='Server' />
                            <Button gradient={false}>
                                Submit
                            </Button>
                        </Group>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Group
    gradient={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')
                        +
`
<Group
    theme='primary'
>
    <TextInput gradient={true} placeholder='Username' />
    <Label gradient={false}>
        @
    </Label>
    <TextInput gradient={true} placeholder='Server' />
    <Button gradient={false}>
        Submit
    </Button>
</Group>
`
                    }</TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Group
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
                        )}
                        <Group outlined={true}>
                            <TextInput outlined={true} placeholder='Username' />
                            <Label outlined={false}>
                                @
                            </Label>
                            <TextInput outlined={true} placeholder='Server' />
                            <Button outlined={false}>
                                Submit
                            </Button>
                        </Group>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Group
    outlined={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')
                        +
`
<Group
    outlined={true}
    theme='primary'
>
    <TextInput outlined={true} placeholder='Username' />
    <Label outlined={false}>
        @
    </Label>
    <TextInput outlined={true} placeholder='Server' />
    <Button outlined={false}>
        Submit
    </Button>
</Group>
`
                    }</TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='down' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Group
                                key={index}
                                theme={themeName}
                                mild={true}
                            />
                        )}
                        <Group mild={true}>
                            <TextInput mild={false} placeholder='Username' />
                            <Label mild={true}>
                                @
                            </Label>
                            <TextInput mild={false} placeholder='Server' />
                            <Button mild={true}>
                                Submit
                            </Button>
                        </Group>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
                        themeOptions.map((themeName) =>
`
<Group
    mild={true}
    theme='${themeName}'
>
    <TextInput placeholder='Username' />
    <Label>
        @
    </Label>
    <TextInput placeholder='Server' />
    <Button>
        Submit
    </Button>
</Group>
`
                        ).join('')
                        +
`
<Group
    mild={true}
    theme='primary'
>
    <TextInput mild={false} placeholder='Username' />
    <Label mild={true}>
        @
    </Label>
    <TextInput mild={false} placeholder='Server' />
    <Button mild={true}>
        Submit
    </Button>
</Group>
`
                    }</TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='No variable yet' enabled={false}>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {groups, groupValues} from '@reusable-ui/group';

groups.opacity = 0.5;
console.log('opacity variable name: ', groups.opacity);
console.log('opacity variable value: ', groupValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default GroupPage
