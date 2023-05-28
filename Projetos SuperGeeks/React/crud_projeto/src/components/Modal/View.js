// Importar o React
import React, {useState} from 'react'

// Importar o axios
import axios from 'axios'

// Importar os componentes do Bootstrap
import {Button, Modal} from 'react-bootstrap'

// Importar o react-toastify
import {toast} from 'react-toastify'

// Criar o componente Modal
const ModalButton = (props) => {
    // Criar a máquina de estados que mostra ou não o modal
    const [show, setShow] = useState(false)
    // Criar 2 funções => 1 - Mostra o modal, 2 - Fecha o modal
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // Criar uma função que faz o reload da página
    const refreshPage = () => window.location.reload(false)

    // Criar a função para deletar o filme
    const deleteMovie = async() => {
        const response = await axios.delete(`https://api-filmes-sg-henrique.herokuapp.com/movie/${props.idItem}`)
        if (response.status === 200) {
            handleClose()
            refreshPage()
        } else {
            toast.error('Ocorreu um erro no processo.')
        }
    }

    return (
        <div>
            <Button variant='danger' onClick={handleShow}>
                {props.buttonLabel}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar Filme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>{props.modalContext}</Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secundary' onClick={handleClose}>Cancelar</Button>
                    <Button variant='danger' onClick={deleteMovie}>Deletar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

// Exportar o componente Modal
export default ModalButton