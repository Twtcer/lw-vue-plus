declare const LwChart: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, {
        description: string;
        options: Record<string, any>;
        id: string;
        isEmpty: boolean | Function;
        theme: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    description: string;
    options: Record<string, any>;
    id: string;
    isEmpty: boolean | Function;
    theme: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwChart;
