import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ConfigProviderTheme } from 'vant'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref<ConfigProviderTheme>('light')
    const vueDataUiTheme = computed(() => (theme.value === 'light' ? 'zen' : 'hack'))

    function toggle() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    function checkSystemTheme() {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      theme.value = isDarkMode ? 'dark' : 'light'
    }

    return { theme, vueDataUiTheme, checkSystemTheme, toggle }
  },
  {
    persist: true
  }
)
