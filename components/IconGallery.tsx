import React from 'react'

import { style, imports, rule, children } from '@cssfn/core'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'

import { spacers, useMergeClasses, usesBackground, usesForeground } from '@reusable-ui/core';
import { bodyElm, Icon, icons } from '@reusable-ui/components'
import iconFonts from '@reusable-ui/icon/dist/icon-font-material'

import { Gallery, GalleryProps, ItemProps } from './Gallery';



export const useGallerySheet = dynamicStyleSheet(() => {
    const {backgroundRule, backgroundVars} = usesBackground();
    const {                foregroundVars} = usesForeground();
    
    
    
    const iconElm  = ':first-child';
    const labelElm = ':nth-child(2)';
    return style({
        ...children(bodyElm, {
            ...children('.item', { // icon entry
                display           : 'flex',
                flexDirection     : 'row',
                justifyContent    : 'start',
                alignItems        : 'center',
                flexWrap          : 'nowrap',
                
                transition        : [
                    ['transform', '100ms', 'ease-out'],
                ],
                ...rule(':hover', {
                    position      : 'relative',
                    zIndex        : 1,
                    transform     : [['scale(1.05)']],
                }),
                
                
                
                ...children(iconElm, {
                    blockSize     : icons.sizeMd,
                    aspectRatio   : '1/1',
                }),
                ...children(labelElm, {
                    paddingInline : spacers.sm,
                    
                    cursor        : 'text',
                    userSelect    : 'text',
                    
                    whiteSpace   : 'nowrap',
                    textOverflow : 'ellipsis',
                    
                    ...children('::selection', {
                        foreg: foregroundVars.foregFn,
                        backg: backgroundVars.backgColorFn,
                    }),
                }),
                
                
                
                ...rule(':not(:hover)', {
                    ...children(labelElm, {
                        overflow     : 'hidden',
                    }),
                }),
                ...rule(':hover', {
                    ...children(labelElm, {
                        ...imports([
                            backgroundRule, // cover the neighbour with solid background
                        ]),
                        ...style({
                            backg    : backgroundVars.backg, // cover the neighbour with solid background
                        }),
                    }),
                }),
            }),
            ...children('button', {
                flexWrap: 'nowrap',
                justifyContent: 'start',
                ...rule(':hover', {
                    position      : 'relative',
                    zIndex        : 1,
                    // transform     : [['scale(1.05)']],
                }),
                
                
                
                ...children('.label', {
                    whiteSpace   : 'nowrap',
                    textOverflow : 'ellipsis',
                }),
                ...rule(':not(:hover)', {
                    ...children('.label', {
                        overflow     : 'hidden',
                    }),
                }),
                ...rule(':hover', {
                    ...children('.label', {
                        ...imports([
                            backgroundRule, // cover the neighbour with solid background
                        ]),
                        ...style({
                            backg    : backgroundVars.backg, // cover the neighbour with solid background
                        }),
                    }),
                }),
            })
        }),
    });
}, { specificityWeight: 3, id: 'f9m0wwbe9x' }); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const iconSets = [
    'instagram',
    'whatsapp',
    'close',
    'busy',
    'prev',
    'next',
    'dropup',
    'dropdown',
    'dropright',
    'dropleft',
    ...iconFonts,
];



export interface IconGalleryProps extends Omit<GalleryProps, 'collection'|'children'> {
    itemComponent ?: (itemName: string, itemProps: ItemProps) => React.ReactElement
}
const IconGallery = (props: IconGalleryProps) => {
    const styleSheet = useGallerySheet();
    
    
    
    const {
        itemComponent = (itemName) => (
            <span className='item'>
                <Icon
                    // {...itemProps}
                    icon={itemName}
                    size='md'
                />
                <span>
                    {itemName}
                </span>
            </span>
        ),
    ...restGalleryProps} = props;
    
    
    
    const classes = useMergeClasses(
        props.classes,
        styleSheet.main,
    );
    
    
    
    return (
        <Gallery
            {...restGalleryProps}
            
            collection={iconSets}
            classes={classes}
        >
            {itemComponent}
        </Gallery>
    );
}
export {
    IconGallery,
    IconGallery as default,
}
