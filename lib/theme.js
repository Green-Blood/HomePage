import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: '#f0e7db', _dark: '#202023' }
    },
    a: {
      color: { base: '#3d7aed', _dark: '#ff63c3' },
      textUnderlineOffset: '3px'
    }
  },
  theme: {
    tokens: {
      colors: {
        grassTeal: { value: '#88ccca' }
      },
      fonts: {
        heading: { value: "'M PLUS Rounded 1c', sans-serif" }
      }
    },
    semanticTokens: {
      colors: {
        link: {
          value: { base: '#3d7aed', _dark: '#ff63c3' }
        }
      }
    },
    recipes: {
      heading: {
        variants: {
          variant: {
            'section-title': {
              textDecoration: 'underline',
              fontSize: '20px',
              textUnderlineOffset: '6px',
              textDecorationColor: '#525252',
              textDecorationThickness: '4px',
              marginTop: '3',
              marginBottom: '4'
            }
          }
        }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)
