import {
    Container,
    Badge,
    Link,
    List
} from '@chakra-ui/react'
import {Title, WorkImage, WorkVideo, Meta} from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { IoOpenOutline } from 'react-icons/io5'

const Work = () => (
    <Layout title="Kids Drawing Game">
        <Container className="work-flow">
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
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span> <Link
                        href="https://apps.apple.com/uz/app/drawing-for-kids-doodle-games/id1557677292?platform=ipad">iOS</Link> /
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.kingogames.coloringpageskidsgame.games">
                            Android
                        </Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>
            </List.Root>
            <WorkVideo src="https://www.youtube.com/embed/-VxbN3Bfm08" title="Coloring Pages for Kids"/>

            <WorkImage src="/images/works/KidsGame/image1.jpg" alt="walknote"/>
            <WorkImage src="/images/works/KidsGame/image2.jpg" alt="walknote"/>
            <WorkImage src="/images/works/KidsGame/image3.jpg" alt="walknote"/>
        </Container>
    </Layout>
)

export default Work
