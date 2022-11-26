import React from 'react'
import Image from 'next/image'
import { GenericProps } from '@reusable-ui/components'
import { dynamicStyleSheet } from '@cssfn/cssfn-react'
import { stripoutFocusableElement } from '@reusable-ui/core'



const useDummyUiStyleSheet = dynamicStyleSheet(() => ({
    ...stripoutFocusableElement(),
}), { id: 'y5awjqfgx3' });



export interface DummyUiProps {
    tabIndex ?: React.HTMLAttributes<HTMLElement>['tabIndex']
    elmRef   ?: GenericProps<HTMLElement>['elmRef'],
    
    width     : number
    height    : number
}
export const DummyUi = ({tabIndex, elmRef, width, height}: DummyUiProps) => {
    const styleSheet = useDummyUiStyleSheet();
    
    return (
        <span
            ref={elmRef}
            tabIndex={tabIndex ?? -1}
            className={styleSheet.main}
        >
            <Image
                alt='<YourComponent />'
                src='/images/lorem-image-1.svg'
                width={width}
                height={height}
            />
        </span>
    );
}

export const DummyUiSmall = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={48} height={48} />
export const DummyUiBig   = (props: Omit<DummyUiProps, 'width'|'height'>) => <DummyUi {...props} width={128} height={128} />
