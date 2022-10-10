import type { NextPage } from 'next'
import Head from 'next/head'
import { BashCode } from '../components/Code'
import React from 'react'
import { Section } from '../components/Section'
import {core, components} from '../packages/packageList'
import { IntLink } from '../components/IntLink'
import { Tips } from '../components/Warning'



const Installation: NextPage = () => {
    return (<>
        <Head>
            <title>Install Reusable-UI</title>
            <meta name="description" content="Install Reusable-UI for your React/NextJS/Gatsby app." />
        </Head>
        
        <Section title='Install Reusable-UI'>
            <p>
                There are 2 major parts of Reusable-UI: {core.packageLink} and {components.packageLink}.
            </p>
            <Section title='Reusable-UI Core'>
                <p>
                    {core.packageLink} is a building block (framework) for making any {components.packageLink}.
                    It also governs the interaction between components.
                </p>
                <p>
                    This core is intended for <em>component developers</em>.
                    So, if you want to create <strong>a new kind of component</strong> which is <em>compatible</em> with {components.packageLink},
                    this core is a great starting point.
                </p>
                <p>
                    To install the {core.packageLink}, open the terminal window on your code editor and type:
                </p>
                <BashCode collapsible={false}>{`
# npm:
npm install @reusable-ui/core

# yarn:
yarn add @reusable-ui/core

# pnpm:
pnpm add @reusable-ui/core
                `}</BashCode>
                <p>
                    Don&apos;t have an idea to create a Reusable-UI component?
                    Don&apos;t worry, we made <IntLink to='/guide-create-component'>a tutorial creating a Reusable-UI component</IntLink> for you.
                </p>
            </Section>
            <Section title='Reusable-UI Components'>
                <p>
                    {components.packageLink} contains a collection of our official common components.
                </p>
                <p>
                    This library (collection) is intended for <em>(react) web developers</em>.
                    So, if you want to create a website without the hassle of creating the required components,
                    our component library can help save your time.
                </p>
                <p>
                    Of course, our collection is limited. You may still need {core.packageLink} to create a more specific component for your needs.
                </p>
                <Section title='Install All Reusable-UI Components'>
                    <p>
                        To install the <strong>whole</strong> {components.packageLink}, open the terminal window on your code editor and type:
                    </p>
                    <BashCode collapsible={false}>{`
# npm:
npm install @reusable-ui/components

# yarn:
yarn add @reusable-ui/components

# pnpm:
pnpm add @reusable-ui/components
                    `}</BashCode>
                    <Tips>
                        <p>
                            Any component you don&apos;t use will automatically removed (tree shake) by Webpack/Parcel/Rollup or similar tool when you deploy your (React) app.
                        </p>
                    </Tips>
                </Section>
                <Section title='Install Specific Reusable-UI Component'>
                    <p>
                        To install a <strong>specific</strong> Reusable-UI component, please browse <IntLink to='/components'>Reusable-UI component library</IntLink> and choose the component you want.
                    </p>
                </Section>
            </Section>
        </Section>
    </>);
}
export default Installation
