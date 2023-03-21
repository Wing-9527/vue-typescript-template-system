<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form__title">Vue admin</div>
      <t-form
        ref="form"
        :data="formData"
        :rules="rules"
        :colon="true"
        label-width="0"
        @submit="onSubmit"
      >
        <t-form-item name="account">
          <t-input
            v-model="formData.account"
            clearable
            placeholder="请输入账户名"
          >
            <template #prefix-icon>
              <user-circle-icon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item name="password">
          <t-input
            v-model="formData.password"
            type="password"
            clearable
            placeholder="请输入密码"
          >
            <template #prefix-icon>
              <lock-on-icon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item>
          <t-button theme="primary" type="submit" block> 登录 </t-button>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserCircleIcon, LockOnIcon } from 'tdesign-icons-vue-next'
import { useLoginStore } from '@/store/login'

let router = useRouter()

let loginStore = useLoginStore()

let formData = ref({
  account: 'admin',
  password: '123456',
})

let rules = {
  account: [{ required: true, message: '请输入账户名', type: 'error' }],
  password: [{ required: true, message: '请输入密码', type: 'error' }],
}

async function onSubmit({ validateResult }) {
  if (validateResult === true) {
    // request login
    await loginStore.reqLogin(formData.value)
    router.push('/home')
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/login/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  &-form {
    width: 300px;
    padding: 30px;
    border-radius: 4px;
    background-color: rgb(246, 246, 246);
    &__title {
      font-family: 'INKFREE';
      font-size: large;
      font-weight: bold;
      padding: 0 0 20px;
      text-align: center;
    }
  }
}
</style>
