<template>
  <div class="user">
    <page-search
      :form-config="formConfig"
      @handleSearch="handleSearch"
      @handleRefresh="handleRefresh"
    />
    <page-table
      ref="pageTableRef"
      :table-config="tableConfig"
      page-name="users"
    >
      <template #enable="{ row }">
        {{ row.enable === 1 ? '启用' : '禁用' }}
      </template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from '@/views/main/system/user/config/search-config'
import { tableConfig } from '@/views/main/system/user/config/table-config'
import pageSearch from '@/components/page-search/page-search.vue'
import pageTable from '@/components/page-table/page-table.vue'
import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'User',
  components: {
    pageSearch,
    pageTable
  },
  setup() {
    // 1.在user中通过tableRef调用内部的数据请求方法。2.监听v-form暴露的refresh/search事件
    const { pageTableRef, handleRefresh, handleSearch } = usePageSearch()
    return {
      pageTableRef,
      handleRefresh,
      handleSearch,
      // ...usePageSearch(), // 扩展运算符：注意点：如果是数组时，在对象中使用，会变成0:xx， 1: xx模式
      formConfig,
      tableConfig
    }
  }
})
</script>

<style scoped>
.content {
  margin-top: 20px;
  padding: 20px;
}
</style>
