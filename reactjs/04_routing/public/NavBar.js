var React = require ('react');
var {Link,IndexLink} = require('react-router');
var createReactClass = require('create-react-class');


var NavBar = createReactClass({

    render : function(){
        return(
        <div>
           
            <nav className="nav navbar-inverse">
            <div className="container-fluid">
            <ul className="nav navbar-nav">
                           <li> <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">  Weather  </IndexLink></li>
            <li> <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/Register">  Register  </Link></li>
            <li> <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/ContactUs">  ContactUs  </Link></li>
            <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/Login">  Login  </Link></li>
       </ul>

       <form className="form-inline" style={{margin: '10px'}}>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
        </div>
        </nav>
        </div>
        )
    }

});
module.exports=NavBar;
