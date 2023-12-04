import image17 from "../assets/images/portfolio/17.png";
import image2 from "../assets/images/portfolio/2.png";
import image3 from "../assets/images/portfolio/3.png";
import image4 from "../assets/images/portfolio/4.png";
import image5 from "../assets/images/portfolio/5.png";
import image6 from "../assets/images/portfolio/6.png";
import image7 from "../assets/images/portfolio/7.png";
import image8 from "../assets/images/portfolio/8.png";
import image9 from "../assets/images/portfolio/9.png";
import image10 from "../assets/images/portfolio/10.png";
import image19 from "../assets/images/portfolio/19.png";
import image12 from "../assets/images/portfolio/12.png";
import image13 from "../assets/images/portfolio/13.png";
import image18 from "../assets/images/portfolio/18.png";

const Portfolio = () => {
  return (
    <>
      <div className='py-20 flex flex-col items-center justify-center'>
        <div className='xl:w-1/2 w-11/12'>
          <h1
            role='heading'
            tabIndex={0}
            className='text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800'
          >
            Touching hundreds of lives
          </h1>
          <h2
            role='contentinfo'
            tabIndex={0}
            className='text-base leading-normal font-medium text-center text-gray-100 mt-5'
          >
            To make you smile is my ultimate goal, hundreds of happy customers,
            check out my socials to see my latest work and to know me better.
            Your beautiful smile might be next &#9829;
          </h2>
        </div>
        <div className='2xl:px-20 lg:px-12 px-4 flex flex-wrap justify-center mt-4'>
          <div className='mt-24'>
            <div className='flex items-end '>
              <img
                tabIndex={0}
                src={image17}
                alt='portfolio img'
                className='w-20 h-20 rounded-lg mr-6 object-cover'
              />
              <img
                tabIndex={0}
                src={image2}
                alt='portfolio img'
                className='w-48 h-36 rounded-lg object-cover'
              />
            </div>
            <div className='flex items-center justify-end my-6'>
              <img
                tabIndex={0}
                src={image3}
                alt='portfolio img'
                className='object-cover rounded-lg w-48 h-36'
              />
            </div>
            <div className='flex items-start'>
              <img
                tabIndex={0}
                src={image4}
                alt='portfolio img'
                className='w-48 h-48 rounded-lg object-cover'
              />
              <img
                tabIndex={0}
                src={image5}
                alt='portfolio img'
                className='w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover'
              />
            </div>
          </div>
          <div className='ml-6 mt-32'>
            <img
              tabIndex={0}
              src={image6}
              className='w-72 h-80 rounded-lg object-cover'
              alt='portfolio img'
            />
            <div className='flex items-start mt-6'>
              <img
                tabIndex={0}
                src={image7}
                alt='portfolio img'
                className='w-48 h-48 rounded-lg object-cover'
              />
              <img
                tabIndex={0}
                src={image8}
                alt='portfolio img'
                className='w-20 h-20 rounded-lg ml-6 object-cover'
              />
            </div>
          </div>
          <div className='mt-14 ml-6'>
            <div className='lg:flex '>
              <div>
                <img
                  tabIndex={0}
                  src={image9}
                  alt='portfolio img'
                  className='w-96 h-72 rounded-lg object-center object-cover'
                />
              </div>
              <div>
                <div className='flex ml-6'>
                  <img
                    tabIndex={0}
                    src={image10}
                    className='w-20 h-20 rounded-lg mt-14 object-cover'
                    alt='portfolio img'
                  />
                  <img
                    tabIndex={0}
                    src={image19}
                    className='w-20 h-24 rounded-lg ml-6 object-cover'
                    alt='portfolio img'
                  />
                </div>
                <img
                  tabIndex={0}
                  src={image12}
                  alt='portfolio img'
                  className='ml-6 mt-6 w-48 h-32 rounded-lg object-cover'
                />
              </div>
            </div>
            <div className='mt-6 flex'>
              <img
                tabIndex={0}
                className='w-48 h-48 rounded-lg object-cover'
                src={image13}
                alt='portfolio img'
              />
              <img
                tabIndex={0}
                className='w-72 h-56 rounded-lg ml-6 object-cover'
                src={image18}
                alt='portfolio img'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
