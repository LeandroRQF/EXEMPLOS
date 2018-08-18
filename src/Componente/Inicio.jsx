import React, { Component } from 'react';
import { Container, Header, Segment, Card, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import Navegacao from './Navegacao';

const Inicio = props => {
    return (        
        <div>
            <Navegacao />
            
        </div>
    )
}

export default Inicio;