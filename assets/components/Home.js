import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Semantic from './Semantic';
import { Grid, Button, Container, Header, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '../styles/app.css';

class Home extends Component {
    
    render() {
        return (
            <Container>
            
            <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>
                <p> contenido </p>
                </Grid.Column>
                <Grid.Column width={13}>
                <p>some content here</p>
                </Grid.Column>
            </Grid.Row>
        
            <Grid.Row>
                <Grid.Column width={3}>
                <p>Some Content Here ....</p>
                </Grid.Column>
                <Grid.Column width={10}>
                <p>some content here</p>
                </Grid.Column>
                <Grid.Column width={3}>
                <p>Some Content Here ....</p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            <Button>Semantic Button</Button>
            <br />
            <Tab panes={[
                { menuItem: 'Botones', render: () => 
                <Tab.Pane>
                    <p> 
                
                        <br />
                        boton verde
                        <br />
                        <div class="ui positive animated button" tabindex="0">
                        <div class="visible content">Generar Reporte</div>
                        <div class="hidden content">
                        <i class="right arrow icon"></i>
                        </div>
                        </div>
                        <br />
                        boton verde negativo
                        <br />
                        <div class="ui positive basic animated button" tabindex="0">
                        <div class="visible content">Generar Reporte</div>
                        <div class="hidden content">
                        <i class=" right arrow icon"></i>
                        </div>
                        </div>
                        <br />
                        <button class="ui toggle button active">Voted</button>
                        <br />

                        <div class="ui buttons">

                            <div class="ui primary animated button" tabindex="0">
                                <div class="visible content">Generar Reporte</div>
                                <div class="hidden content">
                                <i class="right arrow icon"></i>
                                </div>
                            </div>

                            <div class="or" data-text="o"></div>

                            <div class="ui positive animated button" tabindex="0">
                                <div class="visible content">Generar Reporte</div>
                                <div class="hidden content">
                                <i class="right arrow icon"></i>
                                </div>
                            </div>
                        </div>
                    </p>

                </Tab.Pane> },
                { menuItem: 'Interpretaciones', render: () => 
                <Tab.Pane>
                    <p>
                    <table class="ui celled table">
                        <thead>
                            <th>Header</th>
                            <th>Correct Guesses</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4 class="ui image header">
                                    <div class="content">
                                    SEXO
                                    <div class="sub header">Human Resources
                                    </div>
                                    </div>
                                    </h4>
                                </td>
                                <td>
                                MEDICO
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                    EDAD
                                    <div class="sub header">Fabric Design
                                    </div>
                                    </div>
                                </h4>
                                </td>
                                <td>
                                EMAIL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                    NACIMIENTO
                                    <div class="sub header">Entertainment
                                    </div>
                                    </div>
                                </h4>
                                </td>
                                <td>
                                SECCION
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                    FECHA
                                    <div class="sub header">Executive
                                    </div>
                                    </div>
                                </h4>
                                </td>
                                <td>
                                PROCEDIMIENTO
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                </Tab.Pane> },
                { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            ]} />

           </Container>
        )
    }
}
    
export default Home;