var React = require ('react');

var createReactClass = require('create-react-class');
var WeatherMessage = createReactClass({
    render:function(){
        var {temp,location}=this.props;
        
        return(
            <div>
            <h3>My city is {location}</h3>
            
            <h3>Temperature is  {temp}</h3>
        </div>
        )
    }
});
module.exports = WeatherMessage