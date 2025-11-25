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

    isLogin: ()=>{
        return !!localStorage.getItem("isLogin");
    },

    signUpRequest: async (data) => {
        let result = await axios.post(`${base_url}/register`, data)
        return result.data
    },

    loginRequest: async (data) => {
        try {
            const res = await api.post("/login", data);
            if(res.data.status === true){
                localStorage.setItem("isLogin", "true");
                return res.data;
            }
        } catch (error) {
            throw error;
        }
    },




















}))