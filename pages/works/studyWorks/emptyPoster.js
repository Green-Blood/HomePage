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
    <Layout title="Empty Poster">
        <Container>
            <Title>
                Empty Poster <Badge>2022</Badge>
            </Title>
            <P>
                The game that we made at the game jam, related to the problem that is happening in Russia,
            </P>
            <P>
                You play as a person on a one-man demonstraton, holding up a blank sign. For most people, a white piece
                of paper is just that - an empty piece of paper without a message. A blank slate. But for people living
                under an oppressive regime even something as simple as holding up a sign that has nothing written on it
                is a risk. A risk that won't necessarily pay off in any meaningful way. And yet they keep going and
                doing it, again and again, despite the consequenses, hoping that one day their efforts won't be in vain.
            </P>
            <P>
                "Russian police arrest demonstrator protesting with blank sign"
            </P>
            <P>
                Citizens of the Russian Federation have the right to assemble peacefully, without weapons, to hold
                meetings, rallies and demonstrations, processions and picketing. - Russian Constitution.
            </P>
            <P>
                Be aware - the game is quite short, so don't get surprised if you reach the end in a matter of minutes
                or even seconds :P (Made in 48 hours)
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <span>
            <Link href="https://th3dilli.itch.io/empty-poster/" target="_blank">
              https://th3dilli.itch.io/empty-poster/ <ExternalLinkIcon mx="2px"/>
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
                    <Link href="https://github.com/Green-Blood/Empty-Poster">
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

            <WorkImage src="/images/works/EmptyPoster/EmptyPoster1.png" alt="EmptyPoster"/>
            <WorkImage src="/images/works/EmptyPoster/EmptyPoster2.png" alt="EmptyPoster"/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../../components/chakra'
