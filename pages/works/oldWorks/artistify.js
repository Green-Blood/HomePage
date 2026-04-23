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
    <Layout title="Artistify">
        <Container className="work-flow">
            <Title>
                Clash of Minds<Badge>2018</Badge>
            </Title>
            <P>The world is becoming more and more near to true Artificial Intelligence, having an ability to understand
                who is the person, his age, gender and etc. can give a huge amount of benefits to social interactions
                and law enhancement. To understand the concept the Flask web application was created with the following
                endorsements:
                <List.Root>
                    <List.Item>
                        <span>Image processing techniques </span>
                    </List.Item>
                    <List.Item>
                        <span> Number of faces detection</span>
                    </List.Item>
                    <List.Item>
                        <span> Age and gender detection</span>
                    </List.Item>
                    <List.Item>
                        <span>Face parts detection</span>
                    </List.Item>
                </List.Root>
            </P>


            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span>  <Link href="https://github.com/Green-Blood/Artistify">Web</Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>OpenCV, Flask, DLlib, Numpy</span>
                </List.Item>
            </List.Root>
            <WorkImage src="/images/works/Multimedia/multimedia.jpg" alt="artistify"/>
        </Container>
    </Layout>
)

export default Work
