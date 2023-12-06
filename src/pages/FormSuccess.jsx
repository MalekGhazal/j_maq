import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isValidSubmission =
      window.location.search.includes("form-name=contact");

    if (!isValidSubmission) {
      navigate("/");
    }

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-[90vh]'>
        <h1 className='text-gray-100 font-bold text-center text-6xl md:text-8xl'>
          Thank you!
        </h1>
        <h3 className='text-gray-100 font-semibold text-center text-xl md:text-3xl'>
          Your message has been received.
        </h3>
      </div>
    </>
  );
};

export default FormSuccess;
