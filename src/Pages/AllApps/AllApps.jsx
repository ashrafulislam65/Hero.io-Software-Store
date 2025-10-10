import { Suspense, useState } from "react";
import { redirect, useLoaderData } from "react-router";
import SingleApp from "../../Components/SingleApp/SingleApp";
import AppNotFound from "../../Components/AppNotFound/AppNotFound";

const AllApps = () => {
    const allAppsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    
    // Filter apps based on search term
    const filteredApps = allAppsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className='bg-[#d9d9d9] md:px-[80px] md:py-[80px]'>
            {/* Show header only when there are apps or no search term */}
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
                    ) : (
                         <AppNotFound searchTerm={searchTerm}></AppNotFound> 
                    )}
                </div>
            </Suspense>


        </div>
    );
};

export default AllApps;