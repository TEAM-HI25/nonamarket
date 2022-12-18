import * as S from './StyledSearchUser';
import Nav from '../../components/Nav/Nav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import UserprofileImg from '../../assets/images/profile-image-mini.svg';

const SearchUser = () => {
  return (
    <S.LayOut>
      <Nav type='search' />
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
