import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWebComponent,
    IoLogoDiscord
} from 'react-icons/io5'
import thumbTelegram from '../public/images/links/Funny-Watermelon.jpg'
import thumRedbubble from '../public/images/links/redbubble.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{backdropFilter: 'blur(10px)'}}
            >
                Hello, I&apos;m a game developer currently based in Klagenfurt, Austria!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jey Odilkhujaev
                    </Heading>
                    <p>Unity Developer ( Student / Developer / Writer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/Logo.JPG"
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
                    I am a master's student in Game Studies and a full time Unity programmer
                    currently based in Klagenfurt, Austria with a passion for building creative games
                    I love working on extendable architecture for projects, as well as being involved in the development
                    of beautiful graphics.

                    In addition to developing games, I create my own unity course,

                    I am very interested in a healthy lifestyle and when I am not working, I am learning better ways to
                    live healthier. I do calisthenics, I love volleyball and swimming.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Study Experience
                </Heading>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Started the Master&apos;s Program at Alpen-Adria-Universität Klagenfurt in Game Studies and
                    Engineering
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed Bachelors Program at Inha University in
                    Tashkent(IUT) in Computer Science and Software Engineering (CSE). Was in IUT Dean’s
                    list- all editions (2016-2020)
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed 3 year's study as Technician in the adjustment and repair of computers and computer
                    networks in Professional College
                    of
                    Information Technology
                </BioSection>

            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work Experience
                </Heading>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Working full time as Unity developer
                    at <Link href="https://redrift.com/" target="_blank">Redrift</Link>. We are creating mobile
                    multiplayer NFT based match3 game called <Link href="https://puzzleroyale.io"
                                                                   target="_blank"> Puzzle
                    Royale</Link>
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Worked part time as Unity developer
                    at <Link href="https://neotech.uz/en/" target="_blank"> NeoTech </Link> Created together an online card game, helped with game design
                    Coordinated the entire game part of the project and did code review
                    Connected to the backend, added analytics, etc.

                </BioSection>
                <BioSection>
                    <BioYear>2020-22</BioYear>
                    Worked part time as Unity developer
                    at <Link href="https://pizzagames.net/" target="_blank">Pizza Games</Link>. Created mobile games for
                    kids with Unity.
                </BioSection>
                <BioSection>
                    <BioYear>2020-21</BioYear>
                    Worked part time as Robotics Teacher
                    at <Link href="https://bukvaryata.uz/" target="_blank">School Academy</Link>. Taught lego robotics
                    to small kids in school.
                </BioSection>
                <BioSection>
                    <BioYear>2020-21</BioYear>
                    Worked as Unity developer
                    at <Link href="https://www.unitedsoft.uz/" target="_blank">UnitedSoft</Link>. Created mobile
                    hypercasual games with Unity.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Started my own independent and initiative team dedicated to create games called StranGen.
                </BioSection>
                <BioSection>
                    <BioYear>2018-20</BioYear>
                    Worked as IT technician at White Rock
                    Completed repairs or submitted replacement orders for equipment that wasn’t performing at capacity.
                </BioSection>

                <BioSection>
                    <BioYear>2017-18</BioYear>
                    Worked as Full Stack Web-developer
                    Creating and managing a website <Link href="http://studytokyo.uz/"
                                                          target="_blank">StudyTokyo</Link> by using Yii2 framework
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Had an intership as System administrator at <Link href="https://uzinfocom.uz/"
                                                                      target="_blank">Uzinfocom</Link>. Assessed system
                    problems with the network, software or hardware components
                    by running diagnostics, trying solutions and upgrading devices when necessary.
                </BioSection>
            </Section>


            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Sports, Music,{' '}
                    <Link href="http://arbuzoletters.cyou/" target="_blank">
                        Writing
                    </Link>
                    , Travel,{' '}
                    Photography
                    , Guitar, Skateboarding
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/jeyodilkhujaev/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin/>}
                            >
                                @jeyodilkhujaev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/bloodyjey/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram/>}
                            >
                                @bloodyjey
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/Green-Blood" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub/>}
                            >
                                @Green-Blood
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://discord.gg/hzqh4QBx" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoDiscord/>}
                            >
                                @StrangenGroup
                            </Button>
                        </Link>
                    </ListItem>

                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://t.me/Arbuzoletters"
                        title="ArbuzoLetters"
                        thumbnail={thumbTelegram}
                    >
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

                {/*<Box align="center" my={4}>*/}
                {/*    <NextLink href="/posts" passHref scroll={false}>*/}
                {/*        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">*/}
                {/*            Popular posts*/}
                {/*        </Button>*/}
                {/*    </NextLink>*/}
                {/*</Box>*/}
            </Section>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
