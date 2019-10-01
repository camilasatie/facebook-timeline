import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="header">
      <img className="avatar" src={author.avatar} />
      <div className="profile">
        <span className="author">{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

function PostBody({ comments }) {
  return (
    <div className="body">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name} </span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostBody comments={comments} />
    </div>
  );
}

export default PostItem;
