import LabelInput from '../../components/common/LabelInput/LabelInput';
import {
  JoinEmailWrapper,
  JoinEmailTitle,
  JoinEmailBtn,
} from './StyledJoinEmail';

const JoinEmail = () => {
  return (
    <JoinEmailWrapper>
      <JoinEmailTitle>이메일로 회원가입</JoinEmailTitle>
      <form>
        <LabelInput
          label='이메일'
          forid='email'
          type='email'
          placeholder='이메일 주소를 입력해 주세요.'
        />
        <LabelInput
          label='비밀번호'
          forid='password'
          type='password'
          placeholder='비밀번호를 설정해 주세요.'
        />
        <JoinEmailBtn name='다음' />
      </form>
    </JoinEmailWrapper>
  );
};

export default JoinEmail;
