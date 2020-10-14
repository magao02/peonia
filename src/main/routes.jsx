import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import catalogo from '../catalogo/catalogo'
import contatos from '../components/contatos/contatos'


export default props =>
    <Switch>
        <Route  exact path='/' component={catalogo} />
        <Route  exact path='/contatos' component={contatos} />
        <Route path='/insta' component={() => { 
     window.location.href = 'https://www.instagram.com/peonia_pratas/?hl=en'; 
     return null;
    }}/>
        <Route path='/whats' component={() => { 
     window.location.href = 'https://bit.ly/3lvp4wP'; 
     return null;
    }}/>

        <Redirect from='*' to="/" />
    </Switch>