<template>
  <PageWrap>
    <FormContainer>
      <t-form ref="form" :data="formData" :colon="true" layout="inline">
        <t-form-item label="用户名" name="username">
          <t-input v-model="formData.username" placeholder="请输入用户名">
          </t-input>
        </t-form-item>
        <t-form-item label="所属角色" name="role">
          <t-select v-model="formData.role" placeholder="请选择所属角色">
            <t-option
              v-for="item in roleDict"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            >
            </t-option>
          </t-select>
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

let formData = ref({ username: '', role: '' })

let columns = [
  { colKey: 'username', title: '用户名', width: '100' },
  { colKey: 'roleName', title: '所属角色', width: '100' },
  { colKey: 'action', title: '操作', width: '200', fixed: 'right' },
]

let roleDict = [
  {
    label: '管理员',
    value: '1',
  },
  {
    label: '游客',
    value: '2',
  },
]

let tableData = [
  {
    username: 'admin',
    roleName: '管理员',
  },
  {
    username: 'guest',
    roleName: '游客',
  },
]

let pagination = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: 2,
}
</script>

<style lang="scss" scoped></style>
