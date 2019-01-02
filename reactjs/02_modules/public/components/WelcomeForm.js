var React = require ('react');

var createReactClass = require('create-react-class');


var WelcomeForm = createReactClass({
    onFormSubmit:function(e){
    e.preventDefault();
    var updates={};
    var city=this.refs.city.value;
    var state=this.refs.state.value;
    if(city.length>0){


        this.refs.city.value='';
        updates.city=city;
    
    }

    if(state.length>0){
        this.refs.state.value='';
        updates.state=state;
    }

    this.props.collectData(updates)
    
    },


    render:function(){
        
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    enter your city:<input type='text' ref='city' placeholder='enter city'/>
                    </div>
                <div>
                    enter your state:<input type='text' ref='state' placeholder='enter state'/>
                </div>
                <button>submit</button>
            </form>
        )
    }
});
module.exports = WelcomeForm