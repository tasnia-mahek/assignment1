import React from 'react';
import { useParams, Link } from 'react-router-dom';
import profilePic from "../assets/profile.png.png";  // 👈 put your image in "src/assets" folder

function AuthorProfilePage() {
  const { authorName } = useParams();

  return (
    <div className="author-profile-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img 
        src={profilePic}   // 👈 using imported image
        alt="Author"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%", // makes it a circle
          objectFit: "cover",
        }}
      />
      <div>
        <h3 style={{ margin: 0 }}>{authorName}</h3>
        <p style={{ margin: 0, color: "gray" }}>7 January, 2025</p>
      </div>
    </div>
  );
}

export default AuthorProfilePage;
 