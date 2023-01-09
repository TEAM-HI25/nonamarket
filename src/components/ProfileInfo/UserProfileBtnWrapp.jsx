// import { useLocation } from 'react-router-dom';
// import { useState, useContext } from 'react';
// import Button from '../common/Button/Button';
import FollowButton from '../common/Button/FollowButton';
// import { AuthContext } from '../../context/context';
import * as S from './StyledProfileInfo';
import iconMessageCircle from '../../assets/images/icon-message-circle.svg';
import iconShare from '../../assets/images/icon-share.svg';

const UserProfileBtnWrapp = ({
  userProfile,
  setFolloingCount,
  setFollowerCount,
}) => {
  return (
    <S.BtnWrapper>
      <S.Btn>
        <img src={iconMessageCircle} alt='메세지아이콘' />
      </S.Btn>
      <FollowButton
        userProfile={userProfile}
        setFolloingCount={setFolloingCount}
        setFollowerCount={setFollowerCount}
      />
      <S.Btn>
        <img src={iconShare} alt='공유아이콘' />
      </S.Btn>
    </S.BtnWrapper>
  );
};

export default UserProfileBtnWrapp;
