// Discord Messages
declare function DiscordMessages(children: any): JSX.Element;

// Discord Message
declare function DiscordMessage(
  children: any,
  profile?: DiscordProfileOptions,
  author?: string,
  profilePicture?: string,
  roleColor?: string,
  bot?: boolean,
  verified?: boolean,
  timestamp?: string | Date,
  highlite?: boolean
): JSX.Element;

// Discord Profile
declare interface DiscordProfileOptions {
  author: string;
  profilePicture: string;
  roleColor: string;
  bot: boolean;
  verified: boolean;
}

declare class DiscordProfile {
  constructor(options: DiscordProfileOptions);
}

// Export
export { DiscordMessages, DiscordMessage, DiscordProfile };
