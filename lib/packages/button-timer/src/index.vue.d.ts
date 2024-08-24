declare const _sfc_main: import("vue").DefineComponent<{
    second: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
    };
}, {
    props: any;
    time: import("vue").Ref<number, number>;
    disabled: import("vue").Ref<boolean, boolean>;
    text: import("vue").ComputedRef<string>;
    emits: (event: "click", ...args: any[]) => void;
    run: () => void;
    reset: () => void;
    start: () => void;
    timer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    second: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    second: number;
}, {}>;
export default _sfc_main;
