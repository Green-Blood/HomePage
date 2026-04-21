import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { useColorMode } from '../lib/color-mode'

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette={isDark ? 'orange' : 'purple'}
          variant="ghost"
          onClick={toggleColorMode}
        >
          {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
