<template>
  <div class="hp-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <nut-form>
      <nut-row>
        <template v-for="(item, index) in formItems" :key="index">
          <nut-col>
            <nut-form-item>
              <template v-if="item.type === 'input' || item.type === 'password'">
                <input type="text" v-model="formData[`${item.field}`]" />
              </template>
            </nut-form-item>
          </nut-col>
        </template>
      </nut-row>
    </nut-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { PropType, ref, watch } from 'vue';
  const props = defineProps({
    modelValue: {
      type: Object,
    },
    formItems: {
      // type: Array as PropType<IFormItem[]>,
      type: Array,
      default: () => [],
    },
  });
  const formData = ref({ ...props.modelValue });
  const emit = defineEmits(['update:modelValue']);
  watch(
    formData,
    (newValue) => {
      emit('update:modelValue', newValue);
    },
    { deep: true },
  );
</script>
<style lang="less" scoped></style>
