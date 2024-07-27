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
    <Layout title="BladeBound">
        <Container>
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
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://play.google.com/store/apps/details?id=com.artifexmundi.balefire&hl=en">
                        https://play.google.com/store/apps/details?id=com.artifexmundi.balefire&hl=en <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>

            </List>

            <WorkImage src="/images/works/BladeBound/image1.jpg" alt="BladeBound"/>
            <WorkImage src="/images/works/Overcrowded/image2.jpg" alt="BladeBound"/>
            <WorkImage src="/images/works/Overcrowded/image3.jpg" alt="BladeBound"/>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe src="https://www.youtube.com/embed/h22wJOYXvws"
                        title="Bladebound Gameplay Trailer (Google Play)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
