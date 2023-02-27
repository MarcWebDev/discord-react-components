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
    highlite
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "discord-message"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "message"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-head"
  }, /*#__PURE__*/_react.default.createElement("h5", null, author ? author : profile ? profile.author : "Unknown User"), /*#__PURE__*/_react.default.createElement("span", null, timestamp)), /*#__PURE__*/_react.default.createElement("p", {
    className: "content"
  }, children)));
};
var _default = DiscordMessage;
exports.default = _default;