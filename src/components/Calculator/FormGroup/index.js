import React from 'react';

import { BsCaretDownFill } from 'react-icons/bs';

import {
    Div,
    Container,
    Label,
    MoneyInput,
    Input,
    Button,
    Flag,
    Divider
} from './styles'

const FormGroup = ({amout}) => {

    return (
        <Div>
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

            {amout == 3 ?
            (
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
            ):null}
            

            {amout == 4 ?
            (
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
            ):null}
        </Div>
    )
}

export default FormGroup