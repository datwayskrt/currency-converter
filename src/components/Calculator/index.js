import React from 'react'

// import { FaExchangeAlt } from 'react-icons/fa'
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
    Label,
    ExchangeAlt
} from './styles'

import FormGroup from './FormGroup'

const Calculator = () => {
  return (
    <Container>
        <Form>
            <FormGroup/>
            <Reverse>
                <ExchangeAlt />
                {/* <CgArrowsExchangeAlt size={36} /> */}
            </Reverse>
            <FormGroup/>
        </Form>

        <Bottom>
            <LeftSide>
                <SpanGroup>
                    <Span>1.00 USD = </Span>
                    <Span>448.92 </Span>
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