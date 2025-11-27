import {create} from "zustand"
import {base_url} from "../baseURL/index.js";
import axios from "axios";

export const authStore = create((set) =>({


    loading: false,
    setLoading: (value) => {
        set({loading: value})
    },

    formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },


    inputOnChange: (name, value) => {
        set((state) => ({
            formData: {
                ...state.formData,
                [name]: value
            }
        }))
    },

    resetFormData: () => set({
        formData: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    }),

    signUpRequest: async (data) => {
        let result = await axios.post(`${base_url}/register`, data)
        return result.data
    },

    loginRequest: async (data) => {
        try{
            const res = await axios.post(`${base_url}/login`, data, {withCredentials: true});
            return res?.data
        }catch(error) {
            return error.response.data;
        }
    },

    checkLoggedIn: async () => {
        try{
            const res = await axios.get(`${base_url}/auth/me`, {withCredentials: true});
            return res?.data;
        }catch(error) {
            return error.response.data;
        }
    },

    logOutRequest: async () => {
        try {
            const result = await axios.get(`${base_url}/logout`, {withCredentials: true});
            return result?.data
        }catch(error) {
            return error?.response?.data;
        }
    },


}))