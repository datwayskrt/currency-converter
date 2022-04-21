import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    /* z-index: -90; */
    /* background-color: var(--color-background);
    background-color: blue; */
    height: 100vh;
`;

export const HeroBackground = styled.div`
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
    background-color: var(--color-background-primary);
    /* background-color: red; */
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: var(--space-lg);

    /* border: 2px solid red; */
`;

export const Heading = styled.h1`
    max-width: 480px;
    font-size: var(--font-size-32);
    color: var(--text-color-primary);
    font-weight: 500;
`;

export const Exchange = styled.p`
    font-size: var(--font-size-16);
    color: var(--text-color-secondary);
    font-weight: 500;
`;