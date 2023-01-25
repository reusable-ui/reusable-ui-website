import { default as React } from 'react'
import { AccordionProps, Accordion } from '../Accordion'
import { PropertyInfo } from '../../properties/propertyInfo';
import { Section } from './Section';



export interface PropertySectionProps {
    property            : PropertyInfo
    children            : React.ReactNode
    possibleValues     ?: React.ReactElement<AccordionProps, typeof Accordion>
    possibleValueNotes ?: React.ReactNode
    preview            ?: React.ReactNode
}
export const PropertySection = (props: PropertySectionProps) => {
    const {
        property : {
            propertyName,
            propertyShortDisplay,
        },
        children : description,
        possibleValues,
        possibleValueNotes,
        preview,
    } = props;
    return (
        <Section title={<>{propertyShortDisplay} Property</>}>
            {description}
            {possibleValues && <>
                <p>
                    The possible values are:
                </p>
                {React.cloneElement(possibleValues,
                    // props:
                    {
                        theme : possibleValues.props.theme ?? 'primary',
                    },
                )}
                {possibleValueNotes}
            </>}
            {preview && <>
                <hr />
                <p>
                    Here the preview:
                </p>
                {preview}
            </>}
        </Section>
    );
}



export interface PreviewProps {
    children ?: PropertySectionProps['preview']
}
