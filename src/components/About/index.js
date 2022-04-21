import React from 'react'

import{
    Container,
    Heading,
    Paragraph
} from './styles'

const About = () => {
  return (
      <Container>
          <Heading>Sobre</Heading>
          <Paragraph>Como toda historia na área de tecnologias essa também tem dois amigos, o “conversor” é uma ferramenta gratuita para conversão de moedas desenvolvida por dois jovens angolanos entusiastas por tecnologias e mantido através de contribuições. <br/><br/> Foi inicialmente desenvolvida por Énio Carlos, e mais tarde redesenhada com ajuda de Victor Soares, e desde o ínicio que foi idealizada para ser minimalista e fácil de usar.  </Paragraph>
      </Container>
  )
}

export default About