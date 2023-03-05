"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DiscordMessages = _ref => {
  let {
    children,
    width
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "discord-messages",
    style: {
      width: "".concat(width)
    }
  }, children);
};
var _default = DiscordMessages;
exports.default = _default;