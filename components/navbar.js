import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  MenuRoot,
  MenuItem,
  MenuContent,
  MenuTrigger,
  IconButton
} from '@chakra-ui/react'
import { IoMenuOutline } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import { useColorModeValue } from '../lib/color-mode'
import { useRouter } from 'next/router'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
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

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          mr={4}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <MenuRoot>
              <MenuTrigger asChild>
                <IconButton aria-label="Options" variant="outline" size="sm">
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
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
