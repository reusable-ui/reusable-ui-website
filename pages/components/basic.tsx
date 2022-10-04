import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../../components/Section'
import { basic } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, VariantProperties } from '../../properties/sections/variantProperties'
import { GlobalProperties, ClassProperties, OnProperties } from '../../properties/sections/genericProperties'



const BasicPage: NextPage = () => {
    return (<>
        <Head>
            <title>{basic.componentTag} Components</title>
            <meta name="description" content={`${basic.componentTag} is a simple box layout component with built-in variants: ${packages.resizable.packageShortName}, ${packages.themable.packageShortName}, ${packages.gradientable.packageShortName}, ${packages.outlineable.packageShortName}, ${packages.mildable.packageShortName}, and ${packages.nudible.packageShortName}`} />
        </Head>
        <Section title={<>{basic.packageDisplay} Component</>}>
            <p>
                {basic.packageDisplay} is a <strong>simple box</strong> layout component with built-in variants: {packages.resizable.packageShortLink}, {packages.themable.packageShortLink}, {packages.gradientable.packageShortLink}, {packages.outlineable.packageShortLink}, {packages.mildable.packageShortLink}, and {packages.nudible.packageShortLink}.
            </p>
            <VariantProperties>
                <SizeProperty />
            </VariantProperties>
        </Section>
    </>);
}

export default BasicPage
