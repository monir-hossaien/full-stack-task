import {create} from "zustand"
import {base_url} from "../baseURL/index.js";
import axios from "axios";
import cookies from "js-cookie";

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
        return !!cookies.get("accessToken");
    },

    signUpRequest: async (data) => {
        let result = await axios.post(`${base_url}/register`, data)
        return result.data
    },

    loginRequest: async (data) => {
        try{
            const res = await axios.post(`${base_url}/login`, data, {withCredentials: true});
            console.log(res);
            
            if(res.data.status === true){
                cookies.set("accessToken", res?.data?.accessToken);
                return res.data;
            }
        }catch(error) {
            return error.response.data;
        }
    },

    loggedIn: false,
    checkLoggedIn: async () => {
        try{
            const res = await axios.get(`${base_url}/check-logged-in`, {withCredentials: true});
            if(res.data.status === true){
                set({loggedIn: res?.data?.isLoggedIn});
                return true;
            }
        }catch(error) {
            return error.response.data;
        }
    },

    logOutRequest: async () => {
        try {
            const result = await axios.get(`${base_url}/logout`, {withCredentials: true});
            if(result.data?.status === true){
                set({loggedIn: false})
            }
            return result?.data
        }catch(error) {
            return error?.response?.data;
        }
    },


}))