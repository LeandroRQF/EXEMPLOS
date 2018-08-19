import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config from './..//firebase-config'
import TesteCardItem from './TesteCardItem';
import TesteCardItem2 from './TesteCardItem2';

class TesteCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portifolio: {

            }
        }

        config.syncState('portifolio', {
            context: this,
            state: 'portifolio',
            asArray: false
        })
    }

    render() {
        return (
            <div className='col-sm-2'>
                <div id='portifolio' className='container-fluid text-center bg-grey'>                    
                    
                    <div className='row text-center '>
                        {
                            Object.keys(this.state.portifolio)
                                .map(key => {
                                    return <TesteCardItem key={key} conteudo={this.state.portifolio[key]} />
                                })
                        }
                    </div><br />                    
                
                    <div className='row text-center '>
                        {
                            Object.keys(this.state.portifolio)
                                .map(key => {
                                    return <TesteCardItem2 key={key} conteudo={this.state.portifolio[key]} />
                                })
                        }
                    </div><br />
                </div>    
                
            </div >
        )
    }
}

export default TesteCard;
