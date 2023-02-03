import { useContext } from 'react';
import commnetAPI from '../../../api/commentAPI';
import postAPI from '../../../api/postAPI';
import productAPI from '../../../api/productAPI';
import { AuthContext } from '../../../context/context';
import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledInnerModal';

const InnerModal = ({ name, CloseInnerModal, postId, productId, comment }) => {
  const { user } = useContext(AuthContext);

  const ment = {
    로그아웃: ['로그아웃 하시겠어요?', '로그아웃'],
    게시글삭제: ['게시글을 삭제할까요?', '삭제'],
    게시글신고: ['게시글을 신고할까요?', '신고'],
    댓글삭제: ['댓글을 삭제할까요?', '삭제'],
    댓글신고: ['댓글을 신고할까요?', '신고'],
    상품삭제: ['상품을 삭제할까요?', '삭제'],
  };

  const handleAction = () => {
    if (name === '로그아웃') {
      localStorage.clear();
      window.location = '/';
    } else if (name === '게시글삭제') {
      const deletePost = async () => {
        const data = await postAPI.deletePost(user.token, postId);
        if (data.status === '200') {
          CloseInnerModal();
          window.location.reload();
        } else {
          console.log(data);
        }
      };
      deletePost();
    } else if (name === '게시글신고') {
      const reportPost = async () => {
        const data = await postAPI.reportPost(user.token, postId);
        if (data.report) {
          // eslint-disable-next-line no-alert
          alert('신고되었습니다.');
          CloseInnerModal();
        } else {
          console.log(data);
        }
      };
      reportPost();
    } else if (name === '댓글삭제') {
      const deleteComment = async () => {
        const data = await commnetAPI.deleteComment(
          user.token,
          postId,
          comment.id,
        );
        if (data.status === '200') {
          CloseInnerModal();
          window.location.reload();
        }
      };
      deleteComment();
    } else if (name === '댓글신고') {
      const reportComment = async () => {
        const data = await commnetAPI.reportComment(
          user.token,
          postId,
          comment.id,
        );
        if (data.report) {
          // eslint-disable-next-line no-alert
          alert('신고되었습니다.');
          CloseInnerModal();
        }
      };
      reportComment();
    } else if (name === '상품삭제') {
      const handleDeleteProduct = async () => {
        const data = await productAPI.deleteProduct(user.token, productId);
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
