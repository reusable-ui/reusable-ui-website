import React, {  } from 'react'
import { CardBody, CardBodyProps } from '@reusable-ui/components'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { useMergeClasses } from '@reusable-ui/core'



const useCardBodyStyleSheet = dynamicStyleSheet(() => ({
    boxSizing: 'content-box',
    // blockSize: 'calc(128px + 3rem)',
    alignItems: 'start !important',
    
    gapBlock: 'calc(128px + 1rem) !important',
    paddingBlockEnd: 'calc(128px + 2rem) !important',
}), { id: 'afullz9rxv' });



export const DropdownCardBody = (props: CardBodyProps) => {
    const styleSheet = useCardBodyStyleSheet();
    
    const classes = useMergeClasses(
        props.classes,
        styleSheet.main,
    );
    
    return (
        <CardBody {...props} classes={classes} />
    )
};
