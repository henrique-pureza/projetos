// Importar o pacote React
import React from 'react';

// Importar o react-bootstrap
import {
    Button,
    Card,
    Row,
    Col
} from 'react-bootstrap';

// Importar os ícones
import {
    BsFillTrashFill,
    BsFillPencilFill
} from 'react-icons/bs';

// Importar o componente ModalButton
import ModalButton from './../Modal/View'

const CardComponent = (props) => {
    // Pegar o id do Home pelo props
    const id = props.id

    return (
        <Card style={{width: "16rem"}} className='m-3'>
            <Card.Body>
                <Card.Title className='text-center'>{props.title}</Card.Title>
                <Card.Text>Index: {props.index}</Card.Text>
                <Card.Text>Ano: {props.year}</Card.Text>
                <Card.Text>Streaming: {props.streaming}</Card.Text>
                <Row className='justify-content-md-center'>
                    <Col md='auto'>
                        <Button variant='primary' href={`/update/${id}`}>
                            <BsFillPencilFill />
                        </Button>                        
                    </Col>
                    <Col md='auto'>
                        <ModalButton buttonLabel={<BsFillTrashFill />} idItem={id} modalContext='Tem certeza de que deseja deletar o filme?' />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

// Exportar o componente Card
export default CardComponent;