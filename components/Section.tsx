import { default as React, createContext, useContext, useMemo } from 'react'
import { Tag, useMergeClasses } from '@reusable-ui/core'
import { AccordionProps, AccordionItem, Accordion, Container, ContainerProps, Generic } from '@reusable-ui/components'
import { PropertyInfo } from '../properties/propertyInfo';



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



export interface PropertySectionProps {
    property        : PropertyInfo
    children        : React.ReactNode
    possibleValues ?: React.ReactElement<AccordionProps, typeof Accordion>
}
export const PropertySection = (props: PropertySectionProps) => {
    const {
        property : {
            propertyName,
            propertyDisplay,
        },
        children : description,
        possibleValues,
    } = props;
    return (
        <Section title={<>{propertyDisplay} Property</>}>
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
        </Section>
    );
}
