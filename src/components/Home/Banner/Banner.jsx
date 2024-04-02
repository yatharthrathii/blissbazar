import "./Banner.css";
import BannerImg from '../../../assets/img/banner5.png'

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE!</h1>
                <p>
                    Discover <span>BlissBazar</span>, your go-to hub for cutting-edge electronics. Elevate your lifestyle with our curated selection of top-notch gadgets and appliances. Shop now for convenience and innovation!
                </p>
                <div className="ctas">
                    <button className="bn54">
                        <span className="bn54span">Read More</span>
                    </button>
                    <button className="bn54 bn55">
                        <span className="bn54span bn55">Shop Now</span>
                    </button>
                </div>
            </div>
            <div className="banner-img">
                <img src={BannerImg} alt="" />
            </div>
        </div>
    </div>;
};

export default Banner;
