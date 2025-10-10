import { useLoaderData, useNavigation } from 'react-router';
import Logo from '../../assets/logo.png';


import { useEffect, useState } from 'react';
import { getStoredApps } from '../../Utility/AddToDB';
import InstalledCard from '../../Components/InstalledCard/InstalledCard';

const InstalledList = () => {
    const [installedList, setInstalledList] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [showSpinner, setShowSpinner] = useState(true);
    const navigation = useNavigation();
    
    
    const data = useLoaderData();
    const isLoading = navigation.state === 'loading';
    console.log(data);
    useEffect(() => {
         const timer = setTimeout(() => {
            setShowSpinner(false);
        }, 3000); 
        const installedAppsData = getStoredApps();
        console.log('Stored Apps from localStorage:', installedAppsData);
        const installedApps = installedAppsData.map(id => parseInt(id));
        const myInstalledApps = data.filter(app => installedApps.includes(app.id));
        setInstalledList(myInstalledApps);
         return () => clearTimeout(timer);
    }, [data]);
     useEffect(() => {
        if (isLoading) {
            setShowSpinner(true);
            const timer = setTimeout(() => {
                setShowSpinner(false);
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [isLoading]);
     
    const handleUninstall = (uninstalledId) => {
        
        setInstalledList(prevApps => 
            prevApps.filter(app => app.id !== uninstalledId)
        );
        
    }
    
    
    const handleSort = (type) => {
        setSortBy(type);
        if (type === "High-Low") {
            const sortedList = [...installedList].sort((a, b) => b.downloads - a.downloads);
            setInstalledList(sortedList);
        }
        if (type === "Low-High") {
            const sortedList = [...installedList].sort((a, b) => a.downloads - b.downloads);
            setInstalledList(sortedList);
        }
    }
     if (showSpinner) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="text-center">
                    <p className=" flex font-bold text-5xl text-gray-400"><span>L</span><img className="w-10 h-10" src={Logo} alt="" /><span>OADING</span> <span className="loading loading-bars loading-lg"></span></p>
                    <p className="text-gray-400 text-sm mt-2">Please wait for 3 seconds</p>
                </div>
            </div>
        );
    }

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
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Sorted By Download: {sortBy?sortBy:""} ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("High-Low")}>High-Low</a></li>
                            <li><a onClick={()=>handleSort("Low-High")}>Low-High</a></li>
                        </ul>
                    </div>



                </div>
                {
                    installedList.map(a => <InstalledCard onUninstall={handleUninstall} a={a} key={a.id} ></InstalledCard>)
                }
            </div>

        </div>
    );
};

export default InstalledList;