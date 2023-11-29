import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64d9fc3ce947d30a260a982f.mockapi.io';

export const fetchContacts = createAsyncThunk(
    .contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.toString());
        }
    },
);

