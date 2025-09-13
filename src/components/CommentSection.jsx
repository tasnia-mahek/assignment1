import React, { useState } from 'react';
import Comment from './Comment';
import Pagination from './Pagination';
import { commentsData } from '../data'; 

function CommentSection() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2; 

  //  We calculate the index of the first and last comment to show on the current page.
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  
  const currentComments = commentsData.slice(indexOfFirstComment, indexOfLastComment);


  
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

      
      {currentComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      
  
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