import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, Main } from '../../components/Section'
import { generic } from '../../packages/packageList'
import { SemanticProperties } from '../../properties/sections/semanticProperties'
import { GlobalProperties, ClassProperties, OnProperties } from '../../properties/sections/genericProperties'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'



const GenericPage: NextPage = () => {
    return (<ComponentContextProvider component={generic}>
        <Head>
            <title>{`${generic.componentTag} Component`}</title>
            <meta name="description" content={`${generic.componentTag} is an unstyled generic element. It governs the semantics, classes, refs and more.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>}>
                <p>
                    <TheComponentLink /> is an unstyled generic element. It governs the semantics, classes, refs and more.
                </p>
            </HeroSection>
            <ComponentInstallation />
            <SemanticProperties />
            <GlobalProperties />
            <ClassProperties />
            <OnProperties />
        </Main>
    </ComponentContextProvider>);
}

export default GenericPage
