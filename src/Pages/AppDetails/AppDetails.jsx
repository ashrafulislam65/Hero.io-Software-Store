import { useLoaderData, useParams } from 'react-router';
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Review from '../../assets/icon-review.png';
import { addToStoredDB, getStoredApps } from '../../Utility/AddToDB';
import { useEffect, useState } from 'react';

const AppDetails = () => {
    
    const { id } = useParams();
    const data = useLoaderData();
    const appDetails = data.find(app => app.id === parseInt(id));
    const { ratings, reviews, size, description, companyName, title, image, downloads, ratingAvg } = appDetails;
     const [isInstalled, setIsInstalled] = useState(false);
     
    useEffect(() => {
        const checkIfInstalled = () => {
            const storedApps = getStoredApps();
            const installed = storedApps.includes(parseInt(id));
            setIsInstalled(installed);
        };
        
        checkIfInstalled();
    }, [id]);
    const handleInstall = (id) => {
         
        addToStoredDB(id);
        setIsInstalled(true);
    }
    return (
        <div>
            <div className="py-20  bg-base-200 min-h-screen justify-start px-20">
                <div className="md:flex gap-10 ">
                    <img
                        src={image}
                        className="md:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="md:text-3xl font-bold">{title}</h1>
                        <p className="py-6">
                            Developed by <span className='text-[#9f62f2]'>{companyName}</span>
                        </p>
                        <div className='divider'></div>
                        <div className='md:flex gap-12 mb-4'>
                            <div>
                                <img src={Download} alt="" />
                                <p>Downloads</p>
                                <h4 className='font-extrabold md:text-3xl'>{downloads}</h4>
                            </div>
                            <div>
                                <img src={Rating} alt="" />
                                <p>Average Ratings</p>
                                <h4 className='font-extrabold md:text-3xl'>{ratingAvg}</h4>
                            </div>
                            <div>
                                <img src={Review} alt="" />
                                <p>Total Reviews</p>
                                <h4 className='font-extrabold md:text-3xl'>{reviews}</h4>
                            </div>
                        </div>
                        <button onClick={()=>handleInstall(id)}
                         disabled={isInstalled} 
                        className={`btn text-[white] ${isInstalled ? 'bg-gray-400' : 'bg-[#00d390]'}`}>{isInstalled ? 'Installed' : `Install Now (${size} MB)`}</button>

                    </div>

                </div>
                <div className='divider'></div>
                <div>
                    <h3 className='font-bold'>Description</h3>
                    <p>{description}</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default AppDetails;