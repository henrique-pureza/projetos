// Importar o pacote React
import React, {useState} from 'react'

// Importar o pacote da navegação
import {useNavigate} from 'react-router-dom'

// Importar o pacote axios
import axios from 'axios'

// Importar o componente FormMovie
import FormMovie from './../FormMovie/View' 

// Importar o pacote das notificações
import {toast} from 'react-toastify'

// Configurar o estado inicial do formulário
const initialState = {
    name: "",
    year: 0,
    streaming: false
}

// Criar o componente AddMovie
const AddMovie = () => {
    // Criar máquina de estados com variável state
    const [state, setState] = useState(initialState)
    // Destructuring
    const {name, year, streaming} = state
    // Configurar a navegação das páginas
    const navigate = useNavigate()
    // Criar uma função para cadastrar o filme
    const addMovie = async (data) => {
        const response = await axios.post('https://api-filmes-sg-henrique.herokuapp.com/movie', data)
        // Verificar se deu tudo certo e mandar uma notificação de sucesso
        if (response.status === 201) {
            toast.success('Filme cadastrado com sucesso.')
        }
    }
    // Criar função que verifica se existe erro quando o formulário for enviado
    const handleSubmit = (error) => {
        error.preventDefault()
        if (!name || !year) {
            toast.error('Os campos de nome e ano são obrigatórios.')
        } else {
            addMovie(state)
            navigate('/')
        }
    }
    // Criar função que atualiza o state com as infos do formulário
    const handleInputChange = (e) => {
        // Destructuring
        let {name, value} = e.target
        if (name === 'streaming') {
            if (value === 'false') {
                value = false
            } else {
                value = true
            }
            setState({...state, [name]:!value})
        } else {
            setState({...state, [name]:value})
        }
    }

    return (
        <div>
            <h1 className='title' style={{textAlign: "center"}}>Cadastrar um Filme</h1>
            <div className='form'>
                <FormMovie change={handleInputChange} valueName={name} valueYear={year} valueStreaming={streaming} submit={handleSubmit} />
            </div>
        </div>
    )
}

// Exportar o componente
export default AddMovie