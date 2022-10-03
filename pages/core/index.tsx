import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AccordionItem, Button, Accordion, Tooltip } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import styles from '../styles/About.module.scss'
import { Section, SubSection } from '../../components/Section'
import * as packages from '../../packages/packageList'



const Core: NextPage = () => {
    return (<>
        <Head>
            <title>Reusable-UI Core</title>
            <meta name="description" content="A short history about Reusable-UI libs" />
        </Head>
        <Section title='Reusable-UI Core'>
            <p>
                {packages.core.packageLink} is a building block (framework) for making any {packages.components.packageLink}.
                It also governs the interaction between components.
            </p>
            <p>
                This core is intended for <em>component developers</em>.
                So, if you want to create <strong>a new kind of component</strong> which is <em>compatible</em> with {packages.components.packageLink},
                this core is a great starting point.
            </p>
            <p>
                Don&apos;t have an idea to create a Reusable-UI component?
                Don&apos;t worry, we made <Button theme='primary' buttonStyle='link'><Link href='/guide-create-component'>a tutorial creating a Reusable-UI component</Link></Button> for you.
            </p>
            <SubSection title='Reusable-UI Configs'>
                <p>
                    Stores a <strong>global confuguration</strong> to be shared between components.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.colors.packageDisplay}>
                        <p>
                            A centralized <strong>color management system</strong> using css variables (css custom properties).
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.borders.packageDisplay}>
                        <p>
                            A centralized <strong>border (stroke) management system</strong> using css variables (css custom properties).
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.spacers.packageDisplay}>
                        <p>
                            A centralized <strong>spacer (margins/paddings/gaps) management system</strong> using css variables (css custom properties).
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.breakpoints.packageDisplay}>
                        <p>
                            A centralized <strong>responsive management system</strong> based on browser&apos;s screen width.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.typos.packageDisplay}>
                        <p>
                            A centralized <strong>typography management system</strong> using css variables (css custom properties).
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Reusable-UI Utilities'>
                <p>
                    Provides <strong>common utility functions</strong> to be shared between components, so the overall bundle size is minimal.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.numbers.packageDisplay}>
                        <p>
                            A set of <strong>numeric utility functions</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.nodes.packageDisplay}>
                        <p>
                            A set of <strong>React node utility functions</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.stripouts.packageDisplay}>
                        <p>
                            Removes <strong>browser&apos;s default stylesheet</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.layouts.packageDisplay}>
                        <p>
                            A set of <strong>common layout mixins</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.hooks.packageDisplay}>
                        <p>
                            A set of <strong>complement React helper hooks</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.semantics.packageDisplay}>
                        <p>
                            A <strong>semantic management system</strong> for React components.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.accessibilities.packageDisplay}>
                        <p>
                            An <strong>accessibility management system</strong> for react components.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.validations.packageDisplay}>
                        <p>
                            A <strong>validation management system</strong> for react components.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.focuses.packageDisplay}>
                        <p>
                            A set of <strong>focusing-component functions</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.clientSides.packageDisplay}>
                        <p>
                            A set of <strong>client-side-link functions</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.navigations.packageDisplay}>
                        <p>
                            A set of <strong>navigation functions</strong>.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
        </Section>
    </>);
}

export default Core
