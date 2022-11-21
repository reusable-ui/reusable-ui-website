import React, { useEffect, useRef, useState } from 'react'



export const useInViewport = () => {
    const elmRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);
    useEffect(() => {
        // conditions:
        if (!elmRef.current) return;
        
        
        
        // setups:
        const observer = new IntersectionObserver((entry) => {
            setIsInViewport(entry.some((item) => item.isIntersecting));
        }, { threshold: 0.25 });
        observer.observe(elmRef.current);
        
        
        
        // cleanups:
        return () => {
            observer.disconnect();
        };
    }, []);
    
    
    
    return [
        elmRef,
        isInViewport,
    ] as const;
};