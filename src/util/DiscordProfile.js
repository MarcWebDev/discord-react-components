  
import { isBooleanObject } from "util/types";
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

  export default class DiscordProfile {
    author;
    profilePicture;
    roleColor;
    bot;
    verified;


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
    if (!author || typeof author !== 'string') {
      throw new Error('Expected author string instead got ' + typeof author);
    }
    if (!profilePicture || typeof profilePicture !== 'string') {
      throw new Error('Expected profilePicture string instead got ' + typeof profilePicture);
    }
    if (!roleColor || typeof roleColor !== 'string') {
      throw new Error('Expected roleColor string instead got ' + typeof roleColor);
    }
    if(!bot) {
      bot = false
    }
    if (typeof bot !== "boolean") {
      throw new Error('Expected bot boolean instead got ' + typeof bot);
    }

    
    if(!verified) {
      verified = false
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
