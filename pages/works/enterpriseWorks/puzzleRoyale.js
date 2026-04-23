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
    <Layout title="Puzzle Royale">
        <Container className="work-flow">
            <Title>
                Puzzle Royale <Badge>2022-</Badge>
            </Title>
            <P>
                Puzzle Royale is a Match3 Play-to-Earn game combing RPG elements, raid bosses and PVP duels. Assemble
                your team of heroes and reach the top of the Battle Arena!
            </P>
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Website</Meta>
                    <Link href="https://puzzleroyale.io/">
                        https://puzzleroyale.io/ <IoOpenOutline mx="2px"/>
                    </Link>
                </List.Item>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span>iOS/Android</span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>

            </List.Root>

            <WorkImage src="/images/works/Puzzle-Royale/puzzle-image1.jpeg" alt="Puzzle Royale"/>
            <WorkImage src="/images/works/Puzzle-Royale/puzzle-image2.jpeg" alt="Puzzle Royale"/>
            <WorkVideo src="https://www.youtube.com/embed/nvs7tMlez0s" title="YouTube video player"/>
        </Container>
    </Layout>
)

export default Work

