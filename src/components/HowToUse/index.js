import React from 'react'

import{
    Container,
    Heading,
    Paragraph
} from './styles'

const HowToUse = () => {
  return (
      <Container>
          <Heading>Como usar?</Heading>
          <Paragraph>1 - Selecione um dos campos de conversão acima, e toque no icone no canto direito do mesmo para alterar a moeda.<br/><br/>
          
          2 - Aparecerá uma lista com todas moedas disponíveis, podes use a barra de pesquisa para encontrar a moeda com maior facilidade.<br/><br/>
          
          3 - Escreva o valor que deseja converterem um dos campos que a conversão é realizada automaticamente.<br/><br/>
          
          Nota: Os campos de conversão funcionam como uma calculadora, podes usar sinais matemáticos.</Paragraph>
      </Container>
  )
}

export default HowToUse