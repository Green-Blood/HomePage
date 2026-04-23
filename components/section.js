import { motion, useReducedMotion } from 'framer-motion'
import { chakra } from '@chakra-ui/react'
import isPropValid from '@emotion/is-prop-valid'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop =>
    isPropValid(prop) ||
    prop === 'transition' ||
    prop === 'whileInView' ||
    prop === 'viewport',
})

const Section = ({ children, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <StyledDiv
      initial={shouldReduceMotion ? { opacity: 0 } : { y: 26, opacity: 0, scale: 0.985 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
