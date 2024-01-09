import React from 'react';
import TimeCards from "./Components/TimeCards.jsx";
import TotalTimeTracked from "./Components/TotalTimeTracked.jsx";
import CounterTimer from "./Components/CounterTimer.jsx";
import {Helmet} from "react-helmet";
import Graph from "./Components/Graph.jsx";

const Dashboardpage = () => {
    return (
        <div className="justify-center flex">
            <Helmet>
                <title>DashBoard</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="container px-5">
                <h1 className="text-2xl font-semibold text-white mt-24">Track Your WorkTime</h1>
                <div className="lg:flex lg:gap-40 grid gap-20 items-center justify-center sm:py-20 py-10">
                    <TimeCards/>
                    <TotalTimeTracked/>
                    <CounterTimer/>
                </div>
            </div>
        </div>
    );
};

export default Dashboardpage;