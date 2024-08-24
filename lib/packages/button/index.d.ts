declare const LwButton: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        emits: (event: "click", ...args: any[]) => void;
        record: import("vue").Ref<number, number>;
        handleClick: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        emits: (event: "click", ...args: any[]) => void;
        record: import("vue").Ref<number, number>;
        handleClick: () => void;
    }, {}, {}, {}, {
        placement: string;
        time: number;
        tip: string;
        tipProps: Record<string, any>;
        isDebounce: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    props: any;
    emits: (event: "click", ...args: any[]) => void;
    record: import("vue").Ref<number, number>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    placement: string;
    time: number;
    tip: string;
    tipProps: Record<string, any>;
    isDebounce: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwButton;
