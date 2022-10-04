import React from 'react'
import { Button, ButtonProps } from '@reusable-ui/components'



export interface ExtLinkProps extends ButtonProps {
    href      : string
    newWindow ?: boolean
    dofollow  ?: boolean
    children  ?: React.ReactNode
}
const ExtLink = (props: ExtLinkProps) => {
    const {
        theme       = 'primary',
        buttonStyle = 'link',
        
        newWindow   = true,
        dofollow    = false,
        
        target      = newWindow ? '_blank'  : undefined,
        rel         = dofollow  ? undefined : 'nofollow',
        href,
        
        children,
    ...restButtonProps} = props;
    
    return (
        <Button
            {...restButtonProps}
            
            theme={theme}
            buttonStyle={buttonStyle}
            
            target={target}
            rel={rel}
            href={href}
        >
            {children}
        </Button>
    );
};
export {
    ExtLink,
    ExtLink as default,
}