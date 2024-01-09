import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import useAuth from "./useAuth.jsx";
import {useQuery} from "@tanstack/react-query";


const UseProjectlists = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: projects = [], refetch} = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allprojects?email=${user.email}`);
            return res.data;
        }
    })

    return [projects, refetch]
};

export default UseProjectlists;