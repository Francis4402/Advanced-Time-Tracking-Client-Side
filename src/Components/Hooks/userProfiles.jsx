import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";

const UserProfiles = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: users = []} = useQuery({
        queryKey: ['myProfile'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`);
            return res.data;
        }
    })

    return [users]
};

export default UserProfiles;