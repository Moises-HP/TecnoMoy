import { createSlice } from '@reduxjs/toolkit';

export const NavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        status: "us"
    },
    reducers: {
        onChangeButton: ( state, {payload} ) => {
            state.status = payload
        },
    }
});

export const { onChangeButton } = NavbarSlice.actions;
export default NavbarSlice.reducer;