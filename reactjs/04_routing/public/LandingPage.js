var React = require ('react');
var NavBar=require('NavBar');
var createReactClass = require('create-react-class');


var LandingPage = createReactClass({

    render : function(){
        return(
            <div>
                <NavBar/>
            <h2>Welcome to LandingPage </h2>

            {this.props.children}
        </div>
        )
    }

});
module.exports=LandingPage;
