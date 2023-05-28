// Importar o pacote React
import React, {useEffect, useState} from 'react'

// Importar as rotas
import {useNavigate, useParams} from 'react-router-dom'

// Importar o axios
import axios from 'axios'

// Importar o FormMovie
import FormMovie from './../FormMovie/View'

// Importar o react-toastify
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-bootstrap'

// Configurar o estado inicial do formulário
const initialState = {
    name: "",
    year: 0,
    streaming: false
}

// Criar o componente EditMovie
const EditMovie = () => {
    const [state, setState] = useState(initialState)
    const {name, year, streaming} = state
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect((id) => {
        if (id) {
            getSingleUser(id)
        }
    },[])

    // Obtêm o nome, ano e streaming do filme com id especificado
    const getSingleUser = async(id) => {
        const response = await axios.get(`https://api-filmes-sg-henrique.herokuapp.com/movie/${id}`)
        if (response.status === 200) {
            setState({...response.data})
        }
    }

    // Atualiza o filme
    const updateMovie = async(data, id) => {
        const response = await axios.put(`https://api-filmes-sg-henrique.herokuapp.com/movie/${id}`, data)
        if (response.status === 200) {
            toast.success('Filme atualizado com sucesso!')
        }
    }

    // Evita que um filme seja criado sem nome ou ano
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !year) {
            toast.error("Os campos de nome e ano são obrigatórios.")
        } else {
            updateMovie(state, id)
            navigate("/")
        }
    }

    // Converte o valor de string para booleano
    const handleInputChange = (e) => {
        let {name, value} = e.target
        if (name === "streaming") {
            if (value === "false") {
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
            <h1 className="title" style={{textAlign: "center"}}>Editando os filmes</h1>
            <div className='form'>
                <FormMovie change={handleInputChange} valueName={name} valueYear={year} valueStreaming={streaming} submit={handleSubmit} isChecked={streaming} />
            </div>
        </div>
    )
}

// Exportar o componente
export default EditMovie