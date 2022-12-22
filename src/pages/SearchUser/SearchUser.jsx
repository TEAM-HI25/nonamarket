import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/context';
import FetchApi from '../../api';
import Nav from '../../components/Nav/Nav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import UserprofileImg from '../../assets/images/profile-image-mini.svg';
import * as S from './StyledSearchUser';

const SearchUser = () => {
  const [keyword, setKeyword] = useState('');
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(userData);
  const handleUpdateKeyword = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword) {
      const getUserData = async () => {
        const data = await FetchApi.searchUser(keyword, user.token);
        console.log(data);
        setUserData(data);
      };

      getUserData();
    }
  }, [keyword]);

  return (
    <S.LayOut>
      <Nav type='search' state={keyword} handle={handleUpdateKeyword} />
      <S.Main>
        <S.ResultListWrapp>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
          <S.ResultList>
            <div>
              <S.UserprofileImg src={UserprofileImg} alt='' />
            </div>
            <div>
              <S.UserName>애월읍 감귤농장</S.UserName>
              <S.UserId>@wenive</S.UserId>
            </div>
            {/* <div>상태/날짜</div> */}
          </S.ResultList>
        </S.ResultListWrapp>
      </S.Main>
      <TabMenu />
    </S.LayOut>
  );
};

export default SearchUser;
