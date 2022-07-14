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
    <Layout title="Clash Of Minds">
        <Container>
            <Title>
                Clash of Minds<Badge>2018</Badge>
            </Title>
            <P>Small multiplayer game written in C with Glade using sockets.</P>

            <P>Used SQL for database. Main purpose of the
                game
                is to find the correct answer from the given 4 variants. Has High score system, to compete between
                players.
                Players can create, and join friends games.
            </P>


            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>  <Link href="https://github.com/Green-Blood/BrainBattle">PC</Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>C, Glade, MySQL</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/BrainBattle/MENU.png" alt="brainBattle"/>
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
