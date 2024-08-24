declare const LwCheckbox: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"button" | "check">;
            validator: (value: string) => boolean;
            default: string;
        };
        options: {
            type: any[];
            default: () => any[];
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            validator: (value: string) => boolean;
            default: string;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        props: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>>, {
        checkProps: import("@vue/shared").LooseRequired<{
            readonly type: "button" | "check";
            readonly props: Record<string, any>;
            readonly size: "default" | "small" | "large";
            readonly options: any;
            readonly border: boolean;
        } & {}>;
        checkType: import("vue").ComputedRef<string>;
        optionsProps: import("vue").Ref<{
            value: string;
            label: string;
            disabled: string;
        }, import("./src/checkbox").OptionsProps | {
            value: string;
            label: string;
            disabled: string;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"button" | "check">;
            validator: (value: string) => boolean;
            default: string;
        };
        options: {
            type: any[];
            default: () => any[];
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            validator: (value: string) => boolean;
            default: string;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        props: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>>, {
        type: "button" | "check";
        props: Record<string, any>;
        size: "default" | "small" | "large";
        options: any;
        border: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"button" | "check">;
            validator: (value: string) => boolean;
            default: string;
        };
        options: {
            type: any[];
            default: () => any[];
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            validator: (value: string) => boolean;
            default: string;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        props: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>>, {
        checkProps: import("@vue/shared").LooseRequired<{
            readonly type: "button" | "check";
            readonly props: Record<string, any>;
            readonly size: "default" | "small" | "large";
            readonly options: any;
            readonly border: boolean;
        } & {}>;
        checkType: import("vue").ComputedRef<string>;
        optionsProps: import("vue").Ref<{
            value: string;
            label: string;
            disabled: string;
        }, import("./src/checkbox").OptionsProps | {
            value: string;
            label: string;
            disabled: string;
        }>;
    }, {}, {}, {}, {
        type: "button" | "check";
        props: Record<string, any>;
        size: "default" | "small" | "large";
        options: any;
        border: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"button" | "check">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: any[];
        default: () => any[];
    };
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        validator: (value: string) => boolean;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    checkProps: import("@vue/shared").LooseRequired<{
        readonly type: "button" | "check";
        readonly props: Record<string, any>;
        readonly size: "default" | "small" | "large";
        readonly options: any;
        readonly border: boolean;
    } & {}>;
    checkType: import("vue").ComputedRef<string>;
    optionsProps: import("vue").Ref<{
        value: string;
        label: string;
        disabled: string;
    }, import("./src/checkbox").OptionsProps | {
        value: string;
        label: string;
        disabled: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "button" | "check";
    props: Record<string, any>;
    size: "default" | "small" | "large";
    options: any;
    border: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwCheckbox;
