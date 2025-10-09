import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = () => {
    return (
        <div className='bg-[#d9d9d9] md:px-[80px] md:py-[80px]'>
            <div className='text-center '>
                <h3 className='font-bold text-5xl pb-5'>Trending Apps </h3>
                <p className='pb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <TrendingApp></TrendingApp>
        </div>
    );
};

export default TrendingApps;