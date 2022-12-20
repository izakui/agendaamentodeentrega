import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import UserCadastro from '../components/user/UserCadastro'
import Popup from '../components/user/popup'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/user' component={UserCadastro} />
        <Route path='/popup' component={Popup} />
        <Redirect from='*' to='/' />
    </Switch>