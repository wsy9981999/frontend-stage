<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-global-style />
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-modal-provider>
            <n-notification-provider>
              <router-view></router-view>
            </n-notification-provider>
          </n-modal-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, dateZhCN, type GlobalTheme, zhCN } from 'naive-ui'

const theme = shallowRef<GlobalTheme | null>(null)
useDark({
  onChanged(dark: boolean) {
    theme.value = dark ? darkTheme : null
  },
})
</script>

<style scoped></style>
