import { default as React, createContext, useContext, useMemo } from 'react'
import { Tag, useMergeClasses } from '@reusable-ui/core'
import { AccordionProps, Accordion, Container, ContainerProps, Generic } from '@reusable-ui/components'
import { PropertyInfo } from '../properties/propertyInfo';
import { SeeBaseComponentLinks, TheBaseComponentLinks, TheComponentDisplay, TheComponentTag } from '../packages/componentContext';



export interface GenericSectionProps extends ContainerProps {
}
/**
 * A generic `<section>` without any `<h1-h6>` or `<article>`.
 * You should manually including at least one `<article>` with appropriate `<h1-h6>`.
 */
export function GenericSection(props: GenericSectionProps) {
    const classes = useMergeClasses(
        props.classes,
        'fill',
    );
    
    return (
        <Container
            {...props}
            
            tag={props.tag ?? 'section'}
            classes={classes}
        />
    );
}




export interface ISectionContext {
    level : number
}
const SectionContext = createContext<ISectionContext>({
    level : 1,
});



export interface SectionProps extends GenericSectionProps {
    titleTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    title    ?: React.ReactNode
    children ?: React.ReactNode
}
/**
 * A simple `<section>` with built in `<h2>` and `<article>`.
 */
export const Section = (props: SectionProps) => {
    const { level } = useContext(SectionContext);
    const { titleTag = `h${level}` as Tag, title, children, ...restGenericSectionProps} = props;
    
    
    const subContextProp = useMemo<ISectionContext>(() => ({
        level: (level < 6) ? (level + 1) : 6,
    }), [level]);
    return (
        <GenericSection {...restGenericSectionProps}>
            <article>
                {title && <Generic tag={titleTag}>
                    { title }
                </Generic>}
                
                <SectionContext.Provider value={subContextProp}>
                    { children }
                </SectionContext.Provider>
            </article>
        </GenericSection>
    );
}



export interface PreviewProps {
    children : PropertySectionProps['preview']
}

export interface PropertySectionProps {
    property        : PropertyInfo
    children        : React.ReactNode
    possibleValues ?: React.ReactElement<AccordionProps, typeof Accordion>
    preview        ?: React.ReactNode
}
export const PropertySection = (props: PropertySectionProps) => {
    const {
        property : {
            propertyName,
            propertyShortDisplay,
        },
        children : description,
        possibleValues,
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



export const InheritedProperties = () => {
    return (
        <Section title='Inherited Properties'>
            <p>
                Because <TheComponentDisplay /> is made from <TheBaseComponentLinks />, so all properties from <TheBaseComponentLinks /> are inherited.
            </p>
            <SeeBaseComponentLinks />
        </Section>
    );
}

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
                There are <strong>several variables</strong> of <TheComponentDisplay /> you can customize.
                Changing the variables <strong>affects all</strong> <TheComponentDisplay /> instance and <strong>other components</strong> that depend on <TheComponentDisplay />.
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
                    The example of accessing &amp; modifying variables:
                </p>
                {preview}
            </>}
        </Section>
    );
}
