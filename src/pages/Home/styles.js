import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
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

    @media(max-width: 1200px){
        padding: 0 2rem;
    }

    @media(max-width: 768px){
        padding: 0.75rem;
    }

    @media(max-width: 480px){
        padding: 0;
    }
`;

export const Header = styled.header`
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: var(--space-lg);

    border: 2px solid red;

    @media(max-width: 768px){
        flex-direction: column;
    }

    @media(max-width: 480px){
        padding: 0 var(--space-unit);
    }
`;

export const Heading = styled.h1`
    max-width: 480px;
    font-size: var(--font-size-32);
    color: var(--text-color-primary);
    font-weight: 600;
    
    @media(max-width: 768px){
        font-size: var(--font-size-28);
    }

    @media(max-width: 480px){
        font-size: var(--font-size-24);
    }
`;

export const Exchange = styled.p`
    font-size: var(--font-size-16);
    color: var(--text-color-secondary);
    font-weight: 600;
    margin-top: 8px;
`;