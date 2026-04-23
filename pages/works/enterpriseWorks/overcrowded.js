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
    <Layout title="OverCrowded">
        <Container className="work-flow">
            <Title>
                Overcrowded <Badge>2023-2024</Badge>
            </Title>
            <P>
                
                Build the best theme park ever and become a roller coaster tycoon! Manage your visitors' emotions by constructing the most thrilling rides, tasty restaurants, and hiring the funniest mascots. But watch out: your guests are very picky about their experience, so plan your strategy carefully!

                Design the most awesome theme park in the world! Your imagination is the limit!
            </P>
            <List.Root ml={4} my={4}>
                <List.Item>
                    <Meta>Website</Meta>
                    <Link href="https://www.zeptolab.com/games/overcrowded-tycoon">
                        https://www.zeptolab.com/games/overcrowded-tycoon <IoOpenOutline mx="2px"/>
                    </Link>
                </List.Item>
                <List.Item>
                    <Meta>Platform</Meta>
                    <span><Link href={"https://apps.apple.com/us/app/overcrowded-tycoon/id1604391006"}>iOS</Link>/<Link href={"https://play.google.com/store/apps/details?id=com.zeptolab.overcrowded&hl=en"}>Android</Link></span>
                </List.Item>
                <List.Item>
                    <Meta>Stack</Meta>
                    <span>Unity</span>
                </List.Item>

            </List.Root>

            <WorkImage src="/images/works/Overcrowded/image1.jpg" alt="Overcrowded"/>
            <WorkImage src="/images/works/Overcrowded/image2.jpg" alt="Overcrowded"/>
            <WorkVideo src="https://www.youtube.com/embed/7qydc6lTFNA" title="Overcrowded Tycoon User Acquisition Video"/>
        </Container>
    </Layout>
)

export default Work

