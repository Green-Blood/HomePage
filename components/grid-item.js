import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Box
        position="relative"
        w="100%"
        paddingTop="56.25%"
        overflow="hidden"
        borderRadius="12px"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
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

export const WorkGridItem = ({ children, folder, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Box
        position="relative"
        w="100%"
        paddingTop="56.25%"
        overflow="hidden"
        borderRadius="12px"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />
      </Box>
      <LinkOverlay as={NextLink} href={`/works/${folder}/${id}`} scroll={false}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => null
