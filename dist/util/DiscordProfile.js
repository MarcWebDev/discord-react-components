"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class DiscordProfile {
  constructor(options) {
    _defineProperty(this, "author", void 0);
    _defineProperty(this, "profilePicture", void 0);
    _defineProperty(this, "roleColor", void 0);
    _defineProperty(this, "bot", void 0);
    _defineProperty(this, "verified", void 0);
    this.author = options.author;
    this.profilePicture = options.profilePicture;
    this.roleColor = options.roleColor;
    this.bot = options.bot;
    this.verified = options.verified;
  }
}
exports.default = DiscordProfile;