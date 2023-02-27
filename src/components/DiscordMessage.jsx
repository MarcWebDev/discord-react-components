import React from "react";

const DiscordMessage = ({
  children,
  profile,
  author,
  profilePicture,
  roleColor,
  bot,
  verified,
  timestamp,
  highlite,
}) => {
  return (
    <div className="discord-message">
      <div className="avatar"></div>
      <div className="message">
        <div className="message-head">
          <h5>{author ? author : profile ? profile.author : "Unknown User"}</h5>
          <span>{timestamp}</span>
        </div>
        <p className="content">{children}</p>
      </div>
    </div>
  );
};

export default DiscordMessage;
