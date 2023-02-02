import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import Nav from '../../components/Nav/Nav';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import productAPI from '../../api/productAPI';
import FetchApi from '../../api/index';
import regex from '../../utils/regex';
import * as S from './StyledAddProduct';

const AddProduct = ({ editing }) => {
  // input 상태관리
  const [productImg, setproductImg] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [saleLink, setSaleLink] = useState('');

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { productid } = useParams();

  // 모든 값 valid check, 서버 전송 가능 상태시 버튼 true
  const [isValid, setIsValid] = useState({
    productImg: false,
    productName: false,
    productPrice: false,
    saleLink: false,
  });

  // pass가 true로 바뀌면 버튼 활성화
  const pass =
    isValid.productImg &&
    isValid.productName &&
    isValid.productPrice &&
    isValid.saleLink;

  // 숫자 1000단위 콤마 함수

  const priceFormat = (str) => {
    const comma = (num) => {
      const value = String(num);
      return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (num) => {
      const value = String(num);
      return value.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  // 1. input창에 보이기
  const handleData = (event) => {
    if (event.target.id === 'productname') {
      setProductName(event.target.value);
    } else if (event.target.id === 'productprice') {
      setProductPrice(priceFormat(event.target.value));
    } else if (event.target.id === 'salelink') {
      setSaleLink(event.target.value);
    }
  };

  // 이미지 주소 받아오기
  const handleGetImg = async (event) => {
    const data = await FetchApi.uploadImg(event);
    setproductImg(data);
    console.log(productImg);
    setIsValid({ ...isValid, productImg: true });
  };

  // 2-1) 상품명 유효성 검사
  const handleCheckName = () => {
    if (regex.PRODUCT_NAME_CHECK.test(productName)) {
      setIsValid({ ...isValid, productName: true });
    } else {
      setIsValid({ ...isValid, productName: false });
    }
  };

  // 2-2) 가격 유효성 검사
  const handleCheckPrice = () => {
    if (regex.PRODUCT_PRICE_CHECK.test(productPrice)) {
      setIsValid({ ...isValid, productPrice: true });
    } else {
      setIsValid({ ...isValid, productPrice: false });
    }
  };

  // 2-3) url 유효성 검사
  const handleCheckSaleLink = () => {
    if (regex.SALE_LINK_CHECK.test(saleLink)) {
      setIsValid({ ...isValid, saleLink: true });
    } else {
      setIsValid({ ...isValid, saleLink: false });
    }
  };

  // 게시글 수정할 때 기존 데이터 가져오기
  useEffect(() => {
    if (editing) {
      const setProductFeed = async () => {
        const data = await productAPI.getOriginalProductInfo(
          user.token,
          productid,
        );
        setproductImg(data.product.itemImage);
        setProductName(data.product.itemName);
        setProductPrice(priceFormat(data.product.price));
        setSaleLink(data.product.link);
        setIsValid({
          ...isValid,
          productImg: true,
          productName: true,
          productPrice: true,
          saleLink: true,
        });
      };
      setProductFeed();
    }
  }, [productid]);

  // editing 이 true 면 상품 수정, false 면 상품 등록
  const handleSubmit = async (event) => {
    event.preventDefault(); // submit 제출 막기(새로고침막기)
    const Data = {
      product: {
        itemName: `${productName}`,
        price: parseInt(productPrice.replace(',', ''), 10), // 서버 전송 가능 형태로 가공
        link: `${saleLink}`,
        itemImage: `${productImg}`,
      },
    };
    if (editing) {
      const data = await productAPI.reviseProductInfo(
        user.token,
        productid,
        Data,
      );
      navigate(`/profile/${user.accountname}`);
      return data;
    } else {
      const productData = await productAPI.registerProduct(Data, user.token);
      navigate(`/profile/${user.accountname}`);
      return productData;
    }
  };

  return (
    <S.AllWrapp onSubmit={handleSubmit}>
      <Nav type='upload' btnName='저장' disabled={!pass} />
      <S.MainWrapp>
        <h1 className='hidden'>상품등록 페이지</h1>
        <S.InputWrapp>
          <S.ProductAddText>이미지 등록</S.ProductAddText>
          <S.ProductLoadWrapp>
            <S.ProductLabel htmlFor='이미지업로드' />
            {productImg && <img src={productImg} alt='상품 등록 이미지' />}
            <input
              onChange={handleGetImg}
              className='hidden'
              type='file'
              id='이미지업로드'
            />
          </S.ProductLoadWrapp>
          <LabelInput
            type='text'
            label='노나먹을 식재료명'
            forid='productname'
            state={productName}
            placeholder='2~15자 이내여야 합니다.'
            onChange={handleData}
            onKeyUp={handleCheckName}
          />
          <LabelInput
            type='text'
            label='가격'
            forid='productprice'
            state={productPrice}
            placeholder='숫자만 입력 가능합니다.'
            onChange={handleData}
            onKeyUp={handleCheckPrice}
          />
          <LabelInput
            type='text'
            label='판매 링크'
            forid='salelink'
            state={saleLink}
            placeholder='URL을 입력해 주세요'
            onChange={handleData}
            onKeyUp={handleCheckSaleLink}
          />
        </S.InputWrapp>
      </S.MainWrapp>
    </S.AllWrapp>
  );
};

export default AddProduct;
