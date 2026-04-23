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

            <WorkImage src="/images/works/OmNomMerge/image1.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image2.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image3.png" alt="OmNomMerge"/>
            <WorkImage src="/images/works/OmNomMerge/image4.png" alt="OmNomMerge"/>
            <WorkVideo src="https://www.youtube.com/embed/P2cvManQDps" title="Om Nom: Merge - Release Trailer"/>
        </Container>
    </Layout>
)

export default Work

