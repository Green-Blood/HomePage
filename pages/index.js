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
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
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
                Hello, I&apos;m a game developer currently based in Tashkent, Uzbekistan!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jey Odilkhujaev
                    </Heading>
                    <p>Unity Developer ( Creator / Developer / Writer )</p>
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
                    Hey there! I’m a game developer who wears multiple hats—Unity developer, game designer, team lead, and occasional chaos coordinator. Currently, I’m splitting my time between working as a part-time Unity developer at IT Investments Center, where we create hybrid-casual games, and building my own midcore indie game, Hero Arena, under StranGen.

                    With nearly 7 years of Unity experience, I’ve worked on all sorts of games—from casual mobile titles to deep, strategic experiences. These days, I’m all about creating engaging gameplay that balances accessibility with depth. At ITIC, I focus on hybrid-casual mechanics, while with Hero Arena, I’m diving into the midcore space, crafting a more strategic and immersive experience. Along the way, I also help coordinate projects and refine game design to keep things running smoothly. (Game dev is a team effort, and sometimes you just step in where you're needed! 😄)

                    But my passion goes beyond just making games—I also love teaching. I’ve created Unity courses, helping newcomers get into game dev without suffering through spaghetti code nightmares.

                    When I’m not coding or designing, you’ll find me staying active—whether it’s calisthenics, volleyball, swimming, or just trying to live a healthy life (as much as game dev crunch allows).

                    Let’s build cool games and stay fit while doing it! 💪🎮 
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
                    <BioYear>2023-24</BioYear>
                    Spent one semester studying in Japan, getting a firsthand look at how people live and work there. Learned a lot about their culture, discipline, and daily life, while also continuing my studies.
                </BioSection>
                <BioSection>
                    <BioYear>2022-24</BioYear>
                    Studied in Austria at the Master&apos;s Program at Alpen-Adria-Universität Klagenfurt in Game Studies and
                    Engineering. Studied game development, psychology, and the social side of games. Took part in several game jams, worked on projects with other students, and got a deeper understanding of why people play games the way they do.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed Bachelors Program at Inha University in
                    Tashkent(IUT) in Computer Science and Software Engineering (CSE). Made it to the Dean’s List every year from 2016 to 2020.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed 3 year's study as Technician in the adjustment and repair of computers and computer
                    networks in Professional College
                    of
                    Information Technology. This is where I first got into tech and software, setting the foundation for everything I do now.
                </BioSection>

            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work Experience
                </Heading>
                <BioSection>
                    <BioYear>2024-Present</BioYear>
                    Working as a part-time Senior Lead Unity Developer at <Link href="https://game.itic.uz/" target="_blank">IT Investments Center</Link>,
                    creating hybrid-casual mobile games. Focused on gameplay programming, optimization, and feature
                    development, while also helping with game design and project coordination.
                </BioSection>
                <BioSection>
                    <BioYear>2018-Present</BioYear>
                    Founder & Lead Developer at StranGen. Started an independent game development team, working on multiple
                    projects, including my personal mid-core game, Hero Arena.
                </BioSection>
                <BioSection>
                    <BioYear>2022-2024</BioYear>
                    Unity Developer at <Link href="https://www.datasakura.com/" target="_blank">DataSakura</Link>.
                    Started as a part-time developer in 2022, later transitioning to full-time in 2024. Worked on
                    outsourced projects, contributing to gameplay mechanics, bug fixes, and optimizations for well-known
                    games like Fruit Ninja and Cut the Rope.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Unity Developer at <Link href="https://redrift.com/" target="_blank">Redrift</Link>. Worked on
                    <Link href="https://puzzleroyale.io" target="_blank">Puzzle Royale</Link>, a multiplayer NFT-based
                    match-3 game. Focused on gameplay mechanics, network synchronization, and optimizations. Left due to
                    political and economic challenges affecting the company.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Unity Developer at <Link href="https://neotech.uz/en/" target="_blank">NeoTech</Link>. Helped develop
                    an online card game, working on gameplay implementation, backend connections, analytics, and game design.
                    Also handled code reviews and coordinated development.
                </BioSection>
                <BioSection>
                    <BioYear>2020-2022</BioYear>
                    Unity Developer at <Link href="https://pizzagames.net/" target="_blank">Pizza Games</Link>. Created
                    mobile games for kids, focusing on interactive and educational gameplay.
                </BioSection>
                <BioSection>
                    <BioYear>2020-2021</BioYear>
                    Robotics Teacher at <Link href="https://bukvaryata.uz/" target="_blank">School Academy</Link>. Taught
                    Lego robotics to kids, introducing them to basic programming and engineering concepts.
                </BioSection>
                <BioSection>
                    <BioYear>2020-2021</BioYear>
                    Unity Developer at <Link href="https://www.unitedsoft.uz/" target="_blank">UnitedSoft</Link>. Developed
                    hyper-casual mobile games, working on rapid prototyping, game design, and performance optimizations.
                </BioSection>

                <BioSection>
                    <BioYear>2018-2020</BioYear>
                    IT Technician at White Rock. Handled hardware repairs, software troubleshooting, and system upgrades
                    to ensure smooth operation of company devices.
                </BioSection>

                <BioSection>
                    <BioYear>2017-2018</BioYear>
                    Full Stack Web Developer at <Link href="http://studytokyo.uz/" target="_blank">StudyTokyo</Link>. Developed
                    and maintained a Yii2-based website for an educational startup, implementing interactive features and
                    backend functionality.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    System Administrator Intern at <Link href="https://uzinfocom.uz/" target="_blank">Uzinfocom</Link>. Assisted
                    with network diagnostics, software configurations, and system troubleshooting.
                </BioSection>
            </Section>


            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Sports (calisthenics, volleyball, swimming), writing
                    photography, guitar, skateboarding, and traveling. Basically, if it keeps me moving or creating, I’m in! 🎸🏐🛹✍️
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
                        <Link href="https://discord.gg/GqUUh54" target="_blank">
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
