import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/context';
import FetchApi from '../../../api';
import ProductSection from './StyledProductWrapp';
import Product from './Product';
import Modal from '../Modal/Modal';
import ProductInnerModal from '../Modal/ProductInnerModal';

const ProductWrapp = () => {
  const [productList, setProductList] = useState([]);
  const { user } = useContext(AuthContext);
  // 모달 열기
  const [openModal, setOpenModal] = useState(false);
  const [openInnerModal, setOpenInnerModal] = useState(false);

  // 화면에 첫 렌더링될때만 서버통신 실행
  useEffect(() => {
    const setProductFeed = async () => {
      const data = await FetchApi.loadProductFeed(user.token, user.accountname);
      setProductList(data.product);
      console.log(data.product);
    };
    setProductFeed();
  }, []);

  // 메인 모달 열기 함수
  const handleShowModal = () => {
    setOpenModal(true);
  };

  // 메인 모달 닫기 함수
  const handleCloseModal = (event) => {
    // 부모요소인 S.ModalWrapper 를 클릭했을때만 이벤트가 실행되게 하기
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  };

  // 이너 모달 열기 함수
  const handleShowInnerModal = () => {
    setOpenInnerModal(true);
  };
  // 이너 모달 닫기 함수
  const handleCloseInnerModal = () => {
    setOpenModal(false);
    setOpenInnerModal(false);
  };

  return (
    <>
      {productList.length > 0 ? (
        <ProductSection>
          <h2>판매 중인 상품</h2>
          <ul>
            <li>
              {productList.map((item) => {
                return (
                  <button key={item.id} type='button' onClick={handleShowModal}>
                    <Product product={item} />
                  </button>
                );
              })}
            </li>
          </ul>
        </ProductSection>
      ) : null}
      {openModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          handleShowInnerModal={handleShowInnerModal}
        />
      )}
      {openInnerModal && (
        <ProductInnerModal handleCloseInnerModal={handleCloseInnerModal} />
      )}
    </>
  );
};

export default ProductWrapp;
