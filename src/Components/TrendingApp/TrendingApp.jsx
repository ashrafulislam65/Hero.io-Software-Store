import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'


const TrendingApp = () => {
    return (
        <div>
             <div>
                <div className="card bg-base-100  md:w-96 shadow-sm">
                    <figure className="px-4 pt-4">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">Card Title</h2>

                        <div className='flex justify-between'>
                            <div className="badge border-[white] bg-[#f1f5e8] text-[#00d390] badge-info">
                                <img className='w-4 h-4' src={Download} alt="" />
                                <p>9M</p>
                            </div>
                            <div className="badge border-[white] bg-[#fff0e1] text-[#ff8811] badge-info">
                                <img className='w-4 h-4' src={Rating} alt="" />
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TrendingApp;