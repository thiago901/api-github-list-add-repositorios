import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, ButtonSubmit,List } from './style';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { newRepo, repositories } = this.state;
        const response = await api.get(`/repos/${newRepo}`);
        const data = {
            name: response.data.full_name,
        };
        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        });
    };
    componentDidMount(){
        const repositories = localStorage.getItem('repositories');

        if(repositories){
            this.setState({repositories:JSON.parse(repositories)});
        }
    }

    componentDidUpdate(_,prevState){
        const { repositories } = this.state;

        if(repositories!==prevState.repositories){
            localStorage.setItem('repositories',JSON.stringify(repositories));
        }

    }

    render() {
        const { newRepo, loading,repositories } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithub />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar reposiório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <ButtonSubmit loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </ButtonSubmit>
                </Form>
                <List>
                    {repositories.map(repo=>(
                        <li key={repo.name}>
                            <span>{repo.name}</span>
                            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
                        </li>

                    ))

                    }
                </List>
            </Container>
        );
    }
}
