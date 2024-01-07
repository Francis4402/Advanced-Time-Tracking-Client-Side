import React from 'react';
import userProfiles from "../Hooks/userProfiles.jsx";

const UserProfileDisplay = () => {

    const [users] = userProfiles();

    return (
        <div className="justify-center grid gap-3 mt-10 text-black">
            {
                users.map(u => <div key={u}>
                    <img className="rounded-full w-20 h-20" src={u?.image} alt="i"/>
                    <li className="font-semibold my-4 list-none text-center text-white">
                        {u?.name}
                    </li>
                </div>)
            }
        </div>
    );
};

export default UserProfileDisplay;