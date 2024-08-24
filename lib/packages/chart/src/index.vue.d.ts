declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    isEmpty: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}, {
    proxy: any;
    props: any;
    echartRef: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    chart: import("vue").Ref<any, any>;
    emits: (event: string, ...args: any[]) => void;
    events: [string, unknown][];
    renderChart: () => void;
    resizeChart: {
        (this: unknown, ...args: any[]): Promise<unknown>;
        cancel(): void;
    };
    setOption: {
        (this: unknown, ...args: any[]): Promise<unknown>;
        cancel(): void;
    };
    formatEmpty: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    isEmpty: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    description: string;
    options: Record<string, any>;
    id: string;
    isEmpty: boolean | Function;
    theme: string;
}, {}>;
export default _sfc_main;
