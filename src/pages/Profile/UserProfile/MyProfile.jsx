// import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../../../context/context';
// import Nav from '../../../components/Nav/Nav';
// // import Product from '../../../components/common/Product/Product';
// import TabMenu from '../../../components/common/TabMenu/TabMenu';
// import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
// import MenuBar from '../../../components/MenuBar/MenuBar';
// // import PostCard from '../../../components/common/PostCard/PostCard';
// import * as S from '../YourProfile/StyledYourProfile';
// import FetchApi from '../../../api';

// const UsererProfile = () => {
//   const { user } = useContext(AuthContext);
//   // 로그인한 사용자의 accountname
//   const authAccountName = user.accountname;
//   const [myProfile, setMyProfile] = useState(null);

//   useEffect(() => {
//     if (!myProfile) {
//       const getMyProfileInfo = async () => {
//         const data = await FetchApi.getUserInfo(user.token, authAccountName);
//         console.log(data.profile);
//         setMyProfile(data.profile);
//       };
//       getMyProfileInfo();
//     }
//   }, [myProfile]);

//   return (
//     <S.Container>
//       <Nav type='home' />
//       <S.MainWrap>
//         {myProfile ? (
//           <ProfileInfo myProfile={myProfile} />
//         ) : (
//           <p>로딩중입니다...</p>
//         )}

//         <S.ProductsSection>
//           <h2>판매 중인 상품</h2>
//           <div>
//             {/* <Product />
//             <Product />
//             <Product /> */}
//           </div>
//         </S.ProductsSection>
//         <S.PostCardWrap>
//           <MenuBar />
//           {/* <PostCard />
//           <PostCard />
//           <PostCard /> */}
//         </S.PostCardWrap>
//       </S.MainWrap>
//       <TabMenu />
//     </S.Container>
//   );
// };

// export default UsererProfile;
