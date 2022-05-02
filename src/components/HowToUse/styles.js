import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: var(--max-width);
    /* margin-bottom: var(--space-xl); */
    
    /* border: 2px solid red; */

    @media(max-width: 480px){
        padding: 0 var(--space-unit);
    }
`;

export const Heading = styled.h1`
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

export const Paragraph = styled.p`
    font-size: var(--font-size-20);
    color: var(--text-color-tertiary);
    font-weight: 500;
    margin-top: var(--space-unit);
`;