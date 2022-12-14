import * as S from './StyledLogin';
import logo from '../../assets/images/symbol-logo.svg';

const Login = () => {
  return (
    <S.LoginWrap>
      <h1 className='hidden'>로그인 및 회원가입 선택 화면</h1>
      <S.WhiteLogo src={logo} alt='노나먹자 로고 이미지' />
      <S.ModalWrap>
        <h2 className='hidden'>로그인 및 회원가입 선택 모달</h2>
        <S.LoginBtn type='button' logintype='kakao'>
          카카오 계정으로 로그인
        </S.LoginBtn>
        <S.LoginBtn type='button' logintype='google'>
          구글 계정으로 로그인
        </S.LoginBtn>
        <S.LoginBtn type='button' logintype='facebook'>
          페이스북 계정으로 로그인
        </S.LoginBtn>
        <S.LinkWrap>
          <S.JoinLink to='/loginemail'>이메일로 로그인</S.JoinLink>
          <S.JoinLink to='/joinemail'>회원가입</S.JoinLink>
        </S.LinkWrap>
      </S.ModalWrap>
    </S.LoginWrap>
  );
};

export default Login;
