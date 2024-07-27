import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'

const Work = () => (
    <Layout title="OmNomRun">
        <Container>
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
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.zeptolab.com/games/om_nom_merge">
                        https://www.zeptolab.com/games/om_nom_merge <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span><Link href={"https://apps.apple.com/us/app/om-nom-merge/id1483037067?ls=1"}>iOS</Link>/<Link href={"https://play.google.com/store/apps/details?id=com.zeptolab.omnommerge.google"}>Android</Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>

            </List>

            <WorkImage src="/images/works/OmNomRun/image1.png" alt="OmNomRun"/>
            <WorkImage src="/images/works/OmNomRun/image2.png" alt="OmNomRun"/>
            <WorkImage src="/images/works/OmNomRun/image3.png" alt="OmNomRun"/>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe src="https://www.youtube.com/embed/0kSAMu_jLQ8"
                        title="Om Nom: Run (English Trailer)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
