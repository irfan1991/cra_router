import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function GuardRoute({children, isLogin, ...rest}) {

 
    return (
        <Route {... rest}>
            {isLogin ? children : <Redirect to="/login" />}
        </Route>
    )
}
