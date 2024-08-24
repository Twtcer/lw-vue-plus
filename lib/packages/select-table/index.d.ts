declare const LwSelectTable: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        inputValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: any[];
            default: () => any[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => any[];
        };
        selectable: FunctionConstructor;
    }>> & {
        "onPage-change"?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onSelectionChange?: (...args: any[]) => any;
        "onUpdate:inputValue"?: (...args: any[]) => any;
        "onInput-focus"?: (...args: any[]) => any;
        "onInput-blur"?: (...args: any[]) => any;
        "onInput-clear"?: (...args: any[]) => any;
        "onInput-click"?: (...args: any[]) => any;
    }, {
        props: any;
        selectAttr: import("vue").ComputedRef<{
            clearable: boolean;
        }>;
        vClickOutside: import("vue").ObjectDirective<any, any>;
        emits: (event: "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", ...args: any[]) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        isDefaultSelectVal: import("vue").Ref<boolean, boolean>;
        forbidden: import("vue").Ref<boolean, boolean>;
        isRadio: import("vue").Ref<boolean, boolean>;
        isQueryVisible: import("vue").Ref<boolean, boolean>;
        isVisible: import("vue").Ref<boolean, boolean>;
        radioVal: import("vue").Ref<string, string>;
        selectDefaultLabel: any;
        selectInputVal: any;
        state: any;
        selectRef: any;
        selectTable: any;
        tQueryConditionRef: any;
        nowIndex: import("vue").Ref<number, number>;
        visibleChange: (visible: boolean) => void;
        handleEvent: () => void;
        queryVisibleChange: (val: boolean) => void;
        closeBox: () => void;
        selectKeyup: (e: {
            keyCode: any;
        }) => void;
        findLabel: () => void;
        handlesCurrentChange: (val: any) => void;
        defaultSelect: (defaultSelectVal: any[]) => void;
        handlesSelectionChange: (val: any[]) => void;
        getRowClassName: ({ row }: any) => "" | "selected_row_style";
        getRowKey: (row: {
            [x: string]: any;
        }) => any;
        filterMethodHandle: (val: string) => void;
        initTableData: () => void;
        copyDomText: (val: any) => void;
        cellDblclick: (row: {
            [x: string]: any;
        }, column: {
            property: string | number;
        }) => void;
        radioChangeHandle: (event: {
            preventDefault: () => void;
        }, row: any, index: any) => void;
        isForbidden: () => void;
        radioClick: (row: {
            [x: string]: any;
        }, index: string) => void;
        resetState: () => void;
        updateState: (row: {
            [x: string]: any;
        }, index: string) => void;
        rowClick: (row: {
            [x: string]: any;
        }) => Promise<void>;
        removeTag: (tag: any) => void;
        clear: () => void;
        blur: () => void;
        focus: () => void;
        TQueryCondition: import("vue").DefineComponent<{
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit" | "handleEvent" | "getCheckList")[], "reset" | "submit" | "handleEvent" | "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        inputValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: any[];
            default: () => any[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => any[];
        };
        selectable: FunctionConstructor;
    }>> & {
        "onPage-change"?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onSelectionChange?: (...args: any[]) => any;
        "onUpdate:inputValue"?: (...args: any[]) => any;
        "onInput-focus"?: (...args: any[]) => any;
        "onInput-blur"?: (...args: any[]) => any;
        "onInput-clear"?: (...args: any[]) => any;
        "onInput-click"?: (...args: any[]) => any;
    }, {
        modelValue: string | number | boolean | unknown[] | Record<string, any>;
        filterable: boolean;
        inputValue: string | number | boolean | unknown[] | Record<string, any>;
        multiple: boolean;
        columns: any;
        reserveSelection: boolean;
        isExpanded: boolean;
        table: Record<string, any>;
        rowClickRadio: boolean;
        isShowPagination: boolean;
        isKeyup: boolean;
        isShowInput: boolean;
        inputWidth: string | number;
        inputAttr: Record<string, any>;
        radioTxt: string;
        isShowQuery: boolean;
        isClearQuery: boolean;
        isShowBlurBtn: boolean;
        btnBind: Record<string, any>;
        isShowFirstColumn: boolean;
        keywords: Record<string, any>;
        selectWidth: string | number;
        tableWidth: string | number;
        selfExpanded: boolean;
        defaultSelectVal: unknown[];
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        inputValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: any[];
            default: () => any[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => any[];
        };
        selectable: FunctionConstructor;
    }>> & {
        "onPage-change"?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onSelectionChange?: (...args: any[]) => any;
        "onUpdate:inputValue"?: (...args: any[]) => any;
        "onInput-focus"?: (...args: any[]) => any;
        "onInput-blur"?: (...args: any[]) => any;
        "onInput-clear"?: (...args: any[]) => any;
        "onInput-click"?: (...args: any[]) => any;
    }, {
        props: any;
        selectAttr: import("vue").ComputedRef<{
            clearable: boolean;
        }>;
        vClickOutside: import("vue").ObjectDirective<any, any>;
        emits: (event: "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", ...args: any[]) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        isDefaultSelectVal: import("vue").Ref<boolean, boolean>;
        forbidden: import("vue").Ref<boolean, boolean>;
        isRadio: import("vue").Ref<boolean, boolean>;
        isQueryVisible: import("vue").Ref<boolean, boolean>;
        isVisible: import("vue").Ref<boolean, boolean>;
        radioVal: import("vue").Ref<string, string>;
        selectDefaultLabel: any;
        selectInputVal: any;
        state: any;
        selectRef: any;
        selectTable: any;
        tQueryConditionRef: any;
        nowIndex: import("vue").Ref<number, number>;
        visibleChange: (visible: boolean) => void;
        handleEvent: () => void;
        queryVisibleChange: (val: boolean) => void;
        closeBox: () => void;
        selectKeyup: (e: {
            keyCode: any;
        }) => void;
        findLabel: () => void;
        handlesCurrentChange: (val: any) => void;
        defaultSelect: (defaultSelectVal: any[]) => void;
        handlesSelectionChange: (val: any[]) => void;
        getRowClassName: ({ row }: any) => "" | "selected_row_style";
        getRowKey: (row: {
            [x: string]: any;
        }) => any;
        filterMethodHandle: (val: string) => void;
        initTableData: () => void;
        copyDomText: (val: any) => void;
        cellDblclick: (row: {
            [x: string]: any;
        }, column: {
            property: string | number;
        }) => void;
        radioChangeHandle: (event: {
            preventDefault: () => void;
        }, row: any, index: any) => void;
        isForbidden: () => void;
        radioClick: (row: {
            [x: string]: any;
        }, index: string) => void;
        resetState: () => void;
        updateState: (row: {
            [x: string]: any;
        }, index: string) => void;
        rowClick: (row: {
            [x: string]: any;
        }) => Promise<void>;
        removeTag: (tag: any) => void;
        clear: () => void;
        blur: () => void;
        focus: () => void;
        TQueryCondition: import("vue").DefineComponent<{
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit" | "handleEvent" | "getCheckList")[], "reset" | "submit" | "handleEvent" | "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, {
        modelValue: string | number | boolean | unknown[] | Record<string, any>;
        filterable: boolean;
        inputValue: string | number | boolean | unknown[] | Record<string, any>;
        multiple: boolean;
        columns: any;
        reserveSelection: boolean;
        isExpanded: boolean;
        table: Record<string, any>;
        rowClickRadio: boolean;
        isShowPagination: boolean;
        isKeyup: boolean;
        isShowInput: boolean;
        inputWidth: string | number;
        inputAttr: Record<string, any>;
        radioTxt: string;
        isShowQuery: boolean;
        isClearQuery: boolean;
        isShowBlurBtn: boolean;
        btnBind: Record<string, any>;
        isShowFirstColumn: boolean;
        keywords: Record<string, any>;
        selectWidth: string | number;
        tableWidth: string | number;
        selfExpanded: boolean;
        defaultSelectVal: unknown[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    inputValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: any;
    };
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: any;
    };
    isShowInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    inputAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    value: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
    };
    table: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: any[];
        default: () => any[];
    };
    radioTxt: {
        type: StringConstructor;
        default: string;
    };
    isShowQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isClearQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBlurBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnBind: {
        type: ObjectConstructor;
        default: () => {
            btnTxt: string;
        };
    };
    rowClickRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowFirstColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    reserveSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMethod: {
        type: FunctionConstructor;
    };
    keywords: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            value: string;
        };
    };
    isKeyup: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    tableWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    selfExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultSelectVal: {
        type: ArrayConstructor;
        default: () => any[];
    };
    selectable: FunctionConstructor;
}>> & {
    "onPage-change"?: (...args: any[]) => any;
    onRadioChange?: (...args: any[]) => any;
    onSelectionChange?: (...args: any[]) => any;
    "onUpdate:inputValue"?: (...args: any[]) => any;
    "onInput-focus"?: (...args: any[]) => any;
    "onInput-blur"?: (...args: any[]) => any;
    "onInput-clear"?: (...args: any[]) => any;
    "onInput-click"?: (...args: any[]) => any;
}, {
    props: any;
    selectAttr: import("vue").ComputedRef<{
        clearable: boolean;
    }>;
    vClickOutside: import("vue").ObjectDirective<any, any>;
    emits: (event: "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", ...args: any[]) => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    isDefaultSelectVal: import("vue").Ref<boolean, boolean>;
    forbidden: import("vue").Ref<boolean, boolean>;
    isRadio: import("vue").Ref<boolean, boolean>;
    isQueryVisible: import("vue").Ref<boolean, boolean>;
    isVisible: import("vue").Ref<boolean, boolean>;
    radioVal: import("vue").Ref<string, string>;
    selectDefaultLabel: any;
    selectInputVal: any;
    state: any;
    selectRef: any;
    selectTable: any;
    tQueryConditionRef: any;
    nowIndex: import("vue").Ref<number, number>;
    visibleChange: (visible: boolean) => void;
    handleEvent: () => void;
    queryVisibleChange: (val: boolean) => void;
    closeBox: () => void;
    selectKeyup: (e: {
        keyCode: any;
    }) => void;
    findLabel: () => void;
    handlesCurrentChange: (val: any) => void;
    defaultSelect: (defaultSelectVal: any[]) => void;
    handlesSelectionChange: (val: any[]) => void;
    getRowClassName: ({ row }: any) => "" | "selected_row_style";
    getRowKey: (row: {
        [x: string]: any;
    }) => any;
    filterMethodHandle: (val: string) => void;
    initTableData: () => void;
    copyDomText: (val: any) => void;
    cellDblclick: (row: {
        [x: string]: any;
    }, column: {
        property: string | number;
    }) => void;
    radioChangeHandle: (event: {
        preventDefault: () => void;
    }, row: any, index: any) => void;
    isForbidden: () => void;
    radioClick: (row: {
        [x: string]: any;
    }, index: string) => void;
    resetState: () => void;
    updateState: (row: {
        [x: string]: any;
    }, index: string) => void;
    rowClick: (row: {
        [x: string]: any;
    }) => Promise<void>;
    removeTag: (tag: any) => void;
    clear: () => void;
    blur: () => void;
    focus: () => void;
    TQueryCondition: import("vue").DefineComponent<{
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit" | "handleEvent" | "getCheckList")[], "reset" | "submit" | "handleEvent" | "getCheckList", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click")[], "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    filterable: boolean;
    inputValue: string | number | boolean | unknown[] | Record<string, any>;
    multiple: boolean;
    columns: any;
    reserveSelection: boolean;
    isExpanded: boolean;
    table: Record<string, any>;
    rowClickRadio: boolean;
    isShowPagination: boolean;
    isKeyup: boolean;
    isShowInput: boolean;
    inputWidth: string | number;
    inputAttr: Record<string, any>;
    radioTxt: string;
    isShowQuery: boolean;
    isClearQuery: boolean;
    isShowBlurBtn: boolean;
    btnBind: Record<string, any>;
    isShowFirstColumn: boolean;
    keywords: Record<string, any>;
    selectWidth: string | number;
    tableWidth: string | number;
    selfExpanded: boolean;
    defaultSelectVal: unknown[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwSelectTable;
