var React = require ('react');

var createReactClass = require('create-react-class');
var WelcomeMessage = createReactClass({
    render:function(){
        var city=this.props.city;
        var state=this.props.state;
        return(
            <div>
            <h3>My city is {city}</h3>
            
            <h3>My state is {state}</h3>
        </div>
        )
    }
});
module.exports = WelcomeMessage