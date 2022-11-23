import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Semantic from './Semantic';
import { Grid, Button, Container, Header, Tab, Form, GridColumn } from 'semantic-ui-react';
import { Image, Label, List, Segment, Icon, TextArea } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

import 'semantic-ui-css/semantic.min.css';
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
        
            <Grid.Row >
                <Grid.Column width={3}>
                <p>Some Content Here ....</p>
                </Grid.Column>
                <Grid.Column width={10}>
               sdadasfasfas
                </Grid.Column>
                <Grid.Column width={3}>
                <p>Some Content Here ....</p>
                </Grid.Column>
            </Grid.Row>
            </Grid>

            <br />
        <Tab panes={[
                { menuItem: 'Interpretaciones', render: () => 
        <Tab.Pane>

        Botones principales de cambio de vista y regreso a lista de estudios 
            <br />
             <p> <div class="ui buttons">
                <div class="ui pink animated button" tabindex="0">
                    <div class="visible content">Estilo de Vista</div>
                    <div class="hidden content">
                    <i class="computer icon"></i>
                    </div>
                </div>
                <div class="ui teal animated button" tabindex="0">
                    <div class="visible content">Lista de estudios</div>
                    <div class="hidden content">
                    <i class="right arrow icon"></i>
                    <i class="list icon"></i>
                    </div>
                </div>
                </div></p>
        Seccion nombre de paciente en Interpretaciones<br />
                <p>
                    <div class="ui fluid green basic action input">
                            <input type="text" placeholder="Nombre de Paciente"></input>
                            
                                <div class="ui green animated button" tabindex="0">
                                    <div class="visible content">Generar Reporte</div>
                                    <div class="hidden content">
                                    <i class="right arrow icon"></i>
                                    <i class="file pdf icon"></i>
                                    </div>
                                </div>   
                    </div>
                </p>
                <table  class="ui blue table">
                    <thead> <h4>Datos Demograficos </h4></thead>
                    <tbody>
                        <td>
                 <Grid doubling stackable columns={4}>
                    <Grid.Column>
                    <div class="ui labeled input ">
                                <div class="ui black basic label">
                                    Sexo
                                </div>
                                <select class="ui blue basic button search dropdown" multiple="">
                                    <option value="">Sexo</option>
                                    <option value="AL">Masculino</option>
                                    <option value="AK">Femenino</option>
                                    <option value="WV">Otro</option>
                                    </select>
                            </div>
                    </Grid.Column>
                    <Grid.Column>
                            <div class="ui labeled input ">
                                    <div class="ui black basic label">
                                        Edad
                                    </div>
                                    <input type="text" placeholder="Edad"></input>
                                    <select class="ui blue basic button search dropdown" multiple="">
                                        <option value="">Años</option>
                                        <option value="AL">Meses</option>
                                        <option value="AK">Dias</option>
                                        </select>
                                </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div class="ui labeled input">
                                <div class="ui black basic label">
                                    Nacimiento
                                </div>
                                <input type="text" placeholder="fecha nacimiento"></input>
                                </div>
                    </Grid.Column>
                    <Grid.Column>
                                <div class="ui labeled input">
                                    <div class="ui black basic label">
                                        Fecha estudio
                                    </div>
                                    <input type="text" placeholder="fecha estudio"></input>
                                    </div>
                    </Grid.Column>
                    <Grid.Column>
                                <div class="ui labeled input ">
                                    <div class="ui black basic label">
                                        Referente
                                    </div>
                                    <input type="text" placeholder="Medico"></input>
                                    <select class="ui blue basic button search dropdown" multiple="">
                                        <option value="">Medico1</option>
                                        <option value="AL">Medico2</option>
                                        <option value="AK">Medico3</option>
                                        </select>
                                </div>
                    </Grid.Column>
                    <Grid.Column>
                            <div class="ui labeled input">
                                <div class="ui black basic label">
                                    Email
                                </div>
                                <input type="text" placeholder="correo electronico"></input>
                                </div>
                    </Grid.Column>
                    <Grid.Column>
                            <div class="ui labeled input">
                                <div class="ui black basic label">
                                    Procedimiento
                                </div>
                                <input type="text" placeholder="Procedimiento"></input>
                                </div>
                    </Grid.Column>
                </Grid>
                </td>
            </tbody></table>
        
            <Segment padded>
                <Label attached=' top left'>Observaciones</Label>
               
                <div class="ui segment">
                    <h2 class="ui  floated header">Interpretacion I</h2>
                     <p>

                    <h4 class="ui horizontal header">
                    <i class="file text icon"></i>
                    Plantillas
                    </h4>
                    <div class="ui labeled input ">
                        <select class="ui search dropdown" multiple="">
                        <option value="">Selecciona plantilla</option>
                         <option value="AL">Medico2</option>
                        <option value="AK">Medico3</option>
                        </select>
                        <div class="ui blue basic animated button" tabindex="0">
                            <div class="visible content">Guardar Como...</div>
                            <div class="hidden content">
                            <i class="save icon"></i>
                             </div>
                        </div>   
                    </div>
                    
                  <h4 class="ui horizontal divider header">
                    <i class="edit icon"></i>
                    Reporte
                    </h4>
                    <Form>
                        <TextArea placeholder='Reporte de interpretacion' />
                    </Form>
                    </p>
                </div>
                <div class="ui red animated button" tabindex="0">
                            <div class="visible content">Eliminar Reporte</div>
                            <div class="hidden content">
                            <i class="minus icon"></i><i class="edit icon"></i>
                             </div>
                        </div>  
                <div class="ui segment">
                    <h2 class="ui  floated header">Interpretacion II</h2>
                     <p>

                    <h4 class="ui horizontal header">
                    <i class="file text icon"></i>
                    Plantillas
                    </h4>
                    <div class="ui labeled input ">
                        <select class="ui search dropdown" multiple="">
                        <option value="">Selecciona plantilla</option>
                         <option value="AL">Medico2</option>
                        <option value="AK">Medico3</option>
                        </select>
                        <div class="ui blue basic animated button" tabindex="0">
                            <div class="visible content">Guardar Como...</div>
                            <div class="hidden content">
                            <i class="save icon"></i>
                             </div>
                        </div>   
                    </div>
                    
                  <h4 class="ui horizontal divider header">
                    <i class="edit icon"></i>
                    Reporte
                    </h4>
                    <Form>
                        <TextArea placeholder='Reporte de interpretacion' />
                    </Form>
                    </p>
                </div>
                    <Button.Group>
                    <div class="ui red animated button" tabindex="0">
                            <div class="visible content">Eliminar Reporte</div>
                            <div class="hidden content">
                            <i class="minus icon"></i><i class="edit icon"></i>
                             </div>
                        </div>   
                        <Button.Or text='ó'/>
                        <div class="ui blue animated button" tabindex="0">
                                    <div class="visible content">Agregar Reporte</div>
                                    <div class="hidden content">
                                    <i class="plus icon"></i>
                                    <i class="edit icon"></i>
                                    </div>
                         </div>   
                         <Button.Or text='ó'/>
                        <div class="ui green animated button" tabindex="0">
                                    <div class="visible content">Generar Reporte</div>
                                    <div class="hidden content">
                                    <i class="right arrow icon"></i>
                                    <i class="file pdf icon"></i>
                                    </div>
                         </div>   
                    </Button.Group>
                    
            </Segment>
            </Tab.Pane> },
                { menuItem: 'Estadisticas', render: () => 
            <Tab.Pane> 
                 <div class="ui breadcrumb">
                        <a class="active section">General</a>
                        <div class="divider"> / </div>
                        <a class="section">Modalidades</a>
                        <div class="divider"> / </div>
                        <div class="section">Interpretaciones</div>
                    </div>
                    <p>
-------------- ENCABEZADO DE ESTADISTICAS DE SAN CHARBEL CON BOTON IMPRIMIR --------------- <br />
-------------- "RELACION DE ESTUDIOS E INTERPRETACIONES DURANTE /30DIAS/3MESES/1AÑO/TOTAL" --------------- <br />
                   </p>

                   
                    <div class="ui segment">
                    <Label attached=' top right'>
                        <div class="ui mini buttons">
                            <button class="ui labeled icon button">
                                <i class="left chevron icon"></i>
                                30 días
                            </button>
                            <button class="ui button">
                                <i class="stop icon"></i>
                                3 meses
                            </button>
                            <button class="ui button">
                                <i class="stop icon"></i>
                                1 año
                            </button>
                            <button class="ui right labeled icon button">
                                MAX
                                <i class="right chevron icon"></i>
                            </button>
                        </div></Label>
                      <left>
                        <h2 class="ui icon header">
                        <i class="<i chart line icon"></i>
                        <div class="content">
                            line chart 
                            <div class="sub header">
                            total de estudios
                                
                                <select class="ui search mini dropdown" multiple="">
                        <option value="">General</option>
                         <option value="AL">Ultrasonido</option>
                        <option value="AK">Tomografia</option>
                        <option value="AK">Rayos x</option>
                        </select></div>
                        </div>
                        </h2>  
                        </left>
                        

                        <right>
                        <h2 class="ui icon header">
                        <i class="chart pie icon"></i>
                        <div class="content">
                            doughnut chart  
                            <div class="sub header">
                            distribucion de modalidades
                                </div>
                        </div>
                        </h2>  
                        </right>
                        <table class="ui blue table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tomografía</th>
                                <th>Resonancia Magnética</th>
                                <th>Rayos X</th>
                                <th>Mastografía</th>
                                <th>Ultrasonido</th>
                                <th>Total</th>
                            </tr>
                        </thead><tbody>
                            <tr>
                            <td>Estudios</td>
                            <td>150</td>
                            <td>120</td>
                            <td>30</td>
                            <td>80</td>
                            <td>100</td>
                            <td>480</td>
                            </tr>
                            <tr>
                            <td>Interpretaciones Med Rad1</td>
                            <td>150</td>
                            <td>120</td>
                            <td>30</td>
                            <td>80</td>
                            <td>100</td>
                            <td>480</td>
                            </tr>
                            <tr>
                            <td>Interpretaciones Med Rad2</td>
                            <td>150</td>
                            <td>120</td>
                            <td>30</td>
                            <td>80</td>
                            <td>100</td>
                            <td>480</td>
                            </tr>
                            <tr>
                            <td>Med referente dr uno</td>
                            <td>150</td>
                            <td>120</td>
                            <td>30</td>
                            <td>80</td>
                            <td>100</td>
                            <td>480</td>
                            </tr>
                            <tr>
                            <td>Med referente dr 2</td>
                            <td>150</td>
                            <td>120</td>
                            <td>30</td>
                            <td>80</td>
                            <td>100</td>
                            <td>480</td>
                            </tr>

                        </tbody>
                        </table>
                    </div>

                </Tab.Pane> },
                { menuItem: 'Botones', render: () => 
                <Tab.Pane>
                    <p> 
                        <div class="ui buttons">
                            <button class="ui labeled icon button">
                                <i class="left chevron icon"></i>
                                Back
                            </button>
                            <button class="ui button">
                                <i class="stop icon"></i>
                                Stop
                            </button>
                            <button class="ui right labeled icon button">
                                Forward
                                <i class="right chevron icon"></i>
                            </button>
                        </div>
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
                    <p>
                    <div class="ui input focus">
                        <input type="text" placeholder="Search..."></input>
                    </div>
                    <div class="ui input error">
                    <input type="text" placeholder="Search..."></input>
                    </div>
                    <br />
                    <div class="ui labeled input focus">
                    <div class="ui basic label">
                        Nombre
                    </div>
                    <input type="text" placeholder="Nombre del paciente"></input>
                    </div>
                    <br />
                                            Determining Maximum Widths

                        Containers appear at the same width at each device size. This size is calculated programmatically by determining the maximum device width available within a device breakpoint, given a desired minimum gutter size.

                        For example to determine tablet container size the following formula is used:

                        /* In site.variables */
                        @tabletBreakpoint : 768px;
                        @scrollbarWidth : 17px; /* This is a constant */
                        /* In container.variables */
                        @tabletMinimumGutter : (@emSize  * 1); /* require 1em gutter */
                        @tabletWidth : @tabletBreakpoint - (@tabletMinimumGutter * 2) - @scrollbarWidth;

                        This is the same as 768px - (14px * 2) - 17px or 723px

                        Adjusting site breakpoints in site.variables to use custom values will automatically adjust container widths.
                                           
                        </p>
                        <p>
                        <div class="ui fluid icon focus input">
                        <input type="text" placeholder="Search a very wide input..."></input>
                        <i class="search icon"></i>
                        </div>
                        <div class="ui fluid error action input">
                        <input type="text" placeholder="Search..."></input>
                        <div class="ui button">Search</div>
                        </div>
                        </p>
   
                    <div class="ui segment">
                    <h2 class="ui right floated header">Floated Content</h2>
                    <div class="ui clearing divider"></div>
                    <p>

                    <h4 class="ui horizontal divider header">
                    <i class="tag icon"></i>
                    Description
                    </h4>
                    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
                    <h4 class="ui horizontal divider header">
                    <i class="bar chart icon"></i>
                    Specifications
                    </h4>
                    <table class="ui definition table">
                    <tbody>
                        <tr>
                        <td class="two wide column">Size</td>
                        <td>1" x 2"</td>
                        </tr>
                        <tr>
                        <td>Weight</td>
                        <td>6 ounces</td>
                        </tr>
                        <tr>
                        <td>Color</td>
                        <td>Yellowish</td>
                        </tr>
                        <tr>
                        <td>Odor</td>
                        <td>Not Much Usually</td>
                        </tr>
                    </tbody>
                    </table>
                    </p>
                    </div>
                    <Segment padded>
                    <Label attached='top left'>View</Label>
                     <Image src='/images/wireframe/paragraph.png' />
                     </Segment>
                    <div class="ui two column grid">
                        <div class="column">
                            <div class="ui raised segment">
                            <a class="ui red ribbon label">Overview</a>
                            <span>Account Details</span>
                            <p></p>
                            <a class="ui blue ribbon label">Community</a> User Reviews
                            <p></p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui segment">
                            <a class="ui orange right ribbon label">Specs</a>
                            <p></p>
                            <a class="ui teal right ribbon label">Reviews</a>
                            <p></p>
                            </div>
                        </div>
                        </div>

                        <div class="ui top attached label">HTML</div>
                        <div class="ui bottom attached label">CSS</div>
                        <div class="ui top right attached label">Code</div>
                        <div class="ui top left attached label">View</div>
                        <div class="ui bottom left attached label">User View</div>
                        <div class="ui bottom right attached label">Admin View</div>

                        <div class="ui divided selection list">
                        <a class="item">
                            <div class="ui red horizontal label">Fruit</div>
                            Kumquats
                        </a>
                        <a class="item">
                            <div class="ui purple horizontal label">Candy</div>
                            Ice Cream
                        </a>
                        <a class="item">
                            <div class="ui red horizontal label">Fruit</div>
                            Orange
                        </a>
                        <a class="item">
                            <div class="ui horizontal label">Dog</div>
                            Poodle
                        </a>
                        </div>

                        <div class="ui compact menu">
                        <a class="item">
                            <i class="icon mail"></i> Messages
                            <div class="floating ui red label">22</div>
                        </a>
                        <a class="item">
                            <i class="icon users"></i> Friends
                            <div class="floating ui teal label">22</div>
                        </a>
                        </div>

                        <div class="ui three doubling stackable cards">
                        <div class="ui card">
                            <div class="image">
                            <div class="ui placeholder">
                                <div class="square image"></div>
                            </div>
                            </div>
                            <div class="content">
                            <div class="ui placeholder">
                                <div class="header">
                                <div class="very short line"></div>
                                <div class="medium line"></div>
                                </div>
                                <div class="paragraph">
                                <div class="short line"></div>
                                </div>
                            </div>
                            </div>
                            <div class="extra content">
                            <div class="ui disabled primary button">Add</div>
                            <div class="ui disabled button">Delete</div>
                            </div>
                        </div>
                        </div>

                        <div class="ui three column stackable grid">
                        <div class="column">
                            <div class="ui raised segment">
                            <div class="ui placeholder">
                                <div class="image header">
                                <div class="line"></div>
                                <div class="line"></div>
                                </div>
                                <div class="paragraph">
                                <div class="medium line"></div>
                                <div class="short line"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui raised segment">
                            <div class="ui placeholder">
                                <div class="image header">
                                <div class="line"></div>
                                <div class="line"></div>
                                </div>
                                <div class="paragraph">
                                <div class="medium line"></div>
                                <div class="short line"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui raised segment">
                            <div class="ui placeholder">
                                <div class="image header">
                                <div class="line"></div>
                                <div class="line"></div>
                                </div>
                                <div class="paragraph">
                                <div class="medium line"></div>
                                <div class="short line"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="ui icon button" data-content="The default theme's basic popup removes the pointing arrow." data-variation="basic">
                        <i class="add icon"></i>
                        </div>
           
                    <p>elementos invisibles reveal</p>
                    <div class="ui move right reveal">
                    <div class="visible content">
                        <img src="/images/wireframe/square-image.png" class="ui small image"></img>
                    </div>
                    <div class="hidden content">
                        <img src="/images/avatar/large/jenny.jpg" class="ui small image"></img>
                    </div>
                    </div>
                    <p> segmentos</p>
                    <div class="ui clearing focus segment">
                    <div class="ui right floated button">Floated</div>
                    </div>
                    <div class="ui red segment">Red</div>
                    <div class="ui orange segment">Orange</div>
                    <div class="ui yellow segment">Yellow</div>

                    <div class="ui mini unstackable three steps">
                    <div class="step">
                        <i class="truck icon"></i>
                        <div class="content">
                        <div class="title">Shipping</div>
                        <div class="description">Choose your shipping options</div>
                        </div>
                    </div>
                    <div class="active step">
                        <i class="payment icon"></i>
                        <div class="content">
                        <div class="title">Billing</div>
                        <div class="description">Enter billing information</div>
                        </div>
                    </div>
                    <div class="disabled step">
                        <i class="info icon"></i>
                        <div class="content">
                        <div class="title">Confirm Order</div>
                        <div class="description">Verify order details</div>
                        </div>
                    </div>
                    </div>
                <div class="ui form">
                <div class="three fields">
                    <div class="field">
                    <label>First name</label>
                    <input type="text" placeholder="First Name"></input>
                    </div>
                    <div class="field">
                    <label>Middle name</label>
                    <input type="text" placeholder="Middle Name"></input>
                    </div>
                    <div class="field">
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name"></input>
                    </div>
                </div>
                </div>

                <div class="ui form success">
                    <div class="field">
                        <label>E-mail</label>
                        <input type="email" placeholder="joe@schmoe.com"></input>
                    </div>
                    <div class="ui success message">
                        <div class="header">Form Completed</div>
                        <p>You're all signed up for the newsletter.</p>
                    </div>
                    <div class="ui submit button">Submit</div>
                    </div>

                    <div class="ui form">
                    <div class="two fields">
                        <div class="field error">
                        <label>First Name</label>
                        <input placeholder="First Name" type="text"></input>
                        </div>
                        <div class="field">
                        <label>Last Name</label>
                        <input placeholder="Last Name" type="text"></input>
                        </div>
                    </div>
                    <div class="field error">
                        <label>Gender</label>
                        <div class="ui selection dropdown">
                        <div class="default text">Select</div>
                        <i class="dropdown icon"></i>
                        <input type="hidden" name="gender"></input>
                        <div class="menu">
                            <div class="item" data-value="male">Male</div>
                            <div class="item" data-value="female">Female</div>
                        </div>
                        </div>
                    </div>
                    <div class="inline field error">
                        <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden"></input>
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    </div>

                    <div class="ui form">
                    <div class="ui message">
                        <div class="header">We had some issues</div>
                        <ul class="list">
                        <li>Please enter your first name</li>
                        <li>Please enter your last name</li>
                        </ul>
                    </div>
                    </div>
                    <div class="ui grid">
                        <div class="doubling eight column row">
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                        </div>
                        <div class="doubling six column row">
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                        </div>
                        <div class="doubling four column row">
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                            <div class="column"></div>
                        </div>
                    </div>
    
                    <div class="ui menu">
                        <a class="browse item active">
                            Browse
                            <i class="dropdown icon"></i>
                        </a>
                    </div>
                        <div class="ui fluid popup bottom left transition hidden">
                        <div class="ui four column relaxed equal height divided grid">
                            <div class="column">
                            <h4 class="ui header">Fabrics</h4>
                            <div class="ui link list">
                                <a class="item">Cashmere</a>
                                <a class="item">Linen</a>
                                <a class="item">Cotton</a>
                                <a class="item">Viscose</a>
                            </div>
                            </div>
                            <div class="column">
                            <h4 class="ui header">Size</h4>
                            <div class="ui link list">
                                <a class="item">Small</a>
                                <a class="item">Medium</a>
                                <a class="item">Large</a>
                                <a class="item">Plus Sizes</a>
                            </div>
                            </div>
                            <div class="column">
                            <h4 class="ui header">Colored</h4>
                            <div class="ui link list">
                                <a class="item">Neutrals</a>
                                <a class="item">Brights</a>
                                <a class="item">Pastels</a>
                            </div>
                            </div>
                            <div class="column">
                            <h4 class="ui header">Types</h4>
                            <div class="ui link list">
                                <a class="item">Knitwear</a>
                                <a class="item">Outerwear</a>
                                <a class="item">Pants</a>
                                <a class="item">Shoes</a>
                            </div>
                            </div>
                        </div>
                        </div>
                <table class="ui sortable celled table">
                    <thead>
                        <tr>
                        <th class="">Name</th>
                        <th class="sorted descending">Status</th>
                        <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>No Action</td>
                        <td>None</td>
                        </tr><tr>
                        <td>Jill</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                        </tr><tr>
                        <td>Jamie</td>
                        <td class="positive">Approved</td>
                        <td class="warning">Requires call</td>
                        </tr>
                        </tbody>
                    <tfoot>
                        <tr><th>3 People</th>
                        <th>2 Approved</th>
                        <th></th>
                    </tr></tfoot>
                    </table>
                    
                <table class="ui compact celled definition table">
                    <thead class="full-width">
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Registration Date</th>
                        <th>E-mail address</th>
                        <th>Premium Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="collapsing">
                                <div class="ui fitted slider checkbox">
                                 <label>text</label>
                                </div>
                            </td>
                        <td>John Lilki</td>
                        <td>September 14, 2013</td>
                        <td>jhlilk22@yahoo.com</td>
                        <td>No</td>
                        </tr>

                    </tbody>
                    <tfoot class="full-width">
                        <tr>
                        <th></th>
                        <th colspan="4">
                            <div class="ui right floated small primary labeled icon button">
                            <i class="user icon"></i> Add User
                            </div>
                            <div class="ui small  button">
                            Approve
                            </div>
                            <div class="ui small  disabled button">
                            Approve All
                            </div>
                        </th>
                        </tr>
                    </tfoot>
                </table>   
                    <div class="ui four cards">
                    <a class="red card">
                        <div class="image">
                        <img></img>
                        </div>
                    </a>
                    <a class="orange card">
                        <div class="image">
                        <img></img>
                        </div>
                    </a>
                    <a class="yellow card">
                        <div class="image">
                        <img></img>
                        </div>
                    </a>
                    <a class="olive card">
                        <div class="image">
                        <img></img>
                        </div>
                    </a>
                    </div>

                    pruebas de divisiones

                    <div class="ui divided items">
                    <div class="item">
                        <div class="image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="content">
                        <a class="header">12 Years a Slave</a>
                        <div class="meta">
                            <span class="cinema">Union Square 14</span>
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui label">IMAX</div>
                            <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="content">
                        <a class="header">My Neighbor Totoro</a>
                        <div class="meta">
                            <span class="cinema">IFC Cinema</span>
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui right floated primary button">
                            Buy tickets
                            <i class="right chevron icon"></i>
                            </div>
                            <div class="ui label">Limited</div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="content">
                        <a class="header">Watchmen</a>
                        <div class="meta">
                            <span class="cinema">IFC</span>
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui right floated primary button">
                            Buy tickets
                            <i class="right chevron icon"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    Otra  
                    <div class="ui items">
                    <div class="item">
                        <div class="ui small image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="middle aligned content">
                        <div class="header">
                            Content A
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui right floated button">
                            Action
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ui small image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="middle aligned content">
                        <div class="header">
                            Content B
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui right floated button">
                            Action
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ui small image">
                        <img src="/images/wireframe/image.png"></img>
                        </div>
                        <div class="middle aligned content">
                        <div class="header">
                            Content C
                        </div>
                        <div class="description">
                            <p></p>
                        </div>
                        <div class="extra">
                            <div class="ui right floated button">
                            Action
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    </Tab.Pane> },
            ]} />

           </Container>
        )
    }
}
    
export default Home;