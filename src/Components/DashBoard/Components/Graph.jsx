import {Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useTimeData from "../../Hooks/useTimeData.jsx";
import {useEffect} from "react";

const Graph = () => {

    const [timedata, refetch] = useTimeData();


    useEffect(() => {
        const intervalId = setInterval(refetch, 1000);

        return () => clearInterval(intervalId);
    }, [refetch]);

    const data = timedata.map((entry) => {
        const startTimeAsInteger = parseInt(entry.startTime, 10);
        const endTimeAsInteger = parseInt(entry.endTime, 10);

        const workDuration = isNaN(startTimeAsInteger) || isNaN(endTimeAsInteger)
            ? 0
            : Math.abs(startTimeAsInteger - endTimeAsInteger);

        return {
            date: entry.date,
            WorkDuration: workDuration,
        };
    });

    return (
        <div>
            <h1 className="text-white font-semibold text-2xl my-10">Graph of Total Working Time</h1>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="WorkDuration" stroke="#2196F3" strokeWidth={3} />
            </LineChart>
        </div>

    );
};

export default Graph;