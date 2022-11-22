import { useState } from 'react';

// cssfn:
import {
    // styles:
    style,
    
    
    
    // rules:
    rule,
    
    
    
    // combinators:
    children,
}                           from '@cssfn/core'
import {
    // hooks:
    dynamicStyleSheet,
}                           from '@cssfn/cssfn-react' // cssfn for react

import { FloatingPlacement, spacers } from '@reusable-ui/core'
import { RadioProps, Radio, BasicProps, Basic, Group } from '@reusable-ui/components';



export const useSelectFloatingPlacementSheet = dynamicStyleSheet(() => ({
    display: 'grid',
    gridTemplateColumns: [[
        spacers.xl,
        '1fr',
        'min-content',
        '1fr',
        spacers.xl,
    ]],
    gridTemplateRows: [[
        spacers.xl,
        '1fr',
        'min-content',
        '1fr',
        spacers.xl,
    ]],
    gridTemplateAreas: [[
        '"..... .......  top    ....... ....."',
        '"..... content content content ....."',
        '"left  content content content right"',
        '"..... content content content ....."',
        '"..... ....... bottom  ....... ....."',
    ]],
    padding: 0,
    
    
    
    ...children(':nth-child(1)', {
        gridArea: 'top',
    }),
    ...children(':nth-child(2)', {
        gridArea: 'bottom',
    }),
    ...children(':nth-child(3)', {
        gridArea: 'left',
    }),
    ...children(':nth-child(4)', {
        gridArea: 'right',
    }),
    ...children(':not(:nth-child(5))>*>*', {
        flexWrap : 'nowrap',
        padding  : spacers.default,
    }),
    
    ...children(':nth-child(5)', {
        gridArea: 'content',
    }),
}), { specificityWeight: 2, id: 'cn1annh9xo'}); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const Option = (props: RadioProps) => <Radio {...props} nude={true} mild={true} size='lg' />

export interface PopupSelectFloatingPlacement extends Omit<BasicProps, 'children'> {
    children         ?: (popupPlacement: FloatingPlacement) => React.ReactElement
    initialPlacement ?: FloatingPlacement
}
export const SelectFloatingPlacement = (props: PopupSelectFloatingPlacement) => {
    const sheet = useSelectFloatingPlacementSheet();
    const [popupPlacement, setFloatingPlacement] = useState<FloatingPlacement>(props.initialPlacement ?? 'top')
    
    
    
    return (
        <Basic
            {...props}
            classes={[sheet.main]}
            theme='secondary'
            mild={true}
        >
            <Group orientation='inline' listStyle='flat'>
                <Option active={popupPlacement === 'top-start'   } onActiveChange={(active) => active && setFloatingPlacement('top-start'   )} />
                <Option active={popupPlacement === 'top'         } onActiveChange={(active) => active && setFloatingPlacement('top'         )} />
                <Option active={popupPlacement === 'top-end'     } onActiveChange={(active) => active && setFloatingPlacement('top-end'     )} />
            </Group>
            
            <Group orientation='inline' listStyle='flat'>
                <Option active={popupPlacement === 'bottom-start'} onActiveChange={(active) => active && setFloatingPlacement('bottom-start')} />
                <Option active={popupPlacement === 'bottom'      } onActiveChange={(active) => active && setFloatingPlacement('bottom'      )} />
                <Option active={popupPlacement === 'bottom-end'  } onActiveChange={(active) => active && setFloatingPlacement('bottom-end'  )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={popupPlacement === 'left-start'  } onActiveChange={(active) => active && setFloatingPlacement('left-start'  )} />
                <Option active={popupPlacement === 'left'        } onActiveChange={(active) => active && setFloatingPlacement('left'        )} />
                <Option active={popupPlacement === 'left-end'    } onActiveChange={(active) => active && setFloatingPlacement('left-end'    )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={popupPlacement === 'right-start' } onActiveChange={(active) => active && setFloatingPlacement('right-start' )} />
                <Option active={popupPlacement === 'right'       } onActiveChange={(active) => active && setFloatingPlacement('right'       )} />
                <Option active={popupPlacement === 'right-end'   } onActiveChange={(active) => active && setFloatingPlacement('right-end'   )} />
            </Group>
            
            { props.children?.(popupPlacement) }
        </Basic>
    );
};
export default SelectFloatingPlacement;