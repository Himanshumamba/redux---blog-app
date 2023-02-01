import { useSelector } from 'react-redux';
import { allUsers } from './users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(allUsers);
  const author = users.find((user) => user.id === userId);

  return <span>{author ? author.name : 'unknownauthor'}</span>;
};

export default PostAuthor;
