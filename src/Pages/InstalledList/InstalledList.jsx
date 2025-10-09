import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Review from '../../assets/icon-review.png';
const InstalledList = () => {
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
                    <h3>1 Apps Found</h3>
                    <select className="" id="sort" name="sort">
                        <option value="bd">Sort By Size</option>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                    </select>



                </div>
                <div className="card py-4 px-4 card-side flex justify-between items-center bg-base-100 shadow-sm">
                    <div className="  flex  items-center gap-5">
                        <figure>
                            <img className="w-[80px] h-[80px] rounded-lg"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">New movie is released!</h2>
                            <div className='flex gap-5 items-center'>
                                <div className='flex gap-3 items-center'>
                                    <img className='w-4 h-4' src={Download} alt="" />
                                    <p>9M</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img className='w-4 h-4' src={Rating} alt="" />
                                    <p>5</p>
                                </div>
                                <p><span>255</span> MB</p>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <button className="btn bg-[#00d390] text-[white]">Uninstall</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InstalledList;