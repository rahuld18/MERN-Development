var React = require ('react');

var createReactClass = require('create-react-class');


var WeatherForm = createReactClass({

  
   
    onFormSubmit: function(e){
        e.preventDefault();
        var location=this.refs.city.value;

        if(location.length > 0)
        {
            this.refs.city.value='';
            this.props.onSearch(location);
        }
    },
    


    render:function(){


var styles={
    backgroundColor:'rgb(100)'
}


       
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                
                    Enter your city: <input type='text' ref='city' placeholder='enter city'/>
              <div style={styles}>
                <button >Check Weather</button>
                </div>
            </form>
             </div>
        )
    }
});
module.exports = WeatherForm