declare const _sfc_main: import("vue").DefineComponent<{
    tabs: {
        type: any[];
        default: () => any[];
    };
}, {
    props: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    activeName: any;
    emit: (event: "tabsChange", ...args: any[]) => void;
    setSelectedTab: (key: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tabsChange"[], "tabsChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: any[];
        default: () => any[];
    };
}>> & {
    onTabsChange?: (...args: any[]) => any;
}, {
    tabs: any;
}, {}>;
export default _sfc_main;
