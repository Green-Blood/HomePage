import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'

const Work = () => (
    <Layout title="soqqa">
        <Container>
            <Title>
                Soqqa <Badge>2021</Badge>
            </Title>
            <P>
                Bura is a Russian, Ace-Ten, card game that is "particularly characteristic of Russian prisoners and
                ex-prisoners. Its alternative name of Thirty-One refers to the combination of three trump cards that
                wins the game.Bura is a rather unusual point-trick game, in which it is possible to lead several cards
                at the same
                time provided that they are of the same suit.
            </P>
            <P>
                This game has been closed.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>
            
            <WorkImage src="/images/works/Soqqa/bura2.png" alt="soqqa"/>
            <WorkImage src="/images/works/Soqqa/bura1.png" alt="soqqa"/>
            <WorkImage src="/images/works/Soqqa/bura3.png" alt="soqqa"/>
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
