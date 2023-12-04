// eslint-disable-next-line react/prop-types
const SuccessModal = ({ onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <p className='mb-4'>Your message has been sent successfully!</p>
        <button className='close-btn' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
