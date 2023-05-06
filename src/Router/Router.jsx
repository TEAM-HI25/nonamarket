import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login/Login';
import Splash from '../pages/Splash/Splash';
import LoginEmail from '../pages/LoginEmail/LoginEmail';
import JoinEmail from '../pages/JoinEmail/JoinEmail';
import HomeFeed from '../pages/HomeFeed/HomeFeed';
import SearchUser from '../pages/SearchUser/SearchUser';
import UserProfile from '../pages/Profile/UserProfile/UserProfile';
import FollowerList from '../pages/Follow/FollowerList';
import FollowingList from '../pages/Follow/FollowingList';
import ModifyProfile from '../pages/ModifyProfile/ModifyProfile';
import AddProduct from '../pages/AddProduct/AddProduct';
import EditProduct from '../pages/EditProduct/EditProduct';
import PostDetail from '../pages/PostDetail/PostDetail';
import UploadPost from '../pages/UploadPost/UploadPost';
import ChatList from '../pages/ChatList/ChatList';
import ChatRoom from '../pages/ChatRoom/ChatRoom';
import NotFound from '../pages/NotFound/NotFound';
import EditPost from '../pages/EditPost/EditPost';

const Router = () => {
  const LoginData = useSelector((state) => state.Login.user);

  return (
    <BrowserRouter>
      <Routes>
        {LoginData.token && LoginData.accountname ? (
          <Route>
            <Route path='/' element={<Splash />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginemail' element={<LoginEmail />} />
            <Route path='/joinemail' element={<JoinEmail />} />
            <Route path='/homefeed' element={<HomeFeed />} />
            <Route path='/searchuser' element={<SearchUser />} />
            <Route path='/profile/:accountName' element={<UserProfile />} />
            <Route
              path='/profile/:accountName/followerlist'
              element={<FollowerList />}
            />
            <Route
              path='/profile/:accountName/followinglist'
              element={<FollowingList />}
            />
            <Route path='/modifyprofile' element={<ModifyProfile />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/product/:productid' element={<EditProduct />} />
            <Route path='/postdetail/:postid' element={<PostDetail />} />
            <Route path='/editpost/:postid' element={<EditPost />} />
            <Route path='/uploadpost' element={<UploadPost />} />
            <Route path='/chatlist' element={<ChatList />} />
            <Route path='/chatroom/:chatid' element={<ChatRoom />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        ) : (
          <>
            <Route path='/' element={<Splash />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginemail' element={<LoginEmail />} />
            <Route path='/joinemail' element={<JoinEmail />} />
            <Route path='/*' element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
