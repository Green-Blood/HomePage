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
    <Layout title="Kids Drawing Game">
        <Container>
            <Title>
                Coloring Pages<Badge>2021</Badge>
            </Title>
            <P>
                A coloring book game for kids.
            </P>
            <P>
                Game Description: There is always a free level in "KinGoGames" for kids where you can color pictures!


                A coloring book from the little monkey KinGo for your kids will create the feeling of real drawing. It
                will help kids develop creative thinking, as well as better coordination and motor skills. It will teach
                them how to combine colors and textures.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span> <Link
                        href="https://apps.apple.com/uz/app/drawing-for-kids-doodle-games/id1557677292?platform=ipad">iOS</Link> /
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.kingogames.coloringpageskidsgame.games">
                            Android
                        </Link></span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </ListItem>
            </List>
            <Box>
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/-VxbN3Bfm08"
                        title="Coloring Pages for Kids"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Box>

            <WorkImage src="/images/works/KidsGame/image1.jpg" alt="walknote"/>
            <WorkImage src="/images/works/KidsGame/image2.jpg" alt="walknote"/>
            <WorkImage src="/images/works/KidsGame/image3.jpg" alt="walknote"/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
