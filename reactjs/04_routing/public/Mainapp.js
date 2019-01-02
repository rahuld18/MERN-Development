var React = require ('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');

var LandingPage = require('LandingPage')
var Login=require('Login');
var Register=require('Register');
var ContactUs=require('ContactUs');
var WeatherMain=require('WeatherMain');
ReactDOM.render(
    <Router history={hashHistory}>
    
    <Route path="/" component={LandingPage}>
    
    <Route path="Register" component={Register}/>

    <Route path="ContactUs" component={ContactUs}/>

    <Route path="Login" component={Login}/>
     <IndexRoute component={WeatherMain}/>    
    </Route>
    
    
    </Router>,
    document.getElementById('app')
)