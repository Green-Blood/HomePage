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
    <Layout title="Daily Life of the KLU Student">
        <Container>
            <Title>
                Empty Poster <Badge>2022</Badge>
            </Title>
            <P>
                The game that we made at the game jam, related to the daily life of a usual KLU student
            </P>
            <P>
                Ever felt like that your life as a student is hinging on the amount of caffein you consume? Maybe you
                sometimes wish for an more effective form of caffein. Well in The dailly life of a GSE student you make
                a deal with Devilbert. He offers you the strongest coffee in metaverse, but at what cost?
            </P>
            <P>
                Fight you way through hordes of other students by giving them the joy of coffee. Defeat the teachers in
                different ways and enjoy all their voice-overs! Experience the University grounds in a new and improved
                way! Don't forget to admire all the remodeling Devilbert has done!
            </P>
            <P>
                The dailly life of a GSE student is a game created for the 6th winter game jame. The game jam's main
                theme is: "..., but at what cost?"
            </P>

            <P>
                The game can be played within the browser using the wasd keys to move, the space bar to throw coffee and
                the mouse to continue dialog. Play with music on!
            </P>


            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <span>
                        <Link href="https://bubblewrapfox.itch.io/dlgses" target="_blank">
                            https://bubblewrapfox.itch.io/dlgses <ExternalLinkIcon mx="2px"/>
            </Link>
          </span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
            Unity
          </span>
                </ListItem>
                <ListItem>
                    <Meta>Github Link</Meta>
                    <Link href="https://github.com/Green-Blood/Daily-Life-of-KLU-Student">
                        Source code <ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
            </List>

            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/4X6mKip5qlY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>

            <WorkImage src="/images/works/DailyLife/DailyLife1.png" alt="DailyLife1"/>
            <WorkImage src="/images/works/DailyLife/DailyLife2.png" alt="DailyLife2"/>
            <WorkImage src="/images/works/DailyLife/DailyLife3.png" alt="DailyLife3"/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
