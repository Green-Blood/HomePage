import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'

const Work = () => (
    <Layout title="OverCrowded">
        <Container>
            <Title>
                Overcrowded <Badge>2023-2024-</Badge>
            </Title>
            <P>
                
                Build the best theme park ever and become a roller coaster tycoon! Manage your visitors' emotions by constructing the most thrilling rides, tasty restaurants, and hiring the funniest mascots. But watch out: your guests are very picky about their experience, so plan your strategy carefully!

                Design the most awesome theme park in the world! Your imagination is the limit!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.zeptolab.com/games/overcrowded-tycoon">
                        https://www.zeptolab.com/games/overcrowded-tycoon <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span><Link href={"https://apps.apple.com/us/app/overcrowded-tycoon/id1604391006"}>iOS</Link>/<Link href={"https://play.google.com/store/apps/details?id=com.zeptolab.overcrowded&hl=en"}>Android</Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>

            </List>

            <WorkImage src="/images/works/Overcrowded/image1.jpg" alt="Overcrowded"/>
            <WorkImage src="/images/works/Overcrowded/image2.jpg" alt="Overcrowded"/>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://youtu.be/7qydc6lTFNA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
