import image2 from "../assets/images/portfolio/2.png";
import image3 from "../assets/images/portfolio/3.png";
import image4 from "../assets/images/portfolio/4.jpg";
import image5 from "../assets/images/portfolio/5.png";
import image6 from "../assets/images/portfolio/6.png";
import image7 from "../assets/images/portfolio/7.png";
import image8 from "../assets/images/portfolio/8.png";
import image9 from "../assets/images/portfolio/9.png";
import image10 from "../assets/images/portfolio/10.png";
import image11 from "../assets/images/portfolio/8.jpg";
import image12 from "../assets/images/portfolio/12.png";
import image13 from "../assets/images/portfolio/13.png";
import image14 from "../assets/images/portfolio/9.jpg";
import image15 from "../assets/images/portfolio/10.jpg";
import image16 from "../assets/images/portfolio/11.jpg";
import image17 from "../assets/images/portfolio/17.png";
import image18 from "../assets/images/portfolio/18.png";
import image19 from "../assets/images/portfolio/19.png";
import image20 from "../assets/images/portfolio/12.jpg";
import image21 from "../assets/images/portfolio/13.jpg";
import image22 from "../assets/images/portfolio/14.png";
import image23 from "../assets/images/portfolio/15.jpg";
import image24 from "../assets/images/portfolio/16.png";

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
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
          image14,
          image15,
          image16,
          image17,
          image18,
          image19,
          image20,
          image21,
          image22,
          image23,
          image24,
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
