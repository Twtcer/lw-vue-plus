declare const LwQueryCondition: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        opts: {
            type: ObjectConstructor;
            required: true;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        isFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
        isDropDownSelectMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreCheckList: {
            type: ArrayConstructor;
            default: () => any[];
        };
        popoverAttrs: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & {
        onHandleEvent?: (...args: any[]) => any;
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
        onGetCheckList?: (...args: any[]) => any;
    }, {
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        isShow: (name: string) => boolean;
        popoverAttrsBind: import("vue").ComputedRef<{
            showTxt: string;
            title: string;
            allTxt: string;
            reverseTxt: string;
            clearTxt: string;
        }>;
        queryState: {
            form: any;
        };
        colLength: import("vue").Ref<number, number>;
        showOpen: import("vue").Ref<boolean, boolean>;
        open: import("vue").Ref<boolean, boolean>;
        queryAttrs: import("vue").ComputedRef<{
            type: string;
            btnTxt: string;
        }>;
        resetAttrs: import("vue").ComputedRef<{
            btnTxt: string;
        }>;
        originCellLength: import("vue").ComputedRef<number>;
        cOpts: import("vue").ComputedRef<any>;
        cellLength: any;
        gridAreas: import("vue").ComputedRef<any>;
        cEvent: import("vue").ComputedRef<(opt: {
            eventHandle: any;
            comp: string | string[];
        }) => any>;
        initForm: (opts: any, keepVal?: boolean) => any;
        getColLength: () => number;
        emits: (event: "reset" | "submit" | "handleEvent" | "getCheckList", ...args: any[]) => void;
        tselecttableref: any;
        handleRef: (el: any, key: any) => void;
        resetHandle: () => void;
        resetData: () => void;
        handleEvent: (type: any, val: any) => void;
        checkHandle: (flagText?: any) => void;
        compChildName: any;
        selectListType: import("vue").ComputedRef<(opt: any) => any>;
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
        getPlaceholder: (row: any) => any;
        RenderComp: import("vue").DefineComponent<{
            render: FunctionConstructor;
            form: ObjectConstructor;
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            render: FunctionConstructor;
            form: ObjectConstructor;
        }>>, {}, {}>;
        MoreChoose: import("vue").DefineComponent<{
            moreCheckList: {
                type: ArrayConstructor;
                default: () => any[];
            };
            popoverAttrsBind: {
                type: ObjectConstructor;
                default: () => {};
            };
        }, {
            props: any;
            checkList: any;
            isCheckList: any;
            allcheckList: any;
            emit: (event: "getCheckList", ...args: any[]) => void;
            handlecheckAll: () => void;
            handleReverseCheck: () => void;
            handleReset: () => void;
            getcheck: (val: any[]) => void;
            analysisObj: (val: any[]) => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "getCheckList"[], "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            moreCheckList: {
                type: ArrayConstructor;
                default: () => any[];
            };
            popoverAttrsBind: {
                type: ObjectConstructor;
                default: () => {};
            };
        }>> & {
            onGetCheckList?: (...args: any[]) => any;
        }, {
            moreCheckList: unknown[];
            popoverAttrsBind: Record<string, any>;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit" | "handleEvent" | "getCheckList")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        opts: {
            type: ObjectConstructor;
            required: true;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        isFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
        isDropDownSelectMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreCheckList: {
            type: ArrayConstructor;
            default: () => any[];
        };
        popoverAttrs: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & {
        onHandleEvent?: (...args: any[]) => any;
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
        onGetCheckList?: (...args: any[]) => any;
    }, {
        loading: boolean;
        reset: boolean;
        labelWidth: string;
        opts: Record<string, any>;
        btnCheckBind: Record<string, any>;
        btnResetBind: Record<string, any>;
        boolEnter: boolean;
        isShowOpen: boolean;
        isExpansion: boolean;
        maxVisibleRows: number;
        packUpTxt: string;
        unfoldTxt: string;
        isFooter: boolean;
        configChangedReset: boolean;
        isShowWidthSize: boolean;
        widthSize: number;
        isDropDownSelectMore: boolean;
        moreCheckList: unknown[];
        popoverAttrs: Record<string, any>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        opts: {
            type: ObjectConstructor;
            required: true;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        isFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
        isDropDownSelectMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreCheckList: {
            type: ArrayConstructor;
            default: () => any[];
        };
        popoverAttrs: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & {
        onHandleEvent?: (...args: any[]) => any;
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
        onGetCheckList?: (...args: any[]) => any;
    }, {
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        isShow: (name: string) => boolean;
        popoverAttrsBind: import("vue").ComputedRef<{
            showTxt: string;
            title: string;
            allTxt: string;
            reverseTxt: string;
            clearTxt: string;
        }>;
        queryState: {
            form: any;
        };
        colLength: import("vue").Ref<number, number>;
        showOpen: import("vue").Ref<boolean, boolean>;
        open: import("vue").Ref<boolean, boolean>;
        queryAttrs: import("vue").ComputedRef<{
            type: string;
            btnTxt: string;
        }>;
        resetAttrs: import("vue").ComputedRef<{
            btnTxt: string;
        }>;
        originCellLength: import("vue").ComputedRef<number>;
        cOpts: import("vue").ComputedRef<any>;
        cellLength: any;
        gridAreas: import("vue").ComputedRef<any>;
        cEvent: import("vue").ComputedRef<(opt: {
            eventHandle: any;
            comp: string | string[];
        }) => any>;
        initForm: (opts: any, keepVal?: boolean) => any;
        getColLength: () => number;
        emits: (event: "reset" | "submit" | "handleEvent" | "getCheckList", ...args: any[]) => void;
        tselecttableref: any;
        handleRef: (el: any, key: any) => void;
        resetHandle: () => void;
        resetData: () => void;
        handleEvent: (type: any, val: any) => void;
        checkHandle: (flagText?: any) => void;
        compChildName: any;
        selectListType: import("vue").ComputedRef<(opt: any) => any>;
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
        getPlaceholder: (row: any) => any;
        RenderComp: import("vue").DefineComponent<{
            render: FunctionConstructor;
            form: ObjectConstructor;
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            render: FunctionConstructor;
            form: ObjectConstructor;
        }>>, {}, {}>;
        MoreChoose: import("vue").DefineComponent<{
            moreCheckList: {
                type: ArrayConstructor;
                default: () => any[];
            };
            popoverAttrsBind: {
                type: ObjectConstructor;
                default: () => {};
            };
        }, {
            props: any;
            checkList: any;
            isCheckList: any;
            allcheckList: any;
            emit: (event: "getCheckList", ...args: any[]) => void;
            handlecheckAll: () => void;
            handleReverseCheck: () => void;
            handleReset: () => void;
            getcheck: (val: any[]) => void;
            analysisObj: (val: any[]) => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "getCheckList"[], "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            moreCheckList: {
                type: ArrayConstructor;
                default: () => any[];
            };
            popoverAttrsBind: {
                type: ObjectConstructor;
                default: () => {};
            };
        }>> & {
            onGetCheckList?: (...args: any[]) => any;
        }, {
            moreCheckList: unknown[];
            popoverAttrsBind: Record<string, any>;
        }, {}>;
    }, {}, {}, {}, {
        loading: boolean;
        reset: boolean;
        labelWidth: string;
        opts: Record<string, any>;
        btnCheckBind: Record<string, any>;
        btnResetBind: Record<string, any>;
        boolEnter: boolean;
        isShowOpen: boolean;
        isExpansion: boolean;
        maxVisibleRows: number;
        packUpTxt: string;
        unfoldTxt: string;
        isFooter: boolean;
        configChangedReset: boolean;
        isShowWidthSize: boolean;
        widthSize: number;
        isDropDownSelectMore: boolean;
        moreCheckList: unknown[];
        popoverAttrs: Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    opts: {
        type: ObjectConstructor;
        required: true;
        default: () => {};
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    btnCheckBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnResetBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    boolEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpansion: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxVisibleRows: {
        type: NumberConstructor;
        default: number;
    };
    packUpTxt: {
        type: StringConstructor;
        default: string;
    };
    unfoldTxt: {
        type: StringConstructor;
        default: string;
    };
    isFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    configChangedReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowWidthSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    widthSize: {
        type: NumberConstructor;
        default: number;
    };
    isDropDownSelectMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreCheckList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    popoverAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onHandleEvent?: (...args: any[]) => any;
    onReset?: (...args: any[]) => any;
    onSubmit?: (...args: any[]) => any;
    onGetCheckList?: (...args: any[]) => any;
}, {
    props: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    isShow: (name: string) => boolean;
    popoverAttrsBind: import("vue").ComputedRef<{
        showTxt: string;
        title: string;
        allTxt: string;
        reverseTxt: string;
        clearTxt: string;
    }>;
    queryState: {
        form: any;
    };
    colLength: import("vue").Ref<number, number>;
    showOpen: import("vue").Ref<boolean, boolean>;
    open: import("vue").Ref<boolean, boolean>;
    queryAttrs: import("vue").ComputedRef<{
        type: string;
        btnTxt: string;
    }>;
    resetAttrs: import("vue").ComputedRef<{
        btnTxt: string;
    }>;
    originCellLength: import("vue").ComputedRef<number>;
    cOpts: import("vue").ComputedRef<any>;
    cellLength: any;
    gridAreas: import("vue").ComputedRef<any>;
    cEvent: import("vue").ComputedRef<(opt: {
        eventHandle: any;
        comp: string | string[];
    }) => any>;
    initForm: (opts: any, keepVal?: boolean) => any;
    getColLength: () => number;
    emits: (event: "reset" | "submit" | "handleEvent" | "getCheckList", ...args: any[]) => void;
    tselecttableref: any;
    handleRef: (el: any, key: any) => void;
    resetHandle: () => void;
    resetData: () => void;
    handleEvent: (type: any, val: any) => void;
    checkHandle: (flagText?: any) => void;
    compChildName: any;
    selectListType: import("vue").ComputedRef<(opt: any) => any>;
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
    getPlaceholder: (row: any) => any;
    RenderComp: import("vue").DefineComponent<{
        render: FunctionConstructor;
        form: ObjectConstructor;
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        render: FunctionConstructor;
        form: ObjectConstructor;
    }>>, {}, {}>;
    MoreChoose: import("vue").DefineComponent<{
        moreCheckList: {
            type: ArrayConstructor;
            default: () => any[];
        };
        popoverAttrsBind: {
            type: ObjectConstructor;
            default: () => {};
        };
    }, {
        props: any;
        checkList: any;
        isCheckList: any;
        allcheckList: any;
        emit: (event: "getCheckList", ...args: any[]) => void;
        handlecheckAll: () => void;
        handleReverseCheck: () => void;
        handleReset: () => void;
        getcheck: (val: any[]) => void;
        analysisObj: (val: any[]) => any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "getCheckList"[], "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        moreCheckList: {
            type: ArrayConstructor;
            default: () => any[];
        };
        popoverAttrsBind: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & {
        onGetCheckList?: (...args: any[]) => any;
    }, {
        moreCheckList: unknown[];
        popoverAttrsBind: Record<string, any>;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit" | "handleEvent" | "getCheckList")[], "reset" | "submit" | "handleEvent" | "getCheckList", {
    loading: boolean;
    reset: boolean;
    labelWidth: string;
    opts: Record<string, any>;
    btnCheckBind: Record<string, any>;
    btnResetBind: Record<string, any>;
    boolEnter: boolean;
    isShowOpen: boolean;
    isExpansion: boolean;
    maxVisibleRows: number;
    packUpTxt: string;
    unfoldTxt: string;
    isFooter: boolean;
    configChangedReset: boolean;
    isShowWidthSize: boolean;
    widthSize: number;
    isDropDownSelectMore: boolean;
    moreCheckList: unknown[];
    popoverAttrs: Record<string, any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwQueryCondition;
