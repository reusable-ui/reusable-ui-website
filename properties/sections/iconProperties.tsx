import { AccordionItem, Accordion } from '../../components/Accordion'
import { TheComponentDisplay } from '../../packages/componentContext';
import { SizeProperty, SizePropertyProps } from "./variantProperties";
import { PreviewProps, PropertySection } from '../../components/Section'
import * as properties from '../propertyList'



export const IconProperty = ({children}: PreviewProps) => {
    return (
        <PropertySection property={properties.icon}>
            <p>
                Select an <strong>icon set</strong> (a <code>string</code> value) corresponding to the <strong>icon image</strong>.
            </p>
            {children}
        </PropertySection>
    );
}
export const IconSizeProperty = ({possibleValues, ...restProps}: SizePropertyProps) => {
    return (
        <SizeProperty {...restProps} possibleValues={possibleValues ??
            <Accordion>
                <AccordionItem label={<code>undefined</code>}>
                    <p>
                        Uses <strong>default</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'sm'`}</code>}>
                    <p>
                        Makes the <TheComponentDisplay /> <strong>smaller</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'nm'`}</code>}>
                    <p>
                        Makes the <TheComponentDisplay /> <strong>normal</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'md'`}</code>}>
                    <p>
                        Makes the <TheComponentDisplay /> <strong>bigger</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'lg'`}</code>}>
                    <p>
                        Makes the <TheComponentDisplay /> <strong>biggest</strong> size.
                    </p>
                </AccordionItem>
                <AccordionItem label={<code>{`'1em'`}</code>}>
                    <p>
                        Makes the <TheComponentDisplay /> as tall as <strong>current font size</strong>.
                    </p>
                </AccordionItem>
            </Accordion>
        } />
    );
}