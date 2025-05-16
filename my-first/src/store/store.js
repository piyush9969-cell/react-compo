import { configureStore } from '@reduxjs/toolkit';

import { studentReducer } from './reducer/reducer';

const store = configureStore({reducer: {
   studentReducer: studentReducer
}});
export default store;