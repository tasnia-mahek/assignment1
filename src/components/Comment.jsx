import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // We'll use this for the author link

// WHAT: This component represents a single comment.
// It receives its data (`comment`) via "props" from its parent.
// WHY: This makes the component highly reusable. We can render hundreds of comments with it, just by passing in different data.
function Comment({ comment }) {
  // State for this specific comment's like/dislike status.
  // Each comment component instance will have its OWN independent state.
  const [reaction, setReaction] = useState(null); // can be 'like', 'dislike', or null

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
          {/* We use the Link component from react-router-dom to make this a clickable navigation link */}
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