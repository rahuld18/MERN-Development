var React = require ('react');

var createReactClass = require('create-react-class');
var WeatherForm = require('WeatherForm');
var WeatherMessage =require('WeatherMessage');
var Api=require('Api');


var WeatherMain=createReactClass({

    getInitialState: function(){
        return{

            isLoading:false
           // location: 'Srinagar',
            //temp: 10
        }
    },
    handleSearch: function(location){

        var that=this;
        this.setState({isLoading:true})

        Api.getTemp(location).then(function(temp){

            that.setState({
                location:location,
                temp:temp,
                isLoading:false

            })
        },function(errormessage){
            this.setState({isLoading:false})
alert('errormessage');
        })
        
    
    },



       render:function(){
        var {isLoading,temp,location}=this.state;
       
        function renderData(){
            if(isLoading){
                return <h3> Loading Data...</h3>
            }
            else if(temp && location){
                return  <WeatherMessage temp={temp} location={location} />
            
            }
        }
    
    
        return(
            <div>
            <h3>Weather Application</h3>

            <WeatherForm onSearch={this.handleSearch} />
           {renderData()}
            </div>


        )


    }

});
module.exports = WeatherMain;