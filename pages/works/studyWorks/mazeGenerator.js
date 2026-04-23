import {
        Container,
    Badge,
    Link,
    Heading,
    Center,
    List
} from '@chakra-ui/react'
import {Title, WorkImage, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { IoOpenOutline } from 'react-icons/io5'

const Work = () => (
    <Layout title="Maze Generator">
        <Container className="work-flow">
            <Title>
                Maze Generator<Badge>2022</Badge>
            </Title>
            <P>
                Recursive Backtracker maze generator for Advanced Topics in Computer Graphics
            </P>
            <P>
                Really small maze generator, made with recursive bactracker algorith, also tried first VR implementation here
            </P>
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span> WebGL, VR</span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>
            </List.Root>
            <WorkImage src="/images/works/MazeGenerator/Maze1.png" alt="maze"/>
            <WorkImage src="/images/works/MazeGenerator/Maze2.png" alt="maze"/>
        </Container>
    </Layout>
)

export default Work

