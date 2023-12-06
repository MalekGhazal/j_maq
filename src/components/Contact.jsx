/* eslint-disable react/no-unknown-property */
const Contact = () => {
  return (
    <>
      <div className='h-[90vh] flex flex-col justify-center items-center'>
        <h1 className='text-gray-100 font-bold text-center text-5xl md:text-6xl pt-16'>
          Contact Me!
        </h1>
        <div className='contact-form w-3/4 lg:w-2/4 flex items-center justify-center h-full mx-auto'>
          <form
            className='w-full'
            name='contact'
            netlify
            netlify-honeypot='bot-field'
            action='/success'
          >
            <input type='hidden' name='form-name' value='contact' />

            <div className='flex items-center justify-evenly w-full mb-10 gap-4 md:gap-8'>
              <input
                className='rounded-xl p-2 w-2/4 focus:outline-none'
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First name'
                required
              />
              <input
                className='rounded-xl p-2 w-2/4 focus:outline-none'
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last name'
              />
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
              <input
                className='rounded-xl p-2 w-full focus:outline-none mb-10'
                type='email'
                name='email'
                id='email'
                placeholder='Your email'
                required
              />
              <textarea
                className='rounded-xl p-2 w-full h-56 focus:outline-none resize-none mb-10'
                name='message'
                id='message'
                placeholder='Your message'
                required
              ></textarea>
              <button type='submit' className='contact-btn w-2/4 lg:w-1/4'>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
