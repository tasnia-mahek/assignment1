import React from 'react';
import { Link } from 'react-router-dom';
import { articleData } from '../data';
import PostReactions from './PostReactions';
import CommentSection from './CommentSection';
import profilePic from "../assets/profilepic.jpeg"; // author profile picture

function ArticlePage() {
  const { title, subTitle, imageCaption, authorName, publishDate, body } = articleData;

  return (
    <div className="article-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/section">Section</Link> &gt;{" "}
        <Link to={`/section/subsection/${encodeURIComponent(authorName)}`}>
          Sub-section
        </Link>
      </div>

      <header className="article-header">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </header>

      <div className="article-image-placeholder"></div>
      <p className="image-caption">{imageCaption}</p>

      {/* Author Info */}
      <div className="author-info">
        <div className="author-avatar">
          <img src={profilePic} alt={authorName} />
        </div>
        <div className="author-details">
          <Link to={`/author/${encodeURIComponent(authorName)}`}>
            {authorName}
          </Link>
          <span>{publishDate}</span>
        </div>
      </div>

      <div className="article-body">
        <p>{body}</p>
      </div>

      <PostReactions />
      <CommentSection />
    </div>
  );
}

export default ArticlePage;
