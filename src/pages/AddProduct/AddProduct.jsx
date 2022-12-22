import Nav from '../../components/Nav/Nav';
import * as S from './StyledAddProduct';
import LabelInput from '../../components/common/LabelInput/LabelInput';

const AddProduct = () => {
  return (
    <S.AllWrapp>
      <Nav type='upload' btnName='저장' />
      <S.MainWrapp>
        <h1 className='hidden'>상품등록 페이지</h1>
        <S.FormWrapp>
          <S.ProductAddText>이미지 등록</S.ProductAddText>
          <S.ProductLoadWrapp>
            <S.ProductLabel htmlFor='이미지업로드' />
            <input className='hidden' type='file' id='이미지업로드' />
          </S.ProductLoadWrapp>
          <LabelInput
            type='text'
            label='상품명'
            forid='productName'
            placeholder='2~15자 이내여야 합니다.'
          />
          <LabelInput
            type='number'
            label='가격'
            forid='productprice'
            placeholder='숫자만 입력 가능합니다.'
          />
          <LabelInput
            type='text'
            label='판매 링크'
            forid='slaelink'
            placeholder='URL을 입력해 주세요'
          />
        </S.FormWrapp>
      </S.MainWrapp>
    </S.AllWrapp>
  );
};

export default AddProduct;
