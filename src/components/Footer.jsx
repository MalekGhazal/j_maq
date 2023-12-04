const Footer = () => {
  return (
    <>
      <div className='h-[5vh]'>
        <div className='text-xs md:text-lg text-center text-gray-100 font-normal'>
          &copy; {new Date().getFullYear()} JMAQ. All Rights Reserved. Made with{" "}
          <i className='fa-solid fa-heart'></i> by{" "}
          <a href='https://malekghazal.com/' target='_blank' rel='noreferrer'>
            Malek Kazal
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Footer;
