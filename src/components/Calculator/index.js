import React from 'react'

import { FaExchangeAlt } from 'react-icons/fa'
// import { CgArrowsExchangeAlt } from 'react-icons/cg'

import {
    Container,
    Form,
    Reverse,
    Bottom,
    LeftSide,
    SpanGroup,
    Span,
    AddNewField,
    Plus,
    Label
} from './styles'

import FormGroup from './FormGroup'

const Calculator = () => {
  return (
    <Container>
        <Form>
            <FormGroup/>
            <Reverse>
                <FaExchangeAlt size={24} />
                {/* <CgArrowsExchangeAlt size={36} /> */}
            </Reverse>
            <FormGroup/>
        </Form>

        <Bottom>
            <LeftSide>
                <SpanGroup>
                    <Span>1.00000 USD = </Span>
                    <Span>448.92324 </Span>
                    <Span>AOA</Span>
                </SpanGroup>

                <AddNewField>
                    <Plus>+</Plus>
                    <Label>Adicionar novo campo de conversão</Label>
                </AddNewField>
            </LeftSide>
        </Bottom>
    </Container>
  )
}

export default Calculator