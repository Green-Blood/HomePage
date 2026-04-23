import Logo from './logo'
import NextLink from 'next/link'
import {
  Box,
  Link,
  Flex,
  MenuRoot,
  MenuItem,
  MenuContent,
  MenuTrigger,
  IconButton,
} from '@chakra-ui/react'
import { IoMenuOutline } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import { useColorModeValue } from '../lib/color-mode'
import { useRouter } from 'next/router'
import { motion, useReducedMotion } from 'framer-motion'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  const activeBg = useColorModeValue('rgba(166,18,31,0.12)', 'rgba(239,90,102,0.2)')
  const activeBorder = useColorModeValue('rgba(166,18,31,0.35)', 'rgba(239,90,102,0.5)')
  const inactiveBg = useColorModeValue('rgba(0,0,0,0.03)', 'rgba(255,255,255,0.04)')
  const shouldReduceMotion = useReducedMotion()
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={2}
      minW="92px"
      borderRadius="full"
      fontFamily="'Sora', 'Outfit', sans-serif"
      fontWeight="700"
      fontSize="16px"
      lineHeight="1"
      letterSpacing="0.01em"
      textTransform="none"
      textDecoration="none"
      bg={active ? activeBg : inactiveBg}
      border="1px solid"
      borderColor={active ? activeBorder : 'transparent'}
      color={active ? useColorModeValue('#7f0f1b', '#ffd9df') : inactiveColor}
      _hover={{
        bg: active ? activeBg : useColorModeValue('rgba(0,0,0,0.06)', 'rgba(255,255,255,0.08)'),
        color: active ? useColorModeValue('#7f0f1b', '#ffe3e8') : useColorModeValue('gray.900', 'white'),
        transform: shouldReduceMotion ? 'none' : 'translateY(-1px)',
        textDecoration: 'none',
      }}
      _active={{
        transform: shouldReduceMotion ? 'none' : 'translateY(0) scale(0.98)',
      }}
      transition={
        shouldReduceMotion
          ? 'none'
          : 'background 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.2s ease'
      }
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()
  const navBg = useColorModeValue('#f0e7dbcc', '#20202380')
  const borderColor = useColorModeValue('rgba(0,0,0,0.08)', 'rgba(255,255,255,0.07)')
  const shadowColor = useColorModeValue(
    '0 4px 20px rgba(0,0,0,0.08)',
    '0 4px 20px rgba(0,0,0,0.35)'
  )

  return (
    <Box as={motion.nav}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      position="fixed"
      top={3}
      left="50%"
      style={{ transform: 'translateX(-50%)' }}
      w={{ base: 'calc(100% - 24px)', md: 'auto' }}
      minW={{ md: '460px' }}
      maxW={{ md: '680px' }}
      bg={navBg}
      css={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      borderRadius="2xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow={shadowColor}
      zIndex={100}
      px={5}
      py={2}
      {...props}
    >
      <Flex align="center" justify="space-between" gap={2}>
        <Flex align="center" gap={1}>
          <Logo />
        </Flex>

        <Flex
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          gap={1}
          flexGrow={1}
          ml={4}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Flex>

        <Flex align="center" gap={1}>
          <ThemeToggleButton />

          <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
            <MenuRoot>
              <MenuTrigger asChild>
                <IconButton
                  aria-label="Options"
                  variant="ghost"
                  size="sm"
                  borderRadius="lg"
                >
                  <IoMenuOutline />
                </IconButton>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="home" onClick={() => router.push('/')}>
                  About
                </MenuItem>
                <MenuItem value="works" onClick={() => router.push('/works')}>
                  Works
                </MenuItem>
                <MenuItem value="posts" onClick={() => router.push('/posts')}>
                  Posts
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
