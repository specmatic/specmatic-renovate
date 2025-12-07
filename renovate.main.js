/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  autodiscoverFilter: [
    "specmatic/*",

    "!specmatic/*{-order-,-sample,-demo}*",
    "!specmatic/arazzo-paris-demo",
    "!specmatic/*iata*",
    '!specmatic/tools.openapis.org'
  ],
};
