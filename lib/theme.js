import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: '#f0e7db', _dark: '#202023' },
      color: { base: '#1f2f24', _dark: 'rgba(255,255,255,0.92)' },
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      lineHeight: '1.75',
    },
    a: {
      color: { base: '#a6121f', _dark: '#ef5a66' },
      textUnderlineOffset: '3px',
      transitionProperty: 'color, opacity, text-decoration-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      textDecorationColor: 'color-mix(in srgb, currentColor 45%, transparent)',
      _hover: {
        opacity: 0.92,
        textDecorationColor: 'currentColor',
      },
    },
  },
  theme: {
    tokens: {
      colors: {
        grassTeal: { value: '#31bf69' },
        watermelonRind: { value: '#1f8f4d' },
        watermelonFlesh: { value: '#a6121f' },
      },
      fonts: {
        heading: { value: "'Outfit', sans-serif" },
        body: { value: "'Plus Jakarta Sans', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        link: {
          value: { base: '#a6121f', _dark: '#ef5a66' },
        },
        timelineAccent: {
          value: { base: '#2d9957', _dark: '#7bcd9b' },
        },
        surfaceAccent: {
          value: { base: '#e8efe9', _dark: '#262b27' },
        },
      },
    },
    recipes: {
      heading: {
        variants: {
          variant: {
            'section-title': {
              fontWeight: '700',
              fontSize: '20px',
              marginTop: '4',
              marginBottom: '4',
              textDecoration: 'none',
              paddingBottom: '5px',
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
              borderBottomColor: { base: '#2d9957', _dark: '#7bcd9b' },
              display: 'inline-block',
            },
            'page-title': {
              fontWeight: '700',
              letterSpacing: '-0.01em',
              lineHeight: '1.15',
            },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
