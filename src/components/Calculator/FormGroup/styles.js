import styled from "styled-components";

export const Container = styled.div`

`;

export const Label = styled.label`
    font-size: var(--font-size-20);
    color: var(--text-color-secondary);
    font-weight: 500;
`;

export const MoneyInput = styled.div`
    height: 68px;
    width: 450px;
    position: relative;
    margin-top: var(--space-unit);

    /* border: 2px solid red; */
`;

export const Input = styled.input`
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    font-size: var(--font-size-20);
    border-radius: var(--radius-small);
    border: 2px solid var(--input-number-active);

    /* -webkit-appearance: none;
    -moz-appearance: textfield; */
`;

export const Button = styled.div`
    height: 100%;
    /* width: 115px; */
    width: 125px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
`;

export const Flag = styled.img`
    width: 3rem;
    height: 2rem;
    margin-left: 0.75rem;
`;

export const Divider = styled.div`
    height: 60%;
    width: 2px;
    /* background-color: var(--color-content-secondary); */
    background-color: var(--input-number-active);
`;