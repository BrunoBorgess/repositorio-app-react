import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
    min-height: 100%; 
    }

    body {
    background-color: #0D2636;}
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    }
    button {
    cursor: pointer;
    }
`;

// min=heigth: 100% usado para que o body ocupe toda a altura da tela
// box-sizing: border-box usado para que o padding e margin sejam considerados no tamanho total do elemento 