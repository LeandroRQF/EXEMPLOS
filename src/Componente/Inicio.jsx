import React, { Component } from 'react';
import { Container, Header, Segment, Card, Button, CardContent } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import Navegacao from './Navegacao';

const Inicio = props => {
    return (
        <div>
            <Navegacao />

            <Container>
                <Segment>
                </Segment>

                <Header>
                </Header>

                <Card fluid>
                    <CardContent>
                    </CardContent>

                    <CardContent>
                        {/*
                        <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                        <Button color='twitter' onClick={() => this.autentica('twitter')}>Login com Twitter</Button>
                        <Button basic color='blue'>Usuário Administrativo</Button>
                        */}


                        <button
                            class='ui facebook button'
                            role='button'
                            onClick={() => this.autentica('facebook')}>
                            <i aria-hidden='true' class='facebook icon' />Facebook</button>

                        <button
                            class='ui twitter button'
                            role='button'
                            onClick={() => this.autentica('twitter')}>
                            <i aria-hidden='true' class='twitter icon' />Twitter</button>

                        <button
                            class='ui google plus button'
                            role='button'
                            onClick={() => this.autentica('google')}>
                            <i aria-hidden='true' class='google plus icon' />Google Plus</button>

                        <button
                            class='ui linkedin button'
                            role='button'
                            onClick={() => this.autentica('linkedin')}>
                            <i aria-hidden='true' class='linkedin icon' />LinkedIn</button>

                        <button
                            class='ui instagram button'
                            role='button'
                            onClick={() => this.autentica('instagram')}>
                            <i aria-hidden='true' class='instagram icon' />Instagram</button>

                        <button
                            class='ui youtube button'
                            role='button'
                            onClick={() => this.autentica('youtube')}>
                            <i aria-hidden='true' class='youtube icon' />YouTube</button>
                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default Inicio;