import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {base_url} from "../baseURL/index.js";


axios.defaults.withCredentials = true;

const fetchUser = async () => {
    const { data } = await axios.get(`${base_url}/auth/me`);
    if (data.status) return data.data;
    throw new Error("Not logged in");
};

export const useAuthQuery = () => {
    return useQuery(
        {
            queryKey : ['user'],
            queryFn: fetchUser,
            staleTime: 5 * 60 * 1000, // cache 5 minutes
            retry: false,
            refetchOnWindowFocus: false,
        }
    );
};
