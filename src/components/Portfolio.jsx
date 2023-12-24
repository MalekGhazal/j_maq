import image2 from "../assets/images/portfolio/2.jpg";
import image3 from "../assets/images/portfolio/22.jpg";
import image4 from "../assets/images/portfolio/4.jpg";
import image5 from "../assets/images/portfolio/21.jpg";
import image6 from "../assets/images/portfolio/23.jpg";
import image7 from "../assets/images/portfolio/24.jpg";
import image8 from "../assets/images/portfolio/30.jpg";
import image9 from "../assets/images/portfolio/9.png";
import image10 from "../assets/images/portfolio/31.jpeg";
import image11 from "../assets/images/portfolio/28.jpg";
import image12 from "../assets/images/portfolio/12.png";
import image13 from "../assets/images/portfolio/32.jpg";
import image14 from "../assets/images/portfolio/29.jpg";
import image15 from "../assets/images/portfolio/26.jpg";
import image16 from "../assets/images/portfolio/27.jpg";
import image17 from "../assets/images/portfolio/17.png";
import image18 from "../assets/images/portfolio/18.png";
import image19 from "../assets/images/portfolio/19.png";
import image20 from "../assets/images/portfolio/25.jpg";
import image21 from "../assets/images/portfolio/13.jpg";
import image22 from "../assets/images/portfolio/14.png";
import image23 from "../assets/images/portfolio/15.jpg";
import image24 from "../assets/images/portfolio/16.png";
import image25 from "../assets/images/portfolio/33.jpg";
import image26 from "../assets/images/portfolio/34.jpg";
import image27 from "../assets/images/portfolio/35.jpg";
import image28 from "../assets/images/portfolio/36.jpg";
import image29 from "../assets/images/portfolio/37.jpg";
import image30 from "../assets/images/portfolio/38.jpg";
import image31 from "../assets/images/portfolio/39.jpg";
import image32 from "../assets/images/portfolio/40.jpg";
import image33 from "../assets/images/portfolio/41.jpg";
import image34 from "../assets/images/portfolio/42.jpg";
import image35 from "../assets/images/portfolio/43.jpg";
import image36 from "../assets/images/portfolio/44.jpg";
import image37 from "../assets/images/portfolio/45.jpg";
import image38 from "../assets/images/portfolio/46.jpg";
import image39 from "../assets/images/portfolio/47.jpg";
import image40 from "../assets/images/portfolio/48.jpg";
import image41 from "../assets/images/portfolio/49.jpg";
import image42 from "../assets/images/portfolio/50.jpg";

const Portfolio = () => {
  return (
    <div className='py-20 flex flex-col items-center justify-center'>
      <div className='xl:w-1/2 w-11/12'>
        <h1
          role='heading'
          tabIndex={0}
          className='md:text-6xl text-4xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800'
        >
          Touching hundreds of lives
        </h1>
        <h2
          role='contentinfo'
          tabIndex={0}
          className='text-base leading-normal font-medium text-center text-gray-100 mt-5'
        >
          To make you smile is my ultimate goal, hundreds of happy customers,
          check out my socials to see my latest work and to know me better. Your
          beautiful smile might be next <i className='fa-solid fa-heart'></i>
        </h2>
      </div>
      <div className='2xl:px-20 lg:px-12 px-4 flex flex-wrap justify-center mt-4'>
        {[
          image2,
          image3,
          image4,
          image20,
          image5,
          image6,
          image7,
          image15,
          image8,
          image9,
          image10,
          image11,
          image13,
          image12,
          image14,
          image16,
          image17,
          image18,
          image19,
          image21,
          image22,
          image23,
          image24,
          image25,
          image26,
          image27,
          image28,
          image29,
          image30,
          image31,
          image32,
          image33,
          image34,
          image35,
          image36,
          image37,
          image38,
          image39,
          image40,
          image41,
          image42,
        ].map((image, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-8'>
            <img
              tabIndex={0}
              src={image}
              alt={`portfolio img ${index + 1}`}
              loading='lazy'
              className='w-11/12 h-full rounded-lg object-cover mx-auto'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
