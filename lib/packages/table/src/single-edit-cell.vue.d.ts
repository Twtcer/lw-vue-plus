declare const _sfc_main: import("vue").DefineComponent<{
    /** 编辑配置项说明
     * label: '爱好', // placeholder显示
     * editComponent: 'el-select', // 组件
     * type: 'select-arr', // option显示
     * list: 'hobbyList', // 下拉选择数据源
     * arrLabel: 'label', // 下拉选择中文显示
     * arrKey: 'value' // 下拉选择number显示（最终传后台）
     * bind:{} // 组件衍生属性（即第三方组件属性）
     */
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
    /** 编辑配置项说明
     * label: '爱好', // placeholder显示
     * editComponent: 'el-select', // 组件
     * type: 'select-arr', // option显示
     * list: 'hobbyList', // 下拉选择数据源
     * arrLabel: 'label', // 下拉选择中文显示
     * arrKey: 'value' // 下拉选择number显示（最终传后台）
     * bind:{} // 组件衍生属性（即第三方组件属性）
     */
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
export default _sfc_main;
