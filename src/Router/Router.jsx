import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Splash from '../pages/Splash/Splash';
import LoginEmail from '../pages/LoginEmail/LoginEmail';
import JoinEmail from '../pages/JoinEmail/JoinEmail';
import JoinProfileEdit from '../pages/JoinProfileEdit/JoinProfileEdit';
import HomeFeed from '../pages/HomeFeed/HomeFeed';
import SearchUser from '../pages/SearchUser/SearchUser';
import YourProfile from '../pages/YourProfile/YourProfile';
import MyProfile from '../pages/MyProfile/MyProfile';
import FollowerList from '../pages/FollowerList/FollowerList';
import FollowingList from '../pages/FollowingList/FollowingList';
import ModifyProfile from '../pages/ModifyProfile/ModifyProfile';
import AddProduct from '../pages/AddProduct/AddProduct';
import PostDetail from '../pages/PostDetail/PostDetail';
import UploadPost from '../pages/UploadPost/UploadPost';
import ChatList from '../pages/ChatList/ChatList';
import ChatRoom from '../pages/ChatRoom/ChatRoom';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/splash' element={<Splash />} />
        <Route path='/loginemail' element={<LoginEmail />} />
        <Route path='/joinemail' element={<JoinEmail />} />
        <Route path='/joinprofileedit' element={<JoinProfileEdit />} />
        <Route path='/homefeed' element={<HomeFeed />} />
        <Route path='/searchuser' element={<SearchUser />} />
        <Route path='/yourprofile' element={<YourProfile />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/followerlist' element={<FollowerList />} />
        <Route path='/followinglist' element={<FollowingList />} />
        <Route path='/modifyprofile' element={<ModifyProfile />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/postdetail' element={<PostDetail />} />
        <Route path='/uploadpost' element={<UploadPost />} />
        <Route path='/chatlist' element={<ChatList />} />
        <Route path='/chatroom' element={<ChatRoom />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;