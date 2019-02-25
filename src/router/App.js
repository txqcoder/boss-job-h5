import React from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
/* react-router 是核心api  react-router-dom和react-router-rn 都继承自react-router。
*react-router-dom是用于浏览器， react-router-rn 是应用于react-nacive
*/

import configStore from '@/store'

import {Provider} from 'react-redux'
import Site from '@/pages/site'
import Login from '@/pages/login'
import Register from '@/pages/register'
import AuthRoute from '@/coms/authroute/authroute.js'

const store = configStore()
// exact 表示完全匹配
const App = ()=>(
  <Provider store ={store}>
    <Router>
      <Switch>
        <AuthRoute></AuthRoute>
        <Route path='/'  exact component={Site}></Route>
        <Route path='/login'  exact component={Login}></Route>
        <Route path='/register'  exact component={Register}></Route>
      </Switch>
    </Router>
  </Provider>
)
export default App
