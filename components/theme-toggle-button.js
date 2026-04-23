import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { useColorMode } from '../lib/color-mode'

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        initial={{ y: shouldReduceMotion ? 0 : -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: shouldReduceMotion ? 0 : 14, opacity: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <IconButton
          aria-label="Toggle theme"
          bg={isDark ? 'rgba(166,18,31,0.9)' : 'rgba(166,18,31,0.85)'}
          color="white"
          border="1px solid"
          borderColor={isDark ? 'rgba(239,90,102,0.55)' : 'rgba(128,8,24,0.35)'}
          _hover={{
            bg: isDark ? 'rgba(183,22,38,0.95)' : 'rgba(183,22,38,0.92)',
            transform: shouldReduceMotion ? 'none' : 'translateY(-1px)',
          }}
          _active={{
            transform: shouldReduceMotion ? 'none' : 'translateY(0) scale(0.97)',
          }}
          transition={shouldReduceMotion ? 'none' : 'background 0.2s ease, transform 0.2s ease'}
          variant="solid"
          onClick={toggleColorMode}
        >
          {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
