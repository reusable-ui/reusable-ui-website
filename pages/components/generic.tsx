import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../../components/Section'
import { generic } from '../../packages/packageList'
import { SemanticProperties } from '../../properties/sections/semanticProperties'
import { GlobalProperties, ClassProperties, OnProperties } from '../../properties/sections/genericProperties'



const GenericPage: NextPage = () => {
    return (<>
        <Head>
            <title>{`${generic.componentTag} Component`}</title>
            <meta name="description" content={`${generic.componentTag} is an unstyled generic element. It governs the semantics, classes, refs and more.`} />
        </Head>
        <Section title={<>{generic.packageDisplay} Component</>}>
            <p>
                {generic.packageDisplay} is an unstyled generic element. It governs the semantics, classes, refs and more.
            </p>
            <SemanticProperties />
            <GlobalProperties />
            <ClassProperties />
            <OnProperties />
        </Section>
    </>);
}

export default GenericPage
