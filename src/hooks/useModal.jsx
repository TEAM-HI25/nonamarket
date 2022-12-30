import { useState } from 'react';

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowInnerModal, setIsShowInnerModal] = useState(false);

  const handleShowModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleShowInnerModal = () => {
    setIsShowInnerModal(true);
  };

  const handleCloseInnerModal = () => {
    setIsShowInnerModal(false);
    setIsShowModal(false);
  };

  return [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    handleShowInnerModal,
    handleCloseInnerModal,
  ];
};

export default useModal;
