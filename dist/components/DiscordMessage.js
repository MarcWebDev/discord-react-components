"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DiscordMessage = _ref => {
  let {
    children,
    profile,
    author,
    profilePicture,
    roleColor,
    bot,
    verified,
    timestamp,
    highlite,
    textOnly
  } = _ref;
  function formattedDate(time) {
    const rawDate = new Date(time);
    const today = new Date();
    if (rawDate.getDate() === today.getDate() - 1 && rawDate.getMonth() === today.getMonth() && rawDate.getFullYear() === today.getFullYear()) {
      return "Yesterday at ".concat(rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12, ":").concat(rawDate.getMinutes(), " ").concat(rawDate.getHours() <= 12 ? "AM" : "PM");
    } else if (rawDate.getDate() === today.getDate() && rawDate.getMonth() === today.getMonth() && rawDate.getFullYear() === today.getFullYear()) {
      return "Today at ".concat(rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12, ":").concat(rawDate.getMinutes(), " ").concat(rawDate.getHours() <= 12 ? "AM" : "PM");
    }
    return "".concat((rawDate.getMonth() + 1).length === 2 ? rawDate.getMonth() + 1 : "0" + (rawDate.getMonth() + 1), "/").concat(rawDate.getDate() >= 10 ? rawDate.getDate() : "0" + rawDate.getDate(), "/").concat(rawDate.getFullYear(), " ").concat(rawDate.getHours() <= 12 ? rawDate.getHours() : rawDate.getHours() - 12, ":").concat(rawDate.getMinutes(), " ").concat(rawDate.getHours() <= 12 ? "AM" : "PM");
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "discord-message ".concat(textOnly ? "text-only" : "", " ").concat(highlite ? 'highlite' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: profilePicture ? profilePicture : profile ? profile.profilePicture : "https://cdn.discordapp.com/embed/avatars/0.png",
    draggable: false
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "message"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-head"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    style: {
      color: "".concat(roleColor ? roleColor : profile ? profile.roleColor : "#fff")
    }
  }, author ? author : profile ? profile.author : "Unknown User"), checkBot() === "bot" | checkBot() === "bot+verified" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bot ".concat(checkBot() === "bot+verified" ? "verified" : "")
  }, checkBot() === "bot+verified" ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 15.2"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
    fill: "#ffffff"
  })) : "", /*#__PURE__*/_react.default.createElement("h4", null, "BOT")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("span", null, timestamp ? formattedDate(timestamp) : "")), /*#__PURE__*/_react.default.createElement("p", {
    className: "content"
  }, children)));
};
var _default = DiscordMessage;
exports.default = _default;