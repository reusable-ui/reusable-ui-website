import { default as React } from 'react'
import { AccordionProps, Accordion } from '../Accordion'
import { TheComponentLink } from '../../packages/componentContext';
import { Section } from './Section';



export interface VariablesProps {
    variables ?: React.ReactElement<AccordionProps, typeof Accordion>
    children  ?: React.ReactNode
}
export const Variables = (props: VariablesProps) => {
    const {
        variables,
        children : preview,
    } = props;
    return (
        <Section title='Variables'>
            <p>
                There are <strong>several variables</strong> of <TheComponentLink /> you can customize.
                Changing the variables <strong>affects all</strong> <TheComponentLink /> instance and <strong>other components</strong> that depend on <TheComponentLink />.
            </p>
            {variables && <>
                <p>
                    Here the exposed variables:
                </p>
                {React.cloneElement(variables,
                    // props:
                    {
                        theme : variables.props.theme ?? 'primary',
                    },
                )}
            </>}
            {preview && <>
                <hr />
                <p>
                    The example of accessing, modifying,  &amp; adding variables:
                </p>
                {preview}
            </>}
        </Section>
    );
}
