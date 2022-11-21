import React from 'react'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { PreviewProps, PropertySection } from '../../components/Section'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'



export const ActionCtrlProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.actionCtrl} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> behavior.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        Makes <TheNestedComponentDisplay /> <strong>not clickable</strong>.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>true</code>}>
                    <p>
                        Makes <TheNestedComponentDisplay /> <strong>clickable</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Sets the <strong>default</strong> <code>actionCtrl</code> property on <TheComponentLink /> level.
            </p>
            <p>
                You can set the <code>actionCtrl</code> property <strong>individually</strong> for each <TheNestedComponentDisplay />.
            </p>
        </PropertySection>
    );
}



export const LazyProperty = ({children: preview}: PreviewProps) => {
    const {component} = useComponentInfo();
    
    return (
        <PropertySection property={properties.lazy} preview={preview} possibleValues={
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> behavior.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The <TheComponentLink />&apos;s <code>children</code> <strong>always</strong> be rendered.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>false</code>}>
                    <p>
                        The <TheComponentLink />&apos;s <code>children</code> <strong>conditionally</strong> be rendered when the <code>{`<${component.componentName} expanded={true}>`}</code>.
                    </p>
                </AccordionItem>
            </Accordion>
        }>
            <p>
                Determines whenever the <TheComponentLink />&apos;s <code>children</code> should be rendered or not when the <code>{`<${component.componentName} expanded={false}>`}</code>.
            </p>
        </PropertySection>
    );
}
