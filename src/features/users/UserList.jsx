import { useSelector } from 'react-redux';
import { allUsers } from './usersSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = useSelector(allUsers);

  const renderUser = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}> {user.name}</Link>
    </li>
  ));
  return (
    <section>
      <h2> Users</h2>
      <ul> {renderUser}</ul>
    </section>
  );
};

export default UserList;
