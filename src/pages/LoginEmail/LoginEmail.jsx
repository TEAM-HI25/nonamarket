import LabelInput from '../../components/common/LabelInput/LabelInput';
import * as S from './StyledLoginEmail';

const LoginEmail = () => {
  return (
    <S.LoginWrapper>
      <S.LoginTitle>로그인</S.LoginTitle>
      <form>
        <LabelInput label='이메일' forid='email' type='email' />
        <LabelInput label='비밀번호' forid='password' type='password' />
        <S.LoginBtn name='로그인' />
      </form>
      <S.LoginLink to='/joinemail'>이메일로 회원가입</S.LoginLink>
    </S.LoginWrapper>
  );
};

export default LoginEmail;
