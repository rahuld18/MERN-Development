var Welcome=React.createClass({

    getDefaultProps: function(){
        return{

            city: 'cochin'
        }
    },
    //step-1
    getInitialState:function(){
 
        return{
            city:this.props.city
    }
    },
    callme: function(e){
        e.preventDefault();
        var city=this.refs.city.value;

        //step-2
       this.setState({

        city:city
       })
    },
    render: function(){
        //step-3
        var mycity=this.state.city

return(

<div>

<h1>Welcome to {mycity}</h1>
<p>this is the amazing</p>

<div>
<form onSubmit={this.callme}>
<input type="text" ref="city"/>
    <button>click me</button>
    </form>

</div>


</div>
)

}

});
ReactDOM.render(
   
  <Welcome />,
  
    document.getElementById('app')
    
 );