import { useMergeClasses } from '@reusable-ui/core'
import { Container, ContainerProps, Generic } from '@reusable-ui/components'



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



export interface SectionProps extends GenericSectionProps {
    titleTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    title    ?: React.ReactNode
    children ?: React.ReactNode
}
/**
 * A simple `<section>` with built in `<h2>` and `<article>`.
 */
export const Section = (props: SectionProps) => {
    const { titleTag = 'h2', title, children, ...restGenericSectionProps} = props;
    
    
    
    return (
        <GenericSection {...restGenericSectionProps}>
            <article>
                {title && <Generic tag={titleTag}>
                    { title }
                </Generic>}
                
                { children }
            </article>
        </GenericSection>
    );
}

/**
 * An introduction `<section>` with built in `<h1>` and `<article>`.
 */
export const IntroSection = (props: SectionProps) => {
    return (
        <Section
            {...props}
            titleTag={props.titleTag ?? 'h1'}
        />
    );
}

export const SubSection = (props: SectionProps) => {
    return (
        <Section
            {...props}
            titleTag={props.titleTag ?? 'h3'}
        />
    );
}
