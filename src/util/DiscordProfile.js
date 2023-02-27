export default class DiscordProfile {
  author;
  profilePicture;
  roleColor;
  bot;
  verified;

  constructor(options) {
    this.author = options.author;
    this.profilePicture = options.profilePicture;
    this.roleColor = options.roleColor;
    this.bot = options.bot;
    this.verified = options.verified;
  }
}
