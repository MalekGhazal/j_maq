import image1 from '../assets/images/portfolio/1.jpg';
import image2 from '../assets/images/portfolio/2.jpg';
import image9 from '../assets/images/portfolio/3.jpeg';
import image3 from '../assets/images/portfolio/22.jpg';
import image4 from '../assets/images/portfolio/4.jpg';
import image5 from '../assets/images/portfolio/21.jpg';
import image6 from '../assets/images/portfolio/23.jpg';
import image7 from '../assets/images/portfolio/24.jpg';
import image8 from '../assets/images/portfolio/30.jpg';
import image10 from '../assets/images/portfolio/6.jpg';
import image11 from '../assets/images/portfolio/28.jpg';
import image12 from '../assets/images/portfolio/12.png';
import image13 from '../assets/images/portfolio/32.jpg';
import image14 from '../assets/images/portfolio/7.jpg';
import image15 from '../assets/images/portfolio/56.jpeg';
import image16 from '../assets/images/portfolio/9.jpeg';
import image17 from '../assets/images/portfolio/17.png';
import image18 from '../assets/images/portfolio/8.jpg';
import image19 from '../assets/images/portfolio/19.png';
import image21 from '../assets/images/portfolio/13.jpg';
import image22 from '../assets/images/portfolio/14.png';
import image23 from '../assets/images/portfolio/15.jpg';
import image24 from '../assets/images/portfolio/16.png';
import image26 from '../assets/images/portfolio/34.jpg';
import image31 from '../assets/images/portfolio/39.jpg';
import image32 from '../assets/images/portfolio/40.jpg';
import image38 from '../assets/images/portfolio/46.jpg';
import image39 from '../assets/images/portfolio/47.jpg';
import image41 from '../assets/images/portfolio/49.jpg';
import image42 from '../assets/images/portfolio/50.jpg';
import image43 from '../assets/images/portfolio/58.jpeg';
import image44 from '../assets/images/portfolio/51.jpg';
import image45 from '../assets/images/portfolio/52.jpg';
import image46 from '../assets/images/portfolio/53.jpg';
import image47 from '../assets/images/portfolio/60.jpg';
import image48 from '../assets/images/portfolio/61.jpg';
import image49 from '../assets/images/portfolio/62.jpg';
import image50 from '../assets/images/portfolio/63.jpg';
import image53 from '../assets/images/portfolio/66.jpg';
import image54 from '../assets/images/portfolio/67.jpg';
import image72 from '../assets/images/portfolio/72.jpg';
import image73 from '../assets/images/portfolio/73.jpg';
import image101 from '../assets/images/portfolio/101.png';
import image102 from '../assets/images/portfolio/102.png';
import image103 from '../assets/images/portfolio/103.png';
import image104 from '../assets/images/portfolio/104.png';
import image108 from '../assets/images/portfolio/108.jpg';
import image109 from '../assets/images/portfolio/109.jpg';
import image110 from '../assets/images/portfolio/110.jpg';
import image111 from '../assets/images/portfolio/111.jpg';
import image112 from '../assets/images/portfolio/112.jpg';

const Portfolio = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <div className="xl:w-1/2 w-11/12">
        <h1
          role="heading"
          tabIndex={0}
          className="md:text-5xl text-4xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
        >
          Touching hundreds of lives
        </h1>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-lg leading-normal font-medium text-center text-gray-100 mt-5"
        >
          To make you smile is my ultimate goal, hundreds of happy customers,
          check out my socials to see my latest work and to know me better. Your
          beautiful smile might be next <i className="fa-solid fa-heart"></i>
        </h2>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap justify-center mt-4">
        {[
          image110,
          image111,
          image112,
          image109,
          image108,
          image16,
          image18,
          image101,
          image102,
          image10,
          image14,
          image103,
          image104,
          image73,
          image72,
          image1,
          image9,
          image4,
          image3,
          image5,
          image6,
          image2,
          image7,
          image43,
          image15,
          image47,
          image49,
          image48,
          image50,
          image8,
          image53,
          image45,
          image54,
          image11,
          image13,
          image12,
          image17,
          image44,
          image19,
          image21,
          image23,
          image24,
          image42,
          image46,
          image26,
          image22,
          image32,
          image31,
          image38,
          image39,
          image41,
        ].map((image, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-8">
            <img
              tabIndex={0}
              src={image}
              alt={`portfolio img ${index + 1}`}
              loading="lazy"
              className="w-11/12 h-full rounded-lg object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
