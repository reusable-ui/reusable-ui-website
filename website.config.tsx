import { styleSheet, cssVars, style, rule, atGlobal, atRoot, vars, descendants, switchOf } from '@cssfn/core'
import { basics, iconConfig } from '@reusable-ui/components'
import { codes, colors, usesMildable, usesOutlineable } from '@reusable-ui/core'



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


interface CodeVars {
    foregFn    : any
    altForegFn : any
    foreg      : any
}
const [codeVars] = cssVars<CodeVars>();

const codeStyle = () => {
    const { outlineableVars } = usesOutlineable();
    const { mildableVars } = usesMildable();
    
    return style({
        ...rule('a:has(>code:only-child)', {
            textDecoration: [['none'], '!important'], // disable underline for <a> wrapping single <code>
        }),
        ...rule(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.h1', '.h2', '.h3', '.h4', '.h5', '.h6'], {
            ...descendants('code', {
                fontSize: [['inherit'], '!important'],
            }),
        }),
        ...rule('code', {
            ...vars({
                [codeVars.foregFn   ] : [[
                    switchOf(outlineableVars.outlinedSw, mildableVars.mildSw), // the (outlined|mild) switching function
                    codes.foreg,
                ]],
                [codeVars.altForegFn] : colors.dangerMild,
                [codeVars.foreg     ] : switchOf(
                    codeVars.foregFn,
                    codeVars.altForegFn,
                ),
            }),
            color      : codeVars.foreg,
            transition : basics.transition,
        }, { specificityWeight: 2 }),
    });
};

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
        ...codeStyle(),
        
        ...atRoot([
            vars({
                [siteVars.minMainHeight] : `calc(${siteVars.windowHeight} - ${siteVars.headerHeight})`,
            }),
        ]),
    }),
}));



iconConfig.image.files.push('reusable-ui.svg');
