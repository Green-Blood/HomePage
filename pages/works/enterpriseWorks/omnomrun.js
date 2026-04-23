import {
    Container,
    Badge,
    Link,
    List
} from '@chakra-ui/react'
import {Title, WorkImage, WorkVideo, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { IoOpenOutline } from 'react-icons/io5'

const Work = () => (
    <Layout title="OmNomRun">
        <Container className="work-flow">
            <Title>
                Om Nom: Run <Badge>2022</Badge>
            </Title>
            <P>

                Run for glory in Om Nom: Run, a new game from the creators of Cut the Rope!

                Join Om Nom and Om Nelle on a race through the dangerous streets of Nomville: avoid obstacles, use power-ups to clear the way and unlock new characters from the Cut the Rope universe!

                Key features:
                COMPLETE VARIOUS MISSIONS: cover specific distances, collect letters, perform amazing stunts or run as far as you can in endless run mode to get rewards.
                USE BOOSTERS AND POWER-UPS: rockets, jumping boots, magnets and double coins will help you on your journey. Run to collect them and get extra points!
                UNLOCK CHARACTERS FROM THE CUT THE ROPE UNIVERSE: Om Nom and Om Nelle are the stars of the game, but there are many more cool characters and stylish outfits waiting to be unlocked!
                DISCOVER AMAZING LOCATIONS: run through busy streets, messy rooftops, underground tunnels, the robot factory and other colorful levels!
                GET TO THE TOP OF THE LEADERBOARD: gain the highest score in regular competitions to dominate the leaderboard!
            </P>
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Website</Meta>
                    <Link href="https://www.zeptolab.com/games/om_nom_merge">
                        https://www.zeptolab.com/games/om_nom_merge <IoOpenOutline mx="2px"/>
                    </Link>
                </List.Item>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span><Link href={"https://apps.apple.com/us/app/om-nom-merge/id1483037067?ls=1"}>iOS</Link>/<Link href={"https://play.google.com/store/apps/details?id=com.zeptolab.omnommerge.google"}>Android</Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>

            </List.Root>

            <WorkImage src="/images/works/OmNomRun/image1.png" alt="OmNomRun"/>
            <WorkImage src="/images/works/OmNomRun/image2.png" alt="OmNomRun"/>
            <WorkImage src="/images/works/OmNomRun/image3.png" alt="OmNomRun"/>
            <WorkVideo src="https://www.youtube.com/embed/0kSAMu_jLQ8" title="Om Nom: Run (English Trailer)"/>
        </Container>
    </Layout>
)

export default Work

