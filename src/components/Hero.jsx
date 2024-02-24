const HeroSection = () =>{
return (
    <main className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE BEST</h1>
        <p>
            YOUR FEET DESERVE BEST AND WE'ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE BEST AND WE'ARE HERE TO HELP YOU WITH OUR SHOES
        </p>
        <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Available On</p>
            <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
            </div>
            
        </div>
    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
    </div>
</main>
);
};


   

export default HeroSection;