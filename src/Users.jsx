import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import User from './User'

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${match.url}/:userId`}>
          <User />
        </Route>
        <Route>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  )
}
export default Users
