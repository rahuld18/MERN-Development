var Welcome=React.createClass({
    
    render: function(){
        var mycity=this.props.city

return(

<div>

<h1>Welcome to {mycity}</h1>
<p>this is the amazing</p>

</div>
)

}

});
ReactDOM.render(
   
  <Welcome city="delhi"/>,
  
    document.getElementById('app')
    
 );