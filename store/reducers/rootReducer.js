import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import storeReducer from "./storeReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	store: storeReducer
});

export default rootReducer;
