import NextLink from 'next/link'
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  List,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import Layout from '../../../components/layouts/article'
import P from '../../../components/paragraph'
import { Meta, Title } from '../../../components/work'
import { iticAllGames, iticFeaturedGames } from '../../../data/itic-games'

const MotionBox = motion.create(Box)

const categoryColorMap = {
  Puzzle: 'linear-gradient(135deg, rgba(182,29,63,0.95), rgba(233,112,143,0.92))',
  Arcade: 'linear-gradient(135deg, rgba(42,173,107,0.95), rgba(102,227,167,0.92))',
  Merge: 'linear-gradient(135deg, rgba(58,128,224,0.95), rgba(121,179,246,0.92))',
  Simulation: 'linear-gradient(135deg, rgba(245,157,66,0.95), rgba(255,205,129,0.92))',
  Action: 'linear-gradient(135deg, rgba(111,77,214,0.95), rgba(166,141,249,0.92))',
  Strategy: 'linear-gradient(135deg, rgba(58,194,194,0.95), rgba(136,236,236,0.92))',
}

const getInitials = (title) =>
  title
    .split(' ')
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() || '')
    .join('')

const IticPortfolio = () => {
  const shouldReduceMotion = useReducedMotion()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(iticAllGames.map((game) => game.category)))],
    []
  )

  const filteredTitles = useMemo(() => {
    const q = query.trim().toLowerCase()
    return iticAllGames.filter((game) => {
      const categoryMatch = activeCategory === 'All' || game.category === activeCategory
      const queryMatch =
        q.length === 0 ||
        game.title.toLowerCase().includes(q) ||
        game.category.toLowerCase().includes(q) ||
        game.status.toLowerCase().includes(q)
      return categoryMatch && queryMatch
    })
  }, [activeCategory, query])

  return (
    <Layout title="ITIC Games Catalog">
      <Container className="work-flow">
        <Title>
          ITIC Games on Google Play <Badge>Live Catalog</Badge>
        </Title>

        <P>
          All titles here are from your ITIC Google Play catalog. Clean list, filters, and links
          only.
        </P>

        <List.Root ml={4} my={4}>
          <List.Item>
            <Meta>Company</Meta>
            <Link
              href="https://itic.uz/"
              target="_blank"
              rel="noreferrer"
              className="itic-inline-link"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              ITIC
              <IoOpenOutline />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Game Portal</Meta>
            <Link
              href="https://game.itic.uz/"
              target="_blank"
              rel="noreferrer"
              className="itic-inline-link"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              game.itic.uz
              <IoOpenOutline />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Store</Meta>
            <Link
              href="https://play.google.com/store/apps/dev?id=6936376430069007273"
              target="_blank"
              rel="noreferrer"
              className="itic-inline-link"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              Google Play Developer Page
              <IoOpenOutline />
            </Link>
          </List.Item>
          <List.Item>
            <Meta>Stack</Meta>
            <span>Unity, C#, Mobile</span>
          </List.Item>
        </List.Root>

        <Box my={7}>
          <Flex justify="space-between" align={{ base: 'start', md: 'center' }} mb={3} gap={3} wrap="wrap">
            <Heading as="h3" size="md">
            Featured ITIC Titles
            </Heading>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            {iticFeaturedGames.map((game, idx) => (
              <MotionBox
                key={game.title}
                borderRadius="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="blackAlpha.200"
                overflow="hidden"
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.45, delay: 0.04 * idx, ease: [0.22, 1, 0.36, 1] }
                }
              >
                <Box
                  position="relative"
                  h="140px"
                  bg={categoryColorMap[game.category] || 'linear-gradient(135deg, rgba(100,100,120,0.95), rgba(170,170,190,0.92))'}
                  bgImage={game.cover ? `url(${game.cover})` : undefined}
                  bgSize={game.cover ? 'cover' : undefined}
                  bgPosition={game.cover ? 'center' : undefined}
                  display="flex"
                  alignItems="end"
                  p={3}
                >
                  <Box
                    position="absolute"
                    inset={0}
                    bg={game.cover ? 'linear-gradient(to top, rgba(5,8,16,0.72), rgba(5,8,16,0.08))' : 'transparent'}
                  />
                  <Box
                    position="absolute"
                    top={3}
                    left={3}
                    w="44px"
                    h="44px"
                    borderRadius="md"
                    bg={game.icon ? `url(${game.icon}) center/cover no-repeat` : 'rgba(0,0,0,0.25)'}
                    border="1px solid rgba(255,255,255,0.3)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="900"
                    fontSize="sm"
                    letterSpacing="0.04em"
                    zIndex={1}
                  >
                    {!game.icon && getInitials(game.title)}
                  </Box>
                  <Badge colorPalette="blackAlpha" zIndex={1}>{game.category}</Badge>
                </Box>
                <Box p={4}>
                  <Text fontWeight="700" mb={1} lineClamp={2}>
                    {game.title}
                  </Text>
                  <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
                    <Badge colorPalette="green">{game.category}</Badge>
                    <Badge colorPalette="red">{game.status}</Badge>
                  </Box>
                  <Link
                    href={game.link}
                    target="_blank"
                    rel="noreferrer"
                    className="itic-inline-link"
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                  >
                    Open on Google Play
                    <IoOpenOutline />
                  </Link>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        <details open style={{ margin: '1.5rem 0' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700, marginBottom: '0.75rem' }}>
            All ITIC Titles ({filteredTitles.length})
          </summary>

          <Box mb={3} display="flex" gap={2} flexWrap="wrap">
            {categories.map((category) => (
              <Button
                key={category}
                size="xs"
                borderRadius="full"
                onClick={() => setActiveCategory(category)}
                bg={activeCategory === category ? 'rgba(182,29,63,0.9)' : 'whiteAlpha.200'}
                color={activeCategory === category ? 'white' : 'whiteAlpha.900'}
                _hover={{
                  bg: activeCategory === category ? 'rgba(182,29,63,1)' : 'whiteAlpha.300',
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title or status..."
            mb={4}
            borderColor="whiteAlpha.300"
            _focusVisible={{ borderColor: 'rgba(182,29,63,0.8)', boxShadow: 'none' }}
          />

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
            {filteredTitles.map((game) => (
              <Box
                key={`${game.title}-${game.category}`}
                p={3}
                borderRadius="md"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="blackAlpha.200"
                transition="all 0.2s ease"
                _hover={{
                  borderColor: 'whiteAlpha.400',
                  transform: shouldReduceMotion ? 'none' : 'translateY(-2px)',
                }}
              >
                <Flex gap={3} align="start">
                  <Box
                    w="40px"
                    h="40px"
                    borderRadius="md"
                    bg={game.icon ? `url(${game.icon}) center/cover no-repeat` : (
                      categoryColorMap[game.category] ||
                      'linear-gradient(135deg, rgba(100,100,120,0.95), rgba(170,170,190,0.92))'
                    )}
                    flexShrink={0}
                  />
                  <Box minW={0} flex={1}>
                    <Text fontWeight="700" fontSize="sm">
                      {game.title}
                    </Text>
                    <Box display="flex" gap={2} flexWrap="wrap" my={1}>
                      <Badge colorPalette="green">{game.category}</Badge>
                      <Badge colorPalette="red">{game.status}</Badge>
                    </Box>
                    <Link
                      href={game.link}
                      target="_blank"
                      rel="noreferrer"
                      className="itic-inline-link"
                      fontSize="sm"
                      display="inline-flex"
                      alignItems="center"
                      gap={1}
                    >
                      Open on Google Play
                      <IoOpenOutline />
                    </Link>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </details>

        <Box mt={8}>
          <Link as={NextLink} href="/works" fontWeight="700">
            Back to all works
          </Link>
        </Box>

        <style jsx global>{`
          .itic-inline-link {
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.3rem !important;
            white-space: nowrap;
            vertical-align: middle;
          }

          .itic-inline-link svg {
            flex-shrink: 0;
          }
        `}</style>
      </Container>
    </Layout>
  )
}

export default IticPortfolio
