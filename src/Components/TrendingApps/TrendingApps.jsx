import { Suspense } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { Link } from "react-router";


const TrendingApps = ({data}) => {
    
    return (
        <div className='bg-[#d9d9d9] md:px-[80px] md:py-[80px]'>
            <div className='text-center '>
                <h3 className='font-bold text-5xl pb-5'>Trending Apps </h3>
                <p className='pb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {
                  data.map((app)=><TrendingApp key={app.id} app={app}></TrendingApp>)  
                }
                 
               </div>
            </Suspense>

            <Link><button>Show All</button></Link>
        </div>
    );
};

export default TrendingApps;