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
                        <div class="ui right labeled input">
                        <input type="text" placeholder="Medico referente"></input>
                        <div class="ui dropdown label">
                            <div class="text">Med Referente</div>
                            <i class="dropdown teal icon"></i>
                            <div class="menu">
                            <div class="item">Medico uno</div>
                            <div class="item">Medico dos</div>
                            <div class="item">Medico tres</div>
                            </div>
                        </div>
                        </div>
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
                        <p>
                        <form class="ui fluid form">
                            <div class="field">
                                <input type="text" placeholder="First name"></input>
                                <div class="ui pointing red label">
                                Please enter a value
                                </div>
                            </div>
                            <div class="ui divider"></div>
                            <div class="field" placeholder="Last Name">
                                <div class="ui pointing below primary basic label">
                                Please enter a value
                                </div>
                                <input type="text"></input>
                            </div>
                            <div class="ui divider"></div>
                            <div class="inline focus field">
                                <input type="text" placeholder="Username"></input>
                                <div class="ui left pointing blue label">
                                That name is taken!
                                </div>
                            </div>
                            <div class="ui divider"></div>
                            <div class="inline field">
                                <div class="ui right pointing green basic label">
                                Your password must be 6 characters or more
                                </div>
                                <input type="password"></input>
                            </div>
                            </form>
                        </p>
                        <p>
                        <div class="ui right labeled input">
                        <label for="amount" class="ui basic teal label">Nombre</label>
                        <input type="text" placeholder="Nombre paciente" id="amount"></input>
                        <div class="ui positive animated button label" tabindex="0">
                        <div class="visible content">Generar Reporte</div>
                        <div class="hidden content">
                        <i class="right arrow icon"></i>
                        </div>
                        </div>
                        </div>
                        </p>
                        <p>
                        <div class="ui left action input">
                            <button class="ui teal labeled icon button">
                                Nombre
                            </button>
                            <input type="text" value="Nombre paciente"></input>
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
                                EDAD
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                    NACIMIENTO
                                    <div class="sub header">Fabric Design
                                    </div>
                                    </div>
                                </h4>
                                </td>
                                <td>
                                FECHA
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <h4 class="ui image header">
                                    <div class="content">
                                    MEDICO
                                    <div class="sub header">Entertainment
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
                                    SELECCION
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
                { menuItem: 'Secciones', render: () => <Tab.Pane>
                    
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
                </Tab.Pane> },
                { menuItem: 'elementos', render: () => 
                 <Tab.Pane> 
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

                 </Tab.Pane> },
                { menuItem: 'Header', render: () => 
                <Tab.Pane> 
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
                 </Tab.Pane> },
                { menuItem: 'grid 2', render: () => 
                <Tab.Pane>
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
  

                        <div class="ui teal message">Teal</div>    

                        <table class="ui unstackable table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th class="right aligned">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>John</td>
                            <td>Approved</td>
                            <td class="right aligned">None</td>
                            </tr>
                            <tr>
                            <td>Jamie</td>
                            <td>Approved</td>
                            <td class="right aligned">Requires call</td>
                            </tr>
                            <tr>
                            <td>Jill</td>
                            <td>Denied</td>
                            <td class="right aligned">None</td>
                            </tr>
                        </tbody>
                        </table>

                        <table class="ui tablet stackable table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th class="right aligned">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>John</td>
                            <td>Approved</td>
                            <td class="right aligned">None</td>
                            </tr>
                            <tr>
                            <td>Jamie</td>
                            <td>Approved</td>
                            <td class="right aligned">Requires call</td>
                            </tr>
                            <tr>
                            <td>Jill</td>
                            <td>Denied</td>
                            <td class="right aligned">None</td>
                            </tr>
                        </tbody>
                        </table>

                        <table class="ui red table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        
                        <table class="ui orange table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui yellow table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui olive table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui green table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui teal table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui blue table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui violet table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui purple table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui pink table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui grey table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="ui black table">
                        <thead>
                            <tr><th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                        </tr></thead><tbody>
                            <tr>
                            <td>Apples</td>
                            <td>200</td>
                            <td>0g</td>
                            </tr>
                            <tr>
                            <td>Orange</td>
                            <td>310</td>
                            <td>0g</td>
                            </tr>
                        </tbody>
                        </table>
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

                </Tab.Pane> },
                { menuItem: 'grid 3', render: () => 
                <Tab.Pane>
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
                { menuItem: 'Accordeon', render: () => 
                <Tab.Pane> 

                    <div class="ui styled fluid accordion">
                    <div class="title active">
                        <i class="dropdown icon"></i>
                        What is a dog?
                    </div>
                    <div class="content active">
                        <p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                    </div>
                    <div class="title">
                        <i class="dropdown icon"></i>
                        What kinds of dogs are there?
                    </div>
                    <div class="content">
                        <p class="transition hidden">There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
                    </div>
                    <div class="title">
                        <i class="dropdown icon"></i>
                        How do you acquire a dog?
                    </div>
                    <div class="content">
                        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
                        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
                    </div>
                    </div>

                    <select class="ui fluid search dropdown" multiple="">
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        </select>

                        <div class="ui floating dropdown labeled icon button">
                        <i class="filter icon"></i>
                        <span class="text">Filter Posts</span>
                        <div class="menu">
                            <div class="ui icon search input">
                            <i class="search icon"></i>
                            <input type="text" placeholder="Search tags..."></input>
                            </div>
                            <div class="divider"></div>
                            <div class="header">
                            <i class="tags icon"></i>
                            Tag Label
                            </div>
                            <div class="scrolling menu">
                            <div class="item">
                                <div class="ui red empty circular label"></div>
                                Important
                            </div>
                            <div class="item">
                                <div class="ui blue empty circular label"></div>
                                Announcement
                            </div>
                            <div class="item">
                                <div class="ui black empty circular label"></div>
                                Cannot Fix
                            </div>
                            <div class="item">
                                <div class="ui purple empty circular label"></div>
                                News
                            </div>
                            <div class="item">
                                <div class="ui orange empty circular label"></div>
                                Enhancement
                            </div>
                            <div class="item">
                                <div class="ui empty circular label"></div>
                                Change Declined
                            </div>
                            <div class="item">
                                <div class="ui yellow empty circular label"></div>
                                Off Topic
                            </div>
                            <div class="item">
                                <div class="ui pink empty circular label"></div>
                                Interesting
                            </div>
                            <div class="item">
                                <div class="ui green empty circular label"></div>
                                Discussion
                            </div>
                            </div>
                        </div>
                        </div>



                        <h4 class="ui header">Inline</h4>
                        <p>A dropdown can be formatted to appear inline in other content</p>
                        <span>
                        Show me posts by
                        <div class="ui inline dropdown">
                            <div class="text">
                            <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"></img>
                            Jenny Hess
                            </div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"></img>
                                Jenny Hess
                            </div>
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/elliot.jpg"></img>
                                Elliot Fu
                            </div>
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"></img>
                                Stevie Feliciano
                            </div>
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/christian.jpg"></img>
                                Christian
                            </div>
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/matt.jpg"></img>
                                Matt
                            </div>
                            <div class="item">
                                <img class="ui avatar image" src="/images/avatar/small/justen.jpg"></img>
                                Justen Kitsune
                            </div>
                            </div>
                        </div>
                        </span>

                        <div class="ui floating labeled icon dropdown button">
                        <i class="add user icon"></i>
                        <span class="text">Add User</span>
                        <div class="menu">
                            <div class="header">
                            People You Might Know
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"></img>
                            Jenny Hess
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/elliot.jpg"></img>
                            Elliot Fu
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/stevie.jpg"></img>
                            Stevie Feliciano
                            </div>
                            <div class="header">
                            Your Friends' Friends
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/christian.jpg"></img>
                            Christian
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/matt.jpg"></img>
                            Matt
                            </div>
                            <div class="item">
                            <img class="ui avatar image" src="/images/avatar/small/justen.jpg"></img>
                            Justen Kitsune
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