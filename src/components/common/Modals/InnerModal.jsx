import { useSelector } from 'react-redux';
import commentAPI from '../../../api/commentAPI';
import postAPI from '../../../api/postAPI';
import productAPI from '../../../api/productAPI';
import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledInnerModal';

const InnerModal = ({ name, CloseInnerModal, postId, productId, comment }) => {
  const LoginData = useSelector((state) => state.Login.user);

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
        const data = await postAPI.deletePost(postId);
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
        const data = await postAPI.reportPost(postId);
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
        const data = await commentAPI.deleteComment(postId, comment.id);
        if (data.status === '200') {
          CloseInnerModal();
          window.location.reload();
        }
      };
      deleteComment();
    } else if (name === '댓글신고') {
      const reportComment = async () => {
        const data = await commentAPI.reportComment(
          LoginData.token,
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
        const data = await productAPI.deleteProduct(productId);
        if (parseInt(data.status, 10) === 200) {
          CloseInnerModal();
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
