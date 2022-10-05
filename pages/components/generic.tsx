import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../../components/Section'
import { generic } from '../../packages/packageList'
import { SemanticProperties } from '../../properties/sections/semanticProperties'
import { GlobalProperties, ClassProperties, OnProperties } from '../../properties/sections/genericProperties'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'



const GenericPage: NextPage = () => {
    return (<ComponentContextProvider component={generic}>
        <Head>
            <title>{`${generic.componentTag} Component`}</title>
            <meta name="description" content={`${generic.componentTag} is an unstyled generic element. It governs the semantics, classes, refs and more.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is an unstyled generic element. It governs the semantics, classes, refs and more.
            </p>
            <SemanticProperties />
            <GlobalProperties />
            <ClassProperties />
            <OnProperties />
        </Section>
    </ComponentContextProvider>);
}

export default GenericPage
