<template>
  <v-from v-model="formData" v-bind="formConfig">
    <template #header>
      <h2>高级检索</h2>
    </template>
    <template #footer>
      <div class="handle-btn">
        <el-button @click="handleRefresh"
          ><el-icon><Refresh /></el-icon>重置</el-button
        >
        <el-button type="primary" @click="handleSearch">
          <el-icon><Search /></el-icon>
          查询</el-button
        >
      </div>
    </template>
  </v-from>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import vFrom from '@/base-ui/form'
export default defineComponent({
  name: 'PageSearch',
  components: {
    vFrom
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['handleSearch', 'handleRefresh'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.formData应该是动态的由formConfig中获取
    const formItems = props.formConfig.formItems ?? []
    const formOriginData: any = {}
    for (const obj of formItems) {
      formOriginData[obj.filed] = ''
    }
    const formData = ref(formOriginData)

    // 2.重置
    const handleRefresh = () => {
      /*for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }*/
      formData.value = formOriginData
      emit('handleRefresh')
    }

    // 3.搜索
    const handleSearch = () => {
      emit('handleSearch', formData.value)
    }
    return {
      handleRefresh,
      handleSearch,
      formData
    }
  }
})
</script>

<style scoped>
.handle-btn {
  padding: 20px;
  text-align: right;
}
</style>
