import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useReducedMotion } from 'framer-motion'

export const GridItem = ({ children, href, title, thumbnail }) => {
  const shouldReduceMotion = useReducedMotion()
  const transition = shouldReduceMotion
    ? 'none'
    : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1)'

  return (
    <Box w="100%" textAlign="center" role="group">
      <LinkBox cursor="pointer">
        <Box
          position="relative"
          w="100%"
          paddingTop="56.25%"
          overflow="hidden"
          borderRadius="12px"
          transition={transition}
          _groupHover={
            shouldReduceMotion
              ? {}
              : {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 28px oklch(0 0 0 / 0.2)',
                  '& img': { transform: 'scale(1.04)' },
                }
          }
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
              transition: shouldReduceMotion ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            placeholder="blur"
            loading="lazy"
          />
        </Box>
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, folder, id, title, thumbnail }) => {
  const shouldReduceMotion = useReducedMotion()
  const titleHoverColor = '#c21b2a'
  const transition = shouldReduceMotion
    ? 'none'
    : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1)'

  return (
    <Box
      w="100%"
      textAlign="center"
      role="group"
    >
      <LinkBox cursor="pointer">
        <Box
          position="relative"
          w="100%"
          paddingTop="56.25%"
          overflow="hidden"
          borderRadius="12px"
          transition={transition}
          _groupHover={
            shouldReduceMotion
              ? {}
              : {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 32px oklch(0 0 0 / 0.25)',
                  '& img': { transform: 'scale(1.05)' },
                }
          }
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
              transition: shouldReduceMotion ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            placeholder="blur"
          />
          <Box
            position="absolute"
            inset={0}
            bg="transparent"
            transition={shouldReduceMotion ? 'none' : 'background 0.3s ease'}
            _groupHover={{
              bg: shouldReduceMotion ? 'transparent' : 'rgba(45,153,87,0.14)',
            }}
          />
        </Box>
        <LinkOverlay as={NextLink} href={`/works/${folder}/${id}`} scroll={false}>
          <Text
            mt={3}
            fontSize="17px"
            fontFamily="'Barlow Condensed', sans-serif"
            fontWeight="700"
            letterSpacing="0.03em"
            textTransform="uppercase"
            transition={shouldReduceMotion ? 'none' : 'color 0.2s ease'}
            _groupHover={{ color: titleHoverColor }}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize="13px" opacity={0.65}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => null
