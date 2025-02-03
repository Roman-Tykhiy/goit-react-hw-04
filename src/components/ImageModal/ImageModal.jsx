import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: `VAR(--color-green-300)`,
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0 , 0 , 0 , 0.6)',
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};
Modal.setAppElement('#root');

export const ImageModal = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
  description,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      //   closeTimeoutMS={200}
      shouldCloseOnEsc={
        true
        /* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
      }
    >
      <img  src={src} alt={alt} />
      <h3 >{description !== null ? description : alt}</h3>
    </Modal>
  );
};




































// import s from "./SerchBox.module.css"


// const SerchBox = ({serchValue}) => {
//   return (
//     <>
//       <div className={s.container}>
//       <p className={s.text}>Find contacts by name</p>
//       <input className={s.input} name="name" onChange={serchValue} />
//       </div>
      
//     </>
    
//   )

// }
// export default SerchBox;