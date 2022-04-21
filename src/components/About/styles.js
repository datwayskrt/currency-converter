import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: var(--max-width);
    /* margin: var(--space-lg); */
    
    /* border: 2px solid red; */
`;

export const Heading = styled.h1`
    font-size: var(--font-size-32);
    color: var(--text-color-primary);
    font-weight: 500;
`;

export const Paragraph = styled.p`
    font-size: var(--font-size-20);
    color: var(--text-color-tertiary);
    font-weight: 500;
    margin: var(--space-unit) 0;
`;