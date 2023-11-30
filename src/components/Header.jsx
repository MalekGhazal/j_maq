const Header = () => {
  return (
    <>
      <div className='h-[5vh]'>
        <div className='text-xl text-center text-gray-100 font-medium pt-4'>
          <ul className='flex items-center justify-center gap-8 sm:gap-14 md:gap-16 lg:gap-20'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
