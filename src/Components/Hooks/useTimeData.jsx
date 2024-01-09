import React from 'react';
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import useAuth from "./useAuth.jsx";
import {useQuery} from "@tanstack/react-query";

const UseTimeData = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: timedata = [], refetch} = useQuery({
        queryKey: ['timeData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getTimebyData?email=${user.email}`);
            return res.data;
        }
    })

    return [timedata, refetch]
};

export default UseTimeData;