declare const LwDatePicker: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (DateConstructor | StringConstructor | ArrayConstructor)[];
        };
        plusTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
            validator: (value: string) => boolean;
            default: string;
        };
        shortcuts: {
            type: ArrayConstructor;
        };
        isPickerOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        props: any;
        emits: (event: "update:modelValue" | "change", ...args: any[]) => void;
        $attrs: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        time: any;
        DatePicker: import("vue").Ref<any, any>;
        attrsBind: import("vue").ComputedRef<any>;
        state: {
            dateOptions: unknown[];
        };
        getShortcuts: (type: any) => any;
        dateChange: (val: any[]) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (DateConstructor | StringConstructor | ArrayConstructor)[];
        };
        plusTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
            validator: (value: string) => boolean;
            default: string;
        };
        shortcuts: {
            type: ArrayConstructor;
        };
        isPickerOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        type: "date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
        plusTime: boolean;
        isPickerOptions: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (DateConstructor | StringConstructor | ArrayConstructor)[];
        };
        plusTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
            validator: (value: string) => boolean;
            default: string;
        };
        shortcuts: {
            type: ArrayConstructor;
        };
        isPickerOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        props: any;
        emits: (event: "update:modelValue" | "change", ...args: any[]) => void;
        $attrs: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        time: any;
        DatePicker: import("vue").Ref<any, any>;
        attrsBind: import("vue").ComputedRef<any>;
        state: {
            dateOptions: unknown[];
        };
        getShortcuts: (type: any) => any;
        dateChange: (val: any[]) => void;
    }, {}, {}, {}, {
        type: "date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
        plusTime: boolean;
        isPickerOptions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    props: any;
    emits: (event: "update:modelValue" | "change", ...args: any[]) => void;
    $attrs: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    time: any;
    DatePicker: import("vue").Ref<any, any>;
    attrsBind: import("vue").ComputedRef<any>;
    state: {
        dateOptions: unknown[];
    };
    getShortcuts: (type: any) => any;
    dateChange: (val: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", {
    type: "date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    plusTime: boolean;
    isPickerOptions: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwDatePicker;
