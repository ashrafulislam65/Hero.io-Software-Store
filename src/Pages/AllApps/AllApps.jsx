import { Suspense, useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigate } from "react-router";
import SingleApp from "../../Components/SingleApp/SingleApp";
import Logo from '../../assets/logo.png';

const AllApps = () => {
    const allAppsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
     const navigate = useNavigate();
    
    
    const filteredApps = allAppsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
     
    useEffect(() => {
        if (searchTerm && filteredApps.length === 0) {
            const timer = setTimeout(() => {
                navigate("/not-foundApp", { 
                    state: { searchTerm: searchTerm },
                    replace: true 
                });
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [searchTerm, filteredApps.length, navigate]);
    
    return (
        <div className='bg-[#d9d9d9] md:px-[80px] md:py-[80px]'>
            
            {(filteredApps.length > 0 || searchTerm === "") && (
                <div className='text-center '>
                    <h3 className='font-bold text-5xl pb-5'>Our All Applications</h3>
                    <p className='pb-20'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            )}
            {(filteredApps.length > 0 || searchTerm === "") && (
                <div className="flex justify-between mb-10">
                <p className="font-bold">(<span>{allAppsData.length}</span>) Apps Found
                {searchTerm && (
                        <span className="text-gray-600 text-sm ml-2">
                            for "{searchTerm}"
                        </span>
                    )}
                
                </p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" value={searchTerm}
                        onChange={handleSearchChange} />
                </label>
            </div>
            )}
            
            <Suspense>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
                            <SingleApp key={app.id} app={app}></SingleApp>
                        ))
                    ) : searchTerm ? (
                        
                        <div className="col-span-full text-center py-20">
                            <div className="max-w-md mx-auto">
                                <p className="text-gray-600 text-lg mb-2">
                                    No apps found for "<strong>{searchTerm}</strong>"
                                </p>
                                <p className=" flex font-bold text-5xl text-gray-400"><span>L</span><img className="w-10 h-10" src={Logo} alt="" /><span>OADING</span> <span className="loading loading-bars loading-lg"></span></p>
                            </div>
                        </div>
                    ) : (
                        allAppsData.map((app) => (
                            <SingleApp key={app.id} app={app}></SingleApp>
                        ))
                    )}
                </div>
            </Suspense>


        </div>
    );
};

export default AllApps;