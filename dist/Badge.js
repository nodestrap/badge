// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, children, 
// rules:
variants, rule, isEmpty, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { borderRadiuses, } from '@nodestrap/borders'; // configurable borders & border radiuses defs
import typos from '@nodestrap/typos'; // configurable typography (texting) defs
import { 
// styles:
fillTextLineHeightLayout, fillTextLineWidthLayout, } from '@nodestrap/layouts';
// nodestrap components:
import { 
// hooks:
usesSizeVariant, notNude, usesBorderRadius, usesPadding, expandPadding, } from '@nodestrap/basic';
import { 
// styles:
usesPopupLayout, usesPopupVariants, usesPopupStates, Popup, } from '@nodestrap/popup';
export const useBadgeVariant = (props) => {
    return {
        class: props.badgeStyle ? props.badgeStyle : null,
    };
};
// styles:
export const usesBadgeLayout = () => {
    // dependencies:
    // spacings:
    const [, paddingRefs, paddingDecls] = usesPadding();
    return composition([
        imports([
            // layouts:
            usesPopupLayout(),
        ]),
        layout({
            // layouts:
            display: 'inline-block',
            // positions:
            verticalAlign: 'baseline',
            // sizes:
            /* -- auto size depends on the text's/content's size -- */
            boxSizing: 'content-box',
            // typos:
            lineHeight: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            // customize:
            ...usesGeneralProps(cssProps),
            // spacings:
            ...expandPadding(cssProps), // expand padding css vars
        }),
        variants([
            isEmpty([
                layout({
                    // layouts:
                    display: 'inline-grid',
                    // // sizes:
                    // width   : '1em', // not working, (font-width  !== 1em) if the font-size is fractional number
                    // height  : '1em', // not working, (font-height !== 1em) if the font-size is fractional number
                    // children:
                    ...children('::before', [
                        imports([
                            fillTextLineHeightLayout(),
                        ]),
                    ]),
                    ...children('::after', [
                        imports([
                            fillTextLineWidthLayout(),
                        ]),
                    ]),
                    // spacings:
                    [paddingDecls.paddingInline]: paddingRefs.paddingBlock, // set paddingInline = paddingBlock
                }),
            ]),
        ]),
    ]);
};
export const usesBadgeVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    // borders:
    const [, , borderRadiusDecls] = usesBorderRadius();
    // spacings:
    const [, paddingRefs, paddingDecls] = usesPadding();
    return composition([
        imports([
            // variants:
            usesPopupVariants(),
            // layouts:
            sizes(),
        ]),
        variants([
            rule(['.pill', '.circle'], [
                layout({
                    // borders:
                    // big rounded corners on top:
                    [borderRadiusDecls.borderStartStartRadius]: borderRadiuses.pill,
                    [borderRadiusDecls.borderStartEndRadius]: borderRadiuses.pill,
                    // big rounded corners on bottom:
                    [borderRadiusDecls.borderEndStartRadius]: borderRadiuses.pill,
                    [borderRadiusDecls.borderEndEndRadius]: borderRadiuses.pill,
                }),
            ]),
            rule(['.square', '.circle'], [
                variants([
                    notNude([
                        layout({
                            // spacings:
                            [paddingDecls.paddingInline]: paddingRefs.paddingBlock, // set paddingInline = paddingBlock
                        }),
                    ]),
                ]),
            ]),
            rule('.pill', [
                layout({
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'pill')), // apply general cssProps starting with pill***
                }),
            ]),
            rule('.square', [
                layout({
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'square')), // apply general cssProps starting with square***
                }),
            ]),
            rule('.circle', [
                layout({
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'circle')), // apply general cssProps starting with circle***
                }),
            ]),
        ]),
    ]);
};
export const usesBadgeStates = () => {
    return composition([
        imports([
            // states:
            usesPopupStates(),
        ]),
    ]);
};
export const useBadgeSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesBadgeLayout(),
            // variants:
            usesBadgeVariants(),
            // states:
            usesBadgeStates(),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const basics = {
        //#region typos
        fontSize: '0.75em',
        fontWeight: typos.fontWeightBold,
        //#endregion typos
        //#region spacings
        paddingInline: '0.65em',
        paddingBlock: '0.35em',
        //#endregion spacings
    };
    return {
        ...basics,
        //#region typos
        fontSizeSm: [['calc(', basics.fontSize, '/', 1.25, ')']],
        fontSizeLg: [['calc(', basics.fontSize, '*', 1.25, ')']],
        //#endregion typos
        //#region spacings
        paddingInlineSm: [['calc(', basics.paddingInline, '/', 1.25, ')']],
        paddingBlockSm: [['calc(', basics.paddingBlock, '/', 1.25, ')']],
        paddingInlineLg: [['calc(', basics.paddingInline, '*', 1.25, ')']],
        paddingBlockLg: [['calc(', basics.paddingBlock, '*', 1.25, ')']],
        //#endregion spacings
    };
}, { prefix: 'bge' });
const defaultPopupModifiers = [
    { name: 'flip', enabled: false },
    { name: 'preventOverflow', enabled: false },
];
export function Badge(props) {
    // styles:
    const sheet = useBadgeSheet();
    // variants:
    const badgeVariant = useBadgeVariant(props);
    // rest props:
    const { 
    // accessibilities:
    label, active, // from accessibilities
    inheritActive, // from accessibilities
    ...restProps } = props;
    // fn props:
    const activeFn = active ?? !!(props.children ?? false);
    // jsx:
    return (React.createElement(Popup, { ...restProps, 
        // semantics:
        tag: props.tag ?? 'span', semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? 'status', "aria-label": props['aria-label'] ?? label, ...{
            active: activeFn,
            inheritActive: false,
        }, 
        // popups:
        popupModifiers: [...defaultPopupModifiers,
            ...(props.popupModifiers ?? []),
        ], 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            badgeVariant.class,
        ] }, props.children));
}
export { Badge as default };
