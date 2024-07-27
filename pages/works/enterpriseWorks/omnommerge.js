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
    <Layout title="OverCrowded">
        <Container>
            <Title>
                Om Nom: Merge <Badge>2022-2023</Badge>
            </Title>
            <P>

                An abundance of fruit has started cropping up throughout the land. What a delicious treat! It's up to Om Nom to restore the balance and save the magic forest. However, he can't do this on his own, there's just too much fruit for one mouth!

                The Nommies hold the key to success - Om Nom's special friends can be merged together to unlock new, more powerful breed of Nommies to help munch through glade after glade of yummy treats.

                Satisfying, merge-based gameplay.

                Key features:
                Merge similar Nommies to discover new creatures
                Idle away as your Nommies eat fruit and gain you sweet rewards
                Collect dozens of characters with unique look
                Discover new exciting locations
                Use Om Nom Spells to make fruit grow faster and evolve with double-speed!
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

            <WorkImage src="/images/works/OmNomMerge/image1.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image2.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image3.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image4.png" alt="OmNomMerge"/>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe src="https://www.youtube.com/embed/P2cvManQDps"
                        title="Om Nom: Merge - Release Trailer" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
