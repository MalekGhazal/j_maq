import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[90vh]'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='text-gray-100 font-bold text-center text-6xl md:text-9xl'
        >
          Jehan Assi
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='text-gray-100 font-semibold text-center text-3xl md:text-5xl'
        >
          Makeup Artist
        </motion.h3>
        <div className='flex items-center justify-center gap-12 pt-8'>
          <a
            href='https://www.instagram.com/jehanassi/'
            target='_blank'
            rel='noreferrer'
          >
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='fa-brands fa-instagram text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'
            ></motion.i>
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100091396613557'
            target='_blank'
            rel='noreferrer'
          >
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='fa-brands fa-facebook text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'
            ></motion.i>
          </a>
          <a
            href='https://www.tiktok.com/@j_maq'
            target='_blank'
            rel='noreferrer'
          >
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='fa-brands fa-tiktok text-5xl text-gray-100 hover:text-[#957fad] transition duration-300'
            ></motion.i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
