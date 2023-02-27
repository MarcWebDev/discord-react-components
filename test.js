const {DiscordProfile} = require("./dist/index")

const PROFILNAME = new DiscordProfile(
    "Name",
    "profilbild link",
    "hexcode",
    false,
    true
  );

  console.log(PROFILNAME)