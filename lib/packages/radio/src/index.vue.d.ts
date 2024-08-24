import type { PropType } from "vue";
import type { OptionsProps } from "./radio";
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: PropType<"button" | "radio">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: any[];
        default: () => any[];
    };
    size: {
        type: PropType<"default" | "small" | "large">;
        validator: (value: string) => boolean;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    radioProps: import("@vue/shared").LooseRequired<{
        readonly type: "button" | "radio";
        readonly props: Record<string, any>;
        readonly size: "default" | "small" | "large";
        readonly options: any;
        readonly border: boolean;
    } & {}>;
    radioType: import("vue").ComputedRef<string>;
    optionsProps: import("vue").Ref<{
        value: string;
        label: string;
        disabled: string;
    }, OptionsProps | {
        value: string;
        label: string;
        disabled: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"button" | "radio">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: any[];
        default: () => any[];
    };
    size: {
        type: PropType<"default" | "small" | "large">;
        validator: (value: string) => boolean;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    type: "button" | "radio";
    props: Record<string, any>;
    size: "default" | "small" | "large";
    options: any;
    border: boolean;
}, {}>;
export default _sfc_main;
