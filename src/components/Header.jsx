const Header = () => {
  return (
    <>
      <div className='h-[5vh]'>
        <div className='text-xl text-center text-gray-100 font-medium pt-4'>
          <ul className='flex items-center justify-center gap-14 md:gap-20'>
            <li>
              <a href='home'>Home</a>
            </li>
            <li>
              <a href='about'>About</a>
            </li>
            <li>
              <a href='portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='contanct'>Contanct</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
