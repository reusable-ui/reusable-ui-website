import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps } from '@reusable-ui/components'



export interface IntLinkProps extends ButtonProps {
    to         : string
    children  ?: React.ReactNode
}
const IntLink = (props: IntLinkProps) => {
    const {
        theme       = 'primary',
        buttonStyle = 'link',
        
        to,
        
        children,
    ...restButtonProps} = props;
    
    return (
        <Button
            {...restButtonProps}
            
            theme={theme}
            buttonStyle={buttonStyle}
        >
            <Link href={to}>
                {children}
            </Link>
        </Button>
    );
};
export {
    IntLink,
    IntLink as default,
}