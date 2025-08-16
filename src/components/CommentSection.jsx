import React, { useState } from 'react';
import Comment from './Comment';
import Pagination from './Pagination';
import { commentsData } from '../data'; // Import our dummy comments

function CommentSection() {
  // WHAT: This state holds the current page number. It starts at page 1.
  // WHY: We "lifted the state up" here because this component needs to know the current page
  // in order to calculate WHICH comments to show. The Pagination component itself doesn't need to know this.
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2; // We want to show 2 comments per page

  // --- Pagination Logic ---
  // WHAT: We calculate the index of the first and last comment to show on the current page.
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  // WHAT: We use `.slice()` to get only the comments for the current page from our full data array.
  const currentComments = commentsData.slice(indexOfFirstComment, indexOfLastComment);

  // WHAT: This is the function we will pass down to the Pagination component.
  // WHY: It allows the Pagination component (the child) to change the state that lives in this component (the parent).
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="comment-section">
      <h3>{commentsData.length} Comments</h3>
      <div className="comment-input-box">
        <input type="text" placeholder="Write your comment.." />
        <button>→</button>
      </div>

      {/* We map over the *sliced* array of comments for the current page */}
      {currentComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      
      {/* We render the Pagination component and pass it all the info and functions it needs as props. */}
      <Pagination
        totalComments={commentsData.length}
        commentsPerPage={commentsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CommentSection;