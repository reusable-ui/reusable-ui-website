import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { HeroSection, Main, Section } from '../components/sections/sections'
import { ButtonIcon as Button } from '@reusable-ui/components'
import { ExtLink } from '../components/ExtLink'



const Home: NextPage = () => {
    return (<>
        <Head>
            <title>Reusable-UI - A React component library for building sites quickly</title>
            <meta name="description" content="Reusable-UI - A React component library for building sites quickly. Reuse the components, save your time now and later." />
        </Head>
        
        <Main nude={true}>
            <HeroSection theme='primary' className={styles.hero}>
                <h1 className='display-4'>Reusable-UI</h1>
                <p className='display-6'>Reuse the components,<br />save your time now and next</p>
                <div className='actions'>
                    <Button icon='directions_run' theme='primary' size='lg' gradient={true}>
                        <Link href='/guide-create-simple-app'>Get Started</Link>
                    </Button>
                </div>
            </HeroSection>
            <Section className={styles.features}>
                <Section title='Reusability'>
                    <p>Our primary goal is reuse our/your components. We save our time together.</p>
                    <p>By modularizing the (sub) components and (sub) stylesheets, the chance of reusability increases.</p>
                </Section>
                <Section title='Customizable'>
                    <p>We expose APIs for customizing each component.</p>
                    <p>The component configuration is just a collection of <em>css variable</em>.<br />
                        No compilation needed for applying the changes, <em>instantly updated!</em>
                    </p>
                </Section>
                <Section title='Themable'>
                    <p>All our component have a shared configuration via <em>css variables</em>.</p>
                    <p>Edit the theme in one place, all the components will be synched in harmoniously.</p>
                </Section>
                <Section title='Intellisense Support'>
                    <p>Written in TypeScript (superset of JavaScript).</p>
                    <p>Supports autocomplete in popular code editor like VS Code.</p>
                </Section>
                <Section title='Open Source'>
                    <p>You can freely to use, modify or re-publish your with your own components.</p>
                    <p>All our codes are available on <ExtLink dofollow={true} href='https://github.com/reusable-ui'>GitHub</ExtLink>.</p>
                </Section>
                <Section title='Look This Site!'>
                    <p>This site is made from our <strong>Reusable-UI</strong> components!</p>
                    <p>Built on top NextJS + Reusable-UI.</p>
                </Section>
            </Section>
        </Main>
    </>);
}
export default Home
