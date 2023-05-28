// Importar o pacote React
import React, {
    useEffect,
    useState
} from 'react';

// Importar react-bootstrap
import {
    Container,
    Row,
    Spinner
} from 'react-bootstrap';

// Importar o Card
import CardComponent from './../Card/View';

// Importar axios
import axios from 'axios';

// Criar o componente Home
const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {
        const response = await axios.get('https://api-filmes-sg-henrique.herokuapp.com/movies')

        // Verificar se deu certo
        if (response.status === 200) {
            setData(response.data);
            setIsLoading(false);
        }

    }

    return (
        <Container>
            <h1 className='text-center'>Filmes listados</h1>
            {
                isLoading ? <Row className='justify-content-md-center'> <Spinner animation='border' role='status' className='m-5' /> </Row> :
                <Row className='justify-content-md-center'>
                    {data && data.map((item, index) => {
                        // Ternário
                        const isStreaming = item.streaming ? 'Sim' : 'Não'
                        return (
                            <CardComponent 
                                title={item.name}
                                index={index + 1}
                                year={item.year}
                                streaming={isStreaming}
                                id={item._id}
                                key={item._id}
                            />
                        )
                    })
                    }
                </Row>
            }
        </Container>
    )
}

// Exportar o componente
export default Home