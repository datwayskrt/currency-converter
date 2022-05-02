import React from 'react'

import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

import {
    Container,
    Heading,
    Paragraph,
    Table,
    Tr,
    Th,
    Td
} from './styles'

const Historic = () => {
  return (
      <Container>
          <Heading>Dados históricos da taxa de câmbio.</Heading>
          <Paragraph>Evolução da taxa de câmbio de 100 Dólares Americano para o Kwanza Angolano (última semana).</Paragraph>

          <Table cellspacing="0" cellpadding="0">
              <Tr>
                  <Th>Data</Th>
                  <Th>USD</Th>
                  <Th>AOA</Th>
                  <Th>Variação</Th>
                  {/* <Th>Estado</Th> */}
              </Tr>
              <Tr>
                  <Td>12/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.1% <BsCaretDownFill color='#E47070' /></Td>
                  {/* <Td><BsCaretDownFill color='#E47070' /></Td> */}
              </Tr>
              <Tr>
                  <Td>13/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.3% <BsCaretUpFill color='#10AC84' /></Td>
                  {/* <Td><BsCaretUpFill color='#10AC84' /></Td> */}
              </Tr>
              <Tr>
                  <Td>14/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.4% <BsCaretDownFill color='#E47070' /></Td>
                  {/* <Td><BsCaretDownFill color='#E47070' /></Td> */}
              </Tr>
              <Tr>
                  <Td>15/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.1% <BsCaretDownFill color='#E47070' /></Td>
                  {/* <Td><BsCaretDownFill color='#E47070' /></Td> */}
              </Tr>
              <Tr>
                  <Td>16/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.1% <BsCaretDownFill color='#E47070' /></Td>
                  {/* <Td><BsCaretDownFill color='#E47070' /></Td> */}
              </Tr>
              <Tr>
                  <Td>17/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.2% <BsCaretUpFill color='#10AC84' /></Td>
                  {/* <Td><BsCaretUpFill color='#10AC84' /></Td> */}
              </Tr>
              <Tr>
                  <Td>18/04/22</Td>
                  <Td>100</Td>
                  <Td>45000.00</Td>
                  <Td>0.1% <BsCaretDownFill color='#E47070' /></Td>
                  {/* <Td><BsCaretDownFill color='#E47070' /></Td> */}
              </Tr>
          </Table>

      </Container>
  )
}

export default Historic