import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


function Comment({ comment }) {

  const [reaction, setReaction] = useState(null); 

  const handleLike = () => {
    setReaction(reaction === 'like' ? null : 'like');
  };

  const handleDislike = () => {
    setReaction(reaction === 'dislike' ? null : 'dislike');
  };

  return (
    <div className="comment">
      <div className="comment-avatar"></div>
      <div className="comment-content">
        <div>
        
          <Link to={`/author/${comment.author}`} className="author-name">{comment.author}</Link>
          <span className="date">{comment.date}</span>
          <a className="report-link">Report</a>
        </div>
        <p className="comment-text">{comment.text}</p>
        <div className="comment-actions">
          <a onClick={handleLike} className={reaction === 'like' ? 'selected' : ''}>
            Like {comment.likes}
          </a>
          <a onClick={handleDislike} className={reaction === 'dislike' ? 'selected' : ''}>
            Dislike {comment.dislikes}
          </a>
          <a>Reply</a>
        </div>
      </div>
    </div>
  );
}

export default Comment;