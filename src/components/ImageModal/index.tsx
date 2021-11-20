import React, { useState } from "react";
import Modal from "react-modal";

interface Props {
  src: string;
  alt: string;
}

const ImageModal: React.FC<Props> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <img
        className="w-full h-auto rounded-lg cursor-pointer"
        src={src}
        alt={alt}
        onClick={toggleModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <img
          className="w-full h-auto rounded-lg"
          src={src}
          alt={alt}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
