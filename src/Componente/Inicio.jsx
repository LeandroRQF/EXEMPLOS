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
                        <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                        <Button color='twitter' onClick={() => this.autentica('twitter')}>Login com Twitter</Button>
                        <Button basic color='blue'>Usuário Administrativo</Button>
                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default Inicio;