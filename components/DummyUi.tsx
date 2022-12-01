import React from 'react'
import Image from 'next/image'
import { Generic, GenericProps } from '@reusable-ui/components'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { stripoutFocusableElement, useMergeClasses } from '@reusable-ui/core'



const useDummyUiStyleSheet = dynamicStyleSheet(() => ({
    ...stripoutFocusableElement(),
    display: 'flex',
}), { id: 'y5awjqfgx3' });



export interface DummyUiProps extends GenericProps {
    tabIndex ?: React.HTMLAttributes<HTMLElement>['tabIndex']
    
    width     : number
    height    : number
}
export const DummyUi = ({tabIndex, width, height, children, ...restGenericProps}: DummyUiProps) => {
    const styleSheet = useDummyUiStyleSheet();
    const mergedClasses = useMergeClasses(
        styleSheet.main,
        restGenericProps.classes,
    );
    
    return (
        <Generic
            {...restGenericProps}
            tag='span'
            {...{tabIndex: (tabIndex ?? -1)} as {}}
            classes={mergedClasses}
        >
            <Image
                alt='<YourComponent />'
                src='/images/lorem-image-1.svg'
                width={width}
                height={height}
            />
            {children && <div style={{position: 'absolute', inset: 0, padding: '1rem'}}>
                {children}
            </div>}
        </Generic>
    );
}

export const DummyUiSmall  = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={48} height={48} />
export const DummyUiBig    = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={128} height={128} />
export const DummyUiBigger = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={256} height={256} />
