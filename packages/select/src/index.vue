<template>
  <component
    :is="!useVirtual ? 'el-select' : 'el-select-v2'"
    popper-class="lw_select"
    ref="selectRef"
    v-model="childSelectedValue"
    :options="!useVirtual ? null : options"
    :style="{ width: width || '100%' }"
    @change="handleChange"
    @input="handleSelectInput"
    v-bind="{
      clearable: true,
      filterable: filterable,
      multiple: multiple,
      ...$attrs
    }"
  >
    <template v-for="(index, name) in slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
    <template v-if="!useVirtual">
      <el-checkbox
        v-if="multiple && !paginable"
        v-model="selectChecked"
        @change="selectAll"
        class="all_checkbox"
      >
        全选
      </el-checkbox>
      <el-option
        v-for="(item, index) in options"
        :key="'index' + index"
        :labe="customLabel ? customLabelHandler(item) : item[labelCustom]"
        :vale="item[keyCustom]"
        :disabled="item.disabled"
      >
        <template v-for="(index, name) in slots" v-slot:[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </el-option>
      <div class="lw_select__pagination" v-if="paginable && filteredOptionsCount > 0">
        <el-pagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :layout="pagination.layout || 'total, prev, pager, next, jumper'"
          :total="pagination.total"
          @input.stop="(e: any) => emits('input', e.target.value)"
          v-bind="{
            small: true,
            background: true,
            ...$attrs,
            ...pagination.bind
          }"
        >
        </el-pagination>
      </div>
    </template>
  </component>
</template>

<script setup lang="ts" name="LwSelect">
import { computed, ref, useSlots } from "vue"
const props: any = defineProps({
  modelValue: {
    type: [String, Number, Array]
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false
  },
  // 数据源配置
  options: {
    type: Array as unknown as any[],
    default: () => []
  },
  // 自定义option key
  keyCustom: {
    type: String,
    default: "key"
  },
  // 自定义option label
  labelCustom: {
    type: String,
    default: "label"
  },
  // 是否自定义设置下拉label
  customLabel: {
    type: String
  },
  // 筛选
  filterable: {
    type: Boolean,
    default: true
  },
  paginable: {
    type: Boolean,
    default: false
  },
  // 分页
  pagination: {
    type: Object,
    default: () => {
      return {
        pageSize: 6, // 每页显示条数
        currentPage: 1, // 当前页
        pagerCount: 5, // 按钮数，超过时会折叠
        total: 0, // 总条数
        layout: "total, prev, pager, next, jumper"
      }
    }
  },
  // 虚拟列表
  useVirtual: {
    type: Boolean,
    default: false
  },
  // css
  width: {
    type: String
  }
})

const selectRef = ref()
const filteredOptionsCount = ref(1)
const slots = useSlots()

const emits = defineEmits(["update:modelValue", "change", "input", "select-input"])
const handleSelectInput = (e: any) => {
  if (props.usefilter) {
    filteredOptionsCount.value = selectRef.value.filteredOptionsCount
  }
  emits("select-input", e.target.value)
}

let childSelectedValue: any = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits("update:modelValue", val)
  }
})

const handleChange = (val: any) => {
  emits("change", val)
}

// 全选
const selectChecked = computed({
  get() {
    const _val: any = props.modelValue
    const list = props.options.filter((item: { disabled: any }) => {
      return !item.disabled
    })
    return _val.length === list.length
  },
  set(val: any) {
    const list = props.options.filter((item: { disabled: any }) => {
      return !item.disabled
    })
    return val?.length === list.length
  }
})

// 点选全部
const selectAll = (val: any) => {
  let options = JSON.parse(JSON.stringify(props.options))
  // 筛选禁用选项
  options = options.filter((item: { disabled: any }) => {
    return !item.disabled
  })
  if (val) {
    const selectedAllValue = options.map((item: { [x: string]: any }) => {
      return item[props.valueCustom]
    })
    emits("update:modelValue", selectedAllValue)
  } else {
    emits("update:modelValue", null)
  }
}

const customLabelHandler = (_item: any) => {
  let func = new Function("_item", `return ${props.customLabel}`)
  return func(_item)
}
</script>

<style scoped lang="scss">
.lw_select {
  .el-select-dropdown {
    .all_checkbox {
      margin-left: 20px;
    }
  }
}
</style>
