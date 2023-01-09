import useModal from '../../hooks/useModal';
import Modal from '../common/Modals/Modal';
import ModalBtn from '../common/Modals/ModalBtn';
import InnerModal from '../common/Modals/InnerModal';
import MoreImg from '../../assets/images/icon-more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';
import * as S from './StyledNav';

const HomeNav = ({ handleReturn }) => {
  const [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    handleShowInnerModal,
    handleCloseInnerModal,
  ] = useModal();
  return (
    <>
      {/* <h2 className='hidden'>뒤로가기,더보기 메뉴</h2> */}
      <button type='button' onClick={handleReturn}>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <button type='button' onClick={handleShowModal}>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </button>

      {!isShowModal ? null : (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='설정 및 개인정보' />
          <ModalBtn name='로그아웃' onClick={handleShowInnerModal} />
        </Modal>
      )}

      {!isShowInnerModal ? null : (
        <InnerModal name='로그아웃' CloseInnerModal={handleCloseInnerModal} />
      )}
    </>
  );
};

export default HomeNav;
