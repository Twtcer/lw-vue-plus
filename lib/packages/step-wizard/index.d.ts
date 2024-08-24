declare const LwStepWizard: ({
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        stepContent: () => any;
        emits: (event: "complete", ...args: any[]) => void;
        complete: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "complete"[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        props: any;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        stepContent: () => any;
        emits: (event: "complete", ...args: any[]) => void;
        complete: () => void;
    }, {}, {}, {}, {
        active: number;
        stepData: any;
        successTitle: string;
        lastBtnTitle: string;
        isShowLastSuccess: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    props: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    stepContent: () => any;
    emits: (event: "complete", ...args: any[]) => void;
    complete: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "complete"[], "complete", {
    active: number;
    stepData: any;
    successTitle: string;
    lastBtnTitle: string;
    isShowLastSuccess: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default LwStepWizard;
