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
    /**
     * Creates a new Discord user Profile
     * @param {String} author
     * @param {String} profilePicture
     * @param {String} roleColor
     * @param {Boolean} bot
     * @param {Boolean} verified
     * @returns {DiscordProfile}
     */
    constructor(author: string, profilePicture: string, roleColor: string, bot: boolean, verified: boolean);
    author: string;
    profilePicture: string;
    roleColor: string;
    bot: boolean;
    verified: boolean;
}
//# sourceMappingURL=DiscordProfile.d.ts.map