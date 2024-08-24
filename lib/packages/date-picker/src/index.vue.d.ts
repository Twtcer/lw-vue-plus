import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "update:modelValue" | "change", ...args: any[]) => void;
    $attrs: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    time: any;
    DatePicker: import("vue").Ref<any, any>;
    attrsBind: import("vue").ComputedRef<any>;
    state: {
        dateOptions: unknown[];
    };
    getShortcuts: (type: any) => any;
    dateChange: (val: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    type: "date" | "year" | "years" | "month" | "months" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    plusTime: boolean;
    isPickerOptions: boolean;
}, {}>;
export default _sfc_main;
