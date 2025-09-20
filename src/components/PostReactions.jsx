import React, { useState } from "react";

function PostReactions() {
  const [activeReaction, setActiveReaction] = useState(null);

  // emojis + percentages
  const reactions = [
    { name: "Like", emoji: "👍", count: "10%" },
    { name: "Love", emoji: "❤️", count: "5%" },
    { name: "Angry", emoji: "😡", count: "2%" },
    { name: "Sad", emoji: "😢", count: "1%" },
  ];

  const handleReactionClick = (reactionName) => {
    setActiveReaction(activeReaction === reactionName ? null : reactionName);
  };

  return (
    <div className="post-reactions" style={{ display: "flex", gap: "10px" }}>
      {reactions.map((reaction) => (
        <button
          key={reaction.name}
          className={`reaction-button ${
            activeReaction === reaction.name ? "active" : ""
          }`}
          onClick={() => handleReactionClick(reaction.name)}
          style={{
            border: activeReaction === reaction.name ? "2px solid #007bff" : "1px solid #ccc",
            borderRadius: "20px",
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: activeReaction === reaction.name ? "#e6f0ff" : "#fff",
          }}
        >
          <span style={{ fontSize: "20px", marginRight: "6px" }}>
            {reaction.emoji}
          </span>
          <strong>{reaction.name}</strong>
          <span style={{ marginLeft: "6px", color: "#555" }}>
            ({reaction.count})
          </span>
        </button>
      ))}
    </div>
  );
}

export default PostReactions;
