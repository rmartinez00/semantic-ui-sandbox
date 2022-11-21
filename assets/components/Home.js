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
                <p>Some Content Here ....</p>
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
                { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
                { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
                { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            ]} />
           </Container>
        )
    }
}
    
export default Home;