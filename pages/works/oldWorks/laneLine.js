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
    <Layout title="Lane line">
        <Container>
            <Title>
                Lane-line-detection<Badge>2020</Badge>
            </Title>
            <P>For vehicles to have the option to drive without anyone else, they have to comprehend their encompassing
                world like human drivers, so they can explore their way in avenues, delay at stop signs and traffic
                lights, and abstain from hitting deterrents, for example, different vehicles and walkers. In view of the
                issues experienced in recognizing objects via self-governing vehicles, an exertion has been made to
                exhibit path discovery utilizing the OpenCV library. The explanation and method for picking grayscale
                rather than shading, distinguishing edges in a picture, choosing the area of enthusiasm, applying Hough
                Transform, and picking polar arranges over Cartesian directions have been talked about.</P>

            <P> More details can be found in design document</P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>GithubLink</Meta> <span> <Link
                    href="https://github.com/Green-Blood/Lane-line-detection">https://github.com/Green-Blood/Lane-line-detection</Link></span>

                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span> PC</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, OpenCV</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/Lane_Line/line.jpg" alt="tragedy"/> 
        </Container>
    </Layout>
)

export default Work
export
{
    getServerSideProps
}
    from '../../../components/chakra'
