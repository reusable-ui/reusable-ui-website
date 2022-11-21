import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { content, form } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Button, EmailInput, Form as OriForm, FormProps, List, ListItem, TextInput } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { CommaSeparated, ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { EnableValidationProperty, InheritValidationProperty, IsValidProperty, StateProperties } from '../../properties/sections/stateProperties'



const formStyle : React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
}
const Form = (props: FormProps) => <OriForm {...props} theme={props.theme ?? 'primary'} style={formStyle}>
    {props.children ?? <>
        <TextInput placeholder='username' required />
        <EmailInput placeholder='your@email.com' />
        <Button type='submit'>Submit</Button>
    </>}
</OriForm>
export const MediaList = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['figure', 'img', 'svg', 'video', 'picture', 'embed', 'object', ...(props.includeCustom ? ['.media'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;
export const LinkList  = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['a', ...(props.includeCustom ? ['.link'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;



const FormPage: NextPage = () => {
    return (<ComponentContextProvider component={form} baseComponents={content}>
        <Head>
            <title>{`${form.componentTag} Component`}</title>
            <meta name="description" content={`${form.componentTag} represents a document section containing interactive controls for submitting.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents a document section containing interactive controls for submitting.
                </p>
                <p>
                    Note: The default styling of the <TheComponentLink /> is just <code>{'display: block'}</code> with some basic styling.<br />
                    <em>In real world</em>, you should create <code>{'<YourForm>'}</code> (based on <TheComponentLink />) with appropriate styling for better look.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview stretch={false}>
                    <Form theme='primary' />
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <VariantProperties>
                <SizeProperty>
                    <Preview stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <Form
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Form
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Form
                                key={index}
                                theme={themeName}
                                enableValidation={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Form
    theme='${themeName}'
    enableValidation={false}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Form
                                key={index}
                                theme={themeName}
                                enableValidation={false}
                                gradient={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Form
    theme='${themeName}'
    enableValidation={false}
    gradient={true}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Form
                                key={index}
                                theme={themeName}
                                enableValidation={false}
                                outlined={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Form
    theme='${themeName}'
    enableValidation={false}
    outlined={true}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Form
                                key={index}
                                theme={themeName}
                                enableValidation={false}
                                mild={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Form
    theme='${themeName}'
    enableValidation={false}
    mild={false}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <Form
                                key={index}
                                theme={themeName}
                                enableValidation={false}
                                nude={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Form
    theme='${themeName}'
    enableValidation={false}
    nude={true}
    style={{ display: 'flex, gap: '1rem' }}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnableValidationProperty />
                <IsValidProperty>
                    <Preview>
                        <Form
                            theme='primary'
                            enableValidation={true}
                            isValid={null}
                        />
                        <Form
                            theme='primary'
                            enableValidation={true}
                            isValid={true}
                        />
                        <Form
                            theme='primary'
                            enableValidation={true}
                            isValid={false}
                        />
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Form
    theme='primary'
    enableValidation={true}
    isValid={null}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
<Form
    theme='primary'
    enableValidation={true}
    isValid={true}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
<Form
    theme='primary'
    enableValidation={true}
    isValid={false}
>
    <TextInput placeholder='username' required />
    <EmailInput placeholder='your@email.com' />
    <Button type='submit'>Submit</Button>
</Form>
`
                    }</TypeScriptCode>
                </IsValidProperty>
                <InheritValidationProperty />
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animValid</code>
                                <p>An animation represents <em>validating animation</em>, a transition from <strong>neutral/invalid</strong> to <strong>valid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animInvalid</code>
                                <p>An animation represents <em>invalidating animation</em>, a transition from <strong>neutral/valid</strong> to <strong>invalid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animUnvalid</code>
                                <p>An animation represents <em>de-validating animation</em>, a transition from <strong>valid</strong> to <strong>neutral/invalid</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animUninvalid</code>
                                <p>An animation represents <em>de-invalidating animation</em>, a transition from <strong>invalid</strong> to <strong>neutral/valid</strong>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {forms, formValues} from '@reusable-ui/form';

forms.opacity = 0.5;
console.log('opacity variable name: ', forms.opacity);
console.log('opacity variable value: ', formValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default FormPage
