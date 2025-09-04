
import { LiaDemocratSolid } from "react-icons/lia";
import styled, {keyframes, css}  from "styled-components"; 

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;       
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
`;

export const Form = styled.form`
    margin-top: 30px;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    
    input {
        flex: 1;        
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
        }
`;       

// Criando animação do botão
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading ? true : false,  // garante booleano real
}))`

    background: #0D2636;
    border: 0;
    border-radius: 5px; 
    margin-left: 10px;
    padding:  15px;
    display: flex;
    justify-content: center;
    align-items: center;


    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5
    }
    
    ${props => props.loading && 
        css`
            svg{
                display: inline-block;
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`;



export const List = styled.ul`
    list-style: none; /* Remove os marcadores padrão da lista */
    margin-top: 20px; /* Espaço acima da lista */

    li{
        padding: 15px 0; /* Espaço interno em cima e embaixo de cada item */
        display: flex; /* Ativa o FLexbox para os itens */
        flex-direction: row; /* Organiza os itens em linha */
        align-items: center; /* Alinha verticalmente ao centro  */
        justify-content: space-between; /* Espaça os itens nas extremidades */

        & + li{
        border-top: 3px solid #eee /* Colocando borda de divisão entre os itens do segundo para baixo */
        }

        a{
            color: #0D2636;
            text-decoration: none;
        }
    }
`;

/* .attrs para mostrar que é do type button (ou outro) */
export const DeleteButton =styled.button.attrs({
    type: 'button'
})`
    cursor: pointer;
    background: transparent;
    color: #0D2636;
    border:0;
    padding: 8px 7px;
    outline: 0;
    border-radius: 4px;
`;