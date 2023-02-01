import PostAuthor from '../PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
const PostExert = ({ post }) => {
  return (
    <>
      <article>
        <h3> {post.title}</h3>
        <p> {post.body}</p>
        <p className="postcredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </article>
    </>
  );
};

export default PostExert;
