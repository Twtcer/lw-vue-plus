import LwLayoutPage from "./layout-page/src/index.vue";
import LwAdaptivePage from "./adaptive-page/src/index.vue";
import LwLayoutPageItem from "./layout-page-item/src/index.vue";
import LwTabs from "./tabs/src/index.vue";
import LwStepWizard from "./step-wizard/src/index.vue";
import LwQueryCondition from "./query-condition/src/index.vue";
import LwModuleForm from "./module-form/src/index.vue";
import LwDetail from "./detail/src/index.vue";

// form 
import LwButton from "./button/src/index.vue";
import lwTimerButton from "./button-timer/src/index.vue";
import LwForm from "./form/src/index.vue";
import LwRadio from "./radio/src/index.vue";
import LwSelect from "./select/src/index.vue";
import LwSelectTable from "./select-table/src/index.vue";
import LwCheckBox from "./checkbox/src/index.vue";

// table
import LwTable from "./table/src/index.vue";

import LwChart from "./chart/src/index.vue";

declare module "vue" {
  export interface GlobalComponents {
    LwAdaptivePage: typeof LwAdaptivePage;
    LwLayoutPage: typeof LwLayoutPage;
    LwLayoutPageItem: typeof LwLayoutPageItem;
    LwForm: typeof LwForm;
    LwButton: typeof LwButton;
    lwTimerButton: typeof lwTimerButton;
    LwRadio: typeof LwRadio;
    LwSelect: typeof LwSelect;
    LwSelectTable: typeof LwSelectTable;
    LwTable: typeof LwTable;
    LwTabs: typeof LwTabs;
    LwStepWizard: typeof LwStepWizard;
    LwModuleForm: typeof LwModuleForm;
    LwQueryCondition: typeof LwQueryCondition;
    LwCheckBox: typeof LwCheckBox;
    LwChart: typeof LwChart;
    LwDetail: typeof LwDetail; 
  }
}
