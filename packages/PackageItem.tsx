import React from 'react'

import { AccordionItem, AccordionItemProps } from '@reusable-ui/components'
import { PackageInfo } from './packageInfo'



export interface PackageItemProps extends AccordionItemProps
{
    package   : PackageInfo
    children ?: React.ReactNode
}
export const PackageItem = (props: PackageItemProps) => {
    return (
        <AccordionItem label={props.package.packageDisplay}>
            {props.children}
            {props.package.packageSeeDocumentationParagraph}
        </AccordionItem>
    )
}
