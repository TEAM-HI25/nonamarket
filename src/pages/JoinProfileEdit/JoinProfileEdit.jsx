import ImageInput from '../../components/common/ImageInput/ImageInput';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import * as S from './StyledJoinProfileEdit';

const JoinProfileEdit = () => {
  return (
    <S.JoinPfWrap>
      <S.JoinPfTitle>프로필 설정</S.JoinPfTitle>
      <S.JoinPfDesc>나중에 언제든지 변경할 수 있습니다.</S.JoinPfDesc>
      <form>
        <ImageInput />
        <LabelInput
          label='사용자 이름'
          forid='username'
          type='text'
          placeholder='2~10자 이내여야 합니다.'
        />
        <LabelInput
          label='계정 ID'
          forid='userid'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />
        <LabelInput
          label='소개'
          forid='intro'
          type='text'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
        />
        <S.JoinPfBtn name='감귤마켓 시작하기' />
      </form>
    </S.JoinPfWrap>
  );
};

export default JoinProfileEdit;
