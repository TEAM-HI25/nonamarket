import { useState } from 'react';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = ({ data }) => {
  const [BtnState, setBtnState] = useState(true);
  const handleBtn = (e) => {
    if (e.target.innerText === '팔로우') {
      setBtnState(false);
    } else if (e.target.innerText === '언팔로우') {
      setBtnState(true);
    }
  };
  return (
    <S.UserFollowContainer>
      <div>
        <img src={data.image} alt='프로필이미지' />
      </div>
      <div>
        <strong>{data.username}</strong>
        <p>@{data.accountname}</p>
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
