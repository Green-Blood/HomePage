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
    <Layout title="HyperCasuals Games">
        <Container>
            <Title>
                Small Mobile HyperCasual games <Badge>2020-2021</Badge>
            </Title>
            <P>
                While I was working at UnitedSoft, we mainly developed hyper-casual games with light mechanics, but
                unfortunately none of them saw the light of day.
            </P>
            <P>
                Unfortunately, there are no game builds, but you can see source code in the links below (access is open
                because they are not published anywhere)
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Games</Meta>
                    <span><Link href="https://github.com/Green-Blood/Kids_Game">  Kids Game</Link>, </span>
                    <span><Link href="https://github.com/Green-Blood/dark_tower">  Dark Tower</Link>, </span>
                    <span><Link href="https://github.com/Green-Blood/NinjaSlicer"> Ninja Slicer</Link>, </span>
                    <span><Link href="https://github.com/Green-Blood/Spring-Climber"> Spring Climber</Link>, </span>
                    <span><Link href="https://github.com/Green-Blood/Bolajon"> Bolajon</Link>, </span>
                    <span><Link href="https://github.com/Green-Blood/JellyBox"> Jelly Box </Link> </span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/hyperCasual/Hyper1.png" alt="hyper"/>
            <WorkImage src="/images/works/hyperCasual/Hyper2.png" alt="hyper"/>
            <WorkImage src="/images/works/hyperCasual/Hyper3.png" alt="hyper"/>
             
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
from '../../../components/chakra'
