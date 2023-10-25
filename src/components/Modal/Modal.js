import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100% - 48px)',
    maxHeight: 'calc(100% - 24px)',
  },
};

Modal.setAppElement('#root');

export const ModalСomponent = ({
  isModalOpen,
  imgModal,
  altModal,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal">
        <img src={imgModal} alt={altModal} />
      </div>
    </Modal>
  );
};
