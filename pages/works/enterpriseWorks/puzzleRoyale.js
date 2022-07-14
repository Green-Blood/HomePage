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
    <Layout title="Puzzle Royale">
        <Container>
            <Title>
                Puzzle Royale <Badge>2022-</Badge>
            </Title>
            <P>
                Puzzle Royale is a Match3 Play-to-Earn game combing RPG elements, raid bosses and PVP duels. Assemble
                your team of heroes and reach the top of the Battle Arena!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://puzzleroyale.io/">
                        https://puzzleroyale.io/ <ExternalLinkIcon mx="2px"/>
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

            <WorkImage src="/images/works/Puzzle-Royale/puzzle-image1.jpeg" alt="Puzzle Royale"/>
            <WorkImage src="/images/works/Puzzle-Royale/puzzle-image2.jpeg" alt="Puzzle Royale"/>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/nvs7tMlez0s"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
