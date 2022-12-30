import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledInnerModal';

const InnerModal = ({ name, CloseInnerModal, postId, productId }) => {
  const { user } = useContext(AuthContext);

  const ment = {
    로그아웃: ['로그아웃 하시겠어요?', '로그아웃'],
    게시글삭제: ['게시글을 삭제할까요?', '삭제'],
    게시글신고: ['게시글을 신고할까요?', '신고'],
    상품삭제: ['상품을 삭제할까요?', '삭제'],
  };

  const handleAction = () => {
    if (name === '로그아웃') {
      localStorage.clear();
      window.location = '/';
    } else if (name === '게시글삭제') {
      const deletePost = async () => {
        const response = await fetch(
          `https://mandarin.api.weniv.co.kr/post/${postId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        if (data.status === '200') {
          CloseInnerModal();
          window.location.reload();
        }
      };
      deletePost();
    } else if (name === '게시글신고') {
      const reportPost = async () => {
        const response = await fetch(
          `https://mandarin.api.weniv.co.kr/post/${postId}/report`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        if (data.report) {
          // eslint-disable-next-line no-alert
          alert('신고되었습니다.');
          CloseInnerModal();
        }
      };
      reportPost();
    } else if (name === '상품삭제') {
      const handleDeleteProduct = async () => {
        const response = await fetch(
          `https://mandarin.api.weniv.co.kr/product/${productId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        console.log(data);
        if (parseInt(data.status, 10) === 200) {
          CloseInnerModal();
          // 페이지 새로고침돼서 삭제된 상품목록 페이지 보여주기
          window.location.reload();
        }
      };
      handleDeleteProduct();
    }
  };

  return (
    <InnerModalContainer>
      <h2 className='hidden'>확인 모달</h2>
      <InnerModalWrap>
        <p>{ment[name][0]}</p>
        <InnerModalBtnWrap>
          <button type='button' onClick={CloseInnerModal}>
            취소
          </button>
          <button type='button' onClick={handleAction}>
            {ment[name][1]}
          </button>
        </InnerModalBtnWrap>
      </InnerModalWrap>
    </InnerModalContainer>
  );
};

export default InnerModal;
