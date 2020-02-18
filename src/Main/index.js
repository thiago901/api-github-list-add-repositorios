import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, ButtonSubmit } from './style';

function Main() {
    return (
        <Container>
            <h1>
                <FaGithub />
                Repositórios
            </h1>

            <Form onSubimit={() => {}}>
                <input type="text" placeholder="Adicionar reposiório" />
            </Form>

            <ButtonSubmit disable>
                <FaPlus color="#FFF" size={14} />
            </ButtonSubmit>
        </Container>
    );
}

export default Main;
