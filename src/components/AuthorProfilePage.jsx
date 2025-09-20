import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import profilePic from "../assets/profilepic.jpeg";

function AuthorProfilePage() {
  const { authorName } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#fff", // light background
        minHeight: "100vh",
        width: "100%",
        padding: "40px",
        color: "#000",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 16px",
          marginBottom: "20px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Top Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src={profilePic}
          alt={authorName}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <h2 style={{ margin: 0, textTransform: "capitalize" }}>
            {authorName}
          </h2>
          <p style={{ margin: "5px 0", color: "#555" }}>
            Software Developer, C++ & React enthusiast 🚀
          </p>
        </div>
      </div>

      {/* Popular Articles Section */}
      <div style={{ marginTop: "40px" }}>
        <h3>Popular Articles</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
         <li>
  <a
    href="#"
    style={{ color: "#1e90ff", textDecoration: "none" }}
  >
    https://codecademy.com/article/binary-search-in-cpp
  </a>
  <span style={{ marginLeft: "10px", color: "#555", fontSize: "0.9em" }}>
    Hope you liked my article page!
  </span>
</li>


        </ul>
      </div>
    </div>
  );
}

export default AuthorProfilePage;
