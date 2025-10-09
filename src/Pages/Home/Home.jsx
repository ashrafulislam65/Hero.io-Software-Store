import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <>
            <Banner></Banner>
            <TrendingApps data={data}></TrendingApps>
        </>
    );
};

export default Home;