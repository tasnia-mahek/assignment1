import React, { useState } from "react";

function PostReactions() {
    const [showReactions, setShowReactions] = useState(null);

    const reactions = [
        { name: "Like", count: "10%" },
        { name: "Love", count: "5%" },
        { name: "Angry", count: "2%" },
        { name: "Sad", count: "1%" },
    ];

    const handleReactionClick = (reactionName) => {
        if (showReactions === reactionName) {
            setShowReactions(null);
        } else {
            setShowReactions(reactionName);
        }
    };

    return (
        <div className="post-reactions">
            {reactions.map((reaction) => (
                <div
                    key={reaction.name}
                    className={`reaction-button ${
                        showReactions === reaction.name ? "active" : ""
                    }`}
                    onClick={() => handleReactionClick(reaction.name)}
                >
                    <strong>{reaction.name}</strong>
                    <span> ({reaction.count})</span>
                </div>
            ))}
        </div>
    );
}

export default PostReactions;
