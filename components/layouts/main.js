import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})

const Main = ({ children, router }) => {
  const isHome = router.pathname === '/'

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jey Odilkhujaev, Unity game developer based in Tashkent." />
        <meta name="author" content="Jey Odilkhujaev" />
        <link rel="apple-touch-icon" href="Watermelon_logo.jpg" />
        <link rel="shortcut icon" href="/Watermelon_logo.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Jey Odilkhujaev" />
        <meta property="og:site_name" content="Jey Odilkhujaev" />
        <meta name="og:title" content="Jey Odilkhujaev" />
        <title>Jey Odilkhujaev</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Box position="relative" pointerEvents={isHome ? 'auto' : 'none'} zIndex={0}>
          <Box position="relative" zIndex={0}>
            <LazyVoxelDog interactive={isHome} />
          </Box>
        </Box>

        <Box position="relative" zIndex={5}>
          {children}
        </Box>

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
