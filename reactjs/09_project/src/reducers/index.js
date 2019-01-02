
import {combineReducers} from 'redux'
import {BookReducers} from './reducer_books'

const rootReducer =combineReducers({
    books:BookReducers
});
export default rootReducer