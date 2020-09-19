
const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const action = {
    type : BUY_CAKE,
    info : "First redux action"
}

const initialState = {
    numofCakes : 10,
    numofIcecream : 20
}

//Action creators returning action
function buyCake () {
    return action;
}

function buyIcecream(){
    return(
        {
            type : BUY_ICECREAM,
            info : "First Ice cream action"
        }
    );
}


//Reducer
const cakereducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,
            numofCakes : state.numofCakes - 1
        }
        
        case BUY_ICECREAM:
            return{
                ...state,
                numofIcecream : state.numofIcecream - 1
            }
        

        default :
            return state;
    }
}

const store = createStore(reducer);

console.log("Initial state",store.getState());

const storesubscribe= store.subscribe(() => console.log("Updated state",store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

storesubscribe()

