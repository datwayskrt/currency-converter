import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: var(--max-width);
    margin: var(--space-lg);
    
    /* border: 2px solid red; */

    @media(max-width: 480px){
        padding: 0 var(--space-unit);
    }
`;

export const Heading = styled.h1`
    font-size: var(--font-size-32);
    color: var(--text-color-primary);
    font-weight: 600;

    /* border: 2px solid red; */

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
    margin: var(--space-unit) 0;
`;

export const Table = styled.table`
    width: 100%;
    text-align: center;
    border: none;
    border-collapse: collapse;
    table-layout: fixed;

    @media(max-width: 768px){
        font-size: var(--font-size-16);
    }

    @media(max-width: 480px){
        font-size: var(--font-size-14);
    }
`;

export const Tr = styled.tr`
    border: none;

    :nth-child(odd) {
        background-color: var(--color-background);
    }

    :nth-child(even) {
        background-color: var(--color-background-primary);
    }
`;

export const Th = styled.th`
    border: none;
    color: var(--text-color-primary);
    padding: var(--space-unit) 0;

    :nth-child(1) {
        padding: var(--space-unit);
    }
`;

export const Td = styled.td`
    border: none;
    color: var(--text-color-tertiary);
    font-weight: 500;
    padding: var(--space-unit) 0;
`;