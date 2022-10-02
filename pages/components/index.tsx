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
        <Section title='Reusable-UI Components'>
            <p>
                This library contains a collection of our <em>official</em> common components.
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
            <SubSection title='Simple Components'>
                <p>
                    Represent a simple structured component to perform simple tasks.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.visuallyHidden.packageDisplay}>
                        <p>
                            A wrapper component for hidding its contents (children) while still accessible to assistive technologies.
                        </p>
                        <p>
                            In <em>most cases</em>, you won&apos;t need this component. Use <code>aria-label</code> whenever possible.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.icon.packageDisplay}>
                        <p>
                            Displays an emoticon or other icon to attract user&apos; attention.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.label.packageDisplay}>
                        <p>
                            Represents a caption for the corresponding neighboring component.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.button.packageDisplay}>
                        <p>
                            Represents a caption for the corresponding neighboring component.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.button.packageDisplay}>
                        <p>
                            A button component for initiating an action.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.toggleButton.packageDisplay}>
                        <p>
                            A button with toggleable {packages.activatable.packageShortDisplay} state.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.navButton.packageDisplay}>
                        <p>
                            A clickable button for client-side navigation with automatically {packages.activatable.packageShortDisplay} at correspoding <em>url</em>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.buttonIcon.packageDisplay}>
                        <p>
                            A button component with an additional icon.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.closeButton.packageDisplay}>
                        <p>
                            A button for dismissing content.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.form.packageDisplay}>
                        <p>
                            Represents a document section containing interactive controls for submitting.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.input.packageDisplay}>
                        <p>
                            An interactive control in order to accept data from the user.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.range.packageDisplay}>
                        <p>
                            An interactive control in order to accept numeric value within a specified range.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.check.packageDisplay}>
                        <p>
                            An interactive control in order to select multiple options.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.radio.packageDisplay}>
                        <p>
                            An interactive control in order to select single option.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.hamburgerMenuButton.packageDisplay}>
                        <p>
                            A toggleable button for showing/hiding menu in {packages.navbar.packageDisplay}.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Layout Components'>
                <p>
                    Displays a complex structural layout.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.list.packageDisplay}>
                        <p>
                            Represents a series of content.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.card.packageDisplay}>
                        <p>
                            A content container, with optional header and footer.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.masonry.packageDisplay}>
                        <p>
                            A container in which the items are laid out one after the other in the inline (or block) direction.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Status Components'>
                <p>
                    Conditionally displays a status content.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.popup.packageDisplay}>
                        <p>
                            A generic element with dynamic visibility (show/hide) in popup fashion.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.badge.packageDisplay}>
                        <p>
                            Represents counters or labels.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.busy.packageDisplay}>
                        <p>
                            Indicates a loading state of page.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Notification Components'>
                <p>
                    Conditionally displays a message.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.alert.packageDisplay}>
                        <p>
                            A UI for displaying feedback messages.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.tooltip.packageDisplay}>
                        <p>
                            Represents advisory information related to the element it belongs.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Menu Components'>
                <p>
                    Displays a context menu.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.collapse.packageDisplay}>
                        <p>
                            A generic element with dynamic visibility (show/hide) in sliding fashion.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.dropdown.packageDisplay}>
                        <p>
                            Overlays contextual element such as lists, menus, and more.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.dropdownButton.packageDisplay}>
                        <p>
                            A {packages.button.packageDisplay} component with a custom context menu.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.dropdownList.packageDisplay}>
                        <p>
                            Overlays a {packages.list.packageDisplay} as context menu.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.dropdownListButton.packageDisplay}>
                        <p>
                            A {packages.button.packageDisplay} component with a {packages.dropdownList.packageDisplay} as context menu.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Dialog Components'>
                <p>
                    Displays a popup dialog with additionally blocking the UI behind it.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.modal.packageDisplay}>
                        <p>
                            Overlays a dialog to the entire site's page.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.modalCard.packageDisplay}>
                        <p>
                            Overlays a {packages.card.packageDisplay} as dialog to the entire site's page.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.modalSide.packageDisplay}>
                        <p>
                            Overlays a {packages.card.packageDisplay} as dialog to the side of site's page.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Composite Components'>
                <p>
                    Represent a complex structured component to perform a specific task.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.progress.packageDisplay}>
                        <p>
                            A custom progress bar featuring support for stacked bars, animated backgrounds, text labels, and horizontal/vertical orientation.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.group.packageDisplay}>
                        <p>
                            Groups a list of components as a single component.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.nav.packageDisplay}>
                        <p>
                            A navigation component to navigate between pages.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.navscroll.packageDisplay}>
                        <p>
                            A navigation component to navigate within current page, based on scroll position.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.accordion.packageDisplay}>
                        <p>
                            Represents a series of toggleable collapsing content.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.exclusiveAccordion.packageDisplay}>
                        <p>
                            Represents a series of toggleable collapsing content with only one expanding content allowed.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.carousel.packageDisplay}>
                        <p>
                            A slideshow component for cycling through images, slides, or another elements.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.navbar.packageDisplay}>
                        <p>
                            A responsive navigation header. Supports for branding, navigation and more.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.details.packageDisplay}>
                        <p>
                            A foldable content widget.
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
            <SubSection title='Utility Components'>
                <p>
                    Provides non-visual components to perform a specific function.
                </p>
                <Accordion theme='primary'>
                    <AccordionItem label={packages.useElementCssSize.packageDisplay}>
                        <p>
                            A utility component for fetching the dimension of configured target element and then stored to a configured <em>css variable</em>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.useWindowCssSize.packageDisplay}>
                        <p>
                            A utility component for fetching the dimension of browser&apos;s window and then stored to a configured <em>css variable</em>.
                        </p>
                    </AccordionItem>
                    <AccordionItem label={packages.responsiveProvider.packageDisplay}>
                        <p>
                            A utility component for modifying the child components based on the available space (responsive).
                        </p>
                    </AccordionItem>
                </Accordion>
            </SubSection>
        </Section>
    </>);
}

export default Components
