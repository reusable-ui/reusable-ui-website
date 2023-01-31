import React from 'react'

import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { PreviewProps, PropertySection, PropertySectionProps } from '../../components/sections/PropertySection'
import { Section } from '../../components/sections/Section'
import { TypeScriptCode } from '../../components/Code'
import { card, generic } from '../../packages/packageList'
import * as properties from '../propertyList'
import { Accordion, AccordionItem } from '../../components/Accordion';



export const ModalUiProperty = () => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <Section title='Defines the Modal-ed UI'>
            <p>
                The <TheComponentLink /> should have <strong>one child</strong> to be <strong>modal</strong>-ed.
                The child shoud be a <strong>native DOM element</strong> or <strong>functional/class component</strong> that implements {generic.packageLink}&apos;s props.
            </p>
            <TypeScriptCode collapsible={false}>{
`
<${componentName}>
    <YourComponent />
</${componentName}>
`
            }</TypeScriptCode>
        </Section>
    );
}



export interface ModalViewportPropertyProps extends PreviewProps {
}
export const ModalViewportProperty = ({children: preview}: ModalViewportPropertyProps) => {
    const {component: {componentName}} = useComponentInfo();
    
    return (
        <PropertySection property={properties.modalViewport} preview={preview}>
            <p>
                Determines the <strong>container UI</strong> should be <strong>blocked</strong> by <TheComponentLink />&apos;s backdrop when <code>{`<${componentName} expanded={true}>`}</code>.<br />
                If not set (<code>undefined</code> or <code>null</code>), defaults to document&apos;s <code>{`<body>`}</code> (blocked a whole page).
            </p>
        </PropertySection>
    );
}



export interface HorzAlignPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const HorzAlignProperty = ({possibleValues, children: preview}: HorzAlignPropertyProps) => {
    return (
        <PropertySection property={properties.horzAlign} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> alignment.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'center'`}</code>}>
                    <p>
                        Align to the <strong>center</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'start'`}</code>}>
                    <p>
                        Align to the <strong>left</strong> (<code>direction: ltr</code>), or to the <strong>right</strong> (<code>direction: rtl</code>).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'end'`}</code>}>
                    <p>
                        Align to the <strong>right</strong> (<code>direction: ltr</code>), or to the <strong>left</strong> (<code>direction: rtl</code>).
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'left'`}</code>}>
                    <p>
                        Align to the <strong>left</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'right'`}</code>}>
                    <p>
                        Align to the <strong>right</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>horizontal alignment</strong> of the {card.packageLink} againts to <TheComponentLink />&apos;s backdrop.
            </p>
        </PropertySection>
    );
}

export interface VertAlignPropertyProps extends PreviewProps, Pick<PropertySectionProps, 'possibleValues'> {
}
export const VertAlignProperty = ({possibleValues, children: preview}: VertAlignPropertyProps) => {
    return (
        <PropertySection property={properties.vertAlign} preview={preview} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> alignment.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'center'`}</code>}>
                    <p>
                        Align to the <strong>center</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'start'`}</code>}>
                    <p>
                        Align to the <strong>top</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'end'`}</code>}>
                    <p>
                        Align to the <strong>bottom</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'top'`}</code>}>
                    <p>
                        Align to the <strong>top</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'bottom'`}</code>}>
                    <p>
                        Align to the <strong>bottom</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Defines the <strong>vertical alignment</strong> of the {card.packageLink} againts to <TheComponentLink />&apos;s backdrop.
            </p>
        </PropertySection>
    );
}
