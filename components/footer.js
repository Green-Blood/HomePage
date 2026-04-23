import { Box } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'

const Footer = () => {
  const shouldReduceMotion = useReducedMotion()
  return (
    <Box
      as={motion.div}
      align="center"
      opacity={0.4}
      fontSize="sm"
      initial={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 0.4, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      _hover={{ opacity: 0.8 }}
    >
      &copy; {new Date().getFullYear()} StranGen Group. All Rights Reserved.
    </Box>
  )
}

export default Footer
