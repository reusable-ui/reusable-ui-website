import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Accordion } from '../../components/Accordion'
import { HeroSection, Main, Section } from '../../components/Section'
import * as packages from '../../packages/packageList'
import { PackageItem } from '../../packages/PackageItem'



const Components: NextPage = () => {
    return (<>
        <Head>
            <title>Reusable-UI Components</title>
            <meta name="description" content="A short history about Reusable-UI libs" />
        </Head>
        <Main nude={true}>
            <HeroSection title='Reusable-UI Components'>
                <p>
                    {packages.components.packageLink} library contains a collection of our <em>official</em> common components.
                </p>
                <p>
                    This library (collection) is intended for <em>(react) web developers</em>.
                    So, if you want to create a website without the hassle of creating the required components,
                    our component library can help save your time.
                </p>
                <p>
                    Of course, our collection is limited. You may still need {packages.core.packageLink} to create a more specific component for your needs.
                </p>
            </HeroSection>
            <Section title='Base Components'>
                <p>
                    Provides a <strong>basic layout</strong> and <strong>interacting feedbacks</strong> for creating <em>real</em> components.
                </p>
                <p>
                    In <em>most cases</em>, you should not use these component directly. Except for {packages.generic.packageLink} and {packages.basic.packageLink}.
                </p>
                <p>
                    These <em>abstract components</em> are intended for <em>component developers</em> to create their own components.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.generic}>
                        <p>
                            An unstyled <strong>generic element</strong>. It governs the semantics, classes, refs and more.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.basic}>
                        <p>
                            A <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, {packages.gradientable.packageShortLink}, {packages.outlineable.packageShortLink}, {packages.mildable.packageShortLink}, and {packages.nudible.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.indicator}>
                        <p>
                            A <strong>simple box</strong> layout component with built-in variants and indication states: {packages.disableable.packageShortLink} and {packages.activatable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.control}>
                        <p>
                            An interactive <strong>simple box</strong> layout component with built-in variants, states, and interaction states: {packages.focusable.packageShortLink} and {packages.interactable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.actionControl}>
                        <p>
                            A clickable <strong>simple box</strong> layout component with built-in variants, states, and {packages.clickable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.editableControl}>
                        <p>
                            An editable <strong>simple box</strong> layout component with built-in variants, states, and {packages.invalidable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.editableTextControl}>
                        <p>
                            A generic <strong>text editor</strong> layout component with built-in variants, states, and {packages.validationIcon.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.editableActionControl}>
                        <p>
                            An editable &amp; clickable <strong>simple box</strong> layout component with built-in variants, states, {packages.invalidable.packageShortLink} and {packages.clickable.packageShortLink}.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Base Content Components'>
                <p>
                    Provides a <strong>content friendly layout</strong> for containing media elements such as <strong>paragraph</strong>, <strong>images</strong>, <strong>videos</strong>, etc and dividing the content&apos; sections.
                </p>
                <p>
                    You can create your <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, etc by modifying these components.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.container}>
                        <p>
                            A generic container with <strong>responsive padding width &amp; height</strong> based on browser&apos;s width at certain {packages.breakpoints.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.content}>
                        <p>
                            A generic <strong>media container</strong> with pre-formatted media elements such as <strong>images</strong>, <strong>videos</strong>, etc.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Simple Components'>
                <p>
                    Represent a simple structured component to perform simple tasks.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.icon}>
                        <p>
                            Displays an <strong>emoticon</strong> or other icon to attract user&apos;s attention with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, and {packages.mildable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.label}>
                        <p>
                            Represents a <strong>caption</strong> for the corresponding neighboring component.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.button}>
                        <p>
                            A button component for initiating an action.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.toggleButton}>
                        <p>
                            A button with toggleable {packages.activatable.packageShortLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.navButton}>
                        <p>
                            A button for client-side navigation with automatically toggling-on the {packages.activatable.packageShortLink} at correspoding <em>url</em>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.buttonIcon}>
                        <p>
                            A button component with an additional icon.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.closeButton}>
                        <p>
                            A button for dismissing content.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.form}>
                        <p>
                            Represents a document section containing interactive controls for submitting.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.input}>
                        <p>
                            An interactive control in order to accept data from the user.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.range}>
                        <p>
                            An interactive control in order to accept numeric value within a specified range.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.check}>
                        <p>
                            An interactive control in order to select multiple options.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.radio}>
                        <p>
                            An interactive control in order to select single option.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.hamburgerMenuButton}>
                        <p>
                            A toggleable button for showing/hiding menu in {packages.navbar.packageLink}.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Layout Components'>
                <p>
                    Displays a complex structural layout.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.list}>
                        <p>
                            Represents a series of content.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.card}>
                        <p>
                            A content container, with optional header and footer.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.masonry}>
                        <p>
                            A container in which the items are laid out one after the other in the inline (or block) direction.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Status Components'>
                <p>
                    Conditionally displays a status content.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.popup}>
                        <p>
                            A generic element with dynamic visibility (show/hide) in popup fashion.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.badge}>
                        <p>
                            Represents counters or labels.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.busy}>
                        <p>
                            Indicates a loading state of page.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Notification Components'>
                <p>
                    Conditionally displays a message.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.alert}>
                        <p>
                            A UI for displaying feedback messages.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.tooltip}>
                        <p>
                            Represents advisory information related to the element it belongs.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Menu Components'>
                <p>
                    Displays a context menu.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.collapse}>
                        <p>
                            A non-visual container with dynamic visibility (show/hide) in sliding fashion.<br />
                            You need to place a visual (styled) component inside the {packages.collapse.packageLink} in order to make the appearance.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.dropdown}>
                        <p>
                            A non-visual context menu container with dynamic visibility (show/hide) in sliding fashion.<br />
                            You need to place a visual (styled) component inside the {packages.collapse.packageLink} in order to make the appearance.
                        </p>
                        <p>
                            {packages.dropdown.packageLink} is similar to {packages.collapse.packageLink} with additional handling of <kbd>esc</kbd> key and <strong>blur</strong> event to close itself.
                            Once closed, the {packages.dropdown.packageLink} restores the focus to the previously focused element.
                        </p>
                        <p>
                            {packages.dropdown.packageLink} also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside the {packages.dropdown.packageLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.dropdownButton}>
                        <p>
                            A {packages.toggleButton.packageLink} component with a {packages.dropdown.packageLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.dropdownList}>
                        <p>
                            A context menu of {packages.list.packageLink}.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.dropdownListButton}>
                        <p>
                            A {packages.toggleButton.packageLink} component with a {packages.dropdown.packageLink} of {packages.list.packageLink}.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Dialog Components'>
                <p>
                    Displays a popup dialog with additionally blocking the UI behind it.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.modal}>
                        <p>
                            Overlays a dialog to the entire site&apos;s page or entire specified section.<br />
                            You need to place a (dialog) component inside the {packages.modal.packageLink} in order to make an interactive UI.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.modalCard}>
                        <p>
                            Overlays a {packages.card.packageLink} as dialog to the entire site&apos;s page.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.modalSide}>
                        <p>
                            Overlays a {packages.card.packageLink} as dialog to the side of site&apos;s page.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Composite Components'>
                <p>
                    Represent a complex structured component to perform a specific task.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.progress}>
                        <p>
                            A custom progress bar featuring support for stacked bars, animated backgrounds, text labels, and horizontal/vertical orientation.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.group}>
                        <p>
                            Groups a list of components as a single component.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.nav}>
                        <p>
                            A navigation component to navigate between pages.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.navscroll}>
                        <p>
                            A navigation component to navigate within current page, based on scroll position.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.accordion}>
                        <p>
                            Represents a series of toggleable collapsing content.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.exclusiveAccordion}>
                        <p>
                            Represents a series of toggleable collapsing content with only one expanding content allowed.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.carousel}>
                        <p>
                            A slideshow component for cycling through images, slides, or another elements.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.navbar}>
                        <p>
                            A responsive navigation header. Supports for branding, navigation and more.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.details}>
                        <p>
                            A foldable content widget.
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
            <Section title='Utility Components'>
                <p>
                    Provides non-visual components to perform a specific function.
                </p>
                <Accordion theme='primary'>
                    <PackageItem package={packages.visuallyHidden}>
                        <p>
                            A wrapper component for hidding its contents (children) while still accessible to assistive technologies.
                        </p>
                        <p>
                            In <em>most cases</em>, you won&apos;t need this component. Use <code>aria-label</code> whenever possible.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.useElementCssSize}>
                        <p>
                            A utility component for fetching the dimension of configured target element and then stored to a configured <em>css variable</em>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.useWindowCssSize}>
                        <p>
                            A utility component for fetching the dimension of browser&apos;s window and then stored to a configured <em>css variable</em>.
                        </p>
                    </PackageItem>
                    <PackageItem package={packages.responsiveProvider}>
                        <p>
                            A utility component for modifying the child components based on the available space (responsive).
                        </p>
                    </PackageItem>
                </Accordion>
            </Section>
        </Main>
    </>);
}

export default Components
