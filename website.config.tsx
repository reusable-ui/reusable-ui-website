import { styleSheet, cssVars, style, rule, atGlobal, atRoot, vars, descendants } from '@cssfn/core'
import { iconConfig } from '@reusable-ui/components'


interface SiteVars {
    /**
     * the total height of site's `<header>, <main>, <footer>`.
     */
    windowHeight  : any
    
    /**
     * the height of site's `<header>`.
     */
    headerHeight  : any
    
    /**
     * the height of site's `<footer>`.
     */
    footerHeight  : any
    
    /**
     * the `<main>`'s minimum required height for making the entire `<body>` filling `100vh`.
     */
    minMainHeight : any
}
export const [siteVars] = cssVars<SiteVars>({ minify: false });


styleSheet(() => style({
    ...atGlobal({
        // ...rule('*', {
        //     boxSizing : 'border-box',
        // }),
        
        ...rule('html', {
            blockSize: '100%',
            scrollPaddingTop: siteVars.headerHeight,
        }),
        ...rule(['html', 'body'], {
            padding : '0px',
            margin  : '0px',
        }),
        ...rule('body>*>header', {
            zIndex          : 1020,
            position        : 'sticky',
            insetBlockStart : '0px',
        }),
        ...rule('a:has(code:only-child)', {
            textDecoration: [['none'], '!important'],
        }),
        ...rule(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.h1', '.h2', '.h3', '.h4', '.h5', '.h6'], {
            ...descendants(['code', '.code'], {
                fontSize: [['inherit'], '!important'],
            }),
        }),
        
        ...atRoot([
            vars({
                [siteVars.minMainHeight] : `calc(${siteVars.windowHeight} - ${siteVars.headerHeight})`,
            }),
        ]),
    }),
}));



iconConfig.image.files.push('reusable-ui.svg');
