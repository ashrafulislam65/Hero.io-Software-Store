import { Link } from 'react-router';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'



const TrendingApp = ({ app }) => {

    const { id,title, image, downloads, ratingAvg } = app;

    return (

        <Link to={`/appDetails/${id}`}>
            <div className='  '>
                <div className="card bg-base-100   md:w-76 shadow-sm">
                    <figure className="px-4 pt-4">
                        <img

                            src={image}
                            alt="Shoes"
                            className="rounded-xl w-[300px] h-[350px]" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{title}</h2>

                        <div className='flex justify-between'>
                            <div className="badge border-[white] bg-[#f1f5e8] text-[#00d390] badge-info">
                                <img className='w-4 h-4' src={Download} alt="" />
                                <p>{downloads}</p>
                            </div>
                            <div className="badge border-[white] bg-[#fff0e1] text-[#ff8811] badge-info">
                                <img className='w-4 h-4' src={Rating} alt="" />
                                <p>{ratingAvg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default TrendingApp;