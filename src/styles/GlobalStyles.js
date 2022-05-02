import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{

        //Fundos
        --color-background-primary: #F2F6F8;
        --color-background-secondary: #FFF;
        --color-background: #FAFAFA;
        
        --color-positive: #10AC84;
        --color-negative: #E47070;

        //text
        --text-color-primary: #1C1C1E;
        --text-color-secondary: #9C98A6;
        --text-color-tertiary: #555;

        --input-number-active: #E6E6F0;
        --input-number-desabled: #E6E6F0;
        
        //tamanhos
        --max-width: 1120px;

        //Tamanho da fonte
        --font-size-12: 0.75rem;
        --font-size-14: 0.875rem;
        --font-size-16: 1rem;
        --font-size-20: 1.25rem;
        --font-size-24: 1.5rem;
        --font-size-28: 1.75rem;
        --font-size-32: 2rem;

        //Borda
        --radius-small: 4px;
        --radius-medium: 8px;

        //Espaçamento
        --space-xxs: 0.25rem;   //4px
        --space-xs: 0.5rem;     //8px
        --space-sm: 0.75rem;    //12px
        --space-unit: 1rem;      //16px
        --space-md: 1.25rem;    //20px
        --space-lg: 2rem;       //32px
        --space-x: 2.5rem;    //40px
        --space-xl: 3.25rem;    //52px
        --space-xxl: 5.25rem;   //84px

        //Conteúdo
        --color-content-primary: #1C1C1E;
        --color-content-secondary: #9C98A6;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    body{
        background-color: #FAFAFA;
    }

    table-layout,tr,th,td{
        margin: 0;
        padding: 0;
        border: none;
        border-collapse: collapse;
    }
`;

export default GlobalStyle;