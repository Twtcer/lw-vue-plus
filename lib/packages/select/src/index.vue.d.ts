declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: any[];
        default: () => any[];
    };
    keyCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginable: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
            layout: string;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
}, {
    props: any;
    selectRef: import("vue").Ref<any, any>;
    filteredOptionsCount: import("vue").Ref<number, number>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    emits: (event: "input" | "update:modelValue" | "change" | "select-input", ...args: any[]) => void;
    handleSelectInput: (e: any) => void;
    childSelectedValue: any;
    handleChange: (val: any) => void;
    selectChecked: import("vue").WritableComputedRef<any>;
    selectAll: (val: any) => void;
    customLabelHandler: (_item: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "change" | "select-input")[], "input" | "update:modelValue" | "change" | "select-input", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: any[];
        default: () => any[];
    };
    keyCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginable: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
            layout: string;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    "onSelect-input"?: (...args: any[]) => any;
}, {
    filterable: boolean;
    options: any;
    multiple: boolean;
    keyCustom: string;
    labelCustom: string;
    paginable: boolean;
    pagination: Record<string, any>;
    useVirtual: boolean;
}, {}>;
export default _sfc_main;
