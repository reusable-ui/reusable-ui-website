import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { GenericSection } from '../components/Section'
import { ButtonIcon as Button } from '@reusable-ui/components'



const Home: NextPage = () => {
    return (<>
        <Head>
            <title>Reusable-UI - A React component library for building sites quickly</title>
            <meta name="description" content="Reusable-UI - A React component library for building sites quickly. Reuse the components, save your time now and later." />
        </Head>
        
        <GenericSection theme='primary'>
            <article className={styles.hero}>
                <h1 className='display-4'>Reusable-UI</h1>
                <p className='display-6'>Reuse the components,<br />save your time now and next</p>
                <div className='actions'>
                    <Button icon='directions_run' theme='primary' size='lg'>
                        <Link href='/guide-create-simple-app'>Get Started</Link>
                    </Button>
                </div>
            </article>
        </GenericSection>
        <GenericSection>
            <article className={styles.features}>
                <section>
                    <h3 className='h5'>Reusability</h3>
                    <p>Our primary goal is reuse our/your components. We save our time together.</p>
                    <p>By modularizing the (sub) components and (sub) stylesheets, the chance of reusability increases.</p>
                </section>
                <section>
                    <h3 className='h5'>Customizable</h3>
                    <p>We expose APIs for customizing each component.</p>
                    <p>The component configuration is just a collection of <em>css variable</em>.<br />
                        No compilation needed for applying the changes, <em>instantly updated!</em>
                    </p>
                </section>
                <section>
                    <h3 className='h5'>Themable</h3>
                    <p>All our component have a shared configuration via <em>css variables</em>.</p>
                    <p>Edit the theme in one place, all the components will be synched in harmoniously.</p>
                </section>
                <section>
                    <h3 className='h5'>Intellisense Support</h3>
                    <p>Written in TypeScript (superset of JavaScript).</p>
                    <p>Supports autocomplete in popular code editor like VS Code.</p>
                </section>
                <section>
                    <h3 className='h5'>Open Source</h3>
                    <p>You can freely to use, modify or re-publish your with your own components.</p>
                    <p>All our codes are available on <Button buttonStyle='link' theme='primary' href='https://github.com/reusable-ui' target='_blank'>GitHub</Button>.</p>
                </section>
                <section>
                    <h3 className='h5'>Look This Site!</h3>
                    <p>This site is made from our <strong>Reusable-UI</strong> components!</p>
                    <p>Built on top NextJS + Reusable-UI.</p>
                </section>
            </article>
        </GenericSection>
    </>);
}
export default Home
