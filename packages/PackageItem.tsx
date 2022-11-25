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
        package  : packageInfo,
        children : description,
    ...restAccordionItemProps} = props;
    
    
    
    return (
        <AccordionItem
            {...restAccordionItemProps}
            
            label={packageInfo.packageDisplay}
            
            tag='a'
            href={packageInfo.packageUrl}
        >
            {description}
            {packageInfo.packageSeeDocumentationParagraph}
        </AccordionItem>
    )
}
