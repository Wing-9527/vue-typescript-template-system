<template>
  <PageWrap>
    <FormContainer>
      <t-form ref="form" :data="formData" :colon="true" layout="inline">
        <t-form-item label="角色名称" name="roleName">
          <t-input v-model="formData.roleName" placeholder="请输入角色名称">
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit">查询</t-button>
        </t-form-item>
      </t-form>
    </FormContainer>

    <t-table
      row-key="index"
      :data="tableData"
      :columns="columns"
      resizable
      :pagination="pagination"
    >
      <template #action>
        <div class="action-container">
          <t-link v-auth:edit theme="primary" hover="color"> 编辑 </t-link>
          <t-link v-auth:permission theme="primary" hover="color">
            权限
          </t-link>
          <t-link v-auth:delete theme="primary" hover="color"> 删除 </t-link>
        </div>
      </template>
    </t-table>
  </PageWrap>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageWrap from '@/components/PageWrap.vue'
import FormContainer from '@/components/FormContainer.vue'

let formData = ref({
  roleName: '',
})

let columns = [
  { colKey: 'roleName', title: '角色名称', width: '100' },
  { colKey: 'status', title: '状态', width: '100' },
  { colKey: 'remarks', title: '备注', width: '100' },
  { colKey: 'action', title: '操作', width: '200', fixed: 'right' },
]

let tableData = [
  {
    roleName: '管理员',
    status: '启用',
    remarks: '管理员角色，拥有所有权限',
  },
  {
    roleName: '游客',
    status: '启用',
    remarks: '游客角色，拥有只读权限',
  },
]

let pagination = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: 2,
}
</script>

<style lang="scss" scoped></style>
