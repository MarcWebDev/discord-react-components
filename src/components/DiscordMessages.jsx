import React from "react";

const DiscordMessages = ({ children, width }) => {
  return (
    <div className="discord-messages" style={{ width: `${width}` }}>
      {children}
    </div>
  );
};

export default DiscordMessages;
