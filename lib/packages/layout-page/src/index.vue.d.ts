declare const _sfc_main: import("vue").DefineComponent<{
    keepScrollDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNoMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    showGoTopButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToTop: {
        type: NumberConstructor;
        default: number;
    };
}, {
    props: any;
    isShowGoTopButton: import("vue").Ref<boolean, boolean>;
    LayoutPageRef: import("vue").Ref<any, any>;
    scrollTop: import("vue").Ref<number, number>;
    backToTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    keepScrollDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNoMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    showGoTopButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToTop: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    keepScrollDisabled: boolean;
    isNoMargin: boolean;
    showGoTopButton: boolean;
    scrollToTop: number;
}, {}>;
export default _sfc_main;
