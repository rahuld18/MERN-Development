var React = require ('react');

var createReactClass = require('create-react-class');
var WelcomeForm = require('WelcomeForm');
var WelcomeMessage =require('WelcomeMessage');


var WelcomeMain=createReactClass({
    getDefaultProps:function(){
        return{
            city:'haridwar',
            state:'uttrakhand'
        }
    },
    getInitialState:function(){
        return{
            city:this.props.city,
            state:this.props.state
        }

    },
    changeState:function(updates){
        this.setState(updates)

    },
    render:function(){
        var city=this.state.city;
        var state=this.state.state;
        return(
            <div>
                <WelcomeMessage city={city} state={state}/>
                <WelcomeForm collectData={this.changeState}/>
            </div>


        )


    }

});
module.exports = WelcomeMain