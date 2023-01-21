import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

const initialState = {
    error: null,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export const { setError } = appSlice.actions
export default appSlice.reducer