import React, {useState} from 'react'

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

    const [inputAmount,setInputAmout] = useState(2);

    const AddInput = () => inputAmount < 4 ? setInputAmout(inputAmount+1) : null;
        
    console.log(inputAmount)

    return (
        <Container>
            <FormGroup amount={inputAmount} />
            {/* <Form>
                <Reverse>
                    <ExchangeAlt />
                    <CgArrowsExchangeAlt size={36} />
                </Reverse>
                <FormGroup/>
            </Form> */}

            <Bottom>
                <LeftSide>
                    <SpanGroup>
                        <Span>1.00 USD = </Span>
                        <Span>448.92 </Span>
                        <Span>AOA</Span>
                    </SpanGroup>

                    <AddNewField onClick={AddInput}>
                        <Plus>+</Plus>
                        <Label>Adicionar novo campo de conversão</Label>
                    </AddNewField>
                </LeftSide>
            </Bottom>
        </Container>
    )
}

export default Calculator