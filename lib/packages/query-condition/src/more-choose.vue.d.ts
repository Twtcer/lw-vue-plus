declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
