import React, { useState } from 'react';

function Comment({ comment }) {
  const [reaction, setReaction] = useState(null);
  const [likes, setLikes] = useState(comment.likes || 0);
  const [dislikes, setDislikes] = useState(comment.dislikes || 0);

  const handleLike = () => {
    if (reaction === 'like') {
      setLikes(likes - 1);
      setReaction(null);
    } else {
      setLikes(likes + 1);
      if (reaction === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setReaction('like');
    }
  };

  const handleDislike = () => {
    if (reaction === 'dislike') {
      setDislikes(dislikes - 1);
      setReaction(null);
    } else {
      setDislikes(dislikes + 1);
      if (reaction === 'like') {
        setLikes(likes - 1);
      }
      setReaction('dislike');
    }
  };

  return (
    <div className="comment">
      <div className="comment-avatar"></div>
      <div className="comment-content">
        <div>
          {/* commenter name as plain text */}
          <span className="author-name">{comment.author}</span>
          <span className="date">{comment.date}</span>
          <a className="report-link">Report</a>
        </div>
        <p className="comment-text">{comment.text}</p>
        <div className="comment-actions">
          <a onClick={handleLike} className={reaction === 'like' ? 'selected' : ''}>
            Like {likes}
          </a>
          <a onClick={handleDislike} className={reaction === 'dislike' ? 'selected' : ''}>
            Dislike {dislikes}
          </a>
          <a>Reply</a>
        </div>
      </div>
    </div>
  );
}

export default Comment;
