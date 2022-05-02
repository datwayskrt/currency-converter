import React from 'react';
import ReactDOM from 'react-dom';

import {
    Menu,
    Calculator,
    Historic,
    About,
    HowToUse
} from '../../components'

import {
    Container,
    HeroBackground,
    Main,
    Header,
    Heading,
    Exchange
} from './styles'

const Home = () => {
    return (
        <Container>
            <Menu/>
            <HeroBackground/>
            
            <Main>
                <Header>
                    <Heading>Faça conversões de diferentes moedas gratuitamente.</Heading>
                    <Exchange>Câmbio actualizado às 19:10 UTC</Exchange>
                </Header>
                
                <Calculator/>
                <HowToUse/>
                <Historic/>
                <About/>
            </Main>
        </Container>
    )
}

export default Home;