import React, { useEffect, useRef, useState } from 'react'
import { bodyElm, Card, CardBody, CardHeader, CardProps, headerElm, useResponsiveResizeObserver } from '@reusable-ui/components'
import { style, children, rule } from '@cssfn/core'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { usesPadding, colors, spacers, useMergeRefs, useMergeClasses, useMergeStyles } from '@reusable-ui/core';



export const usePreviewStyleSheet = dynamicStyleSheet(() => {
    const {paddingVars} = usesPadding();
    
    return style({
        ...children(headerElm, {
            padding   : spacers.xs,
            textAlign : 'center',
            filter    : 'none',
        }),
        ...children(bodyElm, {
            ...rule(':is(.down, .right)&', {
                display: 'flex',
                ...rule('.down&', {
                    flexDirection : 'column',
                }),
                ...rule('.right&', {
                    flexDirection : 'row',
                    flexWrap      : 'wrap',
                }),
                
                ...rule(':not(.stretch)&', {
                    justifyContent : 'center',
                    alignItems     : 'center',
                }),
                ...rule('.stretch&', {
                    justifyContent : 'center',
                    alignItems     : 'stretch',
                }),
                
                
                gap          : `var(--gap, ${spacers.default})`,
            }),
            ...rule('.block&', {
                display  : 'block',
            }),
            
            [paddingVars.paddingInline] : `var(--gap, ${spacers.lg})`,
            [paddingVars.paddingBlock ] : `var(--gap, ${spacers.lg})`,
            background   : colors.secondaryMild,
            ...rule('.transp&', {
                background: [
                    'url("/images/tile-1.svg") 0%/auto',
                    'url("/images/soft-rainbow.svg") 0%/cover',
                ],
            }),
        }),
    });
}, { specificityWeight: 2, id: 'vcj2ypq6fr' });



export interface PreviewProps extends Omit<CardProps, 'children'|'title'> {
    title             ?: React.ReactNode
    
    display           ?: 'down'|'right'|'block'
    stretch           ?: boolean
    preventShift      ?: boolean
    transpMask        ?: boolean
    gap               ?: string
    
    cardBodyComponent ?: React.ReactElement
    
    children          ?: React.ReactNode | ((isLoaded: boolean) => React.ReactNode)
}
export const Preview = ({title, ...props}: PreviewProps) => {
    const {
        display      = 'down',
        stretch      = true,
        preventShift = false,
        transpMask   = true,
        gap,
        
        cardBodyComponent = <CardBody />,
        
        children,
    ...restCardProps} = props;
    
    
    
    const cardRef = useRef<HTMLElement>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    
    useEffect(() => {
        if (isLoaded) return;
        
        
        
        const container = cardRef.current as HTMLElement|null;
        if (container) {
            if (preventShift) {
                container.style.boxSizing = '';
                container.style.height = '';
                
                setLoaded(false);
                setTimeout(() => {
                    container.style.boxSizing = 'border-box';
                    container.style.height = `${container.offsetHeight + 5}px`;
                    setLoaded(true);
                }, 0);
            }
            else {
                setLoaded(true);
            } // if
            container.style.overflow = 'hidden';
        } // if
    }, [isLoaded, preventShift]);
    
    useResponsiveResizeObserver(cardRef, () => {
        const body = cardRef.current?.getElementsByClassName('.body')?.[0];
        if (body && (body.scrollWidth > body.clientWidth)) {
            setLoaded(false);
        } // if
    });
    
    
    
    const styleSheet = usePreviewStyleSheet();
    
    const mergedRef = useMergeRefs(
        props.elmRef,
        cardRef,
    );
    const classes = useMergeClasses(
        props.classes,
        
        styleSheet.main,
        display,
        stretch      ? 'stretch' : null,
        transpMask   ? 'transp'  : null,
    );
    const style = useMergeStyles(
        (gap ? ({
            ['--gap' as any]: gap,
        }) : {}),
        
        props.style,
    );
    
    return (
        <Card
            {...restCardProps}
            
            elmRef={mergedRef}
            
            theme={props.theme ?? 'primary'}
            classes={classes}
            style={style}
        >
            <CardHeader>
                Preview{title ? <>: {title}</> : undefined}
            </CardHeader>
            {React.cloneElement(cardBodyComponent, undefined,
                // children:
                ((typeof(children) === 'function') ? children(isLoaded) : children),
            )}
        </Card>
    );
}