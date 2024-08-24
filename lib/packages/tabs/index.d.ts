declare const LwTabs: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        tabs: {
            type: any[];
            default: () => any[];
        };
    }>> & {
        onTabsChange?: (...args: any[]) => any;
    }, {
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        activeName: any;
        emit: (event: "tabsChange", ...args: any[]) => void;
        setSelectedTab: (key: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tabsChange"[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        tabs: {
            type: any[];
            default: () => any[];
        };
    }>> & {
        onTabsChange?: (...args: any[]) => any;
    }, {
        tabs: any;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        tabs: {
            type: any[];
            default: () => any[];
        };
    }>> & {
        onTabsChange?: (...args: any[]) => any;
    }, {
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        activeName: any;
        emit: (event: "tabsChange", ...args: any[]) => void;
        setSelectedTab: (key: any) => void;
    }, {}, {}, {}, {
        tabs: any;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: any[];
        default: () => any[];
    };
}>> & {
    onTabsChange?: (...args: any[]) => any;
}, {
    props: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    activeName: any;
    emit: (event: "tabsChange", ...args: any[]) => void;
    setSelectedTab: (key: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tabsChange"[], "tabsChange", {
    tabs: any;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwTabs;
