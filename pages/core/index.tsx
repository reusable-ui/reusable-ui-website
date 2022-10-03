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
            <SubSection title='Reusable-UI Features'>
                <p>
                    Adds a <strong>managed css property</strong> to component&apos;s stylesheet.
                </p>
                <p>
                    This managed properties allow the system (framework) to <strong>override</strong> them, if needed.
                    So the appearance is <strong>in sync</strong> with the surrounding components.
                </p>
                <p>
                    Some css properties are <strong>reserved to our system</strong>.
                    So, please <strong>don&apos;t</strong> write them <strong>directly</strong>, in order to the system to <strong>override</strong> them.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.background.packageDisplay}>
                        <p>
                            <strong>Background</strong> stuff of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.foreground.packageDisplay}>
                        <p>
                            <strong>Foreground</strong> (text color) stuff of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.border.packageDisplay}>
                        <p>
                            <strong>Border</strong> (stroke) stuff of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.ring.packageDisplay}>
                        <p>
                            <strong>Ring</strong> (focus indicator) color of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.animation.packageDisplay}>
                        <p>
                            <strong>Animation</strong> stuff of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.padding.packageDisplay}>
                        <p>
                            <strong>Padding</strong> (inner spacing) stuff of UI.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Reusable-UI Capabilities'>
                <p>
                    Adds a <strong>particular capability</strong> to component.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.floatable.packageDisplay}>
                        <p>
                            A capability of UI to <strong>float/overlay on the top/beside</strong> the another UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.groupable.packageDisplay}>
                        <p>
                            <strong>Groups</strong> a list of UIs as a <strong>single UI</strong>.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Reusable-UI Variants'>
                <p>
                    The <strong>alternative appearances</strong> of the UI without changing the functionality.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.orientationable.packageDisplay}>
                        <p>
                            A capability of UI to <strong>rotate its layout</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.resizable.packageDisplay}>
                        <p>
                            <strong>Size options</strong> of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.themable.packageDisplay}>
                        <p>
                            <strong>Color options</strong> of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.gradientable.packageDisplay}>
                        <p>
                            <strong>Gradient variant</strong> of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.outlineable.packageDisplay}>
                        <p>
                            <strong>Outlined variant</strong> (background-less) of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.mildable.packageDisplay}>
                        <p>
                            <strong>Mild variant</strong> (soft color) of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.nudible.packageDisplay}>
                        <p>
                            <strong>Nude variant</strong> (background-less + border-less + padding-less) of UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.colorable.packageDisplay}>
                        <p>
                            <strong>Colorize</strong> the UI based on <strong>its theme</strong> or the <strong>parent&apos;s background</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.basicVariants.packageDisplay}>
                        <p>
                            Copies the <strong>basic variants</strong> from <strong>related  component</strong>.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Reusable-UI States'>
                <p>
                    The <strong>specialized state</strong> of the UI.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.excitable.packageDisplay}>
                        <p>
                            A capability of UI to <strong>highlight itself</strong> to attract user's attention.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.collapsible.packageDisplay}>
                        <p>
                            A capability of UI to <strong>expand/reduce its size</strong> or <strong>toggle the visibility</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.disableable.packageDisplay}>
                        <p>
                            A capability of UI to be <strong>disabled</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.activatable.packageDisplay}>
                        <p>
                            A capability of UI to be <strong>highlighted/selected/activated</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.focusable.packageDisplay}>
                        <p>
                            A capability of UI to be <strong>focused</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.interactable.packageDisplay}>
                        <p>
                            Adds an <strong>interactive feel</strong> to a UI.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.clickable.packageDisplay}>
                        <p>
                            A capability of UI to be <strong>clicked</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.activeAsClick.packageDisplay}>
                        <p>
                            Shows the UI as <strong>clicked</strong> (pressed) when <strong>activated</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.invalidable.packageDisplay}>
                        <p>
                            A possibility of UI having an <strong>invalid state</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.checkable.packageDisplay}>
                        <p>
                            A capability of UI to be <strong>checked</strong>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.validationIcon.packageDisplay}>
                        <p>
                            An <strong>icon</strong> for indicating a <strong>validity status</strong>.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
        </Section>
    </>);
}

export default Core
