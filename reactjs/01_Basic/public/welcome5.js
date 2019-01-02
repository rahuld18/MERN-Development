var Welcome=React.createClass({

    getDefaultProps: function(){
        return{

            city: 'cochin'
        }
    },
    callme: function(e){
        e.preventDefault();
        var user=this.refs.myname.value;

        alert("The Alert is called by "+user);
    },
    render: function(){
        var mycity=this.props.city

return(

<div>

<h1>Welcome to {mycity}</h1>
<p>this is the amazing</p>

<div>
<form onSubmit={this.callme}>
<input type="text" ref="myname"/>
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