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

import { FloatingPlacement, spacers, usesBackground, usesForeground } from '@reusable-ui/core'
import { RadioProps, Radio, BasicProps, Basic, Group } from '@reusable-ui/components';



export const useSelectFloatingPlacementSheet = dynamicStyleSheet(() => {
    const {backgroundVars} = usesBackground();
    const {foregroundVars} = usesForeground();
    
    
    
    return style({
        display  : 'grid',
        overflow : 'hidden',
        gridTemplateColumns: [[
            spacers.xl,
            '1fr',
            'min-content',
            '1fr',
            spacers.xl,
        ]],
        gridTemplateRows: [[
            '2rem',
            spacers.xl,
            '1fr',
            'min-content',
            '1fr',
            spacers.xl,
        ]],
        gridTemplateAreas: [[
            '"code   code    code    code    code"',
            '"..... .......  top    ....... ....."',
            '"..... content content content ....."',
            '"left  content content content right"',
            '"..... content content content ....."',
            '"..... ....... bottom  ....... ....."',
        ]],
        padding: 0,
        
        
        
        ...children(':nth-child(1)', {
            gridArea       : 'top',
        }),
        ...children(':nth-child(2)', {
            gridArea       : 'bottom',
        }),
        ...children(':nth-child(3)', {
            gridArea       : 'left',
        }),
        ...children(':nth-child(4)', {
            gridArea       : 'right',
        }),
        ...children(':is(:nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4))>*>*', {
            flexWrap       : 'nowrap',
            padding        : spacers.default,
        }),
        
        ...children(':nth-child(5)', {
            gridArea       : 'code',
            display        : 'flex',
            justifyContent : 'center',
            alignItems     : 'center',
            background     : backgroundVars.altBackgColor,
            ...children('code', {
                color: foregroundVars.altForeg,
                ...children('::selection', {
                    backgroundColor : backgroundVars.backgColor,
                    color           : foregroundVars.foreg,
                })
            }),
        }),
        ...children(':nth-child(6)', {
            gridArea       : 'content',
        }),
    });
}, { specificityWeight: 2, id: 'cn1annh9xo'}); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const Option = (props: RadioProps) => <Radio {...props} nude={true} mild={true} size='lg' />

export interface SelectFloatingPlacementProps extends Omit<BasicProps, 'children'> {
    children         ?: (floatingPlacement: FloatingPlacement) => React.ReactElement
    initialPlacement ?: FloatingPlacement
}
export const SelectFloatingPlacement = (props: SelectFloatingPlacementProps) => {
    const sheet = useSelectFloatingPlacementSheet();
    const [floatingPlacement, setFloatingPlacement] = useState<FloatingPlacement>(props.initialPlacement ?? 'top')
    
    
    
    return (
        <Basic
            {...props}
            classes={[sheet.main]}
            theme='primary'
            mild={true}
        >
            <Group orientation='inline' listStyle='flat'>
                <Option active={floatingPlacement === 'top-start'   } onActiveChange={(active) => active && setFloatingPlacement('top-start'   )} />
                <Option active={floatingPlacement === 'top'         } onActiveChange={(active) => active && setFloatingPlacement('top'         )} />
                <Option active={floatingPlacement === 'top-end'     } onActiveChange={(active) => active && setFloatingPlacement('top-end'     )} />
            </Group>
            
            <Group orientation='inline' listStyle='flat'>
                <Option active={floatingPlacement === 'bottom-start'} onActiveChange={(active) => active && setFloatingPlacement('bottom-start')} />
                <Option active={floatingPlacement === 'bottom'      } onActiveChange={(active) => active && setFloatingPlacement('bottom'      )} />
                <Option active={floatingPlacement === 'bottom-end'  } onActiveChange={(active) => active && setFloatingPlacement('bottom-end'  )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={floatingPlacement === 'left-start'  } onActiveChange={(active) => active && setFloatingPlacement('left-start'  )} />
                <Option active={floatingPlacement === 'left'        } onActiveChange={(active) => active && setFloatingPlacement('left'        )} />
                <Option active={floatingPlacement === 'left-end'    } onActiveChange={(active) => active && setFloatingPlacement('left-end'    )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={floatingPlacement === 'right-start' } onActiveChange={(active) => active && setFloatingPlacement('right-start' )} />
                <Option active={floatingPlacement === 'right'       } onActiveChange={(active) => active && setFloatingPlacement('right'       )} />
                <Option active={floatingPlacement === 'right-end'   } onActiveChange={(active) => active && setFloatingPlacement('right-end'   )} />
            </Group>
            
            <div>
                <code>{`floatingPlacement='${floatingPlacement}'`}</code>
            </div>
            { props.children?.(floatingPlacement) }
        </Basic>
    );
};
export default SelectFloatingPlacement;