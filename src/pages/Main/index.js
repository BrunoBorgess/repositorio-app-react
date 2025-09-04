import { useState, useCallback } from "react";
import { Container, Form, SubmitButton, List, DeleteButton  } from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import api from '../../services/api'; 


export default function Main(){
    const [newRepo, setNewRepo] = useState(''); 
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading]  = useState(false);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault(); // Para não atualizar a página

        async function submit(){
            setLoading(true)
            try{
                const response = await api.get(`repos/${newRepo}`);

                const data = {
                    name: response.data.full_name,
                }

                setRepositorios([...repositorios, data]);
                setNewRepo('');
                
                console.log("Repositórios:", [...repositorios, data]); // 👈 teste
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        submit();

    }, [newRepo, repositorios]);

    function handleinputChange(e){
        setNewRepo(e.target.value); // Salvando o valor do input no estado newRepo, o parametro (e) é o evento de mudança do input
    }

    const handleDelete = useCallback((repo)=> {
        const find = repositorios.filter(r => r.name !== repo) // Vai verificqr quais repo está sendo passada e vai ver se é difernete das outras, se for diferente, ele retorna todas as outras, e a que foi passada no useCallback ele não mostra quando apertar o botão
        setRepositorios(find);
    }, [repositorios]);


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

                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}
                    
                </SubmitButton>
            </Form>
            <List>
                {repositorios.map(repo => (
                    <li
                    key ={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name) }>
                                <FaTrash size={14} onClick={() =>{}}/>
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <a href="">
                            <FaBars size={20}/>
                        </a>
                    </li>
                ))}
            </List>

        </Container>
    )
}
