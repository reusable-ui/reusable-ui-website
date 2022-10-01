// react:
import {
    default as React,
    useMemo,
}                           from 'react'

// others libs:
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



export interface CodeHighlighterProps {
    // code:
    language ?: string
    children ?: string
    
    classes  ?: string[]
}
const CodeHighlighter = ({language, children: code, classes}: CodeHighlighterProps) => {
    const className = (classes ?? []).join(' ');
    
    return useMemo(() => (
        <SyntaxHighlighter
            language={language}
            
            
            // style={dark}
            customStyle={{ margin: undefined }}
            className={className}
        >
            { code?.trim() ?? '' }
        </SyntaxHighlighter>
    ), [language, code, className]);
};
export {
    CodeHighlighter,
    CodeHighlighter as default,
}