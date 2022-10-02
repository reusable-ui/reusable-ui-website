import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AccordionItem, Button, Accordion, Tooltip } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import styles from '../styles/About.module.scss'
import { Section, SubSection } from '../../components/Section'
import * as packages from '../../packages/packageList'



const Components: NextPage = () => {
    return (<>
        <Head>
            <title>About Reusable-UI</title>
            <meta name="description" content="A short history about Reusable-UI libs" />
        </Head>
        <Section title='Components'>
            <p>
                Here the list of Reusable-UI&apos;s <em>official</em> components:
            </p>
            <SubSection title='Base Components'>
                <p>
                    Provides a <strong>basic layout</strong> and <strong>interacting feedbacks</strong> for creating <em>real</em> components.
                </p>
                <p>
                    In <em>most cases</em>, you should not use these component directly. Except for {packages.generic.packageDisplay} and {packages.basic.packageDisplay}.
                </p>
                <p>
                    These <em>abstract components</em> are intended for <em>component developers</em> to create their own components.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.generic.packageDisplay}>
                        <p>
                            An unstyled <strong>generic element</strong>. It governs the semantics, classes, refs and more.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.basic.packageDisplay}>
                        <p>
                            A <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortDisplay}, {packages.themable.packageShortDisplay}, {packages.gradientable.packageShortDisplay}, {packages.outlineable.packageShortDisplay}, {packages.mildable.packageShortDisplay}, and {packages.nudible.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.indicator.packageDisplay}>
                        <p>
                            A <strong>simple box</strong> layout component with built-in variants and indication states: {packages.disableable.packageShortDisplay} and {packages.activatable.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.control.packageDisplay}>
                        <p>
                            An interactive <strong>simple box</strong> layout component with built-in variants, states, and interaction states: {packages.focusable.packageShortDisplay} and {packages.interactable.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.actionControl.packageDisplay}>
                        <p>
                            A clickable <strong>simple box</strong> layout component with built-in variants, states, and {packages.clickable.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.editableControl.packageDisplay}>
                        <p>
                            An editable <strong>simple box</strong> layout component with built-in variants, states, and {packages.invalidable.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.editableTextControl.packageDisplay}>
                        <p>
                            A generic <strong>text editor</strong> layout component with built-in variants, states, and {packages.validationIcon.packageShortDisplay}.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Base Content Components'>
                <p>
                    Provides a <strong>content friendly layout</strong> for containing media elements such as <strong>paragraph</strong>, <strong>images</strong>, <strong>videos</strong>, etc and dividing the content&apos; sections.
                </p>
                <p>
                    You can create your <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, etc by modifying these components.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.container.packageDisplay}>
                        <p>
                            A generic container with <strong>responsive padding width</strong> based on browser&apos;s width.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.content.packageDisplay}>
                        <p>
                            A generic <strong>media container</strong> with pre-formatted media elements such as <strong>images</strong>, <strong>videos</strong>, etc.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
        </Section>
    </>);
}

export default Components
