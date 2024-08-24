import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<1 | 2 | 4 | 3 | 6 | 5>;
        validator: (value: number) => boolean;
        default: number;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    cEvent: any;
    selectListType: import("vue").ComputedRef<(item: {
        list: string | number;
    }) => any>;
    compChildName: any;
    compChildLabel: import("vue").ComputedRef<(opt: {
        type: any;
        arrLabel: any;
    }, value: {
        [x: string]: any;
        value: any;
    }) => any>;
    compChildValue: import("vue").ComputedRef<(opt: {
        type: any;
        arrKey: any;
    }, value: {
        [x: string]: any;
        value: any;
    }, key: any) => any>;
    compChildShowLabel: import("vue").ComputedRef<(opt: {
        type: any;
        arrLabel: any;
    }, value: {
        [x: string]: any;
        label: any;
    }) => any>;
    colSize: import("vue").Ref<1 | 2 | 4 | 3 | 6 | 5, 1 | 2 | 4 | 3 | 6 | 5>;
    tform: any;
    instance: any;
    emits: (event: "update:modelValue" | "handleEvent" | "getRefs", ...args: any[]) => void;
    getChildWidth: (item: {
        widthSize: any;
    }) => string;
    getPlaceholder: (row: any) => any;
    handleEvent: (type: null, val: any, item: any, flag?: boolean) => void;
    selfValidate: () => Promise<unknown>;
    getRefs: (el: any, item: any, index: any) => void;
    tselecttableref: any;
    handleRef: (el: any, key: any) => void;
    selfResetFields: () => void;
    RenderComp: import("vue").DefineComponent<{
        render: FunctionConstructor;
        item: ObjectConstructor;
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        render: FunctionConstructor;
        item: ObjectConstructor;
    }>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "handleEvent" | "getRefs")[], "update:modelValue" | "handleEvent" | "getRefs", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<1 | 2 | 4 | 3 | 6 | 5>;
        validator: (value: number) => boolean;
        default: number;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onHandleEvent?: (...args: any[]) => any;
    onGetRefs?: (...args: any[]) => any;
}, {
    widthSize: 1 | 2 | 4 | 3 | 6 | 5;
    formOpts: Record<string, any>;
    isTrim: boolean;
}, {}>;
export default _sfc_main;
