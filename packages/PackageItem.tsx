import React from 'react'

import { AccordionItem, AccordionItemProps } from '@reusable-ui/components'
import { PackageInfo } from './packageInfo'



export interface PackageItemProps extends AccordionItemProps
{
    package   : PackageInfo
    children ?: React.ReactNode
}
export const PackageItem = (props: PackageItemProps) => {
    const {
        package  : packageName,
        children : description,
    ...restAccordionItemProps} = props;
    
    
    
    return (
        <AccordionItem
            {...restAccordionItemProps}
            
            label={packageName.packageDisplay}
        >
            {description}
            {packageName.packageSeeDocumentationParagraph}
        </AccordionItem>
    )
}
