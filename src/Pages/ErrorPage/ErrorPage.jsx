import { Link } from 'react-router';
import Err from '../../assets/error-404.png';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <img src={Err} alt="" />
                        <h1 className=" md:text-3xl lg:text-5xl font-bold">Oops, page not found!</h1>
                        <p className="py-6">
                            The page you are looking for is not available.
                        </p>
                        <Link to='/'><button className="btn bg-linear-65 from-[#632ee3] to-[#9f62f2] text-[#ffffff]">Go Back!</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;