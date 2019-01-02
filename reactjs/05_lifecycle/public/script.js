var createReactClass = require('create-react-class');


writeToScreen('Initial','primary');

var Welcome=createReactClass({

    getInitialState: function(){
        writeToScreen('GetInitialState','info');
        return{show: 1}
    },
    getDefaultProps: function(){
        writeToScreen('GetDefaultProps','info');
    return{hello:2}
    },
    update: function(){
        writeToScreen('updating state','primary');
        this.setState({show:2})
    },
    render: function(){
        <div>
            This,state.show:{this.state.show}<br/>
            This.state.hello:{this.props.hello}
            <br/>
            <hr/>

            <button className="btn btn-success" onClick={this.update}>Update the state</button>

        </div>
    }
})

function writeToScreen(msg,level){
    var elem=document.getElementById('screen');

    elem.innerHTML+='<div class="log bg-' + level + '">' +'<span class="glyphicon-ok"></span> &nbsp;&nbsp;'+msg+'</div>';
}