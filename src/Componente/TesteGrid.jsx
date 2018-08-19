import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Container, Header, Segment, Card, Button, CardContent } from 'semantic-ui-react';


import Navegacao from './Navegacao';

const TesteGrid = props => {
    return (
        <div>
            <h1>Teste Grid</h1>

            <div class="ui five column divided grid">
                <div class="row">
                    <div class="column">
                        <p>COLUNA 01</p>
                    </div>
                    <div class="column">
                        <p>COLUNA 02</p>
                    </div>
                    <div class="column">
                        <p>COLUNA 03</p>
                    </div>
                    <div class="column">
                        <p>COLUNA 04</p>
                    </div>
                    <div class="column">
                        <p>COLUNA 05</p>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <p>LINHA 01 - COLUNA 01</p>
                    </div>
                    <div class="column">
                        <p>LINHA 01 - COLUNA 02</p>
                    </div>
                    <div class="column">
                        <p>LINHA 01 - COLUNA 03</p>
                    </div>
                    <div class="column">
                        <p>LINHA 01 - COLUNA 04</p>
                    </div>
                    <div class="column">
                        <p>LINHA 01 - COLUNA 05</p>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <p>LINHA 02 - COLUNA 01</p>
                    </div>
                    <div class="column">
                        <p>LINHA 02 - COLUNA 02</p>
                    </div>
                    <div class="column">
                        <p>LINHA 02 - COLUNA 03</p>
                    </div>
                    <div class="column">
                        <p>LINHA 02 - COLUNA 04</p>
                    </div>
                    <div class="column">
                        <p>LINHA 02 - COLUNA 05</p>
                    </div>
                </div>
            </div>

            <h1>Teste CARD</h1>
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
                        <div class="header">
                            Elliot Fu
                        </div>
                        <div class="meta">
                            Friends of Veronika
                        </div>
                        <div class="description">
                            Elliot requested permission to view your contact details
                        </div>
                    </div>

                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button">Approve</div>
                            <div class="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg" />
                        <div class="header">
                            Jenny Hess
                        </div>
                        <div class="meta">
                            New Member
                        </div>
                        <div class="description">
                            Jenny wants to add you to the group <b>best friends</b>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button">Approve</div>
                            <div class="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg" />
                        <div class="header">
                            Jenny Hess
                        </div>
                        <div class="meta">
                            New Member
                        </div>
                        <div class="description">
                            Jenny wants to add you to the group <b>best friends</b>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button">Approve</div>
                            <div class="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg" />
                        <div class="header">
                            Jenny Hess
                        </div>
                        <div class="meta">
                            New Member
                        </div>
                        <div class="description">
                            Jenny wants to add you to the group <b>best friends</b>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button">Approve</div>
                            <div class="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TesteGrid;