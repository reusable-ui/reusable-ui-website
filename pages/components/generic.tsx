import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AccordionItem, Accordion } from '@reusable-ui/components'
import { Section } from '../../components/Section'
import { generic } from '../../packages/packageList'
import * as properties from '../../properties/propertyList'



const GenericPage: NextPage = () => {
    return (<>
        <Head>
            <title>{generic.componentTag} Components</title>
            <meta name="description" content={`${generic.componentTag} is an unstyled generic element. It governs the semantics, classes, refs and more.`} />
        </Head>
        <Section title={<>{generic.packageDisplay} Component</>}>
            <p>
                {generic.packageDisplay} is an unstyled generic element. It governs the semantics, classes, refs and more.
            </p>
            <Section title='Semantic Properties'>
                <p>
                    Defines <strong>semantic meaning</strong> to the component, allowing <em>screen readers</em> and other tools to present and support <em>interaction</em> with the component in a way that is consistent with user expectations of that type of the component.
                </p>
                <Section title={<>{properties.tag.propertyDisplay} Property</>}>
                    <p>
                        Defines the final <strong>rendered tag</strong> of the component.
                    </p>
                    <p>
                        The options are:
                    </p>
                    <Accordion theme='primary'>
                        <AccordionItem label={properties.tag.propertyDisplay}>
                            <p>
                                Defines the final <strong>rendered tag</strong> of the component.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </Section>
            </Section>
        </Section>
    </>);
}

export default GenericPage
