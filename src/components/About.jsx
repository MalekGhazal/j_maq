import image1 from "../assets/images/makeup3.png";
import image2 from "../assets/images/makeup1.png";

const About = () => {
  return (
    <>
      <div className='2xl:container 2xl:mx-auto lg:py-24 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
        <div className='lg:w-10/12 w-full'>
          <p className='font-normal text-sm leading-3 text-[#a54da8] cursor-pointer'>
            About me
          </p>
          <h2 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-[#263238] lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2'>
            Bonjour! I&#39;m Jehan, a passionate makeup artist based in the
            enchanting city of Rouen.
          </h2>
          <p className='font-medium text-base leading-6 text-gray-100 mt-6'>
            With a blend of skill, responsibility, and meticulous attention to
            detail,
            <br />I bring an artful touch to every face I encounter. As a makeup
            enthusiast, my journey has been guided by a commitment to
            excellence.
            <br />
            Beyond my technical prowess, I embrace each project with a sense of
            responsibility, ensuring every client&#39;s unique vision is not
            only met but exceeded.
            <br />
            My work reflects not just a profession, but a genuine passion for
            the transformative power of makeup.
          </p>
        </div>

        <div className='mt-10'>
          <img
            className='lg:block hidden'
            src={image1}
            alt='Group of people Chilling'
          />
          <img
            className='lg:hidden sm:block hidden'
            src={image1}
            alt='Group of people Chilling'
          />
          <img
            className='sm:hidden block'
            src={image1}
            alt='Group of people Chilling'
          />
        </div>

        <div className='lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12'>
          <div className='w-full xl:w-5/12 lg:w-6/12'>
            <h2 className='font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-[#263238]'>
              Being a makeup artist
            </h2>
            <p className='font-medium text-base leading-6 text-gray-100 mt-4'>
              is not just about enhancing beauty; it&#39;s about creating an
              experience. I pride myself on being an open and approachable
              artist, fostering genuine connections with my clients. This,
              coupled with my dedication to continuous improvement, allows me to
              stay at the forefront of industry trends and deliver results that
              go beyond expectations.
            </p>
            <p className='font-medium text-base leading-6 text-gray-100 mt-6'>
              Join me on this journey of beauty and self-expression. Together,
              let&#39;s bring out the best version of you, right here in the
              heart of Rouen, France.
            </p>
            <p className='font-medium text-base leading-6 text-gray-100 mt-6'>
              Je souhaiterais vous indiquer que mon profil correspond tout à
              fait aux qualités attendues pour être maquilleur professionnel. En
              effet, en complément de mes savoir-faire, je peux m&#39;appuyer
              sur mon sens des responsabilités et sur ma rigueur. Je suis aussi
              une personne ouverte avec un bon sens du relationnel et une réelle
              envie de progresser. Je pense que ce sont des valeurs
              incontournables pour atteindre le niveau de performance attendu
              pour tous les sociétés.
            </p>
          </div>
          <div className='lg:flex items-center w-full lg:w-1/2 '>
            <img
              className='lg:block hidden w-full'
              src={image2}
              alt='people discussing on board'
            />
            <img
              className='lg:hidden sm:block hidden w-full h-3/4'
              src={image2}
              alt='people discussing on board'
            />
            <img
              className='sm:hidden block w-full'
              src={image2}
              alt='people discussing on board'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
