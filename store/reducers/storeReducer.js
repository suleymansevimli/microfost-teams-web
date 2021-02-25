import {createSlice} from '@reduxjs/toolkit';
import appJSON from '../../mockdata/app/app.json';

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState: {
        apps: [...appJSON],
        searchResults: [],
        searchTerm: '',
        loading: true
    },
    reducers: {
        search(state, action) {
            state.searchResults = action.payload.results;
            state.searchTerm = action.payload.searchTerm;
            state.loading = false;
        }
    }
});

export const {search} = storeSlice.actions
export default storeSlice.reducer;

export const searchAsync = (searchTerm) => async dispatch => {
    if (searchTerm) {
        let results = appJSON.filter(e => {
            return e.name.includes(searchTerm) || e.name.toLowerCase().includes(searchTerm.toLowerCase());
        })

        await dispatch(search({results, searchTerm}));

    } else {
        await dispatch(search({results: [], searchTerm: ""}))
    }
}
