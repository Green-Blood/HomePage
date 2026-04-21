import { useTheme } from 'next-themes'

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  return {
    colorMode: resolvedTheme ?? 'dark',
    toggleColorMode: () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? light : dark
}
