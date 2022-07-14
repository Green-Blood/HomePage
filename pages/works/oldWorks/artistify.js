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
    <Layout title="Artistify">
        <Container>
            <Title>
                Clash of Minds<Badge>2018</Badge>
            </Title>
            <P>The world is becoming more and more near to true Artificial Intelligence, having an ability to understand
                who is the person, his age, gender and etc. can give a huge amount of benefits to social interactions
                and law enhancement. To understand the concept the Flask web application was created with the following
                endorsements:
                <List>
                    <ListItem>
                        <span>Image processing techniques </span>
                    </ListItem>
                    <ListItem>
                        <span> Number of faces detection</span>
                    </ListItem>
                    <ListItem>
                        <span> Age and gender detection</span>
                    </ListItem>
                    <ListItem>
                        <span>Face parts detection</span>
                    </ListItem>
                </List>
            </P>


            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>  <Link href="https://github.com/Green-Blood/Artistify">Web</Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>OpenCV, Flask, DLlib, Numpy</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/Multimedia/multimedia.jpg" alt="artistify"/>
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
