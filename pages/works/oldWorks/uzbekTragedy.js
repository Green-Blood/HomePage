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
    <Layout title="Uzbek Tragedy">
        <Container>
            <Title>
                The Uzbek Tragedy - Chimgan Edition<Badge>2019</Badge>
            </Title>
            <P>Small Visual novel we made as a final project for Database Application and Design (SOC-3060) about
                Uzbekistan and Chimgan tragedy with 3 different endings. Made, so that
                tourists, before arriving in Uzbekistan, have an idea of what can await them in the mountains of
                Uzbekistan</P>

            <P> More details can be found in design document</P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>GithubLink</Meta> <span> <Link
                    href="https://github.com/Green-Blood/Uzbek-Tragedy-Chimgan-edition/">https://github.com/Green-Blood/Uzbek-Tragedy-Chimgan-edition</Link></span>

                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span> Can be built on anything WebGL, Android, IOS, PC, Mac, Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/Uzbek Tragedy/tragedy1.png" alt="tragedy"/>
            <WorkImage src="/images/works/Uzbek Tragedy/tragedy2.png" alt="tragedy"/>
            <WorkImage src="/images/works/Uzbek Tragedy/tragedy3.png" alt="tragedy"/>
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
