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

  const hanldeShowInnerModal = () => {
    setIsShowInnerModal(true);
  };

  const handlCloseInnerModal = () => {
    setIsShowInnerModal(false);
    setIsShowModal(false);
  };

  return [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    hanldeShowInnerModal,
    handlCloseInnerModal,
  ];
};

export default useModal;
