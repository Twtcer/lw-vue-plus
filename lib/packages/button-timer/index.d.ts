declare const LwButtonTimer: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        time: import("vue").Ref<number, number>;
        disabled: import("vue").Ref<boolean, boolean>;
        text: import("vue").ComputedRef<string>;
        emits: (event: "click", ...args: any[]) => void;
        run: () => void;
        reset: () => void;
        start: () => void;
        timer: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        time: import("vue").Ref<number, number>;
        disabled: import("vue").Ref<boolean, boolean>;
        text: import("vue").ComputedRef<string>;
        emits: (event: "click", ...args: any[]) => void;
        run: () => void;
        reset: () => void;
        start: () => void;
        timer: () => void;
    }, {}, {}, {}, {
        second: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    props: any;
    time: import("vue").Ref<number, number>;
    disabled: import("vue").Ref<boolean, boolean>;
    text: import("vue").ComputedRef<string>;
    emits: (event: "click", ...args: any[]) => void;
    run: () => void;
    reset: () => void;
    start: () => void;
    timer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    second: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwButtonTimer;
