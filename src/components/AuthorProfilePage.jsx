import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.png.png";

function AuthorProfilePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Profile Card */}
      <div
        style={{
          width: "400px",
          padding: "40px 30px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 20px",
            border: "4px solid #2575fc",
          }}
        >
          <img
            src={profilePic}
            alt="Author"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Author Name */}
        <h2 style={{ margin: "10px 0" }}>Rifah Tasniah Mahek</h2>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2575fc",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default AuthorProfilePage;
