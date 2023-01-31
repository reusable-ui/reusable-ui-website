import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Main } from '../components/sections/Main'
import { Section } from '../components/sections/Section'



const GuideCreateSimpleApp: NextPage = () => {
    return (<>
        <Head>
            <title>Create Simple App using Reusable-UI</title>
            <meta name="description" content="Coming soon." />
        </Head>
        
        <Main title='Create Simple App using Reusable-UI'>
            <p>
                Coming soon! Please come back later.
            </p>
            <Section title='Foo Section'>
                <p>
                    Under construction.
                </p>
            </Section>
        </Main>
    </>);
}
export default GuideCreateSimpleApp
