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
  textOnly,
}) => {
  function formattedDate(time) {
    const rawDate = new Date(time);
    const today = new Date();

    if (
      rawDate.getDate() === today.getDate() - 1 &&
      rawDate.getMonth() === today.getMonth() &&
      rawDate.getFullYear() === today.getFullYear()
    ) {
      return `Yesterday at ${
        rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12
      }:${rawDate.getMinutes()} ${rawDate.getHours() <= 12 ? "AM" : "PM"}`;
    } else if (
      rawDate.getDate() === today.getDate() &&
      rawDate.getMonth() === today.getMonth() &&
      rawDate.getFullYear() === today.getFullYear()
    ) {
      return `Today at ${
        rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12
      }:${rawDate.getMinutes()} ${rawDate.getHours() <= 12 ? "AM" : "PM"}`;
    }

    return `${
      (rawDate.getMonth() + 1).length === 2
        ? rawDate.getMonth() + 1
        : "0" + (rawDate.getMonth() + 1)
    }/${
      rawDate.getDate() >= 10 ? rawDate.getDate() : "0" + rawDate.getDate()
    }/${rawDate.getFullYear()} ${
      rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12
    }:${rawDate.getMinutes()} ${rawDate.getHours() <= 12 ? "AM" : "PM"}`;
  }

  function checkBot() {
    if (bot) {
      if (verified) {
        return "bot+verified";
      } else if (verified === false) {
        return "bot";
      } else if (profile.verified) {
        return "bot+verified";
      } else {
        return "bot";
      }
    } else if (profile.bot) {
      if (profile.verified) {
        return "bot+verified";
      } else if (verified) {
        return "bot+verified";
      }
    } else {
      return "no-bot";
    }
  }

  return (
    <div className={`discord-message ${textOnly ? "text-only" : ""} ${highlite ? 'highlite' : ''}`}>
      <div className="avatar">
        <img
          src={
            profilePicture
              ? profilePicture
              : profile
              ? profile.profilePicture
              : "https://cdn.discordapp.com/embed/avatars/0.png"
          }
          draggable={false}
        />
      </div>
      <div className="message">
        <div className="message-head">
          <h5
            style={{
              color: `${
                roleColor ? roleColor : profile ? profile.roleColor : "#fff"
              }`,
            }}
          >
            {author ? author : profile ? profile.author : "Unknown User"}
          </h5>
          {(checkBot() === "bot") | (checkBot() === "bot+verified") ? (
            <div
              className={`bot ${
                checkBot() === "bot+verified" ? "verified" : ""
              }`}
            >
              {checkBot() === "bot+verified" ? (
                <svg width="16" height="16" viewBox="0 0 16 15.2">
                  <path
                    d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              ) : (
                ""
              )}
              <h4>BOT</h4>
            </div>
          ) : (
            <></>
          )}
          <span>{timestamp ? formattedDate(timestamp) : ""}</span>
        </div>
        <p className="content">{children}</p>
      </div>
    </div>
  );
};

export default DiscordMessage;
