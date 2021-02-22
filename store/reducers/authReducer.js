import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authReducer',
	initialState: {
		loading: true,
		userToken: null,
		errors: []
	},
	reducers: {
		login(state, action) {
			state.loading = false;
			state.userToken = action.payload.token;
		}
	}
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

export const loginAsync = (email, password) => async (dispatch) => {
	// login process
	await dispatch(login({ userToken: 'user_token' }));
};
