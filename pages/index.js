import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  Text,
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import {
  IoChevronForwardOutline,
  IoArrowForwardOutline,
  IoBugOutline,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
} from 'react-icons/io5'
import Paragraph from '../components/paragraph'
import { Timeline, TimelineItem, TimelineYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { useColorModeValue } from '../lib/color-mode'
import thumbTelegram from '../public/images/links/Funny-Watermelon.jpg'
import thumRedbubble from '../public/images/links/redbubble.jpg'
import Image from 'next/image'

const SkillTag = ({ children, index = 0, shouldReduceMotion = false }) => {
  const bg = useColorModeValue('rgba(45,153,87,0.12)', 'rgba(123,205,155,0.18)')
  const color = useColorModeValue('#1f8f4d', '#9ee3b8')
  const border = useColorModeValue('rgba(45,153,87,0.32)', 'rgba(123,205,155,0.34)')
  const chipFloat = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  `
  return (
    <Box
      as="span"
      display="inline-block"
      px={2}
      py="2px"
      borderRadius="md"
      bg={bg}
      color={color}
      border="1px solid"
      borderColor={border}
      fontSize="12px"
      fontWeight="600"
      lineHeight="1.6"
      animation={shouldReduceMotion ? 'none' : `${chipFloat} 1.8s ease-in-out ${index * 0.12}s infinite`}
      transition={shouldReduceMotion ? 'none' : 'transform 0.2s ease'}
      _hover={shouldReduceMotion ? {} : { transform: 'translateY(-6px) scale(1.05)' }}
    >
      {children}
    </Box>
  )
}

const Home = () => {
  const shouldReduceMotion = useReducedMotion()
  const badgePulse = keyframes`
    0%, 100% { transform: translateY(0); box-shadow: 0 0 0 0 rgba(166,18,31,0); }
    50% { transform: translateY(-3px); box-shadow: 0 0 0 9px rgba(166,18,31,0.2); }
  `
  const dotPulse = keyframes`
    0%, 100% { transform: scale(1); opacity: .7; }
    50% { transform: scale(1.55); opacity: 1; }
  `
  const avatarBob = keyframes`
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-4px) rotate(1.5deg); }
    75% { transform: translateY(-2px) rotate(-1.2deg); }
  `
  const tagBg = useColorModeValue('rgba(166,18,31,0.2)', 'rgba(198,30,45,0.26)')
  const tagColor = useColorModeValue('#a6121f', '#ef5a66')
  const subtitleColor = useColorModeValue('gray.500', 'gray.400')
  const leadColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const bodyColor = useColorModeValue('gray.700', 'gray.300')
  const socialHoverBg = useColorModeValue('rgba(45,153,87,0.12)', 'rgba(123,205,155,0.12)')
  const ctaTransition = shouldReduceMotion
    ? 'none'
    : 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s cubic-bezier(0.22, 1, 0.36, 1)'
  const ctaPulse = keyframes`
    0%, 100% {
      box-shadow: 0 6px 16px -10px rgba(0,0,0,0.35), 0 0 0 rgba(166,18,31,0), 0 0 0 rgba(166,18,31,0);
      transform: translateY(0) scale(1);
    }
    50% {
      box-shadow: 0 9px 22px -12px rgba(0,0,0,0.4), 0 0 14px rgba(166,18,31,0.34), 0 0 22px rgba(166,18,31,0.2);
      transform: translateY(-1px) scale(1.01);
    }
  `
  const heroEnter = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
  const heroInitial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }

  return (
    <Layout>
      <Container>
        <Box
          as={motion.div}
          initial={heroInitial}
          animate={heroEnter}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          display={{ md: 'flex' }}
          alignItems="flex-start"
          gap={6}
          mb={2}
        >
          <Box
            as={motion.div}
            flexGrow={1}
            initial={heroInitial}
            animate={heroEnter}
            transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              gap={1}
              px={3}
              py={1}
              mb={3}
              borderRadius="full"
              bg={tagBg}
              fontSize="11px"
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              color={tagColor}
              animation={shouldReduceMotion ? 'none' : `${badgePulse} 1.7s ease-in-out infinite`}
            >
              <Box
                as="span"
                w="6px"
                h="6px"
                borderRadius="full"
                bg={tagColor}
                display="inline-block"
                mr={1}
                animation={shouldReduceMotion ? 'none' : `${dotPulse} 1s ease-in-out infinite`}
              />
              Open to work
            </Box>

            <Heading
              as="h2"
              variant="page-title"
              fontSize={{ base: '3xl', md: '4xl' }}
              mb={2}
            >
              Jey Odilkhujaev
            </Heading>
            <Text
              as={motion.p}
              fontSize="15px"
              color={subtitleColor}
              fontStyle="italic"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Unity Developer · Creator · Writer · Founder @ StranGen
            </Text>
          </Box>

          <Box
            as={motion.div}
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, rotate: -4 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.01 }
                : {
                    opacity: { duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
                  }
            }
            whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: -5, scale: 1.07 }}
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              animation={shouldReduceMotion ? 'none' : `${avatarBob} 2.4s ease-in-out infinite`}
            >
              <Image
                src="/images/Logo.JPG"
                alt="Profile image"
                width={100}
                height={100}
                style={{ borderRadius: '9999px', display: 'block' }}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Text fontSize="17px" fontWeight="600" color={leadColor} mb={3} lineHeight="1.65">
            Hey, I&apos;m Jey. I build games in Unity and have been doing it for about 7 years.
          </Text>
          <Paragraph color={bodyColor}>
            The work varies a lot. Right now I&apos;m building WebGL exam simulations for
            STAFFVIRTUAL, co-developing a tactical card game at Tonto Studio with a team
            in Italy, and doing hybrid-casual mobile work at IT Investments Center in
            Tashkent. On the side, Hero Arena lives at StranGen, my own studio. It&apos;s
            a midcore game I chip away at between everything else.
          </Paragraph>
          <Paragraph color={bodyColor} mt={3}>
            I also teach Unity at New Uzbekistan University. Getting someone from zero to
            their first working game is something I like more than I expected to.
          </Paragraph>
          <Paragraph color={bodyColor} mt={3}>
            When I&apos;m not at a computer: calisthenics, volleyball, traveling. Spent a
            semester in Japan and it kind of rearranged some priorities. Still thinking
            about those vending machines.
          </Paragraph>
          <Box align="center" my={5}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              leftIcon={<IoBugOutline />}
              borderRadius="full"
              px={6}
              py={5}
              bg={useColorModeValue('#2d9957', '#2d9957')}
              color={useColorModeValue('#ffffff', '#ffffff')}
              border="1px solid"
              borderColor={useColorModeValue('#2d9957', '#2d9957')}
              transition={ctaTransition}
              animation={shouldReduceMotion ? 'none' : `${ctaPulse} 2.2s ease-in-out infinite`}
              willChange={shouldReduceMotion ? 'auto' : 'transform, box-shadow'}
              _hover={{
                transform: shouldReduceMotion ? 'none' : 'translateY(-3px) scale(1.02)',
                bg: useColorModeValue('#24874d', '#24874d'),
                boxShadow: shouldReduceMotion ? 'none' : '0 12px 28px -12px rgba(166,18,31,0.55)',
              }}
              _active={{
                transform: shouldReduceMotion ? 'none' : 'translateY(0) scale(0.98)',
              }}
            >
              My portfolio <IoChevronForwardOutline />
            </Button>
          </Box>
        </Section>

        <Section delay={0.15}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Timeline>
            <TimelineItem>
              <TimelineYear>2023 to 2024</TimelineYear>
              Joint Study at{' '}
              <a href="https://www.soka.ac.jp/en/" target="_blank" rel="noreferrer">Soka University</a>, Japan
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2022 to 2024</TimelineYear>
              M.Sc. Game Studies and Engineering,{' '}
              <a href="https://www.aau.at/en/" target="_blank" rel="noreferrer">Universitat Klagenfurt</a>, Austria
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2016 to 2020</TimelineYear>
              B.Sc. Computer Science and Software Engineering,{' '}
              <a href="https://iut.uz/en/" target="_blank" rel="noreferrer">Inha University in Tashkent</a>.
              Dean&apos;s List every year.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2017</TimelineYear>
              Summer School,{' '}
              <a href="https://www.inha.ac.kr/en/index.do" target="_blank" rel="noreferrer">Inha University Korea</a>. Award winner.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2013 to 2016</TimelineYear>
              IT College Tashkent, Computer and Network Technician
            </TimelineItem>
          </Timeline>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work Experience
          </Heading>

          <Box display="flex" flexWrap="wrap" gap={2} mb={5}>
            {['Unity', 'C#', 'Game Design', 'Mobile', 'TypeScript', 'React', 'Team Lead', 'Scrum'].map((s, i) => (
              <SkillTag key={s} index={i} shouldReduceMotion={shouldReduceMotion}>{s}</SkillTag>
            ))}
          </Box>

          <Timeline>
            <TimelineItem>
              <TimelineYear>Sep 2025 to now</TimelineYear>
              Senior Software Engineer at{' '}
              <a href="https://staffvirtual.com/" target="_blank" rel="noreferrer">STAFFVIRTUAL</a>.
              Building Unity WebGL simulations for a React and TypeScript exam platform.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Aug 2025 to now</TimelineYear>
              Instructor at{' '}
              <a href="https://nuu.uz/en/" target="_blank" rel="noreferrer">New Uzbekistan University</a>.
              Unity Game Development and Creative Thinking Workshop.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Jun 2025 to now</TimelineYear>
              Senior Software Engineer at Claven (remote, Houston).
              Gameplay features, UI systems, Zenject, DOTween, Photon multiplayer.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Mar 2025 to now</TimelineYear>
              Co-Founder and Lead Developer at Tonto Studio (remote, Italy).
              Tactical card auto-battler in Unity with VContainer and MVP architecture.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Nov 2024 to now</TimelineYear>
              Senior Lead Unity Developer at{' '}
              <a href="https://game.itic.uz/" target="_blank" rel="noreferrer">IT Investments Center</a>,
              Tashkent. Hybrid-casual mobile games, mentoring, code reviews.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Sep 2018 to now</TimelineYear>
              Founder and Lead Developer at StranGen Group. Indie game development and
              freelance projects worldwide.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Sep 2022 to Oct 2024</TimelineYear>
              Senior Unity Developer at{' '}
              <a href="https://www.datasakura.com/" target="_blank" rel="noreferrer">DataSakura</a> (remote, Cyprus).
              Overcrowded Tycoon, Om Nom Merge, Om Nom Run, Cut the Rope.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Jan to Aug 2022</TimelineYear>
              Middle Unity Developer at{' '}
              <a href="https://redrift.com/" target="_blank" rel="noreferrer">Red Rift</a> (Michigan).
              Puzzle Royale, multiplayer NFT match-3, ability system design.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Sep 2021 to Jan 2022</TimelineYear>
              Unity Developer at Neotech. Online card game, backend integration, analytics.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Dec 2020 to Jan 2022</TimelineYear>
              Game Developer at{' '}
              <a href="https://pizzagames.net/" target="_blank" rel="noreferrer">Pizza Games</a>.
              Educational mobile games for toddlers and preschoolers.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Jun 2020 to Jun 2021</TimelineYear>
              Game Developer at UnitedSoft. Hyper-casual mobile games, rapid prototyping.
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Aug 2017 to Sep 2018</TimelineYear>
              Full Stack Web Developer at StudyTokyo. Yii2, MySQL, REST APIs.
            </TimelineItem>
          </Timeline>
        </Section>

        <Section delay={0.25}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Calisthenics, volleyball, swimming, writing, photography, guitar,
            skateboarding, and traveling. If it keeps me moving or creating, I&apos;m in.
          </Paragraph>
          <Box mt={3} fontSize="sm" color={subtitleColor}>
            English (professional) &nbsp;·&nbsp; Japanese (elementary) &nbsp;·&nbsp;
            Korean (elementary) &nbsp;·&nbsp; Russian (native) &nbsp;·&nbsp; Uzbek (native)
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>

          <Box display="flex" flexWrap="wrap" gap={1} mb={6}>
            {[
              { href: 'https://www.linkedin.com/in/jeyodilkhujaev/', icon: IoLogoLinkedin, label: '@jeyodilkhujaev' },
              { href: 'https://www.instagram.com/bloodyjey/', icon: IoLogoInstagram, label: '@bloodyjey' },
              { href: 'https://github.com/Green-Blood', icon: IoLogoGithub, label: '@Green-Blood' },
              { href: 'https://discord.gg/GqUUh54', icon: IoLogoDiscord, label: '@StrangenGroup' },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                as={motion.a}
                key={label}
                href={href}
                target="_blank"
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={3}
                py={2}
                borderRadius="lg"
                fontSize="sm"
                fontWeight="500"
                textDecoration="none"
                transition={
                  shouldReduceMotion
                    ? 'none'
                    : 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease, box-shadow 0.2s ease'
                }
                _hover={{
                  bg: socialHoverBg,
                  transform: shouldReduceMotion ? 'none' : 'translateY(-3px) scale(1.02)',
                  boxShadow: shouldReduceMotion ? 'none' : '0 10px 22px -12px rgba(166,18,31,0.55)',
                  textDecoration: 'none',
                }}
              >
                <Icon size={16} /> {label}
                <Box
                  as={motion.span}
                  display="inline-flex"
                  alignItems="center"
                  animate={shouldReduceMotion ? undefined : { x: [0, 3, 0] }}
                  transition={shouldReduceMotion ? undefined : { duration: 1.3, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                >
                  <IoArrowForwardOutline size={13} />
                </Box>
              </Link>
            ))}
          </Box>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem href="https://t.me/Arbuzoletters" title="ArbuzoLetters" thumbnail={thumbTelegram}>
              My Telegram channel
            </GridItem>
            <GridItem
              href="https://www.redbubble.com/people/StranGen/shop?asc=u"
              title="Excluded Art"
              thumbnail={thumRedbubble}
            >
              Redbubble Designs
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
