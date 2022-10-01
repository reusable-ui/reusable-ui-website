import style from './CodeHighlighter.module.scss'

// react:
import {
    default as React,
}                           from 'react'

import type { CodeHighlighterProps } from './CodeHighlighter'

import loadable from '@loadable/component'
import { Details } from '@reusable-ui/components'
const CodeHighlighterLazy = loadable(() => import(/* webpackChunkName: 'CodeHighlighter' */'./CodeHighlighter'))



// react components:

export interface CodeProps extends CodeHighlighterProps {
    collapsable ?: boolean
    collapse    ?: boolean
    label       ?: React.ReactNode
}
export function Code(props: CodeProps) {
    const {
        collapsable = true,
        collapse    = true,
        label,
        children,
    ...restProps} = props;
    const code = children?.trim();
    
    const CodeJsx = ({ classes }: { classes ?: string[] }) => (<>
        <CodeHighlighterLazy {...restProps} classes={classes} fallback={
            <pre className={[style.codeHighlighter, ...(classes ?? [])].flat().join(' ')}>
                { code }
            </pre>
        }>
            { code }
        </CodeHighlighterLazy>
    </>);
    
    if (collapsable) return (
        <Details
            label={label ?? 'Show code'}
            
            theme='primary'
            mild={true}
            lazy={true}
            
            detailsStyle='content'
            size='sm'
        >
            <CodeJsx classes={['media']} />
        </Details>
    );
    return <CodeJsx />;
}
export { Code as default }

export const BashCode = (props: Omit<CodeProps, 'language'>)       => <Code {...props} language='bash'/>
export const TypeScriptCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='tsx'/>
export const TypeScriptCodeNextJs = (props: Omit<CodeProps, 'language'>) => <TypeScriptCode {...props} label={<>Show code for <strong>Next JS</strong> user</>} />
export const TypeScriptCodeGatsbyJs = (props: Omit<CodeProps, 'language'>) => <TypeScriptCode {...props} label={<>Show code for <strong>Gatsby JS</strong> user</>} />
export const TypeScriptCodeReactRouter = (props: Omit<CodeProps, 'language'>) => <TypeScriptCode {...props} label={<>Show code for <strong>React Router</strong> user</>} />
export const TypeScriptCodeReactRemix = (props: Omit<CodeProps, 'language'>) => <TypeScriptCode {...props} label={<>Show code for <strong>React Remix</strong> user</>} />
export const CssCode = (props: Omit<CodeProps, 'language'>) => <Code {...props} language='css'/>