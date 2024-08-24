declare const _sfc_main: import("vue").DefineComponent<{
    time: {
        type: NumberConstructor;
        default: number;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    tipProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isDebounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "click", ...args: any[]) => void;
    record: import("vue").Ref<number, number>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    time: {
        type: NumberConstructor;
        default: number;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    tipProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isDebounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    placement: string;
    time: number;
    tip: string;
    tipProps: Record<string, any>;
    isDebounce: boolean;
}, {}>;
export default _sfc_main;
