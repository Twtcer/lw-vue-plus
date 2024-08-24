declare const _sfc_main: import("vue").DefineComponent<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: any[];
        default: () => any[];
    };
}, {
    constantEscape: (value: any, list: any[], key: string | number, label: string | number) => any;
    RenderTooltip: import("vue").DefineComponent<{
        render: FunctionConstructor;
        item: ObjectConstructor;
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        render: FunctionConstructor;
        item: ObjectConstructor;
    }>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: any[];
        default: () => any[];
    };
}>>, {
    listTypeInfo: Record<string, any>;
    descData: any;
    descColumn: number;
    dataList: Record<string, any>;
}, {}>;
export default _sfc_main;
