import Nav from '../../components/Nav/Nav';
import * as S from './StyledAddProduct';

const AddProduct = () => {
  return (
    <S.LayOut>
      <h1 className='hidden'>상품등록 페이지</h1>
      <Nav type='upload' />
      <S.FormWrapp>
        <S.ProductAddText>이미지 등록</S.ProductAddText>
        <S.ProductLoadWrapp>
          <label htmlFor='이미지업로드' />
          <input className='hidden' type='file' id='이미지업로드' />
        </S.ProductLoadWrapp>
        {/*  */}
        <S.LabelInputWrapp>
          <S.Label htmlFor='상품명'>상품명</S.Label>
          <input
            type='text'
            id='상품명'
            placeholder='2~10자 이내여야 합니다.'
          />
        </S.LabelInputWrapp>
        {/*  */}
        <S.LabelInputWrapp>
          <S.Label htmlFor='가격'>가격</S.Label>
          <input
            type='number'
            id='가격'
            placeholder='숫자만 입력 가능합니다.'
          />
        </S.LabelInputWrapp>
        {/*  */}
        <S.LabelInputWrapp>
          <S.Label htmlFor='판매 링크'>판매 링크</S.Label>
          <input type='text' id='판매 링크' placeholder='URL을 입력해 주세요' />
        </S.LabelInputWrapp>
      </S.FormWrapp>
    </S.LayOut>
  );
};

export default AddProduct;
