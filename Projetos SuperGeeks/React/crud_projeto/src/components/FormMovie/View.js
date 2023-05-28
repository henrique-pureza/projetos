// Importar o React
import React from 'react'

// Importar o Bootstrap
import {Button, Form, Container} from 'react-bootstrap'

// Criar o componente
const FormMovie = (props) => {
    return (
        <Container>
            <Form onSubmit={props.submit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nome do Filme</Form.Label>
                    <Form.Control 
                        type='Text' 
                        placeholder='Digite o nome do filme...' 
                        name='name' 
                        onChange={props.change}
                        value={props.valueName}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Ano</Form.Label>
                    <Form.Control 
                        type='Number' 
                        placeholder='Digite o ano do filme...' 
                        name='year' 
                        onChange={props.change}
                        value={props.valueYear}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        type='checkbox' 
                        label='Está no streaming?' 
                        name='streaming' 
                        onChange={props.change} 
                        value={props.valueStreaming}
                        checked={props.isChecked}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Salvar
                </Button>
            </Form>
        </Container>
    )
}

// Exportar
export default FormMovie