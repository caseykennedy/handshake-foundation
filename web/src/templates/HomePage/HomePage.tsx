// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

// Sections
import Hero from './Hero'

// Components
import ImgMatch from '../../components/ImgMatch'
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const posts = usePost()
  return (
    <S.HomePage>
      <Hero />

      {/* <Section border={true}>
        <Flex width={[1]}>
          <Box flex={1}>
            <Heading as="h4">partners</Heading>
          </Box>

          <Box flex={[3, 2]}>
            {partners.map((partner, idx) => (
              <Text as="a" className="text--lg" key={idx}>
                {partner}
              </Text>
            ))}
          </Box>
        </Flex>
      </Section> */}

      <Section>
        <Flex flexDirection="column" width={1}>
          <Box>
            <Heading as="h2">learn</Heading>
          </Box>

          <Grid columns={[2]} gap={4}>
            {posts.slice(1, 3).map(({ node: post }, idx) => (
              <CardPost inline={false} post={post} key={idx} />
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section bg="yellow" border={true}>
        <a href="/">
          <Text className="text--xl">donate</Text>
        </a>
        <a href="/">
          <Text className="text--xl">apply for grants</Text>
        </a>
      </Section>
    </S.HomePage>
  )
}

export default HomePage

const partners = [
  'Handshake FTW',
  'Decentral GO',
  'Ready, aim, fire!',
  'Re:Build'
]
