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
    <Layout title="No Going Back">
        <Container>
            <Title>
                Prometheus Quest<Badge>2022</Badge>
            </Title>
            <P>
            </P>
            <P>Project with one button, made under a week </P>
            <P> Based on the Myth of Prometheus</P>
            <P> Story: The Myth of Prometheus</P>
            <P> World: Earth to Mount Olympus</P>
            <P> Character: Prometheus</P>
            <P> Core Mechanics: click one button at the right time</P>


            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>  <Link href="https://green-blood.github.io/Prometheus-Quest/"> WebGL </Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/PrometheusQuest/Prometheus3.png" alt="prometheus"/>
            <WorkImage src="/images/works/PrometheusQuest/Prometheus1.png" alt="prometheus"/>
            <WorkImage src="/images/works/PrometheusQuest/Prometheus2.png" alt="prometheus"/>
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
