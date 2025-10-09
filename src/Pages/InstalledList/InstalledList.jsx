import { useLoaderData } from 'react-router';

import { useEffect, useState } from 'react';
import { getStoredApps } from '../../Utility/AddToDB';
import InstalledCard from '../../Components/InstalledCard/InstalledCard';
const InstalledList = () => {
    const [installedList, setInstalledList] = useState([]);
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const installedAppsData = getStoredApps();
        const installedApps = installedAppsData.map(id=>parseInt(id));
        const myInstalledApps = data.filter(app => installedApps.includes(app.id));
        setInstalledList(myInstalledApps);
    }, [])

    return (
        <div>
            <div className=" text-center px-[80px] py-[80px] bg-base-200 min-h-screen">
                <div className=" ">
                    <div className=" text-center ">
                        <h1 className="text-5xl  font-bold">Your Installed App</h1>
                        <p className="py-6">
                            Explore All Trending Apps on the Market developed by us
                        </p>

                    </div>
                </div>

                <div className=" flex justify-between  py-20">
                    <h3><span>{installedList.length}</span> Apps Found</h3>
                    <select className="" id="sort" name="sort">
                        <option value="bd">Sort By Size</option>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                    </select>



                </div>
                {
                    installedList.map(a => <InstalledCard a={a} key={a.id} ></InstalledCard>)
                }
            </div>

        </div>
    );
};

export default InstalledList;