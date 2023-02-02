import PostsList from './features/posts/PostsList';
import AddPost from './features/AddPost';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import EditForm from './features/posts/EditForm';
import UserPage from './features/users/UserPage';
import UserList from './features/users/UserList';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<PostsList />} />
      <Route path="post">
        <Route index element={<AddPost />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditForm />} />
      </Route>
      <Route path="user">
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
