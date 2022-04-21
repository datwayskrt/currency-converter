import React from 'react';

import { BsCaretDownFill } from 'react-icons/bs';

import {
    Container,
    Label,
    MoneyInput,
    Input,
    Button,
    Flag,
    Divider
} from './styles'

const FormGroup = () => {
    return (
        <Container>
            <Label>(USD) - Dólar americano</Label>
            <MoneyInput>
                <Input type="number" />
                <Button>
                    <Divider/>
                    <Flag src='./images/flags/aoa.png' />
                    <BsCaretDownFill color='#9C98A6' />
                </Button>
            </MoneyInput>
        </Container>
    )
}

export default FormGroup