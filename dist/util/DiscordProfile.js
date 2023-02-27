"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _types = require("util/types");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* @example 
* const PROFILNAME = new DiscordProfile(
  author: "Name",
  profilePicture: "profile picture icon",
  roleColor: "hexcode",
  bot: false,
  verified: false
  );
});
*/

class DiscordProfile {
  /**
   * Creates a new Discord user Profile 
   * @param {String} author
   * @param {String} profilePicture
   * @param {String} roleColor
   * @param {Boolean} bot
   * @param {Boolean} verified
   * @returns {DiscordProfile}
   */

  constructor(author, profilePicture, roleColor, bot, verified) {
    _defineProperty(this, "author", void 0);
    _defineProperty(this, "profilePicture", void 0);
    _defineProperty(this, "roleColor", void 0);
    _defineProperty(this, "bot", void 0);
    _defineProperty(this, "verified", void 0);
    if (!author || typeof author !== 'string') {
      throw new Error('Expected author string instead got ' + typeof author);
    }
    if (!profilePicture || typeof profilePicture !== 'string') {
      throw new Error('Expected profilePicture string instead got ' + typeof profilePicture);
    }
    if (!roleColor || typeof roleColor !== 'string') {
      throw new Error('Expected roleColor string instead got ' + typeof roleColor);
    }
    if (!bot) {
      bot = false;
    }
    if (typeof bot !== "boolean") {
      throw new Error('Expected bot boolean instead got ' + typeof bot);
    }
    if (!verified) {
      verified = false;
    }
    if (typeof verified !== "boolean") {
      throw new Error('Expected verified boolean instead got ' + typeof verified);
    }
    this.author = author;
    this.profilePicture = profilePicture;
    this.roleColor = roleColor;
    this.bot = bot;
    this.verified = verified;
  }
}
exports.default = DiscordProfile;