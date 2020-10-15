import React from 'react'
import { Route, Switch, NavLink, Link, useRouteMatch } from 'react-router-dom'
export default function Category() {


  let match = useRouteMatch();
    return (
        <div>
            <ul>
                
                <li> <Link to={`${match.url}/foods`} >Foods</Link></li>
                <li><Link to={`${match.url}/drink`}>Drink</Link></li>
            </ul>

         
            <Switch>
               
                <Route path="/category/foods">
                List of foods : "Nasi goreng", dll
                </Route>
                <Route path="/category/drink">
                List of foods : "Teh Tarik", dll
                </Route>
            </Switch>
            
            </div> 
      
    )
}
