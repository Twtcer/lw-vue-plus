declare const LwModuleForm: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        handleType: {
            type: import("vue").PropType<"edit" | "desc">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: any[];
        submit: FunctionConstructor;
    }>> & {
        onBack?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
        onTabsChange?: (...args: any[]) => any;
    }, {
        props: any;
        attrs: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        activeName: import("vue").Ref<any, any>;
        loading: import("vue").Ref<boolean, boolean>;
        saveAttrs: import("vue").ComputedRef<any>;
        cancelAttrs: import("vue").ComputedRef<any>;
        tForm: any;
        emits: (event: "validateError" | "tabsChange" | "back", ...args: any[]) => void;
        saveHandle: () => Promise<void>;
        back: () => void;
        show: (formType: any) => void;
        setSelectedTab: (key: any) => void;
        tabsChange: (tab: any) => void;
        resetFormFields: () => void;
        clearValidate: () => void;
        updateFormFields: () => void;
        isShow: (name: string) => boolean;
        ModuleDetail: import("vue").DefineComponent<{
            descData: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: any;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            attrs: any;
            defaultActiveKey: import("vue").WritableComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            descData: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            descData: Record<string, any>;
            titleBold: boolean;
        }, {}>;
        ModuleForm: import("vue").DefineComponent<{
            formOpts: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: any;
            dashboardRef: any;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            attrs: any;
            getChildRef: (index: string | number) => any;
            defaultActiveKey: import("vue").WritableComputedRef<string[]>;
            emits: (event: "handleEvent", ...args: any[]) => void;
            handleEvent: (val: any, type: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            formOpts: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onHandleEvent?: (...args: any[]) => any;
        }, {
            formOpts: Record<string, any>;
            titleBold: boolean;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validateError" | "tabsChange" | "back")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        handleType: {
            type: import("vue").PropType<"edit" | "desc">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: any[];
        submit: FunctionConstructor;
    }>> & {
        onBack?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
        onTabsChange?: (...args: any[]) => any;
    }, {
        handleType: "edit" | "desc";
        isShowHeader: boolean;
        titleSlot: boolean;
        isShowBack: boolean;
        isGoBackEvent: boolean;
        btnSaveBind: Record<string, any>;
        btnCancelBind: Record<string, any>;
        isTabMargin: boolean;
        tabMarginNum: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        handleType: {
            type: import("vue").PropType<"edit" | "desc">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: any[];
        submit: FunctionConstructor;
    }>> & {
        onBack?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
        onTabsChange?: (...args: any[]) => any;
    }, {
        props: any;
        attrs: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        activeName: import("vue").Ref<any, any>;
        loading: import("vue").Ref<boolean, boolean>;
        saveAttrs: import("vue").ComputedRef<any>;
        cancelAttrs: import("vue").ComputedRef<any>;
        tForm: any;
        emits: (event: "validateError" | "tabsChange" | "back", ...args: any[]) => void;
        saveHandle: () => Promise<void>;
        back: () => void;
        show: (formType: any) => void;
        setSelectedTab: (key: any) => void;
        tabsChange: (tab: any) => void;
        resetFormFields: () => void;
        clearValidate: () => void;
        updateFormFields: () => void;
        isShow: (name: string) => boolean;
        ModuleDetail: import("vue").DefineComponent<{
            descData: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: any;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            attrs: any;
            defaultActiveKey: import("vue").WritableComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            descData: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            descData: Record<string, any>;
            titleBold: boolean;
        }, {}>;
        ModuleForm: import("vue").DefineComponent<{
            formOpts: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: any;
            dashboardRef: any;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            attrs: any;
            getChildRef: (index: string | number) => any;
            defaultActiveKey: import("vue").WritableComputedRef<string[]>;
            emits: (event: "handleEvent", ...args: any[]) => void;
            handleEvent: (val: any, type: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            formOpts: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onHandleEvent?: (...args: any[]) => any;
        }, {
            formOpts: Record<string, any>;
            titleBold: boolean;
        }, {}>;
    }, {}, {}, {}, {
        handleType: "edit" | "desc";
        isShowHeader: boolean;
        titleSlot: boolean;
        isShowBack: boolean;
        isGoBackEvent: boolean;
        btnSaveBind: Record<string, any>;
        btnCancelBind: Record<string, any>;
        isTabMargin: boolean;
        tabMarginNum: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    handleType: {
        type: import("vue").PropType<"edit" | "desc">;
        validator: (value: string) => boolean;
        default: string;
    };
    isShowHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleSlot: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGoBackEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnSaveBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnCancelBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    isTabMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabMarginNum: {
        type: NumberConstructor;
        default: number;
    };
    footer: ObjectConstructor;
    title: StringConstructor;
    subTitle: StringConstructor;
    tabs: any[];
    submit: FunctionConstructor;
}>> & {
    onBack?: (...args: any[]) => any;
    onValidateError?: (...args: any[]) => any;
    onTabsChange?: (...args: any[]) => any;
}, {
    props: any;
    attrs: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    activeName: import("vue").Ref<any, any>;
    loading: import("vue").Ref<boolean, boolean>;
    saveAttrs: import("vue").ComputedRef<any>;
    cancelAttrs: import("vue").ComputedRef<any>;
    tForm: any;
    emits: (event: "validateError" | "tabsChange" | "back", ...args: any[]) => void;
    saveHandle: () => Promise<void>;
    back: () => void;
    show: (formType: any) => void;
    setSelectedTab: (key: any) => void;
    tabsChange: (tab: any) => void;
    resetFormFields: () => void;
    clearValidate: () => void;
    updateFormFields: () => void;
    isShow: (name: string) => boolean;
    ModuleDetail: import("vue").DefineComponent<{
        descData: {
            type: ObjectConstructor;
            default: () => {};
        };
        titleBold: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        attrs: any;
        defaultActiveKey: import("vue").WritableComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        descData: {
            type: ObjectConstructor;
            default: () => {};
        };
        titleBold: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        descData: Record<string, any>;
        titleBold: boolean;
    }, {}>;
    ModuleForm: import("vue").DefineComponent<{
        formOpts: {
            type: ObjectConstructor;
            default: () => {};
        };
        titleBold: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        dashboardRef: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        attrs: any;
        getChildRef: (index: string | number) => any;
        defaultActiveKey: import("vue").WritableComputedRef<string[]>;
        emits: (event: "handleEvent", ...args: any[]) => void;
        handleEvent: (val: any, type: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        formOpts: {
            type: ObjectConstructor;
            default: () => {};
        };
        titleBold: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onHandleEvent?: (...args: any[]) => any;
    }, {
        formOpts: Record<string, any>;
        titleBold: boolean;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validateError" | "tabsChange" | "back")[], "validateError" | "tabsChange" | "back", {
    handleType: "edit" | "desc";
    isShowHeader: boolean;
    titleSlot: boolean;
    isShowBack: boolean;
    isGoBackEvent: boolean;
    btnSaveBind: Record<string, any>;
    btnCancelBind: Record<string, any>;
    isTabMargin: boolean;
    tabMarginNum: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwModuleForm;
