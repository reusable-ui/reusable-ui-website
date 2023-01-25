import { default as React } from 'react'
import { SeeBaseComponentLinks, TheBaseComponentLinks, TheComponentLink } from '../../packages/componentContext';
import { Section } from './Section';



export const InheritedProperties = () => {
    return (
        <Section title='Inherited Properties'>
            <p>
                Because <TheComponentLink /> is made from <TheBaseComponentLinks />, so all properties from <TheBaseComponentLinks /> are inherited.
            </p>
            <SeeBaseComponentLinks />
        </Section>
    );
}
