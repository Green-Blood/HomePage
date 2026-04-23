import NextLink from 'next/link'
import Image from 'next/image'
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import Layout from '../../../components/layouts/article'
import { Meta, Title, WorkVideo } from '../../../components/work'

const MotionBox = motion.create(Box)

const menuShowcase = [
  { src: '/images/works/StranGen/menu-shot-1.png', label: 'Loading Page', span: 2 },
  { src: '/images/works/StranGen/menu-shot-2.png', label: 'Main Menu', span: 1 },
  { src: '/images/works/StranGen/heroes-grid.png', label: 'Hero Selection', span: 1, contain: true },
  { src: '/images/works/StranGen/hero-assassin.png', label: 'Assassin Hero Render', span: 1, contain: true },
]

const battleShots = [
  { src: '/images/works/StranGen/battle-1.png', label: 'Hero Management Screen' },
  { src: '/images/works/StranGen/battle-2.png', label: 'Early Wave Positioning' },
  { src: '/images/works/StranGen/battle-3.png', label: 'Mid-Wave Momentum' },
  { src: '/images/works/StranGen/battle-4.png', label: 'Skill & Target Timing' },
  { src: '/images/works/StranGen/battle-5.png', label: 'Heavy Unit Encounter' },
]

const StranGen = () => {
  const shouldReduceMotion = useReducedMotion()
  const heroFit = useBreakpointValue({ base: 'cover', md: 'cover' }) || 'cover'
  const [selectedShot, setSelectedShot] = useState(null)

  return (
    <Layout title="StranGen - Hero Arena">
      <Container className="work-flow">
        <Title>
          StranGen <Badge>Own Company / Flagship Project</Badge>
        </Title>

        <MotionBox
          position="relative"
          overflow="hidden"
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.300"
          mb={7}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box position="relative" h={{ base: '500px', md: '560px' }} bg="rgba(10,12,20,0.92)">
            <Image
              src="/images/works/StranGen/hero-cover.png"
              alt="Hero Arena cover"
              fill
              priority
              style={{ objectFit: heroFit, objectPosition: 'center top' }}
            />
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(180deg, rgba(6,8,14,0.5) 0%, rgba(6,8,14,0.82) 58%, rgba(6,8,14,0.92) 100%)"
            />

            <Box
              position="absolute"
              top={{ base: 4, md: 6 }}
              left={{ base: 4, md: 6 }}
              display="inline-flex"
              alignItems="center"
              gap={3}
              px={3}
              py={2}
              borderRadius="xl"
              bg="rgba(8,12,22,0.7)"
              border="1px solid rgba(255,255,255,0.2)"
              backdropFilter="blur(6px)"
            >
              <Image src="/images/works/StranGen/strangen-logo.png" alt="StranGen logo" width={32} height={32} />
              <Text fontWeight="800" letterSpacing="0.02em">
                StranGen
              </Text>
            </Box>

            <Box
              position="absolute"
              left={{ base: 3, md: 6 }}
              right={{ base: 3, md: 6 }}
              bottom={{ base: 4, md: 6 }}
              p={{ base: 4, md: 5 }}
              borderRadius="xl"
              bg="rgba(8,12,22,0.58)"
              border="1px solid rgba(255,255,255,0.17)"
              backdropFilter="blur(5px)"
            >
              <Flex direction="column" gap={3} alignItems="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2.1rem', md: '3.4rem' }}
                  lineHeight={1.03}
                  letterSpacing="-0.02em"
                  textAlign="center"
                >
                  Hero Arena
                </Heading>
                <Text
                  fontSize={{ base: '1.12rem', md: '1.28rem' }}
                  lineHeight={1.45}
                  maxW="1000px"
                  color="whiteAlpha.950"
                  textAlign="center"
                >
                  Hero Arena is our own story-driven hero defense game for mobile and PC with adaptive controls:
                  build your squad, command in real-time, fortify the castle, and grow through deep progression loops.
                  It began as a learning prototype and became our flagship long-term product, designed for high
                  retention, satisfying combat clarity, and scalable live content.
                </Text>
                <Flex gap={3} wrap="wrap" justify="center">
                  <Button
                    as="a"
                    href="https://bit.ly/Hero_Arena_HomePage"
                    target="_blank"
                    rel="noreferrer"
                    className="strangen-cta"
                    borderRadius="full"
                    px={6}
                    bg="rgba(33, 152, 104, 0.92)"
                    color="white"
                    textDecoration="none"
                    border="1px solid rgba(130, 230, 186, 0.35)"
                    _hover={{ bg: 'rgba(44, 170, 120, 0.96)', textDecoration: 'none' }}
                  >
                    Hero Arena Website
                  </Button>
                  <Button
                    as="a"
                    href="https://youtu.be/opPOf6fqGoc"
                    target="_blank"
                    rel="noreferrer"
                    className="strangen-cta"
                    borderRadius="full"
                    px={6}
                    bg="rgba(161, 32, 66, 0.9)"
                    color="white"
                    border="1px solid rgba(248, 177, 194, 0.35)"
                    textDecoration="none"
                    _hover={{ bg: 'rgba(178, 40, 76, 0.95)', textDecoration: 'none' }}
                  >
                    Trailer
                  </Button>
                  <Button
                    as="a"
                    href="https://youtu.be/jtizXjSsGoQ"
                    target="_blank"
                    rel="noreferrer"
                    className="strangen-cta"
                    borderRadius="full"
                    px={6}
                    bg="rgba(32, 54, 99, 0.9)"
                    color="white"
                    border="1px solid rgba(162, 186, 245, 0.35)"
                    textDecoration="none"
                    _hover={{ bg: 'rgba(42, 68, 119, 0.95)', textDecoration: 'none' }}
                  >
                    Pitch Video
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </MotionBox>

        <List.Root ml={4} my={4}>
          <List.Item>
            <Meta>Company</Meta>
            <span>StranGen</span>
          </List.Item>
          <List.Item>
            <Meta>Genre</Meta>
            <span>Hero-based tactical arena / action strategy</span>
          </List.Item>
          <List.Item>
            <Meta>Role</Meta>
            <span>Founder, Unity Developer, Game Design, Product Direction</span>
          </List.Item>
          <List.Item>
            <Meta>Website</Meta>
            <Link
              href="https://bit.ly/Hero_Arena_HomePage"
              target="_blank"
              rel="noreferrer"
              className="strangen-inline-link"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              Hero Arena Website
              <IoOpenOutline />
            </Link>
          </List.Item>
        </List.Root>

        <Heading as="h3" size="md" mt={8} mb={3}>
          Main Menu & Hero Presentation
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mb={6}>
          {menuShowcase.map((item, idx) => (
            <MotionBox
              key={item.src}
              gridColumn={{ md: item.span === 2 ? 'span 2' : 'span 1' }}
              overflow="hidden"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="blackAlpha.200"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.01 }
                  : { duration: 0.42, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Box
                position="relative"
                h={{ base: item.contain ? '280px' : '230px', md: item.contain ? '320px' : '270px' }}
                cursor="zoom-in"
                onClick={() => setSelectedShot(item)}
                bg={item.contain ? 'rgba(8,10,18,0.85)' : undefined}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  style={{ objectFit: item.contain ? 'contain' : 'cover', objectPosition: 'center' }}
                />
                <Box position="absolute" inset={0} bg="linear-gradient(to top, rgba(0,0,0,0.62), rgba(0,0,0,0.08))" />
                <Badge
                  position="absolute"
                  left={3}
                  bottom={3}
                  colorPalette="blackAlpha"
                  bg="rgba(8,10,18,0.78)"
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {item.label}
                </Badge>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Heading as="h3" size="md" mt={8} mb={3}>
          Gameplay Screens
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={4}>
          {battleShots.map((shot, idx) => (
            <MotionBox
              key={shot.src}
              overflow="hidden"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="blackAlpha.200"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.01 }
                  : { duration: 0.42, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Box
                position="relative"
                h={{ base: '220px', md: '250px' }}
                cursor="zoom-in"
                onClick={() => setSelectedShot(shot)}
              >
                <Image src={shot.src} alt={shot.label} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                <Box position="absolute" inset={0} bg="linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.08))" />
                <Badge
                  position="absolute"
                  left={3}
                  bottom={3}
                  colorPalette="blackAlpha"
                  bg="rgba(8,10,18,0.78)"
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {shot.label}
                </Badge>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Heading as="h3" size="md" mt={8} mb={3}>
          Trailer & Pitch
        </Heading>
        <WorkVideo src="https://www.youtube.com/embed/opPOf6fqGoc" title='Trailer "Hero Arena"_v2' />
        <WorkVideo src="https://www.youtube.com/embed/jtizXjSsGoQ" title="Pitch for President Tech Award" />

        <Box mt={8}>
          <Link as={NextLink} href="/works" fontWeight="700">
            Back to all works
          </Link>
        </Box>

        {selectedShot && (
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
            onClick={() => setSelectedShot(null)}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Box
              position="relative"
              w="min(94vw, 1300px)"
              h="min(86vh, 820px)"
              borderRadius="lg"
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.300"
              boxShadow="0 30px 80px rgba(0,0,0,0.55)"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedShot.src}
                alt={selectedShot.label || 'Expanded screenshot'}
                fill
                style={{ objectFit: 'contain', background: 'rgba(8,10,18,0.96)' }}
              />
            </Box>
          </Box>
        )}

        <style jsx global>{`
          .strangen-inline-link {
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.3rem !important;
            white-space: nowrap;
            vertical-align: middle;
          }

          .strangen-inline-link svg {
            flex-shrink: 0;
          }

          .strangen-cta,
          .strangen-cta:hover,
          .strangen-cta:focus-visible {
            color: #fff !important;
            text-decoration: none !important;
            text-decoration-color: transparent !important;
          }

          .strangen-cta {
            display: inline-grid !important;
            place-items: center !important;
            min-height: 46px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            line-height: 1 !important;
            vertical-align: middle !important;
          }
        `}</style>
      </Container>
    </Layout>
  )
}

export default StranGen
