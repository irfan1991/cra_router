import React ,{useState} from 'react';
import './App.css';
import { Route, Switch, NavLink, Prompt} from 'react-router-dom'
// import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Post from './pages/Post'
import Member from "./pages/Member";
import Login from "./pages/Login";
import GuardRoute from "./components/GuardRoute";

function App() {

  const Home = React.lazy(() => import('./pages/Home'))
  const [isLogin, setLogin] = useState(false)
  const routes = [
    {path : '/about' , Component : About},
    {path : '/' , Component : Home, props : {exact : true}},
    {path : '/member' , Component : Member, props : {auth: true, isLogin : isLogin}},
    {path : '/login' , Component : Login, childrenProps : {setLogin}},
    {path : '/category' , Component : Category},
    {path : '/post/:id' , Component : Post},
]

  return (
    <React.Suspense fallback={<div>LOading ...</div>} >
    <div className="App">
      <ul className="menu">
        <li> <NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li> <NavLink to="/category" activeClassName="active">Category</NavLink></li>
        <li><NavLink activeClassName="active" to="/member">Member</NavLink></li>
        <li>
          { isLogin ? <NavLink to="/logout" 
          onClick={ (e) => {
            e.preventDefault()
            setLogin(false)
          }}
          >Logout</NavLink>
           : 
           <NavLink activeClassName="active" to="/login">Login</NavLink> }
        </li>
          
      </ul>
     
      <div className="main">
      <Switch>
        {/* <Route path="/about">
          <About />
          <Prompt message="Are you sure you want to leave ? " />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <GuardRoute path="/member" isLogin={isLogin} >
          <Member />
      </GuardRoute>
      <Route path="/login">
          <Login setLogin={setLogin} />
        </Route> */}

        {routes.map((route,i) => {

          const {path, Component, props, childrenProps} = route

          return (props && props.auth) ? 
          <GuardRoute key={i} path={path} {...props}>
              <Component {...childrenProps} />
          </GuardRoute>
          :
          <Route key={i} path={path} {...props}>
          <Component {...childrenProps} />
          </Route>
        })}
      </Switch>
     
      </div> 
      
    </div>
    </ React.Suspense>
  );
}

export default App;
