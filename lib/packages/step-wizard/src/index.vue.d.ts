declare const _sfc_main: import("vue").DefineComponent<{
    stepData: {
        type: any[];
        default: () => any[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    stepContent: () => any;
    emits: (event: "complete", ...args: any[]) => void;
    complete: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "complete"[], "complete", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stepData: {
        type: any[];
        default: () => any[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onComplete?: (...args: any[]) => any;
}, {
    active: number;
    stepData: any;
    successTitle: string;
    lastBtnTitle: string;
    isShowLastSuccess: boolean;
}, {}>;
export default _sfc_main;
