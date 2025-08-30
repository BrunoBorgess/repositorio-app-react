import React, { useState, useCallback } from "react";
import { Container, Form, SubmitButton  } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa'
import api from '../../services/api'; 


export default function Main(){
    const [newRepo, setNewRepo] = useState(''); 
    const [repositorios, setRepositorios] = useState([]);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault(); // Para não atualizar a página

        async function submit(){
            const response = await api.get(`respo/${newRepo}`);

            const data = {
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();

    }, [newRepo, repositorios]);

    function handleinputChange(e){
        setNewRepo(e.target.value); // Salvando o valor do input no estado newRepo, o parametro (e) é o evento de mudança do input
    }

    return(

        <Container>

            <h1>
                <FaGithub size={25} />
                Meus repositorios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorios"
                value={newRepo}
                onChange={handleinputChange}
                />

                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>

        </Container>
    )
}
