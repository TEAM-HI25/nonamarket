import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import { UserContext } from '../../../context/userContext';
import profileAPI from '../../../api/profileAPI';
import postAPI from '../../../api/postAPI';
import Nav from '../../../components/Nav/Nav';
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
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserContext);

  const [listType, setListType] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [userPostArr, setUserPostArr] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  const authAccountName = user.accountname;
  const pageAccountName = location.pathname.split('/')[2];

  // user의 profile data 를 불러오는 useEffect hook
  useEffect(() => {
    const getUserProfileInfo = async () => {
      const authData = await profileAPI.getUserInfo(
        user.token,
        pageAccountName,
      );
      setUserProfile(authData.profile);
      const UserData = { ...authData.profile };
      dispatch({ type: 'UserProfile', payload: UserData });
    };
    getUserProfileInfo();
  }, [isAuth, pageAccountName]);

  // post data 를 불러오는 useEffect hook
  useEffect(() => {
    const getMyPost = async () => {
      const data = await postAPI.getMyPost(user.token, pageAccountName);
      setUserPostArr(data.post);
    };
    getMyPost();
  }, [isAuth, pageAccountName]);

  const onListToggle = () => {
    setListType(!listType);
  };

  const handleGoPost = () => {
    navigate(`/uploadpost`);
  };

  // 유저의 등록된 게시물 Card/AlbumType 보기유형 선택함수
  const postTypeSelect = () => {
    if (listType) {
      return (
        <S.PostCardWrap>
          {userPostArr.map((item) => (
            <PostCard key={item.id} data={item} />
          ))}
        </S.PostCardWrap>
      );
    } else {
      return (
        <S.PostAlbumWrap>
          {userPostArr
            .filter((post) => post.image !== '')
            .map((item, index) => (
              <PostAlbum key={item.id} data={item} index={index} />
            ))}
        </S.PostAlbumWrap>
      );
    }
  };

  // 유저의 등록된 게시물이 비어있는 경우 나타내는 함수
  const emptyPost = () => {
    if (pageAccountName === user.accountname) {
      return (
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
      );
    } else {
      return (
        <S.EmptyContainer>
          <p>작성된 게시물이 없습니다 :-(</p>
          <span>올릴 게시물을 신중하게 고민중이에요...🧐</span>
        </S.EmptyContainer>
      );
    }
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
        <ProductWrapp pageAccount={pageAccountName} />
        <MenuBar list={listType} onListToggle={onListToggle} />
        {userPostArr.length ? postTypeSelect() : emptyPost()}
      </S.MainWrap>
      <TabMenu isAuth={isAuth} setIsAuth={setIsAuth} />
    </S.Container>
  );
};

export default UserProfile;
