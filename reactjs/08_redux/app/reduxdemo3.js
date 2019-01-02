var redux=require('redux');

var reducer=(state={name: 'unknown'},action)=>{

    switch(action.type){
        case 'CHANGE_NAME':
        return{
            name:action.name
        };
    
    default:
    return state;
}
};


var store=redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))




var store=redux.createStore(reducer);
store.subscribe(()=>{
    var state=store.getState();
    console.log(' state is', state.name);

})

var currentState=store.getState();

//console.log(' state is',currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'ALAN'
})
//console.log(' Name should be alone',store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'hariom'
})
//console.log(' Name should be alone',store.getState());