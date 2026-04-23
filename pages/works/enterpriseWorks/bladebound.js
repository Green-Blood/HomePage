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
    <Layout title="BladeBound">
        <Container className="work-flow">
            <Title>
                BladeBound <Badge>2023</Badge>
            </Title>
            <P>
                Game Description:
                Stay awhile and RAGE!

                Shadow has fallen upon the realm of men. Legendary heroes were slain. But the game of war is not over yet.


                🔥 💀🔥 You are a Bladebound, the last remnant of a fallen order. The Sentinel, a powerful goddess, brought you back to life. With her
            </P>
            <P>
                I have briefly worked on it, implementing NFT inventory
            </P>
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Website</Meta>
                    <Link href="https://bladebound-game.com/">
                        https://bladebound-game.com/ <IoOpenOutline mx="2px"/>
                    </Link>
                </List.Item>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span><Link href={"https://apps.apple.com/us/app/blade-bound-immortal-darkness/id1198507229"}>iOS</Link>/<Link href={"https://play.google.com/store/apps/details?id=com.artifexmundi.balefire&hl=en"}>Android</Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>

            </List.Root>

            <WorkImage src="/images/works/BladeBound/image1.jpg" alt="BladeBound"/>
            <WorkImage src="/images/works/BladeBound/image2.jpg" alt="BladeBound"/>
            <WorkImage src="/images/works/BladeBound/image3.jpg" alt="BladeBound"/>
            <WorkVideo src="https://www.youtube.com/embed/h22wJOYXvws" title="Bladebound Gameplay Trailer (Google Play)"/>
        </Container>
    </Layout>
)

export default Work

