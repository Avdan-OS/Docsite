interface AdmonitionProps {
    type    : "note" | "tip" | "danger" | "info" | "caution",
    icon   ?: string,
    title   : string,
    children: unknown[]
}

declare module "@theme/Admonition" {
    const A : React.FunctionComponent<AdmonitionProps>;
    export default A;
}

declare module "@theme-original/MDXComponents" {
    const A : unknown[];
    export default A;
}

declare module "@docusaurus/router" {
    const useLocation : () => Location;
    export {useLocation};
}