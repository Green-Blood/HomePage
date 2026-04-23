import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Text, IconButton, Flex } from '@chakra-ui/react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export const Title = ({ children }) => {
  const shouldReduceMotion = useReducedMotion()
  const headingTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }

  return (
    <Box
      as={motion.div}
      className="work-flow-item"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={headingTransition}
      mb={1}
    >
      <Flex
        align="center"
        wrap="wrap"
        gap={{ base: 2, md: 3 }}
        mb={4}
      >
        <Link
          as={NextLink}
          href="/works"
          display="inline-flex"
          alignItems="center"
          gap={2}
          px={3}
          py={1}
          borderRadius="full"
          bg="rgba(166, 18, 31, 0.16)"
          border="1px solid rgba(239, 90, 102, 0.35)"
          color="#ff8593"
          fontWeight="700"
          textDecoration="none"
          lineHeight="1"
          _hover={{
            textDecoration: 'none',
            color: '#ff9ca8',
            transform: shouldReduceMotion ? 'none' : 'translateY(-1px)',
            bg: 'rgba(166, 18, 31, 0.24)',
          }}
          transition={shouldReduceMotion ? 'none' : 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease, color 0.2s ease'}
        >
          <Text as="span">Works</Text>
        </Link>

        <Box as="span" color="whiteAlpha.700" lineHeight="1" mt="1px">
          <IoChevronForwardOutline style={{ display: 'inline', verticalAlign: 'middle' }} />
        </Box>

        <Heading
          display="inline-block"
          as={motion.h3}
          fontFamily="'Sora', 'Outfit', sans-serif"
          fontSize={{ base: 30, md: 36 }}
          letterSpacing="-0.02em"
          lineHeight="1.05"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </Heading>
      </Flex>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => {
  const shouldReduceMotion = useReducedMotion()
  const mediaRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  })
  const mediaParallax = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <>
      <Box
      ref={mediaRef}
      as={motion.div}
      className="work-media work-flow-item"
      position="relative"
      maxW="760px"
      mx="auto"
      w="full"
      mb={5}
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="blackAlpha.200"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      style={shouldReduceMotion ? undefined : { y: mediaParallax }}
      _hover={
        shouldReduceMotion
          ? undefined
          : {
              borderColor: 'rgba(224,87,126,0.55)',
              boxShadow: '0 18px 40px rgba(182,29,63,0.2), 0 0 0 1px rgba(108,229,153,0.25) inset',
            }
      }
    >
      <Image
        as={motion.img}
        w="full"
        maxH={{ base: '360px', md: '460px' }}
        objectFit="cover"
        src={src}
        alt={alt}
        cursor="zoom-in"
        onClick={() => setIsOpen(true)}
        transition={shouldReduceMotion ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'}
        _hover={shouldReduceMotion ? {} : { transform: 'scale(1.025)' }}
      />
    </Box>
    {isOpen && (
      <Box
        as={motion.div}
        position="fixed"
        inset={0}
        zIndex={1800}
        bg="rgba(6, 8, 14, 0.9)"
        backdropFilter="blur(4px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
        onClick={() => setIsOpen(false)}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <IconButton
          aria-label="Close image preview"
          position="absolute"
          top={4}
          right={4}
          onClick={() => setIsOpen(false)}
          bg="blackAlpha.600"
          _hover={{ bg: 'blackAlpha.700' }}
          size="sm"
        >
          x
        </IconButton>
        <Image
          as={motion.img}
          src={src}
          alt={alt}
          maxW="min(92vw, 1200px)"
          maxH="88vh"
          objectFit="contain"
          borderRadius="lg"
          border="1px solid"
          borderColor="whiteAlpha.300"
          boxShadow="0 30px 80px rgba(0,0,0,0.55)"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(event) => event.stopPropagation()}
        />
      </Box>
    )}
    </>
  )
}

export const WorkVideo = ({ src, title }) => {
  const shouldReduceMotion = useReducedMotion()
  const mediaRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  })
  const mediaParallax = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12])

  return (
    <Box
      ref={mediaRef}
      as={motion.div}
      className="work-media work-flow-item"
      position="relative"
      maxW="760px"
      mx="auto"
      my={4}
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="blackAlpha.200"
      style={shouldReduceMotion ? undefined : { y: mediaParallax }}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      _hover={
        shouldReduceMotion
          ? undefined
          : {
              borderColor: 'rgba(224,87,126,0.55)',
              boxShadow: '0 18px 40px rgba(182,29,63,0.2), 0 0 0 1px rgba(108,229,153,0.25) inset',
            }
      }
    >
      <Box position="relative" pb="56.25%" h={0}>
        <Box
          as="iframe"
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          src={src}
          title={title}
          border={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Box>
    </Box>
  )
}

export const Meta = ({ children }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Badge
      as={motion.span}
      className="work-flow-item"
      colorPalette="green"
      mr={2}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.04 }}
    >
      {children}
    </Badge>
  )
}
