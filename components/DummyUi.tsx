import React from 'react'
import Image from 'next/image'
import { Generic, GenericProps } from '@reusable-ui/components'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { stripoutFocusableElement, useMergeClasses } from '@reusable-ui/core'
import { children } from '@cssfn/core'



const useDummyUiStyleSheet = dynamicStyleSheet(() => ({
    ...stripoutFocusableElement(),
    display    : 'flex',
    
    position   : 'relative',
    
    background : [
        'url("/images/lorem-image-1.svg") 0%/cover',
    ],
    
    ...children('.overlay', {
        display        : 'grid',
        justifyContent : 'center',
        alignContent   : 'center',
        
        position       : 'absolute',
        inset          : 0,
        
        padding        : '0.5rem',
        
        ...children('p', {
            textAlign     : 'start',
            textAlignLast : 'end',
        }),
        ...children('code:first-child', {
            textAlign     : 'start',
        }),
        ...children('code:last-child', {
            textAlign     : 'end',
        }),
    }),
}), { id: 'y5awjqfgx3' });



export interface DummyUiProps extends GenericProps {
    tabIndex ?: React.HTMLAttributes<HTMLElement>['tabIndex']
    
    width     : number
    height    : number
}
export const DummyUi = ({tabIndex, width, height, children = true, ...restGenericProps}: DummyUiProps) => {
    const styleSheet = useDummyUiStyleSheet();
    const mergedClasses = useMergeClasses(
        styleSheet.main,
        restGenericProps.classes,
    );
    
    return (
        <Generic
            {...restGenericProps}
            tag='div'
            {...{tabIndex: (tabIndex ?? -1)} as {}}
            classes={mergedClasses}
            style={{width: `${width}px`, height: `${height}px`}}
        >
            {children && <div className='overlay'>
                {((children !== true) && children) || <>
                    <code>{'<Your'}</code>
                    <code>{'Component>'}</code>
                </>}
            </div>}
        </Generic>
    );
}

export const DummyUiSmall  = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={48} height={48} />
export const DummyUiBig    = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={128} height={128} />
export const DummyUiBigger = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={256} height={256} />
