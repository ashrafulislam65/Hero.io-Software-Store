import playStore from '../../assets/play-store.png'
import appStore from '../../assets/app-store.png'
import Hero from '../../assets/hero.png'
import { Link } from 'react-router'

const Banner = () => {
    return (
       <>
           <div className="hero bg-base-200 md:pt-[80px]  min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-3xl ">
                    <h1 className="md:text-5xl lg:text-8xl   font-bold ">We Build <span className='text-[#9f62f2]'>Productive</span> Apps</h1>
                    <p className="py-6">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex gap-4 justify-center'>
                            <Link target='_blank' to="https://play.google.com/store/games?hl=es_419"><button className="btn btn-[#d2d2d2]"><img className='w-8 h-8' src={playStore} alt="" />Play Store</button></Link>
                           <Link target='_blank' to="https://www.apple.com/app-store/"> <button className="btn btn-[#d2d2d2]"><img className='w-8 h-8' src={appStore} alt="" />App Store</button></Link>
                        </div>
                        <img className='mt-10 ' src={Hero} alt="" />
                    </div>
            </div>
        </div>
       <div className='md:py-[80px] bg-linear-65 from-[#632ee3] to-[#9f62f2] text-[white]'>
             <h3 className='text-center font-bold text-5xl pb-[40px]'>Trusted by Millions, Built for You</h3>
            <div className="stats md:flex justify-center items-center text-center md:px-[80px] sm: w-full stats-vertical lg:stats-horizontal shadow">
                <div className="stat ">
                    <div className="stat-title text-[white]">Total Downloads</div>
                    <div className="stat-value">29.6M</div>
                    <div className="stat-desc text-[white]">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-[white]">Total Reviews</div>
                    <div className="stat-value text-[white]">906K</div>
                    <div className="stat-desc text-[white]">46% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-[white]">Active Apps</div>
                    <div className="stat-value">132+</div>
                    <div className="stat-desc text-[white]">31 more will Launch</div>
                </div>
            </div>
       </div>
       </>
    );
};

export default Banner;