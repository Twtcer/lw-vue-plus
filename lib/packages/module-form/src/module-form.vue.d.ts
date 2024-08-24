declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
