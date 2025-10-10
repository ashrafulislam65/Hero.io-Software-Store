import { Link } from 'react-router';
import AppErr from '../../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div>
            <div className=" bg-base-200 min-h-screen">
                <img className='lg:py-20 lg:px-130' src={AppErr} alt="" />
                <div className="text-center">
                   
                    <div className="">
                        <h1 className="text-5xl font-bold"> OPPS!! APP NOT FOUND</h1>
                        <p className="py-6">
                            The App you are requesting is not found on our system. please try another apps
                        </p>
                        <Link to="/"><button className="btn bg-linear-65 from-[#632ee3] to-[#9f62f2] text-[white]">Go Back</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppNotFound;