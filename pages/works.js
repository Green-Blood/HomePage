import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import thumbPuzzleRoyale from '../public/images/works/Puzzle-Royale/poster1.png'
import thumbSoqqa from '../public/images/works/Soqqa/soqqaPoster.png'
import thumbHyperCasual from '../public/images/works/hyperCasual/Poster.png'
import thumbKidsGame from '../public/images/works/KidsGame/poster2.jpg'
import thumbEmptyPoster from '../public/images/works/EmptyPoster/Poster.png'
import thumbDailyLife from '../public/images/works/DailyLife/Poster.png'
import thumbMazeGenerator from '../public/images/works/MazeGenerator/MazePoster.png'
import thumbPrometheus from '../public/images/works/PrometheusQuest/PrometheusPoster.png'
import thumbBrainBattle from '../public/images/works/BrainBattle/icon.png'
import thumbNoGoingBack from '../public/images/works/NoGoingBack/NoGoingBackPoster.png'
import thumbArtistify from '../public/images/works/Multimedia/multi_main.jpg'
import thumbUzbekTragedy from '../public/images/works/Uzbek Tragedy/menu.png'
import thumbLaneLine from '../public/images/works/Lane_Line/line.jpg'
import thumbMomo from '../public/images/works/Momo/MomoMain.png'
import Link from "next/link";

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Enterprise Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem folder="enterpriseWorks" id="puzzleRoyale" title="Puzzle Royale"
                                  thumbnail={thumbPuzzleRoyale}>
                        NFT based match3 game
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        folder="enterpriseWorks"
                        id="hyperCasual"
                        title="HyperCasual"
                        thumbnail={thumbHyperCasual}
                    >
                        Small games I made when I was at Unitedsoft, but never released
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        folder="enterpriseWorks"
                        id="kidsGame"
                        title="Kids Game"
                        thumbnail={thumbKidsGame}
                    >
                        Drawing game for kids
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        folder="enterpriseWorks"
                        id="soqqa"
                        title="Soqqa"
                        thumbnail={thumbSoqqa}
                    >
                        Online Bura card game
                    </WorkGridItem>
                </Section>


                {/*<Section delay={0.1}>*/}
                {/*    <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">*/}
                {/*        An app that suggests ramen(noodle) shops based on a given photo of*/}
                {/*        the ramen you want to eat*/}
                {/*    </WorkGridItem>*/}
                {/*</Section>*/}
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6}/>

                <Heading as="h3" fontSize={20} mb={4}>
                    Study Projects
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                
                <Section delay={0.3}>
                    <WorkGridItem folder="studyWorks" id="emptyPoster" thumbnail={thumbEmptyPoster}
                                  title="Empty Poster">
                        A Game made under 48th hours <Link href="https://www.itec.aau.at/gamejam/"> in The 9th
                        Klagenfurt Game Jam </Link>
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem
                        folder="studyWorks"
                        id="mazeGenerator"
                        thumbnail={thumbMazeGenerator}
                        title="MazeGenerator"
                    >
                        Small MazeGenerator, with VR implementation
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem folder="studyWorks" id="dailyLifeOfKLUStudent" thumbnail={thumbDailyLife}
                                  title="Daily life of the KLU Student">
                        A Game made under 48th hours <Link href="https://itch.io/jam/6th-winter-game-jam"> in The 6th
                        Klagenfurt Winter Game Jam </Link>
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem folder="studyWorks" id="prometheusQuest" thumbnail={thumbPrometheus}
                                  title="Prometheus Quest">
                        One button game based on Greek mythology
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem folder="studyWorks" id="noGoingBack" thumbnail={thumbNoGoingBack}
                                  title="(No) Going Back">
                        Really small game made in mini game jam under 5 hours, with the <Link
                        href={"https://twinery.org/"}>Twinery engine</Link>.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem folder="studyWorks" id="momo" thumbnail={thumbMomo}
                                  title="Momo - Hackaton game">
                        Small game made for hackaton for children with disorders
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6}/>

                <Heading as="h3" fontSize={20} mb={4}>
                    Old works
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <WorkGridItem folder="oldWorks" id="clashOfMinds" thumbnail={thumbBrainBattle}
                                  title="Clash of Minds">
                        Small multiplayer game written in C with Glade using sockets.
                    </WorkGridItem>
                </Section>
                <Section delay={0.5}>
                    <WorkGridItem
                        folder="oldWorks"
                        id="artistify"
                        thumbnail={thumbArtistify}
                        title="Artistify"
                    >
                        OpenCV project for Multimedia Computing course.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem folder="oldWorks" id="uzbekTragedy" thumbnail={thumbUzbekTragedy}
                                  title="The Uzbek Tragedy">
                        Small Visual novel about Uzbekistan and Chimgan tragedy with 3 different endings.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem folder="oldWorks" id="laneLine" thumbnail={thumbLaneLine}
                                  title="The Lane line detection">
                        Capstone design Term Project
                        Lane-line detection using OpenCV and python.
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export {getServerSideProps} from '../components/chakra'
