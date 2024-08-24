declare const LwTable: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        table: {
            type: ObjectConstructor;
            default: () => {};
            required: true;
        };
        columns: {
            type: ArrayConstructor;
            default: () => any[];
        };
        btnPermissions: {
            type: ArrayConstructor;
            default: () => any[];
        };
        title: {
            type: StringConstructor;
        };
        tableTitle: StringConstructor;
        align: {
            type: StringConstructor;
            default: string;
        };
        isTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        isRowSort: {
            type: BooleanConstructor;
            default: boolean;
        };
        isCopy: {
            type: BooleanConstructor;
            default: boolean;
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultRadioCol: NumberConstructor;
        isPaginationCumulative: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFooterBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnSetting: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrentRow: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: (BooleanConstructor | StringConstructor)[];
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSlotToolbar: BooleanConstructor;
        isSlotTitle: BooleanConstructor;
    }>> & {
        onSave?: (...args: any[]) => any;
        "onPage-change"?: (...args: any[]) => any;
        onHandleEvent?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onRowSort?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
    }, {
        props: any;
        state: {
            tableData: any;
            columnSet: any[];
            copyTableData: any[];
        };
        radioVal: import("vue").Ref<any, any>;
        forbidden: import("vue").Ref<boolean, boolean>;
        TTable: any;
        LwTableBox: any;
        columnSetRef: any;
        formRef: any;
        handleRef: (el: any, scope: {
            $index: any;
            column: {
                property: any;
            };
        }, item: {
            prop: any;
        }) => void;
        editTableRef: any;
        handleEditTableRef: (el: any, scope: {
            $index: any;
            column: {
                property: any;
            };
        }, item: {
            prop: any;
        }) => void;
        emits: (event: "save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError", ...args: any[]) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        defaultRadioSelect: (index: any) => void;
        initSort: () => void;
        constantEscape: (value: any, list: any[], key: string | number, label: string | number) => any;
        radioStyleClass: import("vue").ComputedRef<any>;
        isEditRules: import("vue").ComputedRef<any>;
        renderColumns: import("vue").ComputedRef<any>;
        isTableHeader: import("vue").ComputedRef<any>;
        isTableBorder: import("vue").ComputedRef<any>;
        handleKeyup: (event: {
            keyCode: number;
        }, index: number, key: string) => void;
        isForbidden: () => void;
        radioClick: (row: any, index: any) => void;
        radioHandleChange: (row: any, index: any) => void;
        rowClick: (row: any) => void;
        copyDomText: (val: any) => void;
        cellDblclick: (row: {
            [x: string]: any;
        }, column: {
            property: string | number;
        }) => boolean;
        isShow: (name: string) => boolean;
        save: () => void;
        checkIsShow: (scope: {
            row: any;
        }, item: {
            noshow: any;
            show: {
                val: string | any[];
                key: string | number;
            };
            hasPermi: any;
            field: string | number;
            isField: string | number;
        }) => any;
        handleEvent: ({ type, val }: any, index: any) => void;
        handlesCurrentChange: (val: any) => void;
        saveMethod: (callback: (arg0: any) => any) => void;
        clearSelection: () => any;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean) => any;
        toggleAllSelection: () => any;
        toggleRowExpansion: (row: any, expanded: any) => any;
        setCurrentRow: (row: any) => any;
        clearSort: () => any;
        clearFilter: (columnKey: any) => any;
        doLayout: (columnKey: any) => any;
        sort: (prop: string, order: string) => any;
        scrollTo: (options: any, yCoord: any) => any;
        setScrollTop: (top: any) => any;
        setScrollLeft: (left: any) => any;
        clearValidate: () => void;
        resetFields: () => void;
        reSetColumnSet: () => any;
        TTableColumn: import("vue").DefineComponent<{
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
        ColumnSet: import("vue").DefineComponent<{
            columns: {
                type: ArrayConstructor;
                default: () => any[];
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            columnSetBind: {
                type: ObjectConstructor;
                default: () => void;
            };
        }, {
            props: any;
            $attrs: any;
            columnBind: import("vue").ComputedRef<any>;
            getColumnSetCache: () => any;
            initColumnSet: () => ({
                label: any;
                prop: any;
                hidden: boolean;
                checkBoxDisabled: boolean;
                isShowHidden: any;
            } | {
                label: any;
                prop: any;
                checkBoxDisabled: boolean;
                hidden: boolean;
                isShowHidden?: undefined;
            })[];
            emits: (event: "columnSetting", ...args: any[]) => void;
            state: any;
            reSetColumnSet: () => void;
            checkChanged: (checked: any, index: string | number) => void;
            readonly Draggable: import("vue").DefineComponent<{
                list: {
                    type: ArrayConstructor;
                    required: boolean;
                    default: any;
                };
                modelValue: {
                    type: ArrayConstructor;
                    required: boolean;
                    default: any;
                };
                itemKey: {
                    type: (StringConstructor | FunctionConstructor)[];
                    required: boolean;
                };
                clone: {
                    type: FunctionConstructor;
                    default: (original: any) => any;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                move: {
                    type: FunctionConstructor;
                    default: any;
                };
                componentData: {
                    type: ObjectConstructor;
                    required: boolean;
                    default: any;
                };
            }, unknown, {
                error: boolean;
            }, {
                realList(): any;
                getKey(): any;
            }, {
                getUnderlyingVm(domElement: any): any;
                getUnderlyingPotencialDraggableComponent(htmElement: any): any;
                emitChanges(evt: any): void;
                alterList(onList: any): void;
                spliceList(): void;
                updatePosition(oldIndex: any, newIndex: any): void;
                getRelatedContextFromMoveEvent({ to, related }: {
                    to: any;
                    related: any;
                }): any;
                getVmIndexFromDomIndex(domIndex: any): any;
                onDragStart(evt: any): void;
                onDragAdd(evt: any): void;
                onDragRemove(evt: any): void;
                onDragUpdate(evt: any): void;
                computeFutureIndex(relatedContext: any, evt: any): any;
                onDragMove(evt: any, originalEvent: any): any;
                onDragEnd(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
                move: Function;
                tag: string;
                clone: Function;
                list: unknown[];
                modelValue: unknown[];
                componentData: Record<string, any>;
            } & {
                itemKey?: string | Function;
            }>, {
                move: Function;
                tag: string;
                clone: Function;
                list: unknown[];
                modelValue: unknown[];
                componentData: Record<string, any>;
            }, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "columnSetting"[], "columnSetting", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            columns: {
                type: ArrayConstructor;
                default: () => any[];
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            columnSetBind: {
                type: ObjectConstructor;
                default: () => void;
            };
        }>> & {
            onColumnSetting?: (...args: any[]) => any;
        }, {
            title: string;
            name: string;
            columns: unknown[];
            columnSetBind: Record<string, any>;
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
        RenderHeader: import("vue").DefineComponent<{
            render: FunctionConstructor;
            column: {
                type: ObjectConstructor;
                default: any;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            render: FunctionConstructor;
            column: {
                type: ObjectConstructor;
                default: any;
            };
        }>>, {
            column: Record<string, any>;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        table: {
            type: ObjectConstructor;
            default: () => {};
            required: true;
        };
        columns: {
            type: ArrayConstructor;
            default: () => any[];
        };
        btnPermissions: {
            type: ArrayConstructor;
            default: () => any[];
        };
        title: {
            type: StringConstructor;
        };
        tableTitle: StringConstructor;
        align: {
            type: StringConstructor;
            default: string;
        };
        isTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        isRowSort: {
            type: BooleanConstructor;
            default: boolean;
        };
        isCopy: {
            type: BooleanConstructor;
            default: boolean;
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultRadioCol: NumberConstructor;
        isPaginationCumulative: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFooterBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnSetting: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrentRow: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: (BooleanConstructor | StringConstructor)[];
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSlotToolbar: BooleanConstructor;
        isSlotTitle: BooleanConstructor;
    }>> & {
        onSave?: (...args: any[]) => any;
        "onPage-change"?: (...args: any[]) => any;
        onHandleEvent?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onRowSort?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
    }, {
        align: string;
        highlightCurrentRow: boolean;
        columns: unknown[];
        columnSetting: boolean;
        table: Record<string, any>;
        btnPermissions: unknown[];
        isTree: boolean;
        isRowSort: boolean;
        isCopy: boolean;
        rowClickRadio: boolean;
        isPaginationCumulative: boolean;
        isShowPagination: boolean;
        isShowFooterBtn: boolean;
        isKeyup: boolean;
        isSlotToolbar: boolean;
        isSlotTitle: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        table: {
            type: ObjectConstructor;
            default: () => {};
            required: true;
        };
        columns: {
            type: ArrayConstructor;
            default: () => any[];
        };
        btnPermissions: {
            type: ArrayConstructor;
            default: () => any[];
        };
        title: {
            type: StringConstructor;
        };
        tableTitle: StringConstructor;
        align: {
            type: StringConstructor;
            default: string;
        };
        isTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        isRowSort: {
            type: BooleanConstructor;
            default: boolean;
        };
        isCopy: {
            type: BooleanConstructor;
            default: boolean;
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultRadioCol: NumberConstructor;
        isPaginationCumulative: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFooterBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnSetting: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrentRow: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: (BooleanConstructor | StringConstructor)[];
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSlotToolbar: BooleanConstructor;
        isSlotTitle: BooleanConstructor;
    }>> & {
        onSave?: (...args: any[]) => any;
        "onPage-change"?: (...args: any[]) => any;
        onHandleEvent?: (...args: any[]) => any;
        onRadioChange?: (...args: any[]) => any;
        onRowSort?: (...args: any[]) => any;
        onValidateError?: (...args: any[]) => any;
    }, {
        props: any;
        state: {
            tableData: any;
            columnSet: any[];
            copyTableData: any[];
        };
        radioVal: import("vue").Ref<any, any>;
        forbidden: import("vue").Ref<boolean, boolean>;
        TTable: any;
        LwTableBox: any;
        columnSetRef: any;
        formRef: any;
        handleRef: (el: any, scope: {
            $index: any;
            column: {
                property: any;
            };
        }, item: {
            prop: any;
        }) => void;
        editTableRef: any;
        handleEditTableRef: (el: any, scope: {
            $index: any;
            column: {
                property: any;
            };
        }, item: {
            prop: any;
        }) => void;
        emits: (event: "save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError", ...args: any[]) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        defaultRadioSelect: (index: any) => void;
        initSort: () => void;
        constantEscape: (value: any, list: any[], key: string | number, label: string | number) => any;
        radioStyleClass: import("vue").ComputedRef<any>;
        isEditRules: import("vue").ComputedRef<any>;
        renderColumns: import("vue").ComputedRef<any>;
        isTableHeader: import("vue").ComputedRef<any>;
        isTableBorder: import("vue").ComputedRef<any>;
        handleKeyup: (event: {
            keyCode: number;
        }, index: number, key: string) => void;
        isForbidden: () => void;
        radioClick: (row: any, index: any) => void;
        radioHandleChange: (row: any, index: any) => void;
        rowClick: (row: any) => void;
        copyDomText: (val: any) => void;
        cellDblclick: (row: {
            [x: string]: any;
        }, column: {
            property: string | number;
        }) => boolean;
        isShow: (name: string) => boolean;
        save: () => void;
        checkIsShow: (scope: {
            row: any;
        }, item: {
            noshow: any;
            show: {
                val: string | any[];
                key: string | number;
            };
            hasPermi: any;
            field: string | number;
            isField: string | number;
        }) => any;
        handleEvent: ({ type, val }: any, index: any) => void;
        handlesCurrentChange: (val: any) => void;
        saveMethod: (callback: (arg0: any) => any) => void;
        clearSelection: () => any;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean) => any;
        toggleAllSelection: () => any;
        toggleRowExpansion: (row: any, expanded: any) => any;
        setCurrentRow: (row: any) => any;
        clearSort: () => any;
        clearFilter: (columnKey: any) => any;
        doLayout: (columnKey: any) => any;
        sort: (prop: string, order: string) => any;
        scrollTo: (options: any, yCoord: any) => any;
        setScrollTop: (top: any) => any;
        setScrollLeft: (left: any) => any;
        clearValidate: () => void;
        resetFields: () => void;
        reSetColumnSet: () => any;
        TTableColumn: import("vue").DefineComponent<{
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
        ColumnSet: import("vue").DefineComponent<{
            columns: {
                type: ArrayConstructor;
                default: () => any[];
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            columnSetBind: {
                type: ObjectConstructor;
                default: () => void;
            };
        }, {
            props: any;
            $attrs: any;
            columnBind: import("vue").ComputedRef<any>;
            getColumnSetCache: () => any;
            initColumnSet: () => ({
                label: any;
                prop: any;
                hidden: boolean;
                checkBoxDisabled: boolean;
                isShowHidden: any;
            } | {
                label: any;
                prop: any;
                checkBoxDisabled: boolean;
                hidden: boolean;
                isShowHidden?: undefined;
            })[];
            emits: (event: "columnSetting", ...args: any[]) => void;
            state: any;
            reSetColumnSet: () => void;
            checkChanged: (checked: any, index: string | number) => void;
            readonly Draggable: import("vue").DefineComponent<{
                list: {
                    type: ArrayConstructor;
                    required: boolean;
                    default: any;
                };
                modelValue: {
                    type: ArrayConstructor;
                    required: boolean;
                    default: any;
                };
                itemKey: {
                    type: (StringConstructor | FunctionConstructor)[];
                    required: boolean;
                };
                clone: {
                    type: FunctionConstructor;
                    default: (original: any) => any;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                move: {
                    type: FunctionConstructor;
                    default: any;
                };
                componentData: {
                    type: ObjectConstructor;
                    required: boolean;
                    default: any;
                };
            }, unknown, {
                error: boolean;
            }, {
                realList(): any;
                getKey(): any;
            }, {
                getUnderlyingVm(domElement: any): any;
                getUnderlyingPotencialDraggableComponent(htmElement: any): any;
                emitChanges(evt: any): void;
                alterList(onList: any): void;
                spliceList(): void;
                updatePosition(oldIndex: any, newIndex: any): void;
                getRelatedContextFromMoveEvent({ to, related }: {
                    to: any;
                    related: any;
                }): any;
                getVmIndexFromDomIndex(domIndex: any): any;
                onDragStart(evt: any): void;
                onDragAdd(evt: any): void;
                onDragRemove(evt: any): void;
                onDragUpdate(evt: any): void;
                computeFutureIndex(relatedContext: any, evt: any): any;
                onDragMove(evt: any, originalEvent: any): any;
                onDragEnd(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
                move: Function;
                tag: string;
                clone: Function;
                list: unknown[];
                modelValue: unknown[];
                componentData: Record<string, any>;
            } & {
                itemKey?: string | Function;
            }>, {
                move: Function;
                tag: string;
                clone: Function;
                list: unknown[];
                modelValue: unknown[];
                componentData: Record<string, any>;
            }, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "columnSetting"[], "columnSetting", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            columns: {
                type: ArrayConstructor;
                default: () => any[];
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            columnSetBind: {
                type: ObjectConstructor;
                default: () => void;
            };
        }>> & {
            onColumnSetting?: (...args: any[]) => any;
        }, {
            title: string;
            name: string;
            columns: unknown[];
            columnSetBind: Record<string, any>;
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
        RenderHeader: import("vue").DefineComponent<{
            render: FunctionConstructor;
            column: {
                type: ObjectConstructor;
                default: any;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            render: FunctionConstructor;
            column: {
                type: ObjectConstructor;
                default: any;
            };
        }>>, {
            column: Record<string, any>;
        }, {}>;
    }, {}, {}, {}, {
        align: string;
        highlightCurrentRow: boolean;
        columns: unknown[];
        columnSetting: boolean;
        table: Record<string, any>;
        btnPermissions: unknown[];
        isTree: boolean;
        isRowSort: boolean;
        isCopy: boolean;
        rowClickRadio: boolean;
        isPaginationCumulative: boolean;
        isShowPagination: boolean;
        isShowFooterBtn: boolean;
        isKeyup: boolean;
        isSlotToolbar: boolean;
        isSlotTitle: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    table: {
        type: ObjectConstructor;
        default: () => {};
        required: true;
    };
    columns: {
        type: ArrayConstructor;
        default: () => any[];
    };
    btnPermissions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    title: {
        type: StringConstructor;
    };
    tableTitle: StringConstructor;
    align: {
        type: StringConstructor;
        default: string;
    };
    isTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    isRowSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    isCopy: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowClickRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultRadioCol: NumberConstructor;
    isPaginationCumulative: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowFooterBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnSetting: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
    };
    isKeyup: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSlotToolbar: BooleanConstructor;
    isSlotTitle: BooleanConstructor;
}>> & {
    onSave?: (...args: any[]) => any;
    "onPage-change"?: (...args: any[]) => any;
    onHandleEvent?: (...args: any[]) => any;
    onRadioChange?: (...args: any[]) => any;
    onRowSort?: (...args: any[]) => any;
    onValidateError?: (...args: any[]) => any;
}, {
    props: any;
    state: {
        tableData: any;
        columnSet: any[];
        copyTableData: any[];
    };
    radioVal: import("vue").Ref<any, any>;
    forbidden: import("vue").Ref<boolean, boolean>;
    TTable: any;
    LwTableBox: any;
    columnSetRef: any;
    formRef: any;
    handleRef: (el: any, scope: {
        $index: any;
        column: {
            property: any;
        };
    }, item: {
        prop: any;
    }) => void;
    editTableRef: any;
    handleEditTableRef: (el: any, scope: {
        $index: any;
        column: {
            property: any;
        };
    }, item: {
        prop: any;
    }) => void;
    emits: (event: "save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError", ...args: any[]) => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    defaultRadioSelect: (index: any) => void;
    initSort: () => void;
    constantEscape: (value: any, list: any[], key: string | number, label: string | number) => any;
    radioStyleClass: import("vue").ComputedRef<any>;
    isEditRules: import("vue").ComputedRef<any>;
    renderColumns: import("vue").ComputedRef<any>;
    isTableHeader: import("vue").ComputedRef<any>;
    isTableBorder: import("vue").ComputedRef<any>;
    handleKeyup: (event: {
        keyCode: number;
    }, index: number, key: string) => void;
    isForbidden: () => void;
    radioClick: (row: any, index: any) => void;
    radioHandleChange: (row: any, index: any) => void;
    rowClick: (row: any) => void;
    copyDomText: (val: any) => void;
    cellDblclick: (row: {
        [x: string]: any;
    }, column: {
        property: string | number;
    }) => boolean;
    isShow: (name: string) => boolean;
    save: () => void;
    checkIsShow: (scope: {
        row: any;
    }, item: {
        noshow: any;
        show: {
            val: string | any[];
            key: string | number;
        };
        hasPermi: any;
        field: string | number;
        isField: string | number;
    }) => any;
    handleEvent: ({ type, val }: any, index: any) => void;
    handlesCurrentChange: (val: any) => void;
    saveMethod: (callback: (arg0: any) => any) => void;
    clearSelection: () => any;
    getSelectionRows: () => any;
    toggleRowSelection: (row: any, selected?: boolean) => any;
    toggleAllSelection: () => any;
    toggleRowExpansion: (row: any, expanded: any) => any;
    setCurrentRow: (row: any) => any;
    clearSort: () => any;
    clearFilter: (columnKey: any) => any;
    doLayout: (columnKey: any) => any;
    sort: (prop: string, order: string) => any;
    scrollTo: (options: any, yCoord: any) => any;
    setScrollTop: (top: any) => any;
    setScrollLeft: (left: any) => any;
    clearValidate: () => void;
    resetFields: () => void;
    reSetColumnSet: () => any;
    TTableColumn: import("vue").DefineComponent<{
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
    ColumnSet: import("vue").DefineComponent<{
        columns: {
            type: ArrayConstructor;
            default: () => any[];
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        columnSetBind: {
            type: ObjectConstructor;
            default: () => void;
        };
    }, {
        props: any;
        $attrs: any;
        columnBind: import("vue").ComputedRef<any>;
        getColumnSetCache: () => any;
        initColumnSet: () => ({
            label: any;
            prop: any;
            hidden: boolean;
            checkBoxDisabled: boolean;
            isShowHidden: any;
        } | {
            label: any;
            prop: any;
            checkBoxDisabled: boolean;
            hidden: boolean;
            isShowHidden?: undefined;
        })[];
        emits: (event: "columnSetting", ...args: any[]) => void;
        state: any;
        reSetColumnSet: () => void;
        checkChanged: (checked: any, index: string | number) => void;
        readonly Draggable: import("vue").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (StringConstructor | FunctionConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "columnSetting"[], "columnSetting", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: ArrayConstructor;
            default: () => any[];
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        columnSetBind: {
            type: ObjectConstructor;
            default: () => void;
        };
    }>> & {
        onColumnSetting?: (...args: any[]) => any;
    }, {
        title: string;
        name: string;
        columns: unknown[];
        columnSetBind: Record<string, any>;
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
    RenderHeader: import("vue").DefineComponent<{
        render: FunctionConstructor;
        column: {
            type: ObjectConstructor;
            default: any;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        render: FunctionConstructor;
        column: {
            type: ObjectConstructor;
            default: any;
        };
    }>>, {
        column: Record<string, any>;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError")[], "save" | "page-change" | "handleEvent" | "radioChange" | "rowSort" | "validateError", {
    align: string;
    highlightCurrentRow: boolean;
    columns: unknown[];
    columnSetting: boolean;
    table: Record<string, any>;
    btnPermissions: unknown[];
    isTree: boolean;
    isRowSort: boolean;
    isCopy: boolean;
    rowClickRadio: boolean;
    isPaginationCumulative: boolean;
    isShowPagination: boolean;
    isShowFooterBtn: boolean;
    isKeyup: boolean;
    isSlotToolbar: boolean;
    isSlotTitle: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwTable;
