declare const _sfc_main: import("vue").DefineComponent<{
    item: {
        type: ObjectConstructor;
        default: () => {};
        required: true;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, {
    emits: (event: "handleEvent", ...args: any[]) => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    SingleEditCell: import("vue").DefineComponent<{
        configEdit: {
            type: any;
            default: () => {};
        };
        listTypeInfo: {
            type: ObjectConstructor;
            default: () => {};
        };
        scope: {
            type: ObjectConstructor;
            default: () => {};
        };
        prop: {
            type: StringConstructor;
            default: string;
        };
        isShowRules: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | DateConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        indexColumns: (StringConstructor | NumberConstructor)[];
    }, {
        props: any;
        emits: (event: "update:modelValue" | "handleEvent" | "keyupHandle", ...args: any[]) => void;
        childValue: any;
        handleEvent: (type: string) => void;
        keyUpHandle: ($event: any) => void;
        cEvent: any;
        selectListType: import("vue").ComputedRef<(item: {
            list: string | number;
        }) => any>;
        compChildName: import("vue").ComputedRef<(configEdit: {
            type: any;
        }) => "el-radio" | "el-checkbox" | "el-option">;
        compChildLabel: import("vue").ComputedRef<(configEdit: {
            type: any;
            arrLabel: any;
        }, value: {
            [x: string]: any;
            value: any;
        }) => any>;
        compChildValue: import("vue").ComputedRef<(configEdit: {
            type: any;
            arrKey: any;
        }, value: {
            [x: string]: any;
            value: any;
        }, key: any) => any>;
        compChildShowLabel: import("vue").ComputedRef<(configEdit: {
            type: any;
            arrLabel: any;
        }, value: {
            [x: string]: any;
            label: any;
        }) => any>;
        tselecttableref: any;
        handleRef: (el: any) => void;
        resetTselectTableFields: () => void;
        getPlaceholder: (row: any) => any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "handleEvent" | "keyupHandle")[], "update:modelValue" | "handleEvent" | "keyupHandle", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        configEdit: {
            type: any;
            default: () => {};
        };
        listTypeInfo: {
            type: ObjectConstructor;
            default: () => {};
        };
        scope: {
            type: ObjectConstructor;
            default: () => {};
        };
        prop: {
            type: StringConstructor;
            default: string;
        };
        isShowRules: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | DateConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        indexColumns: (StringConstructor | NumberConstructor)[];
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onHandleEvent?: (...args: any[]) => any;
        onKeyupHandle?: (...args: any[]) => any;
    }, {
        prop: string;
        configEdit: any;
        listTypeInfo: Record<string, any>;
        scope: Record<string, any>;
        isShowRules: boolean;
    }, {}>;
    RenderCol: import("vue").DefineComponent<{
        row: ObjectConstructor;
        render: FunctionConstructor;
        index: NumberConstructor;
        column: {
            type: ObjectConstructor;
            default: any;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        row: ObjectConstructor;
        render: FunctionConstructor;
        index: NumberConstructor;
        column: {
            type: ObjectConstructor;
            default: any;
        };
    }>>, {
        column: Record<string, any>;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        default: () => {};
        required: true;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onHandleEvent?: (...args: any[]) => any;
}, {
    align: string;
    item: Record<string, any>;
}, {}>;
export default _sfc_main;
