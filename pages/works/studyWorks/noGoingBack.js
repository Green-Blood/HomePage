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

const Work = () => (
    <Layout title="(No) Going Back">
        <Container className="work-flow">
            <Title>
                (No) Going Back<Badge>2022</Badge>
            </Title>
            <P>Really small game made in mini game jam in 5 hours, with the <Link href="https://twinery.org/"> Twinery engine</Link>.</P>

            <P>Basic Plot: Toys in this world are alive and work at other people's houses entertaining children while
                parents are not at home. The main character, a bear, commits suicide at the beginning of the game, your
                task is to go through his memories and determine why he did it. What prompted him to commit such an
                atrocity over his life.
            </P>


            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span>  <Link href="https://green-blood.github.io/-No-Goin-Back//"> Web </Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Twinery</span>
                </List.Item>
            </List.Root>
            <WorkImage src="/images/works/NoGoingBack/NoGoingBack1.png" alt="noGoingBack"/>
            <WorkImage src="/images/works/NoGoingBack/NoGoingBack2.png" alt="noGoingBack"/>
        </Container>
    </Layout>
)

export default Work
