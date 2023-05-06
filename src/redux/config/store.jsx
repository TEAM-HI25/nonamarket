import { createStore } from 'redux';
import rootReducer from '../module/rootReducer';

export const store = createStore(rootReducer);

export default store;
