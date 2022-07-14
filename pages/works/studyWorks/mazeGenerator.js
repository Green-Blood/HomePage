import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center, AspectRatio
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'

const Work = () => (
    <Layout title="Maze Generator">
        <Container>
            <Title>
                Maze Generator<Badge>2022</Badge>
            </Title>
            <P>
                Recursive Backtracker maze generator for Advanced Topics in Computer Graphics
            </P>
            <P>
                Really small maze generator, made with recursive bactracker algorith, also tried first VR implementation here
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span> WebGL, VR</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/MazeGenerator/Maze1.png" alt="maze"/>
            <WorkImage src="/images/works/MazeGenerator/Maze2.png" alt="maze"/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
