import { styleSheet, cssVars, style, rule, atGlobal, atRoot, vars } from '@cssfn/core'


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
        ...rule('.siteNavbar', {
            boxSizing: 'border-box',
            minBlockSize: '60px',
            paddingBlock: '0px',
        }),
        
        ...atRoot([
            vars({
                [siteVars.minMainHeight] : `calc(${siteVars.windowHeight} - ${siteVars.headerHeight})`,
            }),
        ]),
    }),
}));
