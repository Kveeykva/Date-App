import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isVisible = true;
        },
        hideModal: (state) => {
            state.isVisible = false;
        },
         toggleModal: (state) => {
            state.isVisible = !state.isVisible;
         }
    }
});




export const {showModal, hideModal, toggleModal} = modalSlice.actions;
export default modalSlice.reducer;
