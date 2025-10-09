
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
const InstalledCard = ({a}) => {
    const { image, title, downloads, ratingAvg, size } = a;
    
    return (
        <div className=''>
            <div className="card mb-5 py-4 px-4 card-side  flex justify-between items-center bg-base-100 shadow-sm">
                <div className="  flex  items-center gap-5">
                    <figure>
                        <img className="w-[80px] h-[80px] rounded-lg"
                            src={image}
                            alt="Movie" />
                    </figure>
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex gap-5 items-center'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-4 h-4' src={Download} alt="" />
                                <p>{downloads}</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-4 h-4' src={Rating} alt="" />
                                <p>{ratingAvg}</p>
                            </div>
                            <p><span>{size}</span> MB</p>
                        </div>

                    </div>
                </div>
                <div className="">
                    <button className="btn bg-[#00d390] text-[white]">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledCard;