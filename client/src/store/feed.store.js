import {create} from "zustand"
import {base_url} from "../baseURL/index.js";
import axios from "axios";


export const feedStore = create((set) =>({


    postList: null,
    fetchPostList: async () => {
        let result = await axios.get(`${base_url}/fetch-posts`, {withCredentials: true});
        console.log(base_url);
        if(result.data.status === true){
            set({postList: result.data?.data})
        }
    },


}))