import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className=''>
        <div className='text-xl text-center text-gray-100 font-medium pt-4 invisible md:visible'>
          <ul className='flex items-center justify-center md:gap-16 lg:gap-20'>
            <li>
              <a href='/jehan'>Jehan</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/'>Portfolio</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>

        <input type='checkbox' id='checkbox' onClick={handleToggleMenu} />
        <label htmlFor='checkbox' className='toggle md:hidden z-50 fixed'>
          <div className='bars' id='bar1'></div>
          <div className='bars' id='bar2'></div>
          <div className='bars' id='bar3'></div>
        </label>

        {showMenu ? (
          <>
            <div className='backdrop-blur-lg mobile-menu text-xl fixed top-0 w-full text-center text-gray-100 font-medium pt-4 shadow-sm md:hidden'>
              <ul className='flex flex-col items-center justify-center gap-4'>
                <li>
                  <a href='/jehan'>Jehan</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/'>Portfolio</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
