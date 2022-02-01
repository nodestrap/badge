/// <reference types="react" />
import { PopupPlacement, PopupModifier, PopupPosition, PopupProps } from '@nodestrap/popup';
export declare type BadgeStyle = 'pill' | 'square' | 'circle';
export interface BadgeVariant {
    badgeStyle?: BadgeStyle;
}
export declare const useBadgeVariant: (props: BadgeVariant) => {
    class: BadgeStyle | null;
};
export declare const usesBadgeLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesBadgeVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesBadgeStates: () => import("@cssfn/cssfn").Rule;
export declare const useBadgeSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    paddingInlineSm: (string | number)[][];
    paddingBlockSm: (string | number)[][];
    paddingInlineLg: (string | number)[][];
    paddingBlockLg: (string | number)[][];
    fontSize: string;
    fontWeight: import("@cssfn/css-types").Cust.Ref;
    paddingInline: string;
    paddingBlock: string;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    paddingInlineSm: (string | number)[][];
    paddingBlockSm: (string | number)[][];
    paddingInlineLg: (string | number)[][];
    paddingBlockLg: (string | number)[][];
    fontSize: string;
    fontWeight: import("@cssfn/css-types").Cust.Ref;
    paddingInline: string;
    paddingBlock: string;
}>, cssVals: import("@cssfn/css-config").Vals<{
    fontSizeSm: (string | number)[][];
    fontSizeLg: (string | number)[][];
    paddingInlineSm: (string | number)[][];
    paddingBlockSm: (string | number)[][];
    paddingInlineLg: (string | number)[][];
    paddingBlockLg: (string | number)[][];
    fontSize: string;
    fontWeight: import("@cssfn/css-types").Cust.Ref;
    paddingInline: string;
    paddingBlock: string;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface BadgeProps<TElement extends HTMLElement = HTMLElement> extends PopupProps<TElement>, BadgeVariant {
    label?: string;
}
export declare function Badge<TElement extends HTMLElement = HTMLElement>(props: BadgeProps<TElement>): JSX.Element;
export { Badge as default };
export type { PopupPlacement, PopupModifier, PopupPosition };
