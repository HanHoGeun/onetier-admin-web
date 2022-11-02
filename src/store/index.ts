import { combineReducers} from 'redux';
import authStore from './module/authStore';

const rootReducer = combineReducers({
    authStore
});

export default rootReducer;

// store access need useSelector
export type RootState = ReturnType<typeof rootReducer>;
