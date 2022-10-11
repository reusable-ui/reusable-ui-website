import { default as React, createContext, useContext, useMemo } from 'react'
import { Tag, useMergeClasses } from '@reusable-ui/core'
import { AccordionProps, Accordion, AccordionItem } from '../components/Accordion'
import { Container, ContainerProps, ExclusiveAccordion, Generic } from '@reusable-ui/components'
import { PropertyInfo } from '../properties/propertyInfo';
import { SeeBaseComponentLinks, TheBaseComponentLinks, TheComponentDisplay, useComponentInfo } from '../packages/componentContext';
import { BashCode } from './Code';
import { Tips } from './Warning';



export interface GenericSectionProps extends ContainerProps {
}
/**
 * A generic `<section>` without any `<h1-h6>` or `<article>`.
 * You should manually including at least one `<article>` with appropriate `<h1-h6>`.
 */
export const GenericSection = (props: GenericSectionProps) => {
    // classes:
    const classes = useMergeClasses(
        // preserves the original `classes`:
        props.classes,
        
        
        
        // variants:
        'fill',
    );
    
    
    
    // jsx:
    return (
        <Container
            // other props:
            {...props}
            
            
            
            // semantics:
            tag={props.tag ?? 'section'}
            
            
            
            // classes:
            classes={classes}
        />
    );
}



export interface IArticleContext {
    level : number
}
const ArticleContext = createContext<IArticleContext>({
    level : 1,
});



export interface MainProps extends SectionProps {
}
export const Main = (props: MainProps) => {
    // rest props:
    const {
        // title:
        titleTag = 'h1',
        title,
        
        
        
        // content:
        children : content,
    ...restGenericSectionProps} = props;
    
    
    
    // jsx:
    const subContextProp = useMemo<IArticleContext>(() => ({
        level: 2,
    }), []);
    return (
        <GenericSection
            // other props:
            {...restGenericSectionProps}
            
            
            
            // semantics:
            tag={props.tag ?? 'main'} // the <root-section> as <main-article>
        >
            {/* the article title (if provided) */}
            {title && <Generic tag={titleTag}>
                {title}
            </Generic>}
            
            
            
            {/* the article content within `ArticleContext` */}
            <ArticleContext.Provider value={subContextProp}>
                {content}
            </ArticleContext.Provider>
        </GenericSection>
    );
}



export interface IntroSectionProps extends GenericSectionProps {
}
export const IntroSection = (props: IntroSectionProps) => {
    // jsx:
    return (
        <GenericSection
            // other props:
            {...props}
        >
            {/* a built-in <article> as the content */}
            <article>
                {props.children}
            </article>
        </GenericSection>
    );
}



export interface SectionProps extends GenericSectionProps {
    // title:
    titleTag ?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
    title    ?: React.ReactNode
    
    
    
    // content:
    children ?: React.ReactNode
}
/**
 * A simple `<section>` with built-in `<h2>` and `<article>`.
 */
export const Section = (props: SectionProps) => {
    // contexts:
    const { level } = useContext(ArticleContext);
    
    
    
    // rest props:
    const {
        // title:
        titleTag = `h${level}` as Tag,
        title,
        
        
        
        // content:
        children : content,
    ...restGenericSectionProps} = props;
    
    
    
    // jsx:
    const subContextProp = useMemo<IArticleContext>(() => ({
        level: Math.min(6, level + 1), // limits the level to max 6
    }), [level]);
    return (
        <GenericSection
            // other props:
            {...restGenericSectionProps}
        >
            {/* a built-in <article> as the content */}
            <article>
                {/* the article title (if provided) */}
                {title && <Generic tag={titleTag}>
                    {title}
                </Generic>}
                
                
                
                {/* the article content within `ArticleContext` */}
                <ArticleContext.Provider value={subContextProp}>
                    {content}
                </ArticleContext.Provider>
            </article>
        </GenericSection>
    );
}



export interface PreviewProps {
    children ?: PropertySectionProps['preview']
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



export const ComponentInstallation = () => {
    const {component: {packageFullName}} = useComponentInfo();
    
    return (
        <Section title={<>Installing <TheComponentDisplay /> Component</>}>
            <p>
                There are 2 ways to install <TheComponentDisplay /> component into your react app project: 
            </p>
            <ExclusiveAccordion theme='primary'>
                <AccordionItem label={<>Install the <strong>Specific</strong> Package of <TheComponentDisplay /> Component</>}>
                    <p>
                        To install the <strong>minimal dependencies</strong> required by <TheComponentDisplay /> component,
                        open your terminal window on your code editor and type:
                    </p>
                    <BashCode collapsible={false}>{
`
# npm:
npm install ${packageFullName}

# yarn:
yarn add ${packageFullName}

# pnpm:
pnpm add ${packageFullName}
`
                    }</BashCode>
                </AccordionItem>
                <AccordionItem label={<>Install the <strong>Whole</strong> Reusable-UI Component Pack, including the <TheComponentDisplay /> Component</>}>
                    <p>
                        To install the <strong>whole collection</strong> of <em>official</em> Reusable-UI components,
                        open your terminal window on your code editor and type:
                    </p>
                    <BashCode collapsible={false}>{
`
# npm:
npm install @reusable-ui/components

# yarn:
yarn add @reusable-ui/components

# pnpm:
pnpm add @reusable-ui/components
`
                    }</BashCode>
                    <p>
                        In <em>most cases</em>, creating a website (react app) requires <em>a lot of</em> components.
                        This is the simples way to build a react app with our components. Enjoy 😊
                    </p>
                    <Tips>
                        <p>
                            Any component you don&apos;t use will automatically removed (tree shake) by Webpack/Parcel/Rollup or similar tool when you deploy your (React) app.
                        </p>
                    </Tips>
                </AccordionItem>
            </ExclusiveAccordion>
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
                    The example of accessing, modifying,  &amp; adding variables:
                </p>
                {preview}
            </>}
        </Section>
    );
}
