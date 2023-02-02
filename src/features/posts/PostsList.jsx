import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';

import {
  allPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import { useEffect } from 'react';
import PostExert from './PostExert';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(allPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === 'loading') {
    content = <p> "Loading" </p>;
  } else if (postsStatus === 'succeeded') {
    const orderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderPosts.map((post) => <PostExert key={post.id} post={post} />);
  } else if (postsStatus === 'failed') {
    content = <p> {postsError}</p>;
  }

  return (
    <section>
      {' '}
      <Header />
      {content}
    </section>
  );
};

export default PostsList;
