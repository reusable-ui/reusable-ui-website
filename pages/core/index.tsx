import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Accordion } from '../../components/Accordion'
import { HeroSection, Main, Section } from '../../components/sections/sections'
import * as packages from '../../packages/packageList'
import { IntLink } from '../../components/IntLink'
import { PackageItem } from '../../packages/PackageItem'



const Core: NextPage = () => {
    return (<>
        <Head>
            <title>Reusable-UI Core</title>
            <meta name="description" content="A short history about Reusable-UI libs" />
        </Head>
        <Main nude={true}>
            <HeroSection title='Reusable-UI Core'>
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
                    Don&apos;t worry, we made <IntLink to='/guide-create-component'>a tutorial creating a Reusable-UI component</IntLink> for you.
                </p>
            </HeroSection>
            <Section title='Reusable-UI Configs'>
                <p>
                    Stores a <strong>global confuguration</strong> to be shared between components.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.colors}>
                        <p>
                            A centralized <strong>color management system</strong> using css variables (css custom properties).
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.borders}>
                        <p>
                            A centralized <strong>border (stroke) management system</strong> using css variables (css custom properties).
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.spacers}>
                        <p>
                            A centralized <strong>spacer (margins/paddings/gaps) management system</strong> using css variables (css custom properties).
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.breakpoints}>
                        <p>
                            A centralized <strong>responsive management system</strong> based on browser&apos;s screen width.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.typos}>
                        <p>
                            A centralized <strong>typography management system</strong> using css variables (css custom properties).
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Reusable-UI Utilities'>
                <p>
                    Provides <strong>common utility functions</strong> to be shared between components, so the overall bundle size is minimal.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.numbers}>
                        <p>
                            A set of <strong>numeric utility functions</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.nodes}>
                        <p>
                            A set of <strong>React node utility functions</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.stripouts}>
                        <p>
                            Removes <strong>browser&apos;s default stylesheet</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.layouts}>
                        <p>
                            A set of <strong>common layout mixins</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.hooks}>
                        <p>
                            A set of <strong>complement React helper hooks</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.semantics}>
                        <p>
                            A <strong>semantic management system</strong> for React components.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.accessibilities}>
                        <p>
                            An <strong>accessibility management system</strong> for react components.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.validations}>
                        <p>
                            A <strong>validation management system</strong> for react components.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.focuses}>
                        <p>
                            A set of <strong>focusing-component functions</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.clientSides}>
                        <p>
                            A set of <strong>client-side-link functions</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.navigations}>
                        <p>
                            A set of <strong>navigation functions</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.animatingState}>
                        <p>
                            A hook for creating <strong>animating state</strong>.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Reusable-UI Features'>
                <p>
                    The <strong>managed css properties</strong> of the component&apos;s stylesheet.
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
                    <PackageItem package={packages.background}>
                        <p>
                            <strong>Background</strong> stuff of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.foreground}>
                        <p>
                            <strong>Foreground</strong> (text color) stuff of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.border}>
                        <p>
                            <strong>Border</strong> (stroke) stuff of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.ring}>
                        <p>
                            <strong>Ring</strong> (focus indicator) color of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.animation}>
                        <p>
                            <strong>Animation</strong> stuff of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.padding}>
                        <p>
                            <strong>Padding</strong> (inner spacing) stuff of UI.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Reusable-UI Capabilities'>
                <p>
                    The <strong>capabilities</strong> of the component <strong>appearance</strong> or <strong>behavior</strong>.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.floatable}>
                        <p>
                            A capability of UI to <strong>float/overlay on the top/beside</strong> the another UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.groupable}>
                        <p>
                            <strong>Groups</strong> a list of UIs as a <strong>single UI</strong>.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Reusable-UI Variants'>
                <p>
                    The <strong>alternative appearances</strong> of the component layout without changing the component&apos;s functionality.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.orientationable}>
                        <p>
                            A capability of UI to <strong>rotate its layout</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.resizable}>
                        <p>
                            <strong>Size options</strong> of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.themable}>
                        <p>
                            <strong>Color options</strong> of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.gradientable}>
                        <p>
                            <strong>Gradient variant</strong> of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.outlineable}>
                        <p>
                            <strong>Outlined variant</strong> (background-less) of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.mildable}>
                        <p>
                            <strong>Mild variant</strong> (soft color) of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.nudible}>
                        <p>
                            <strong>Nude variant</strong> (background-less + border-less + padding-less) of UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.colorable}>
                        <p>
                            <strong>Colorize</strong> the UI based on <strong>its theme</strong> or the <strong>parent&apos;s background</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.basicVariants}>
                        <p>
                            Copies the <strong>basic variants</strong> from <strong>related  component</strong>.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Reusable-UI States'>
                <p>
                    The <strong>conditions</strong> of the component <strong>behavior</strong> or <strong>functionality</strong>.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.excitable}>
                        <p>
                            A capability of UI to <strong>highlight itself</strong> to attract user&apos;s attention.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.collapsible}>
                        <p>
                            A capability of UI to <strong>expand/reduce its size</strong> or <strong>toggle the visibility</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.disableable}>
                        <p>
                            A capability of UI to be <strong>disabled</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.activatable}>
                        <p>
                            A capability of UI to be <strong>highlighted/selected/activated</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.focusable}>
                        <p>
                            A capability of UI to be <strong>focused</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.interactable}>
                        <p>
                            Adds an <strong>interactive feel</strong> to a UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.clickable}>
                        <p>
                            A capability of UI to be <strong>clicked</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.activeAsClick}>
                        <p>
                            Shows the UI as <strong>clicked</strong> (pressed) when <strong>activated</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.invalidable}>
                        <p>
                            A possibility of UI having an <strong>invalid state</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.checkable}>
                        <p>
                            A capability of UI to be <strong>checked</strong>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.validationIcon}>
                        <p>
                            An <strong>icon</strong> for indicating a <strong>validity status</strong>.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
        </Main>
    </>);
}

export default Core
