import { useState } from 'react';
import ProfileImageMini from '../../../assets/images/profile-image-mini.svg';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = () => {
  const [BtnState, setBtnState] = useState(true);
  const handleBtn = (e) => {
    if (e.target.innerText === '팔로우') {
      setBtnState(false);
    } else if (e.target.innerText === '언팔로우') {
      setBtnState(true);
    }
  };
  console.log(BtnState);
  return (
    <S.UserFollowContainer>
      <div>
        <img src={ProfileImageMini} alt='프로필이미지' />
      </div>
      <div>
        <strong>애월읍 위니브 감귤농장</strong>
        <p>@weniv_Mandarin</p>
      </div>
      {BtnState ? (
        <Button name='팔로우' type='button' size='s' onClick={handleBtn} />
      ) : (
        <Button
          name='언팔로우'
          type='button'
          size='s'
          btncolor='gray'
          onClick={handleBtn}
        />
      )}
    </S.UserFollowContainer>
  );
};

export default UserFollow;
