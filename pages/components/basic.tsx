import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../../components/Section'
import { basic } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, VariantProperties } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { Basic as OriBasic, BasicProps } from '@reusable-ui/components'



const Basic = (props: BasicProps) => <OriBasic {...props} theme={props.theme ?? 'primary'} />



const BasicPage: NextPage = () => {
    return (<>
        <Head>
            <title>{`${basic.componentTag} Component`}</title>
            <meta name="description" content={`${basic.componentTag} is a simple box layout component with built-in variants: ${packages.resizable.packageShortName}, ${packages.themable.packageShortName}, ${packages.gradientable.packageShortName}, ${packages.outlineable.packageShortName}, ${packages.mildable.packageShortName}, and ${packages.nudible.packageShortName}`} />
        </Head>
        <Section title={<>{basic.packageDisplay} Component</>}>
            <p>
                {basic.packageDisplay} is a <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, {packages.gradientable.packageShortLink}, {packages.outlineable.packageShortLink}, {packages.mildable.packageShortLink}, and {packages.nudible.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {['sm', undefined, 'lg'].map((sizeName, index) =>
                            <Basic
                                key={index}
                            >
                                A {'<Basic>'} with {sizeName ?? 'default'} size
                            </Basic>
                        )}
                    </Preview>
                </SizeProperty>
            </VariantProperties>
        </Section>
    </>);
}

export default BasicPage
