// Importar o React
import React from 'react'
import {
    Container,
    Nav,
    Navbar,
    Button,
    Stack
} from 'react-bootstrap'

// Importar o axios
import axios from 'axios'

// Importar o toastify
import {toast} from 'react-toastify'

// Importar as rotas
import {useNavigate} from 'react-router-dom'

// Criar o componente Header
const Header = () => {
    const navigate = useNavigate()
    const refreshPage = () => {
        window.location.reload(false)
    }
    const handleDeleteButton = async() => {
        if (window.confirm('Tem certeza de que deseja deletar TODOS os filmes?')) {
            const response = await axios.delete('https://api-filmes-sg-henrique.herokuapp.com/movies/deleteall')
            if (response.status === 200) {
                navigate('/')
                refreshPage()
            } else {
                toast.error("Não foi possível deletar tudo.")
            }
        }
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">API Filmes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Stack direction="horizontal" gap={3}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/add">Adicionar Filme</Nav.Link>
                            <Nav.Link onClick={handleDeleteButton}>
                                <Button variant="danger">Deletar tudo</Button>
                            </Nav.Link>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// Exportar Header
export default Header