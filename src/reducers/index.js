import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignReducer from './SignReducer';
import BookReducer from './BookReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    auth: AuthReducer,
    sign: SignReducer,
    book: BookReducer,
    selectedLibraryId: SelectionReducer
});
