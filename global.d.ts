// eslint-disable-next-line spaced-comment
/// <reference types="jest-extended" />

declare module '*.frag' {
    const value: string;

    export default value;
}
// ko

declare module '*.vert' {
    const value: string;

    export default value;
}
