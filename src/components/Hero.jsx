const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[90vh]'>
        <h1 className='text-gray-100 font-bold text-center text-7xl md:text-9xl'>
          Jehan Assi
        </h1>
        <h3 className='text-gray-100 font-semibold text-center text-3xl md:text-5xl'>
          Makeup Artist
        </h3>
        <div className='flex items-center justify-center gap-12 pt-8'>
          <a
            href='https://www.instagram.com/jehanassi/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-instagram text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'></i>
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100091396613557'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-facebook text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'></i>
          </a>
          <a
            href='https://www.tiktok.com/@j_maq'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-tiktok text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
