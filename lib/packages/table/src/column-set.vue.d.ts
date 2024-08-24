declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
