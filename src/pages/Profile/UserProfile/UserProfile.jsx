import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import Nav from '../../../components/Nav/Nav';
import profileAPI from '../../../api/profileAPI';
import postAPI from '../../../api/postAPI';
import ProductWrapp from '../../../components/common/Product/ProductWrapp';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import MenuBar from '../../../components/MenuBar/MenuBar';
import PostCard from '../../../components/common/PostCard/PostCard';
import PostAlbum from '../../../components/common/PostAlbum/PostAlbum';
import Button from '../../../components/common/Button/Button';
import Loading from '../../../components/Loading/Loading';
import * as S from './StyledUserProfile';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const authAccountName = user.accountname;
  const [userProfile, setUserProfile] = useState(null);
  const [userPostArr, setUserPostArr] = useState([]);
  const [userAlbumPostArr, setUserAlbumPostArr] = useState([]);
  const [list, setList] = useState(true);
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  // const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    if (!userProfile) {
      const getUserProfileInfo = async () => {
        const data = await profileAPI.getUserInfo(user.token, pageAccount);
        setUserProfile(data.profile);
      };
      getUserProfileInfo();
    }
  }, [userProfile]);

  useEffect(() => {
    if (!userPostArr.length) {
      const getMyPost = async () => {
        const data = await postAPI.getMyPost(user.token, pageAccount);
        setUserPostArr(data.post);
        const newdata = data.post.filter((post) => post.image !== '');
        setUserAlbumPostArr(newdata);
      };
      getMyPost();
    }
  }, []);

  const onListToggle = () => {
    setList(!list);
  };
  const handleGoPost = () => {
    navigate(`/uploadpost`);
  };

  return (
    <S.Container>
      <Nav type='home' />
      <S.MainWrap>
        {userProfile ? (
          <ProfileInfo
            userProfile={userProfile}
            authAccountName={authAccountName}
          />
        ) : (
          <Loading />
        )}
        <ProductWrapp pageAccount={pageAccount} />
        <MenuBar list={list} onListToggle={onListToggle} />
        {/* eslint-disable-next-line no-nested-ternary */}
        {userPostArr.length ? (
          list ? (
            <S.PostCardWrap>
              {userPostArr.map((item) => (
                <PostCard key={item.id} data={item} />
              ))}
            </S.PostCardWrap>
          ) : (
            <S.ProfilePostAlbumWrap>
              {userAlbumPostArr.map((item, index) => (
                <PostAlbum key={item.id} data={item} index={index} />
              ))}
            </S.ProfilePostAlbumWrap>
          )
        ) : pageAccount === user.accountname ? (
          <S.EmptyContainer>
            <p>반갑습니다 :-)</p>
            <span>아래 버튼을 눌러 게시글을 작성해보세요!</span>
            <Button
              type='button'
              size='m'
              name='작성하러가기!'
              onClick={handleGoPost}
            />
          </S.EmptyContainer>
        ) : (
          <S.EmptyContainer>
            <p>작성된 게시물이 없습니다 :-(</p>
            <span>올릴 게시물을 신중하게 고민중이에요...🧐</span>
          </S.EmptyContainer>
        )}
      </S.MainWrap>
      <TabMenu />
    </S.Container>
  );
};

export default UserProfile;
