import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonIcon as Button } from '@reusable-ui/components'
import { BashCode } from '../components/Code'
import React from 'react'
import { Section, SubSection } from '../components/Section'



const Installation: NextPage = () => {
    return (<>
        <Head>
            <title>Install Reusable-UI</title>
            <meta name="description" content="Install Reusable-UI for your React/NextJS/Gatsby app." />
        </Head>
        
        <Section title='Install Reusable-UI'>
            <p>
                There are 2 major parts of Reusable-UI: <strong>Reusable-UI framework</strong> and <strong>Reusable-UI components</strong>.
            </p>
            <SubSection title='Reusable-UI Framework'>
                <p>
                    <strong>Reusable-UI framework</strong> is a building block for making any Reusable-UI components.
                    It also governs the interaction between components.
                </p>
                <p>
                    This framework is intended for <em>component developers</em>.
                    So, if you want to create <strong>a new kind of component</strong> which is <em>compatible</em> with Reusable-UI components,
                    this framework is a great starting point.
                </p>
                <p>
                    To install the <strong>Reusable-UI framework</strong>, open the terminal window on your code editor and type:
                </p>
                <BashCode collapsable={false}>{`
# npm:
npm install @reusable-ui/core

# yarn:
yarn add @reusable-ui/core

# pnpm:
pnpm add @reusable-ui/core
                `}</BashCode>
                <p>
                    Don&apos;t have an idea to create a Reusable-UI component?
                    Don&apos;t worry, we made <Button theme='primary' buttonStyle='link'><Link href='/guide-create-component'>a tutorial creating a Reusable-UI component</Link></Button> for you.
                </p>
            </SubSection>
            <SubSection title='Reusable-UI Components'>
                <p>
                    <strong>Reusable-UI components</strong> contains a collection of our official common components.
                </p>
                <p>
                    This library (collection) is intended for <em>(react) web developers</em>.
                    So, if you want to create a website without the hassle of creating the required components,
                    our component library can help save your time.
                </p>
                <p>
                    Of course, our collection is limited. You may still need <em>Reusable-UI framework</em> to create a more specific component for your needs.
                </p>
                <SubSection title='Install All Reusable-UI Components' titleTag='h4'>
                    <p>
                        To install the <strong>whole</strong> Reusable-UI components, open the terminal window on your code editor and type:
                    </p>
                    <BashCode collapsable={false}>{`
# npm:
npm install @reusable-ui/components

# yarn:
yarn add @reusable-ui/components

# pnpm:
pnpm add @reusable-ui/components
                    `}</BashCode>
                    <p>
                        Any component you don&apos;t use will automatically removed (tree shake) by Webpack/Parcel/Rollup or similar tool when you deploy your (React) app.
                    </p>
                </SubSection>
                <SubSection title='Install Specific Reusable-UI Component' titleTag='h4'>
                    <p>
                        To install a <strong>specific</strong> Reusable-UI component, please browse <Button theme='primary' buttonStyle='link'><Link href='/libs'>Reusable-UI component library</Link></Button> and choose the component you want.
                    </p>
                </SubSection>
            </SubSection>
        </Section>
    </>);
}
export default Installation
