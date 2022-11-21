import React, { useEffect, useRef, useState } from 'react'
import { useInViewport } from './inViewport';



export interface FlipFlopOptions<TState> {
    defaultState : TState
}
export const useFlipFlop = <TState,>({ defaultState } : FlipFlopOptions<TState>) => {
    const [elmRef, isInViewport] = useInViewport();
    
    
    
    const [isFlip, setIsFlip] = useState(false);
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        
        
        
        // setups:
        let interval        = 2000;
        const currentIsFlip = !isFlip;
        
        const globalTick    = Date.now();
        const globalIsFlip  = !!(Math.ceil(globalTick / interval) % 2);
        const globalLate    = globalTick % interval; // the late interval from globalFlip
        if (globalLate > (interval * 0.05)) { // sync to another `useFlipFlop()`
            const globalNextFlip = interval - globalLate;
            interval = globalNextFlip + ((currentIsFlip !== globalIsFlip) ? interval : 0);
        } // if
        const timeoutHanlder = setTimeout(() => {
            setIsFlip(currentIsFlip);
        }, interval);
        
        
        
        // cleanups:
        return () => {
            clearTimeout(timeoutHanlder);
        };
    }, [isInViewport, isFlip]);
    
    
    
    return [
        elmRef,
        !isInViewport ? defaultState : isFlip,
        isInViewport,
    ] as const;
};